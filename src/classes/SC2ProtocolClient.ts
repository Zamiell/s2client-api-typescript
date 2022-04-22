import WebSocket from "ws";
import { WEBSOCKET_URL } from "../constants";
import { RequestType } from "../enums/RequestType";
import {
  Request,
  RequestCreateGame,
  RequestPing,
  Response,
  ResponseCreateGame,
  ResponsePing,
} from "../proto/sc2api";
import { debug } from "../utils";
import { Defer } from "./Defer";
import Queue from "./Queue";

// const apiCommands = getEnumValues(APICommands);

// const taskQueue = require("promise-task-queue");
// const promiseFromEvent = require("event-to-promise");

/** map the Request/Response types to an array of objs with meta data */
/*
const responses = Response.fieldsArray.map((field) => ({
  name: field.name,
  type: field.type,
  errorType: `field.type:${Error}`,
}));
*/

/**
 * convenience wrapper for creating the event emitter functions
 */
/*
function queueWrapper(responseName, successEvent, errorEvent) {
  return function (err, res) {
    if (err) {
      this.emit(errorEvent, err);
    } else {
      this.emit(successEvent, res[responseName]);
    }
  };
}
*/

/**
 * creates an event emitter with a unique event per request type
 */
/*
function createAPIQueue() {
  return createEventEmitter(
    responses.reduce(
      (fns, entry) => ({
        ...fns,
        [entry.name]: queueWrapper(entry.name, entry.type, entry.errorType),
      }),
      {},
    ),
  );
}
*/

/**
 * creates a unique payload creation and push-to-queue function per request type
 */
/*
function createAPIFunctions() {
  function responseReducer(acc, entry) {
    function protoAPIFunction(req = {}) {
      const request = Request.create({ [entry.name]: req });
      const payload = Request.encode(request).finish();

      return this._promiseQueue.push(entry.name, payload);
    }

    return {
      ...acc,
      [entry.name]: protoAPIFunction,
    };
  }

  return responses.reduce(responseReducer, {});
}
*/

/**
 * creates a promise queue to enforce single-concurrency on a
 * per-request type basis. this function *must* be bound to the
 * proto client before a new queue is created, due to the queue
 * task functions being invoked on the queue manager.
 */
/*
function createPromiseQueue() {
  const queue = taskQueue();

  responses.forEach((entry) => {
    queue.define(
      entry.name,
      (payload) => {
        const promise = promiseFromEvent(this._protoApiQueue, entry.type, {
          error: entry.errorType,
        });

        this._request(payload);
        return promise;
      },
      { concurrency: 1 },
    );
  });

  return queue;
}
*/

/**
 * Communication is performed with StarCraft 2 through a WebSocket connection.
 *
 * For more information, see:
 * https://github.com/Blizzard/s2client-proto/blob/master/docs/protocol.md
 */
export class SC2ProtocolClient {
  private ws: WebSocket | null = null;
  private connecting = new Defer();
  private queue = new Queue();

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
      // The "ws" library gives us a Buffer object, but the "decode" function provided by the
      // "ts-proto" tool requires a Uint8Array
      const uint8Array = new Uint8Array(data);
      const response = Response.decode(uint8Array);
      debug("Got WebSocket message:", response);

      /*
      if (response.error.length > 0) {
        err = Object.assign(
          new Error(
            `Response Error: ${JSON.stringify(response.error, null, 2)}`,
          ),
          { err: response.error },
        );
      }

      const responseType = responseTypes.find((type) => response[type]);

      const callbackHandler = this._protoApiQueue[responseType];
      if (!callbackHandler) {
        debug(
          "WARNING: response received with no valid response type handler: ",
          response,
        );
      } else {
        this._protoApiQueue[responseType](err, response);
      }
      */
    });

    this.ws.on("error", (err) => {
      console.error(err);
    });

    await this.connecting.finished();
  }

  private send(requestType: RequestType, data: unknown): void {
    if (this.ws === null) {
      throw new Error(
        "Failed to send data since the WebSocket connection was not initialized.",
      );
    }

    console.log(data);
    const request = {
      [requestType]: data,
    } as unknown as Request;
    const encodedData = Request.encode(request).finish();
    this.ws.send(encodedData);
  }

  // ------------------------
  // Methods for API commands
  // ------------------------

  async createGame(request: RequestCreateGame): Promise<ResponseCreateGame> {
    this.send(RequestType.CreateGame, request);
    return new Promise(() => {});
  }

  async ping(request: RequestPing): Promise<ResponsePing> {
    this.send(RequestType.Ping, request);
    return new Promise(() => {});
  }
}
