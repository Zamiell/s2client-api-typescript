import { RequestType } from "../enums/RequestType";
import { ResponseQuery } from "../proto/s2clientprotocol/query";
import {
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

export interface RequestTypeToResponseObject {
  [RequestType.CreateGame]: ResponseCreateGame;
  [RequestType.JoinGame]: ResponseJoinGame;
  [RequestType.RestartGame]: ResponseRestartGame;
  [RequestType.StartReplay]: ResponseStartReplay;
  [RequestType.LeaveGame]: ResponseLeaveGame;
  [RequestType.QuickSave]: ResponseQuickSave;
  [RequestType.QuickLoad]: ResponseQuickLoad;
  [RequestType.Quit]: ResponseQuit;
  [RequestType.GameInfo]: ResponseGameInfo;
  [RequestType.Observation]: ResponseObservation;
  [RequestType.Action]: ResponseAction;
  [RequestType.ObsAction]: ResponseObserverAction;
  [RequestType.Step]: ResponseStep;
  [RequestType.Data]: ResponseData;
  [RequestType.Query]: ResponseQuery;
  [RequestType.SaveReplay]: ResponseSaveReplay;
  [RequestType.ReplayInfo]: ResponseReplayInfo;
  [RequestType.AvailableMaps]: ResponseAvailableMaps;
  [RequestType.SaveMap]: ResponseSaveMap;
  [RequestType.MapCommand]: ResponseMapCommand;
  [RequestType.Ping]: ResponsePing;
  [RequestType.Debug]: ResponseDebug;
}
