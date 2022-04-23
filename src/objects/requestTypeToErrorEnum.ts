import { RequestType } from "../enums/RequestType";
import {
  ResponseCreateGame_Error,
  ResponseJoinGame_Error,
  ResponseMapCommand_Error,
  ResponseReplayInfo_Error,
  ResponseRestartGame_Error,
  ResponseSaveMap_Error,
  ResponseStartReplay_Error,
} from "../proto/sc2api";

type Enum = Record<number | string, number | string>;

export const REQUEST_TYPE_TO_ERROR_ENUM: {
  readonly [key in RequestType]: Enum | undefined;
} = {
  [RequestType.CreateGame]: ResponseCreateGame_Error,
  [RequestType.JoinGame]: ResponseJoinGame_Error,
  [RequestType.RestartGame]: ResponseRestartGame_Error,
  [RequestType.StartReplay]: ResponseStartReplay_Error,
  [RequestType.LeaveGame]: undefined,
  [RequestType.QuickSave]: undefined,
  [RequestType.QuickLoad]: undefined,
  [RequestType.Quit]: undefined,
  [RequestType.GameInfo]: undefined,
  [RequestType.Observation]: undefined,
  [RequestType.Action]: undefined,
  [RequestType.ObsAction]: undefined,
  [RequestType.Step]: undefined,
  [RequestType.Data]: undefined,
  [RequestType.Query]: undefined,
  [RequestType.SaveReplay]: undefined,
  [RequestType.ReplayInfo]: ResponseReplayInfo_Error,
  [RequestType.AvailableMaps]: undefined,
  [RequestType.SaveMap]: ResponseSaveMap_Error,
  [RequestType.MapCommand]: ResponseMapCommand_Error,
  [RequestType.Ping]: undefined,
  [RequestType.Debug]: undefined,
};
