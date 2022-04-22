import { PartialMessage } from "@protobuf-ts/runtime";
import WebSocket from "ws";
import { WEBSOCKET_URL } from "../constants";
import { RequestType } from "../enums/RequestType";
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
export class SC2ProtocolClient {
  /** The "ws" library is used to handle the underlying WebSocket connection to StarCraft 2. */
  private ws: WebSocket | null = null;

  /** An object is used to detect when the WebSocket connection has successfully connected. */
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

  async connect(): Promise<void> {
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

      if (response.error === undefined) {
        throw new Error(
          `Got a response from StarCraft 2 without an "error" field: ${response}`,
        );
      }

      if (response.error.length > 0) {
        throw new Error(
          `Got a response from StarCraft 2 with an error: ${response.error}`,
        );
      }

      if (response.id === undefined) {
        throw new Error(
          `Got a response from StarCraft 2 without an "id" field: ${response}`,
        );
      }

      const requestResolver = this.requestResolvers.get(response.id);
      if (requestResolver === undefined) {
        throw new Error(
          `Got a response from StarCraft 2 with no corresponding request resolver: ${response}`,
        );
      }
      this.requestResolvers.delete(response.id);

      requestResolver(response.response);
    });

    this.ws.on("error", (err) => {
      console.error(err);
    });

    await this.connecting.finished();
  }

  private async send<T extends RequestType>(
    requestType: T,
    requestObject: RequestTypeToRequestObject[T],
  ): Promise<RequestTypeToResponseObject[T]> {
    if (this.ws === null) {
      throw new Error(
        "Failed to send data since the WebSocket connection was not initialized.",
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

    console.log(`Sending ${requestType} over WebSocket:`, requestObject);
    const partialRequest = {
      id,
      request: {
        [requestType]: requestObject,
      },
    } as unknown as PartialMessage<Request>;
    const request = Request.create(partialRequest);
    const binaryData = Request.toBinary(request);
    this.ws.send(binaryData);

    return promise;
  }

  // ------------------------
  // Methods for API commands
  // ------------------------

  // Class methods can be created programmatically:
  // https://stackoverflow.com/questions/59217826/how-can-i-programmatically-create-class-functions-in-typescript
  // However, the added code complexity is not worth it

  async createGame(request: RequestCreateGame): Promise<ResponseCreateGame> {
    const promise = this.send(RequestType.CreateGame, request);
    return promise;
  }

  async joinGame(request: RequestJoinGame): Promise<ResponseJoinGame> {
    const promise = this.send(RequestType.JoinGame, request);
    return promise;
  }

  async restartGame(request: RequestRestartGame): Promise<ResponseRestartGame> {
    const promise = this.send(RequestType.RestartGame, request);
    return promise;
  }

  async startReplay(request: RequestStartReplay): Promise<ResponseStartReplay> {
    const promise = this.send(RequestType.StartReplay, request);
    return promise;
  }

  async leaveGame(request: RequestLeaveGame): Promise<ResponseLeaveGame> {
    const promise = this.send(RequestType.LeaveGame, request);
    return promise;
  }

  async quickSave(request: RequestQuickSave): Promise<ResponseQuickSave> {
    const promise = this.send(RequestType.QuickSave, request);
    return promise;
  }

  async quickLoad(request: RequestQuickLoad): Promise<ResponseQuickLoad> {
    const promise = this.send(RequestType.QuickLoad, request);
    return promise;
  }

  async quit(request: RequestQuit): Promise<ResponseQuit> {
    const promise = this.send(RequestType.Quit, request);
    return promise;
  }

  async gameInfo(request: RequestGameInfo): Promise<ResponseGameInfo> {
    const promise = this.send(RequestType.GameInfo, request);
    return promise;
  }

  async observation(request: RequestObservation): Promise<ResponseObservation> {
    const promise = this.send(RequestType.Observation, request);
    return promise;
  }

  async action(request: RequestAction): Promise<ResponseAction> {
    const promise = this.send(RequestType.Action, request);
    return promise;
  }

  async obsAction(
    request: RequestObserverAction,
  ): Promise<ResponseObserverAction> {
    const promise = this.send(RequestType.ObsAction, request);
    return promise;
  }

  async step(request: RequestStep): Promise<ResponseStep> {
    const promise = this.send(RequestType.Step, request);
    return promise;
  }

  async data(request: RequestData): Promise<ResponseData> {
    const promise = this.send(RequestType.Data, request);
    return promise;
  }

  async query(request: RequestQuery): Promise<ResponseQuery> {
    const promise = this.send(RequestType.Query, request);
    return promise;
  }

  async saveReplay(request: RequestSaveReplay): Promise<ResponseSaveReplay> {
    const promise = this.send(RequestType.SaveReplay, request);
    return promise;
  }

  async replayInfo(request: RequestReplayInfo): Promise<ResponseReplayInfo> {
    const promise = this.send(RequestType.ReplayInfo, request);
    return promise;
  }

  async availableMaps(
    request: RequestAvailableMaps,
  ): Promise<ResponseAvailableMaps> {
    const promise = this.send(RequestType.AvailableMaps, request);
    return promise;
  }

  async saveMap(request: RequestSaveMap): Promise<ResponseSaveMap> {
    const promise = this.send(RequestType.SaveMap, request);
    return promise;
  }

  async mapCommand(request: RequestMapCommand): Promise<ResponseMapCommand> {
    const promise = this.send(RequestType.MapCommand, request);
    return promise;
  }

  async ping(request: RequestPing): Promise<ResponsePing> {
    const promise = this.send(RequestType.Ping, request);
    return promise;
  }

  async debug(request: RequestDebug): Promise<ResponseDebug> {
    const promise = this.send(RequestType.Debug, request);
    return promise;
  }
}
