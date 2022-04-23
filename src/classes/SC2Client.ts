import WebSocket from "ws";
import { GAME_NAME, WEBSOCKET_URL } from "../constants";
import { RequestType } from "../enums/RequestType";
import { REQUEST_TYPE_TO_ERROR_ENUM } from "../objects/requestTypeToErrorEnum";
import { RequestQuery, ResponseQuery } from "../proto/s2clientprotocol/query";
import {
  Request,
  RequestAction,
  RequestAvailableMaps,
  RequestCreateGame,
  RequestData,
  RequestDebug,
  RequestGameInfo,
  RequestJoinGame,
  RequestLeaveGame,
  RequestMapCommand,
  RequestObservation,
  RequestObserverAction,
  RequestPing,
  RequestQuickLoad,
  RequestQuickSave,
  RequestQuit,
  RequestReplayInfo,
  RequestRestartGame,
  RequestSaveMap,
  RequestSaveReplay,
  RequestStartReplay,
  RequestStep,
  Response,
  ResponseAction,
  ResponseAvailableMaps,
  ResponseCreateGame,
  ResponseData,
  ResponseDebug,
  ResponseGameInfo,
  ResponseJoinGame,
  ResponseLeaveGame,
  ResponseMapCommand,
  ResponseObservation,
  ResponseObserverAction,
  ResponsePing,
  ResponseQuickLoad,
  ResponseQuickSave,
  ResponseQuit,
  ResponseReplayInfo,
  ResponseRestartGame,
  ResponseSaveMap,
  ResponseSaveReplay,
  ResponseStartReplay,
  ResponseStep,
  Status,
} from "../proto/sc2api";
import { RequestTypeToRequestObject } from "../types/RequestTypeToRequestObject";
import { RequestTypeToResponseObject } from "../types/RequestTypeToResponseObject";
import { ResponseObject } from "../types/ResponseObject";
import { debug } from "../utils";
import { DeferredTask } from "./DeferredTask";

type RequestResolver = (value: ResponseObject) => void;

/**
 * Communication is performed with StarCraft 2 through a WebSocket connection. A `Request` object is
 * sent to the game, and it returns a `Response` object.
 *
 * For more information, see:
 * https://github.com/Blizzard/s2client-proto/blob/master/docs/protocol.md
 *
 * This class provides methods for each type of request. For example, to send a "ping" request, you
 * invoke the `ping` method.
 *
 * Before using this class, you must connect to the game with the `connect` method.
 */
export class SC2Client {
  /** The "ws" library is used to handle the underlying WebSocket connection to StarCraft 2. */
  private ws: WebSocket | null = null;

  /**
   * A `DeferredTask` object is used to detect when the WebSocket connection has successfully
   * connected.
   */
  private connecting = new DeferredTask();

  /** Starts at 0 and is incremented with each request sent to StarCraft 2. */
  private IDCounter = 0;

  /**
   * For each request sent over the wire, we keep track of it with a promise. The resolver function
   * of the promise is fired when the response is received.
   *
   * The keys of the map are equal to the ID of the request that was sent. (The response will have a
   * matching ID.)
   *
   * After the response is received and the resolver is retrieved/fired, the resolver is removed
   * from the map.
   */
  private requestResolvers = new Map<number, RequestResolver>();

  /**
   * The status of StarCraft 2 is returned with each API response object and we record it.
   * This is useful so that end-users can query for what the current status of StarCraft 2 is.
   *
   * For example, they might want to skip creating a game if a game is already created.
   */
  private lastStatus = Status.unknown;

  /**
   * Connects to StarCraft 2 via a WebSocket connection.
   *
   * You must use this method before using any of the other methods on this class.
   *
   * @returns The current status of StarCraft 2 (e.g. whether it is in a game, in a replay, etc.).
   */
  async connect(): Promise<Status> {
    this.ws = new WebSocket(WEBSOCKET_URL);

    this.ws.on("open", () => {
      debug(`WebSocket connection established: ${WEBSOCKET_URL}`);
      this.connecting.finish();
    });

    this.ws.on("close", () => {
      debug("WebSocket connection closed.");
    });

    this.ws.on("message", (data: Buffer) => {
      // The "ws" library gives us a Buffer object, but the "fromBinary" decoding method provided by
      // the "protobuf-ts" tool requires a Uint8Array
      const uint8Array = new Uint8Array(data);

      // Messages from StarCraft 2 are sent as binary data; we must decode it to a JavaScript object
      const response = Response.fromBinary(uint8Array);
      debug("Got a WebSocket message:", response);

      // The first error field is located at the base of the response
      if (response.error === undefined) {
        throw new Error(
          `Got a response from ${GAME_NAME} without an "error" field: ${response}`,
        );
      }

      if (response.error.length > 0) {
        throw new Error(
          `Got a response from ${GAME_NAME} with an error: ${response.error}`,
        );
      }

      // Record the status
      if (response.status === undefined) {
        throw new Error(
          `Got a response from ${GAME_NAME} without a "status" field: ${response}`,
        );
      }
      this.lastStatus = response.status;

      // The second error field is located within the sub-response object
      const requestType = response.response.oneofKind as RequestType;
      const subResponse = response.response as Record<string, unknown>;
      const responseData = subResponse[requestType] as Record<string, unknown>;
      const errorNumber = responseData.error as number | undefined;
      if (errorNumber !== undefined) {
        const errorEnum = REQUEST_TYPE_TO_ERROR_ENUM[requestType];
        if (errorEnum === undefined) {
          throw new Error(
            `Failed to find the error enum corresponding to the following request type: ${requestType}`,
          );
        }

        const errorString = errorEnum[errorNumber];
        throw new Error(
          `Got a response from ${GAME_NAME} for the "${requestType}" command with the following error: ${errorString} (${errorNumber})`,
        );
      }

      // Retrieve the corresponding request resolver
      if (response.id === undefined) {
        throw new Error(
          `Got a response from ${GAME_NAME} without an "id" field: ${response}`,
        );
      }

      const requestResolver = this.requestResolvers.get(response.id);
      if (requestResolver === undefined) {
        throw new Error(
          `Got a response from ${GAME_NAME} with no corresponding request resolver: ${response}`,
        );
      }
      this.requestResolvers.delete(response.id);

      requestResolver(response.response);
    });

    this.ws.on("error", (err) => {
      console.error(err);
    });

    await this.connecting.finished();

    // In order to get the current status of the game (for the purposes of populating the
    // "lastStatus" field), we must send any arbitrary request
    // Thus, we resort to sending a ping
    await this.ping();

    return this.lastStatus;
  }

