import type { RequestType } from "../enums/RequestType.js";
import type { RequestQuery } from "../proto/s2clientprotocol/query.js";
import type {
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
} from "../proto/sc2api.js";

export interface RequestTypeToRequestObject {
  [RequestType.CreateGame]: RequestCreateGame;
  [RequestType.JoinGame]: RequestJoinGame;
  [RequestType.RestartGame]: RequestRestartGame;
  [RequestType.StartReplay]: RequestStartReplay;
  [RequestType.LeaveGame]: RequestLeaveGame;
  [RequestType.QuickSave]: RequestQuickSave;
  [RequestType.QuickLoad]: RequestQuickLoad;
  [RequestType.Quit]: RequestQuit;
  [RequestType.GameInfo]: RequestGameInfo;
  [RequestType.Observation]: RequestObservation;
  [RequestType.Action]: RequestAction;
  [RequestType.ObsAction]: RequestObserverAction;
  [RequestType.Step]: RequestStep;
  [RequestType.Data]: RequestData;
  [RequestType.Query]: RequestQuery;
  [RequestType.SaveReplay]: RequestSaveReplay;
  [RequestType.ReplayInfo]: RequestReplayInfo;
  [RequestType.AvailableMaps]: RequestAvailableMaps;
  [RequestType.SaveMap]: RequestSaveMap;
  [RequestType.MapCommand]: RequestMapCommand;
  [RequestType.Ping]: RequestPing;
  [RequestType.Debug]: RequestDebug;
}
