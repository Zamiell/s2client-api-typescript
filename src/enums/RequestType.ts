/* eslint-disable isaacscript/consistent-enum-values */

/**
 * This matches the possible Request/Response types from "sc2api.ts".
 *
 * This cannot be derived automatically because TypeScript interfaces do not exist at runtime.
 */
export enum RequestType {
  CreateGame = "createGame",
  JoinGame = "joinGame",
  RestartGame = "restartGame",
  StartReplay = "startReplay",
  LeaveGame = "leaveGame",
  QuickSave = "quickSave",
  QuickLoad = "quickLoad",
  Quit = "quit",
  GameInfo = "gameInfo",
  Observation = "observation",
  Action = "action",
  ObsAction = "obsAction",
  Step = "step",
  Data = "data",
  Query = "query",
  SaveReplay = "saveReplay",
  ReplayInfo = "replayInfo",
  AvailableMaps = "availableMaps",
  SaveMap = "saveMap",
  MapCommand = "mapCommand",
  Ping = "ping",
  Debug = "debug",
}