  private send<T extends RequestType>(
    requestType: T,
    requestObject: RequestTypeToRequestObject[T],
  ): Promise<RequestTypeToResponseObject[T]> {
    if (this.ws === null) {
      throw new Error(
        `Failed to send data since the WebSocket connection was not initialized. Did you already connect to ${GAME_NAME} with the "connect" method?`,
      );
    }

    // After sending a Request object with a certain ID, StarCraft 2 will eventually respond with
    // a matching Response object
    // First, create a Promise that will be resolved when the matching Response object is received
    const id = this.IDCounter;
    this.IDCounter += 1;
    const promise = new Promise<RequestTypeToResponseObject[T]>((resolve) => {
      this.requestResolvers.set(id, resolve as RequestResolver);
    });

    const request = {
      id,
      request: {
        // Even though "oneofKind" is a synthetic field, it is necessary to specify it for the
        // "toBinary" method to work properly
        oneofKind: requestType,
        [requestType]: requestObject,
      },
    } as unknown as Request;
    console.log("Sending WebSocket data:", request);
    const binaryData = Request.toBinary(request);
    this.ws.send(binaryData);

    return promise;
  }

  /** Returns the status of StarCraft 2, according to the last `Response` object received. */
  getStatus(): Status {
    return this.lastStatus;
  }

  // ------------------------
  // Methods for API commands
  // ------------------------

  // Class methods can be created programmatically:
  // https://stackoverflow.com/questions/59217826/how-can-i-programmatically-create-class-functions-in-typescript
  // However, the added code complexity is not worth it

  // Only methods with empty interfaces for request objects are given a default value

  createGame(request: RequestCreateGame): Promise<ResponseCreateGame> {
    return this.send(RequestType.CreateGame, request);
  }

  joinGame(request: RequestJoinGame): Promise<ResponseJoinGame> {
    return this.send(RequestType.JoinGame, request);
  }

  restartGame(request: RequestRestartGame = {}): Promise<ResponseRestartGame> {
    return this.send(RequestType.RestartGame, request);
  }

  startReplay(request: RequestStartReplay): Promise<ResponseStartReplay> {
    return this.send(RequestType.StartReplay, request);
  }

  leaveGame(request: RequestLeaveGame = {}): Promise<ResponseLeaveGame> {
    return this.send(RequestType.LeaveGame, request);
  }

  quickSave(request: RequestQuickSave = {}): Promise<ResponseQuickSave> {
    return this.send(RequestType.QuickSave, request);
  }

  quickLoad(request: RequestQuickLoad = {}): Promise<ResponseQuickLoad> {
    return this.send(RequestType.QuickLoad, request);
  }

  quit(request: RequestQuit = {}): Promise<ResponseQuit> {
    return this.send(RequestType.Quit, request);
  }

  gameInfo(request: RequestGameInfo = {}): Promise<ResponseGameInfo> {
    return this.send(RequestType.GameInfo, request);
  }

  observation(request: RequestObservation): Promise<ResponseObservation> {
    return this.send(RequestType.Observation, request);
  }

  action(request: RequestAction): Promise<ResponseAction> {
    return this.send(RequestType.Action, request);
  }

  obsAction(request: RequestObserverAction): Promise<ResponseObserverAction> {
    return this.send(RequestType.ObsAction, request);
  }

  step(request: RequestStep): Promise<ResponseStep> {
    return this.send(RequestType.Step, request);
  }

  data(request: RequestData): Promise<ResponseData> {
    return this.send(RequestType.Data, request);
  }

  query(request: RequestQuery): Promise<ResponseQuery> {
    return this.send(RequestType.Query, request);
  }

  saveReplay(request: RequestSaveReplay = {}): Promise<ResponseSaveReplay> {
    return this.send(RequestType.SaveReplay, request);
  }

  replayInfo(request: RequestReplayInfo): Promise<ResponseReplayInfo> {
    return this.send(RequestType.ReplayInfo, request);
  }

  availableMaps(
    request: RequestAvailableMaps = {},
  ): Promise<ResponseAvailableMaps> {
    return this.send(RequestType.AvailableMaps, request);
  }

  saveMap(request: RequestSaveMap): Promise<ResponseSaveMap> {
    return this.send(RequestType.SaveMap, request);
  }

  mapCommand(request: RequestMapCommand): Promise<ResponseMapCommand> {
    return this.send(RequestType.MapCommand, request);
  }

  ping(request: RequestPing = {}): Promise<ResponsePing> {
    return this.send(RequestType.Ping, request);
  }

  debug(request: RequestDebug): Promise<ResponseDebug> {
    return this.send(RequestType.Debug, request);
  }
}
