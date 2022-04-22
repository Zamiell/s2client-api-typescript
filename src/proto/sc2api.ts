/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  AvailableAbility,
  Point2D,
  Race,
  raceFromJSON,
  raceToJSON,
  Size2DI,
} from "./s2clientprotocol/common";
import {
  AbilityData,
  BuffData,
  EffectData,
  UnitTypeData,
  UpgradeData,
} from "./s2clientprotocol/data";
import { DebugCommand } from "./s2clientprotocol/debug";
import {
  ActionResult,
  actionResultFromJSON,
  actionResultToJSON,
} from "./s2clientprotocol/error";
import { RequestQuery, ResponseQuery } from "./s2clientprotocol/query";
import { ActionRaw, ObservationRaw, StartRaw } from "./s2clientprotocol/raw";
import { Score } from "./s2clientprotocol/score";
import {
  ActionSpatial,
  ObservationFeatureLayer,
  ObservationRender,
} from "./s2clientprotocol/spatial";
import { ActionUI, ObservationUI } from "./s2clientprotocol/ui";

export const protobufPackage = "SC2APIProtocol";

export enum Status {
  /** launched - Game has been launch and is not yet doing anything. */
  launched = 1,
  /** init_game - Create game has been called, and the host is awaiting players. */
  init_game = 2,
  /** in_game - In a single or multiplayer game. */
  in_game = 3,
  /** in_replay - In a replay. */
  in_replay = 4,
  /** ended - Game has ended, can still request game info, but ready for a new game. */
  ended = 5,
  /** quit - Application is shutting down. */
  quit = 6,
  /** unknown - Should not happen, but indicates an error if it occurs. */
  unknown = 99,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 1:
    case "launched":
      return Status.launched;
    case 2:
    case "init_game":
      return Status.init_game;
    case 3:
    case "in_game":
      return Status.in_game;
    case 4:
    case "in_replay":
      return Status.in_replay;
    case 5:
    case "ended":
      return Status.ended;
    case 6:
    case "quit":
      return Status.quit;
    case 99:
    case "unknown":
      return Status.unknown;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.launched:
      return "launched";
    case Status.init_game:
      return "init_game";
    case Status.in_game:
      return "in_game";
    case Status.in_replay:
      return "in_replay";
    case Status.ended:
      return "ended";
    case Status.quit:
      return "quit";
    case Status.unknown:
      return "unknown";
    default:
      return "UNKNOWN";
  }
}

export enum Difficulty {
  VeryEasy = 1,
  Easy = 2,
  Medium = 3,
  MediumHard = 4,
  Hard = 5,
  Harder = 6,
  VeryHard = 7,
  CheatVision = 8,
  CheatMoney = 9,
  CheatInsane = 10,
  UNRECOGNIZED = -1,
}

export function difficultyFromJSON(object: any): Difficulty {
  switch (object) {
    case 1:
    case "VeryEasy":
      return Difficulty.VeryEasy;
    case 2:
    case "Easy":
      return Difficulty.Easy;
    case 3:
    case "Medium":
      return Difficulty.Medium;
    case 4:
    case "MediumHard":
      return Difficulty.MediumHard;
    case 5:
    case "Hard":
      return Difficulty.Hard;
    case 6:
    case "Harder":
      return Difficulty.Harder;
    case 7:
    case "VeryHard":
      return Difficulty.VeryHard;
    case 8:
    case "CheatVision":
      return Difficulty.CheatVision;
    case 9:
    case "CheatMoney":
      return Difficulty.CheatMoney;
    case 10:
    case "CheatInsane":
      return Difficulty.CheatInsane;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Difficulty.UNRECOGNIZED;
  }
}

export function difficultyToJSON(object: Difficulty): string {
  switch (object) {
    case Difficulty.VeryEasy:
      return "VeryEasy";
    case Difficulty.Easy:
      return "Easy";
    case Difficulty.Medium:
      return "Medium";
    case Difficulty.MediumHard:
      return "MediumHard";
    case Difficulty.Hard:
      return "Hard";
    case Difficulty.Harder:
      return "Harder";
    case Difficulty.VeryHard:
      return "VeryHard";
    case Difficulty.CheatVision:
      return "CheatVision";
    case Difficulty.CheatMoney:
      return "CheatMoney";
    case Difficulty.CheatInsane:
      return "CheatInsane";
    default:
      return "UNKNOWN";
  }
}

export enum PlayerType {
  Participant = 1,
  Computer = 2,
  Observer = 3,
  UNRECOGNIZED = -1,
}

export function playerTypeFromJSON(object: any): PlayerType {
  switch (object) {
    case 1:
    case "Participant":
      return PlayerType.Participant;
    case 2:
    case "Computer":
      return PlayerType.Computer;
    case 3:
    case "Observer":
      return PlayerType.Observer;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PlayerType.UNRECOGNIZED;
  }
}

export function playerTypeToJSON(object: PlayerType): string {
  switch (object) {
    case PlayerType.Participant:
      return "Participant";
    case PlayerType.Computer:
      return "Computer";
    case PlayerType.Observer:
      return "Observer";
    default:
      return "UNKNOWN";
  }
}

export enum AIBuild {
  RandomBuild = 1,
  Rush = 2,
  Timing = 3,
  Power = 4,
  Macro = 5,
  Air = 6,
  UNRECOGNIZED = -1,
}

export function aIBuildFromJSON(object: any): AIBuild {
  switch (object) {
    case 1:
    case "RandomBuild":
      return AIBuild.RandomBuild;
    case 2:
    case "Rush":
      return AIBuild.Rush;
    case 3:
    case "Timing":
      return AIBuild.Timing;
    case 4:
    case "Power":
      return AIBuild.Power;
    case 5:
    case "Macro":
      return AIBuild.Macro;
    case 6:
    case "Air":
      return AIBuild.Air;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AIBuild.UNRECOGNIZED;
  }
}

export function aIBuildToJSON(object: AIBuild): string {
  switch (object) {
    case AIBuild.RandomBuild:
      return "RandomBuild";
    case AIBuild.Rush:
      return "Rush";
    case AIBuild.Timing:
      return "Timing";
    case AIBuild.Power:
      return "Power";
    case AIBuild.Macro:
      return "Macro";
    case AIBuild.Air:
      return "Air";
    default:
      return "UNKNOWN";
  }
}

export enum Alert {
  AlertError = 3,
  AddOnComplete = 4,
  BuildingComplete = 5,
  BuildingUnderAttack = 6,
  LarvaHatched = 7,
  MergeComplete = 8,
  MineralsExhausted = 9,
  MorphComplete = 10,
  MothershipComplete = 11,
  MULEExpired = 12,
  NuclearLaunchDetected = 1,
  NukeComplete = 13,
  NydusWormDetected = 2,
  ResearchComplete = 14,
  TrainError = 15,
  TrainUnitComplete = 16,
  TrainWorkerComplete = 17,
  TransformationComplete = 18,
  UnitUnderAttack = 19,
  UpgradeComplete = 20,
  VespeneExhausted = 21,
  WarpInComplete = 22,
  UNRECOGNIZED = -1,
}

export function alertFromJSON(object: any): Alert {
  switch (object) {
    case 3:
    case "AlertError":
      return Alert.AlertError;
    case 4:
    case "AddOnComplete":
      return Alert.AddOnComplete;
    case 5:
    case "BuildingComplete":
      return Alert.BuildingComplete;
    case 6:
    case "BuildingUnderAttack":
      return Alert.BuildingUnderAttack;
    case 7:
    case "LarvaHatched":
      return Alert.LarvaHatched;
    case 8:
    case "MergeComplete":
      return Alert.MergeComplete;
    case 9:
    case "MineralsExhausted":
      return Alert.MineralsExhausted;
    case 10:
    case "MorphComplete":
      return Alert.MorphComplete;
    case 11:
    case "MothershipComplete":
      return Alert.MothershipComplete;
    case 12:
    case "MULEExpired":
      return Alert.MULEExpired;
    case 1:
    case "NuclearLaunchDetected":
      return Alert.NuclearLaunchDetected;
    case 13:
    case "NukeComplete":
      return Alert.NukeComplete;
    case 2:
    case "NydusWormDetected":
      return Alert.NydusWormDetected;
    case 14:
    case "ResearchComplete":
      return Alert.ResearchComplete;
    case 15:
    case "TrainError":
      return Alert.TrainError;
    case 16:
    case "TrainUnitComplete":
      return Alert.TrainUnitComplete;
    case 17:
    case "TrainWorkerComplete":
      return Alert.TrainWorkerComplete;
    case 18:
    case "TransformationComplete":
      return Alert.TransformationComplete;
    case 19:
    case "UnitUnderAttack":
      return Alert.UnitUnderAttack;
    case 20:
    case "UpgradeComplete":
      return Alert.UpgradeComplete;
    case 21:
    case "VespeneExhausted":
      return Alert.VespeneExhausted;
    case 22:
    case "WarpInComplete":
      return Alert.WarpInComplete;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Alert.UNRECOGNIZED;
  }
}

export function alertToJSON(object: Alert): string {
  switch (object) {
    case Alert.AlertError:
      return "AlertError";
    case Alert.AddOnComplete:
      return "AddOnComplete";
    case Alert.BuildingComplete:
      return "BuildingComplete";
    case Alert.BuildingUnderAttack:
      return "BuildingUnderAttack";
    case Alert.LarvaHatched:
      return "LarvaHatched";
    case Alert.MergeComplete:
      return "MergeComplete";
    case Alert.MineralsExhausted:
      return "MineralsExhausted";
    case Alert.MorphComplete:
      return "MorphComplete";
    case Alert.MothershipComplete:
      return "MothershipComplete";
    case Alert.MULEExpired:
      return "MULEExpired";
    case Alert.NuclearLaunchDetected:
      return "NuclearLaunchDetected";
    case Alert.NukeComplete:
      return "NukeComplete";
    case Alert.NydusWormDetected:
      return "NydusWormDetected";
    case Alert.ResearchComplete:
      return "ResearchComplete";
    case Alert.TrainError:
      return "TrainError";
    case Alert.TrainUnitComplete:
      return "TrainUnitComplete";
    case Alert.TrainWorkerComplete:
      return "TrainWorkerComplete";
    case Alert.TransformationComplete:
      return "TransformationComplete";
    case Alert.UnitUnderAttack:
      return "UnitUnderAttack";
    case Alert.UpgradeComplete:
      return "UpgradeComplete";
    case Alert.VespeneExhausted:
      return "VespeneExhausted";
    case Alert.WarpInComplete:
      return "WarpInComplete";
    default:
      return "UNKNOWN";
  }
}

export enum Result {
  Victory = 1,
  Defeat = 2,
  Tie = 3,
  Undecided = 4,
  UNRECOGNIZED = -1,
}

export function resultFromJSON(object: any): Result {
  switch (object) {
    case 1:
    case "Victory":
      return Result.Victory;
    case 2:
    case "Defeat":
      return Result.Defeat;
    case 3:
    case "Tie":
      return Result.Tie;
    case 4:
    case "Undecided":
      return Result.Undecided;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Result.UNRECOGNIZED;
  }
}

export function resultToJSON(object: Result): string {
  switch (object) {
    case Result.Victory:
      return "Victory";
    case Result.Defeat:
      return "Defeat";
    case Result.Tie:
      return "Tie";
    case Result.Undecided:
      return "Undecided";
    default:
      return "UNKNOWN";
  }
}

export interface Request {
  /** Game Setup */
  createGame?: RequestCreateGame;
  /** Send to host and all clients for game to begin. */
  joinGame?: RequestJoinGame;
  /** Single player only. Reinitializes the game with the same player setup. */
  restartGame?: RequestRestartGame;
  /** Start playing a replay. */
  startReplay?: RequestStartReplay;
  /** Multiplayer only. Disconnects from a multiplayer game, equivalent to surrender. */
  leaveGame?: RequestLeaveGame;
  /** Saves game to an in-memory bookmark. */
  quickSave?: RequestQuickSave;
  /** Loads from an in-memory bookmark. */
  quickLoad?: RequestQuickLoad;
  /** Terminates the application. */
  quit?: RequestQuit;
  /** During Game */
  gameInfo?: RequestGameInfo;
  /** Snapshot of the current game state. */
  observation?: RequestObservation;
  /** Executes an action for a participant. */
  action?: RequestAction;
  /** Executes an action for an observer. */
  obsAction?: RequestObserverAction;
  /** Advances the game simulation. */
  step?: RequestStep;
  /** Data about different gameplay elements. May be different for different games. */
  data?: RequestData;
  /** Additional methods for inspecting game state. */
  query?: RequestQuery;
  /** Generates a replay. */
  saveReplay?: RequestSaveReplay;
  /** Execute a particular trigger through a string interface */
  mapCommand?: RequestMapCommand;
  /** Other. */
  replayInfo?: RequestReplayInfo;
  /** Returns directory of maps that can be played on. */
  availableMaps?: RequestAvailableMaps;
  /** Saves binary map data to the local temp directory. */
  saveMap?: RequestSaveMap;
  /** Debugging */
  ping?: RequestPing;
  /** Display debug information and execute debug actions. */
  debug?: RequestDebug;
  id?: number;
}

export interface Response {
  createGame?: ResponseCreateGame;
  joinGame?: ResponseJoinGame;
  restartGame?: ResponseRestartGame;
  startReplay?: ResponseStartReplay;
  leaveGame?: ResponseLeaveGame;
  quickSave?: ResponseQuickSave;
  quickLoad?: ResponseQuickLoad;
  quit?: ResponseQuit;
  gameInfo?: ResponseGameInfo;
  observation?: ResponseObservation;
  action?: ResponseAction;
  obsAction?: ResponseObserverAction;
  step?: ResponseStep;
  data?: ResponseData;
  query?: ResponseQuery;
  saveReplay?: ResponseSaveReplay;
  replayInfo?: ResponseReplayInfo;
  availableMaps?: ResponseAvailableMaps;
  saveMap?: ResponseSaveMap;
  mapCommand?: ResponseMapCommand;
  /** Debugging */
  ping?: ResponsePing;
  debug?: ResponseDebug;
  id?: number;
  /** If command is missing, this will contain the error. Otherwise this will contain any warnings. */
  error: string[];
  /** Should be sent back with all responses. */
  status?: Status;
}

/**
 * -----------------------------------------------------------------------------
 * If successful, puts the game into the status: init_game.
 * The next expected request should be RequestJoinGame. Can also quit (exit).
 */
export interface RequestCreateGame {
  /** Local .SC2Map file */
  localMap: LocalMap | undefined;
  /** Map published to BattleNet */
  battlenetMapName: string | undefined;
  playerSetup: PlayerSetup[];
  disableFog: boolean;
  /** Sets the pseudo-random seed for the game. */
  randomSeed: number;
  /** If set, the game plays in real time. */
  realtime: boolean;
}

export interface LocalMap {
  /**
   * A map can be specified either by a file path or the data of the .SC2Map file.
   * If you provide both, it will play the game using map_data and store map_path
   * into the replay. (260 character max)
   */
  mapPath: string;
  mapData?: Uint8Array;
}

export interface ResponseCreateGame {
  error: ResponseCreateGame_Error;
  errorDetails: string;
}

export enum ResponseCreateGame_Error {
  MissingMap = 1,
  InvalidMapPath = 2,
  InvalidMapData = 3,
  InvalidMapName = 4,
  InvalidMapHandle = 5,
  MissingPlayerSetup = 6,
  InvalidPlayerSetup = 7,
  /** MultiplayerUnsupported - Multiplayer is not supported in the current build. */
  MultiplayerUnsupported = 8,
  UNRECOGNIZED = -1,
}

export function responseCreateGame_ErrorFromJSON(
  object: any,
): ResponseCreateGame_Error {
  switch (object) {
    case 1:
    case "MissingMap":
      return ResponseCreateGame_Error.MissingMap;
    case 2:
    case "InvalidMapPath":
      return ResponseCreateGame_Error.InvalidMapPath;
    case 3:
    case "InvalidMapData":
      return ResponseCreateGame_Error.InvalidMapData;
    case 4:
    case "InvalidMapName":
      return ResponseCreateGame_Error.InvalidMapName;
    case 5:
    case "InvalidMapHandle":
      return ResponseCreateGame_Error.InvalidMapHandle;
    case 6:
    case "MissingPlayerSetup":
      return ResponseCreateGame_Error.MissingPlayerSetup;
    case 7:
    case "InvalidPlayerSetup":
      return ResponseCreateGame_Error.InvalidPlayerSetup;
    case 8:
    case "MultiplayerUnsupported":
      return ResponseCreateGame_Error.MultiplayerUnsupported;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseCreateGame_Error.UNRECOGNIZED;
  }
}

export function responseCreateGame_ErrorToJSON(
  object: ResponseCreateGame_Error,
): string {
  switch (object) {
    case ResponseCreateGame_Error.MissingMap:
      return "MissingMap";
    case ResponseCreateGame_Error.InvalidMapPath:
      return "InvalidMapPath";
    case ResponseCreateGame_Error.InvalidMapData:
      return "InvalidMapData";
    case ResponseCreateGame_Error.InvalidMapName:
      return "InvalidMapName";
    case ResponseCreateGame_Error.InvalidMapHandle:
      return "InvalidMapHandle";
    case ResponseCreateGame_Error.MissingPlayerSetup:
      return "MissingPlayerSetup";
    case ResponseCreateGame_Error.InvalidPlayerSetup:
      return "InvalidPlayerSetup";
    case ResponseCreateGame_Error.MultiplayerUnsupported:
      return "MultiplayerUnsupported";
    default:
      return "UNKNOWN";
  }
}

/**
 * -----------------------------------------------------------------------------
 * If successful, puts the game into the status: in_game. Will be able to
 * request actions, observations and step the game.
 */
export interface RequestJoinGame {
  /** Join as participant */
  race: Race | undefined;
  /** Join as observer */
  observedPlayerId: number | undefined;
  /** This is limited to what is specified in RequestCreateGame, but you can request less information if you want. */
  options: InterfaceOptions | undefined;
  /** Do not set in the single-player case. This is the port a server will use. */
  serverPorts: PortSet | undefined;
  /** Do not set in the single-player case. These are the ports clients will use to initialize communication. */
  clientPorts: PortSet[];
  /** Currently only a singe client is supported. */
  sharedPort: number;
  /** Use this to set the player's name to something other than autogenerated name. */
  playerName: string;
  /** Both game creator and joiner should provide the ip address of the game creator in order to play remotely. Defaults to localhost. */
  hostIp: string;
}

export interface PortSet {
  /** Game right now needs two internal ports to establish a multiplay game on the local host. */
  gamePort: number;
  basePort: number;
}

export interface ResponseJoinGame {
  playerId: number;
  error: ResponseJoinGame_Error;
  errorDetails: string;
}

export enum ResponseJoinGame_Error {
  MissingParticipation = 1,
  InvalidObservedPlayerId = 2,
  MissingOptions = 3,
  MissingPorts = 4,
  GameFull = 5,
  LaunchError = 6,
  /** FeatureUnsupported - Multiplayer specific. */
  FeatureUnsupported = 7,
  NoSpaceForUser = 8,
  MapDoesNotExist = 9,
  CannotOpenMap = 10,
  ChecksumError = 11,
  NetworkError = 12,
  OtherError = 13,
  UNRECOGNIZED = -1,
}

export function responseJoinGame_ErrorFromJSON(
  object: any,
): ResponseJoinGame_Error {
  switch (object) {
    case 1:
    case "MissingParticipation":
      return ResponseJoinGame_Error.MissingParticipation;
    case 2:
    case "InvalidObservedPlayerId":
      return ResponseJoinGame_Error.InvalidObservedPlayerId;
    case 3:
    case "MissingOptions":
      return ResponseJoinGame_Error.MissingOptions;
    case 4:
    case "MissingPorts":
      return ResponseJoinGame_Error.MissingPorts;
    case 5:
    case "GameFull":
      return ResponseJoinGame_Error.GameFull;
    case 6:
    case "LaunchError":
      return ResponseJoinGame_Error.LaunchError;
    case 7:
    case "FeatureUnsupported":
      return ResponseJoinGame_Error.FeatureUnsupported;
    case 8:
    case "NoSpaceForUser":
      return ResponseJoinGame_Error.NoSpaceForUser;
    case 9:
    case "MapDoesNotExist":
      return ResponseJoinGame_Error.MapDoesNotExist;
    case 10:
    case "CannotOpenMap":
      return ResponseJoinGame_Error.CannotOpenMap;
    case 11:
    case "ChecksumError":
      return ResponseJoinGame_Error.ChecksumError;
    case 12:
    case "NetworkError":
      return ResponseJoinGame_Error.NetworkError;
    case 13:
    case "OtherError":
      return ResponseJoinGame_Error.OtherError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseJoinGame_Error.UNRECOGNIZED;
  }
}

export function responseJoinGame_ErrorToJSON(
  object: ResponseJoinGame_Error,
): string {
  switch (object) {
    case ResponseJoinGame_Error.MissingParticipation:
      return "MissingParticipation";
    case ResponseJoinGame_Error.InvalidObservedPlayerId:
      return "InvalidObservedPlayerId";
    case ResponseJoinGame_Error.MissingOptions:
      return "MissingOptions";
    case ResponseJoinGame_Error.MissingPorts:
      return "MissingPorts";
    case ResponseJoinGame_Error.GameFull:
      return "GameFull";
    case ResponseJoinGame_Error.LaunchError:
      return "LaunchError";
    case ResponseJoinGame_Error.FeatureUnsupported:
      return "FeatureUnsupported";
    case ResponseJoinGame_Error.NoSpaceForUser:
      return "NoSpaceForUser";
    case ResponseJoinGame_Error.MapDoesNotExist:
      return "MapDoesNotExist";
    case ResponseJoinGame_Error.CannotOpenMap:
      return "CannotOpenMap";
    case ResponseJoinGame_Error.ChecksumError:
      return "ChecksumError";
    case ResponseJoinGame_Error.NetworkError:
      return "NetworkError";
    case ResponseJoinGame_Error.OtherError:
      return "OtherError";
    default:
      return "UNKNOWN";
  }
}

/** ----------------------------------------------------------------------------- */
export interface RequestRestartGame {}

/** The defaultRestartGameLoops is specified to be (1<<18) by default */
export interface ResponseRestartGame {
  error: ResponseRestartGame_Error;
  errorDetails: string;
  /** This will occur once the simulation_loop is greater then defaultRestartGameLoops */
  needHardReset: boolean;
}

export enum ResponseRestartGame_Error {
  LaunchError = 1,
  UNRECOGNIZED = -1,
}

export function responseRestartGame_ErrorFromJSON(
  object: any,
): ResponseRestartGame_Error {
  switch (object) {
    case 1:
    case "LaunchError":
      return ResponseRestartGame_Error.LaunchError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseRestartGame_Error.UNRECOGNIZED;
  }
}

export function responseRestartGame_ErrorToJSON(
  object: ResponseRestartGame_Error,
): string {
  switch (object) {
    case ResponseRestartGame_Error.LaunchError:
      return "LaunchError";
    default:
      return "UNKNOWN";
  }
}

/** ----------------------------------------------------------------------------- */
export interface RequestStartReplay {
  replayPath: string | undefined;
  replayData: Uint8Array | undefined;
  /** Overrides the map path stored in the replay. */
  mapData: Uint8Array;
  observedPlayerId: number;
  options: InterfaceOptions | undefined;
  disableFog: boolean;
  realtime: boolean;
  /** Allow RequestSaveReplay from a replay. Useful for truncating a replay, or restoring tracker.events. */
  recordReplay: boolean;
}

export interface ResponseStartReplay {
  error: ResponseStartReplay_Error;
  errorDetails: string;
}

export enum ResponseStartReplay_Error {
  MissingReplay = 1,
  InvalidReplayPath = 2,
  InvalidReplayData = 3,
  InvalidMapData = 4,
  InvalidObservedPlayerId = 5,
  MissingOptions = 6,
  LaunchError = 7,
  UNRECOGNIZED = -1,
}

export function responseStartReplay_ErrorFromJSON(
  object: any,
): ResponseStartReplay_Error {
  switch (object) {
    case 1:
    case "MissingReplay":
      return ResponseStartReplay_Error.MissingReplay;
    case 2:
    case "InvalidReplayPath":
      return ResponseStartReplay_Error.InvalidReplayPath;
    case 3:
    case "InvalidReplayData":
      return ResponseStartReplay_Error.InvalidReplayData;
    case 4:
    case "InvalidMapData":
      return ResponseStartReplay_Error.InvalidMapData;
    case 5:
    case "InvalidObservedPlayerId":
      return ResponseStartReplay_Error.InvalidObservedPlayerId;
    case 6:
    case "MissingOptions":
      return ResponseStartReplay_Error.MissingOptions;
    case 7:
    case "LaunchError":
      return ResponseStartReplay_Error.LaunchError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseStartReplay_Error.UNRECOGNIZED;
  }
}

export function responseStartReplay_ErrorToJSON(
  object: ResponseStartReplay_Error,
): string {
  switch (object) {
    case ResponseStartReplay_Error.MissingReplay:
      return "MissingReplay";
    case ResponseStartReplay_Error.InvalidReplayPath:
      return "InvalidReplayPath";
    case ResponseStartReplay_Error.InvalidReplayData:
      return "InvalidReplayData";
    case ResponseStartReplay_Error.InvalidMapData:
      return "InvalidMapData";
    case ResponseStartReplay_Error.InvalidObservedPlayerId:
      return "InvalidObservedPlayerId";
    case ResponseStartReplay_Error.MissingOptions:
      return "MissingOptions";
    case ResponseStartReplay_Error.LaunchError:
      return "LaunchError";
    default:
      return "UNKNOWN";
  }
}

/** ----------------------------------------------------------------------------- */
export interface RequestMapCommand {
  triggerCmd: string;
}

export interface ResponseMapCommand {
  error: ResponseMapCommand_Error;
  errorDetails: string;
}

export enum ResponseMapCommand_Error {
  NoTriggerError = 1,
  UNRECOGNIZED = -1,
}

export function responseMapCommand_ErrorFromJSON(
  object: any,
): ResponseMapCommand_Error {
  switch (object) {
    case 1:
    case "NoTriggerError":
      return ResponseMapCommand_Error.NoTriggerError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseMapCommand_Error.UNRECOGNIZED;
  }
}

export function responseMapCommand_ErrorToJSON(
  object: ResponseMapCommand_Error,
): string {
  switch (object) {
    case ResponseMapCommand_Error.NoTriggerError:
      return "NoTriggerError";
    default:
      return "UNKNOWN";
  }
}

/** ----------------------------------------------------------------------------- */
export interface RequestLeaveGame {}

export interface ResponseLeaveGame {}

/** ----------------------------------------------------------------------------- */
export interface RequestQuickSave {}

/** ----------------------------------------------------------------------------- */
export interface ResponseQuickSave {}

/** ----------------------------------------------------------------------------- */
export interface RequestQuickLoad {}

/** ----------------------------------------------------------------------------- */
export interface ResponseQuickLoad {}

/** ----------------------------------------------------------------------------- */
export interface RequestQuit {}

export interface ResponseQuit {}

/** ----------------------------------------------------------------------------- */
export interface RequestGameInfo {}

export interface ResponseGameInfo {
  mapName: string;
  modNames: string[];
  localMapPath: string;
  playerInfo: PlayerInfo[];
  /** Populated if Raw interface is enabled. */
  startRaw: StartRaw | undefined;
  options: InterfaceOptions | undefined;
}

/** ----------------------------------------------------------------------------- */
export interface RequestObservation {
  disableFog: boolean;
  /** In realtime the request will only return once the simulation game loop has reached this value. When not realtime this value is ignored. */
  gameLoop: number;
}

export interface ResponseObservation {
  /** Actions this player did since the last Observation. */
  actions: Action[];
  /** Equivalent of UI "red text" errors. */
  actionErrors: ActionError[];
  observation: Observation | undefined;
  /** Only populated if the game ended during this step. */
  playerResult: PlayerResult[];
  chat: ChatReceived[];
}

export interface ChatReceived {
  playerId: number;
  message: string;
}

/** ----------------------------------------------------------------------------- */
export interface RequestAction {
  actions: Action[];
}

export interface ResponseAction {
  result: ActionResult[];
}

/** ----------------------------------------------------------------------------- */
export interface RequestObserverAction {
  actions: ObserverAction[];
}

export interface ResponseObserverAction {}

/** ----------------------------------------------------------------------------- */
export interface RequestStep {
  /** Number of game loops to simulate for the next frame. */
  count: number;
}

export interface ResponseStep {
  /**
   * Max simulation_loop is (1<<19) before "end of time" will occur
   *  The "end of time" is classified as the maximum number of game loops or absolute game time
   *  representable as a positive fixed point number.
   *  When we reach the "end of time", permanently pause the game and end the game for all.
   */
  simulationLoop: number;
}

/** ----------------------------------------------------------------------------- */
export interface RequestData {
  abilityId: boolean;
  unitTypeId: boolean;
  upgradeId: boolean;
  buffId: boolean;
  effectId: boolean;
}

export interface ResponseData {
  abilities: AbilityData[];
  units: UnitTypeData[];
  upgrades: UpgradeData[];
  buffs: BuffData[];
  effects: EffectData[];
}

/** ----------------------------------------------------------------------------- */
export interface RequestSaveReplay {}

export interface ResponseSaveReplay {
  data: Uint8Array;
}

/** ----------------------------------------------------------------------------- */
export interface RequestReplayInfo {
  /** Limitation: might fail if the replay file is currently loaded. */
  replayPath: string | undefined;
  replayData: Uint8Array | undefined;
  /** Ensure the data and binary are downloaded if this is an old version replay. */
  downloadData: boolean;
}

export interface PlayerInfoExtra {
  playerInfo: PlayerInfo | undefined;
  playerResult: PlayerResult | undefined;
  playerMmr: number;
  playerApm: number;
}

export interface ResponseReplayInfo {
  mapName: string;
  localMapPath: string;
  playerInfo: PlayerInfoExtra[];
  gameDurationLoops: number;
  gameDurationSeconds: number;
  gameVersion: string;
  dataVersion: string;
  dataBuild: number;
  baseBuild: number;
  error: ResponseReplayInfo_Error;
  errorDetails: string;
}

export enum ResponseReplayInfo_Error {
  MissingReplay = 1,
  InvalidReplayPath = 2,
  InvalidReplayData = 3,
  ParsingError = 4,
  DownloadError = 5,
  UNRECOGNIZED = -1,
}

export function responseReplayInfo_ErrorFromJSON(
  object: any,
): ResponseReplayInfo_Error {
  switch (object) {
    case 1:
    case "MissingReplay":
      return ResponseReplayInfo_Error.MissingReplay;
    case 2:
    case "InvalidReplayPath":
      return ResponseReplayInfo_Error.InvalidReplayPath;
    case 3:
    case "InvalidReplayData":
      return ResponseReplayInfo_Error.InvalidReplayData;
    case 4:
    case "ParsingError":
      return ResponseReplayInfo_Error.ParsingError;
    case 5:
    case "DownloadError":
      return ResponseReplayInfo_Error.DownloadError;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseReplayInfo_Error.UNRECOGNIZED;
  }
}

export function responseReplayInfo_ErrorToJSON(
  object: ResponseReplayInfo_Error,
): string {
  switch (object) {
    case ResponseReplayInfo_Error.MissingReplay:
      return "MissingReplay";
    case ResponseReplayInfo_Error.InvalidReplayPath:
      return "InvalidReplayPath";
    case ResponseReplayInfo_Error.InvalidReplayData:
      return "InvalidReplayData";
    case ResponseReplayInfo_Error.ParsingError:
      return "ParsingError";
    case ResponseReplayInfo_Error.DownloadError:
      return "DownloadError";
    default:
      return "UNKNOWN";
  }
}

/** ----------------------------------------------------------------------------- */
export interface RequestAvailableMaps {}

/**
 * This will only contain locally cached BattleNet maps.
 * To download all ladder maps, log in and queue into a ladder match.
 * To download any other map, play a custom game on that map.
 */
export interface ResponseAvailableMaps {
  /** All the maps in the "Maps/" directory. */
  localMapPaths: string[];
  /** All the maps in the BattleNet cache. */
  battlenetMapNames: string[];
}

/**
 * -----------------------------------------------------------------------------
 * Copies map data into the path specified.
 */
export interface RequestSaveMap {
  /** Path the game process will write to, relative to the temp directory. (260 character max) */
  mapPath: string;
  /** Binary map data of a .SC2Map. */
  mapData: Uint8Array;
}

export interface ResponseSaveMap {
  error: ResponseSaveMap_Error;
}

export enum ResponseSaveMap_Error {
  InvalidMapData = 1,
  UNRECOGNIZED = -1,
}

export function responseSaveMap_ErrorFromJSON(
  object: any,
): ResponseSaveMap_Error {
  switch (object) {
    case 1:
    case "InvalidMapData":
      return ResponseSaveMap_Error.InvalidMapData;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseSaveMap_Error.UNRECOGNIZED;
  }
}

export function responseSaveMap_ErrorToJSON(
  object: ResponseSaveMap_Error,
): string {
  switch (object) {
    case ResponseSaveMap_Error.InvalidMapData:
      return "InvalidMapData";
    default:
      return "UNKNOWN";
  }
}

/** ----------------------------------------------------------------------------- */
export interface RequestPing {}

export interface ResponsePing {
  gameVersion: string;
  dataVersion: string;
  dataBuild: number;
  baseBuild: number;
}

/** ----------------------------------------------------------------------------- */
export interface RequestDebug {
  debug: DebugCommand[];
}

export interface ResponseDebug {}

export interface PlayerSetup {
  type: PlayerType;
  /** Only used for a computer player. */
  race: Race;
  difficulty: Difficulty;
  playerName: string;
  aiBuild: AIBuild;
}

export interface SpatialCameraSetup {
  resolution: Size2DI | undefined;
  minimapResolution: Size2DI | undefined;
  /** Below are only relevant for feature layers. */
  width: number;
  /** Crop minimap to the playable area. */
  cropToPlayableArea: boolean;
  /** Return unit_type on the minimap, and potentially other cheating layers. */
  allowCheatingLayers: boolean;
}

export interface InterfaceOptions {
  /** Interface options */
  raw: boolean;
  score: boolean;
  /** Omit to disable. */
  featureLayer: SpatialCameraSetup | undefined;
  /** Omit to disable. */
  render: SpatialCameraSetup | undefined;
  /** By default cloaked units are completely hidden. This shows some details. */
  showCloaked: boolean;
  /** By default burrowed units are completely hidden. This shows some details for those that produce a shadow. */
  showBurrowedShadows: boolean;
  /** Return placeholder units (buildings to be constructed), both for raw and feature layers. */
  showPlaceholders: boolean;
  /**
   * By default raw actions select, act and revert the selection. This is useful
   * if you're playing simultaneously with the agent so it doesn't steal your
   * selection. This inflates APM (due to deselect) and makes the actions hard
   * to follow in a replay. Setting this to true will cause raw actions to do
   * select, act, but not revert the selection.
   */
  rawAffectsSelection: boolean;
  /**
   * Changes the coordinates in raw.proto to be relative to the playable area.
   * The map_size and playable_area will be the diagonal of the real playable area.
   */
  rawCropToPlayableArea: boolean;
}

export interface PlayerInfo {
  /**
   * Identifier that will be used to reference this player.
   * SC2 will always assign playerIds starting from 1 in standard Melee maps. This may not be true in custom maps.
   */
  playerId: number;
  type: PlayerType;
  raceRequested: Race;
  /** Only populated for your player or when watching replay */
  raceActual: Race;
  difficulty: Difficulty;
  aiBuild: AIBuild;
  playerName: string;
}

export interface PlayerCommon {
  playerId: number;
  minerals: number;
  vespene: number;
  foodCap: number;
  foodUsed: number;
  foodArmy: number;
  foodWorkers: number;
  idleWorkerCount: number;
  armyCount: number;
  warpGateCount: number;
  larvaCount: number;
}

export interface Observation {
  gameLoop: number;
  playerCommon: PlayerCommon | undefined;
  alerts: Alert[];
  /** Abilities available in the selection. Enabled if in this list, disabled otherwise. */
  abilities: AvailableAbility[];
  score: Score | undefined;
  /** Populated if Raw interface is enabled. */
  rawData: ObservationRaw | undefined;
  /** Populated if Feature Layer interface is enabled. */
  featureLayerData: ObservationFeatureLayer | undefined;
  /** Populated if Render interface is enabled. */
  renderData: ObservationRender | undefined;
  /** Populated if Feature Layer or Render interface is enabled. */
  uiData: ObservationUI | undefined;
}

export interface Action {
  /** Populated if Raw interface is enabled. */
  actionRaw: ActionRaw | undefined;
  /** Populated if Feature Layer interface is enabled. */
  actionFeatureLayer: ActionSpatial | undefined;
  /** Not implemented. Populated if Render interface is enabled. */
  actionRender: ActionSpatial | undefined;
  /** Populated if Feature Layer or Render interface is enabled. */
  actionUi: ActionUI | undefined;
  /** Chat messages as a player typing into the chat channel. */
  actionChat: ActionChat | undefined;
  /** Populated for actions in ResponseObservation. The game loop on which the action was executed. */
  gameLoop: number;
}

export interface ActionChat {
  channel: ActionChat_Channel;
  message: string;
}

export enum ActionChat_Channel {
  Broadcast = 1,
  Team = 2,
  UNRECOGNIZED = -1,
}

export function actionChat_ChannelFromJSON(object: any): ActionChat_Channel {
  switch (object) {
    case 1:
    case "Broadcast":
      return ActionChat_Channel.Broadcast;
    case 2:
    case "Team":
      return ActionChat_Channel.Team;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionChat_Channel.UNRECOGNIZED;
  }
}

export function actionChat_ChannelToJSON(object: ActionChat_Channel): string {
  switch (object) {
    case ActionChat_Channel.Broadcast:
      return "Broadcast";
    case ActionChat_Channel.Team:
      return "Team";
    default:
      return "UNKNOWN";
  }
}

export interface ActionError {
  /** Only populated when using raw interface. */
  unitTag: number;
  abilityId: number;
  result: ActionResult;
}

export interface ObserverAction {
  /** Not implemented */
  playerPerspective: ActionObserverPlayerPerspective | undefined;
  cameraMove: ActionObserverCameraMove | undefined;
  cameraFollowPlayer: ActionObserverCameraFollowPlayer | undefined;
  /** Not implemented */
  cameraFollowUnits: ActionObserverCameraFollowUnits | undefined;
}

export interface ActionObserverPlayerPerspective {
  /** 0 to observe "Everyone" */
  playerId: number;
}

export interface ActionObserverCameraMove {
  worldPos: Point2D | undefined;
  /**
   * Distance between camera and terrain. Larger value zooms out camera.
   * Defaults to standard camera distance if set to 0.
   */
  distance: number;
}

export interface ActionObserverCameraFollowPlayer {
  /** Not implemented. Value must be [1, 15] */
  playerId: number;
}

export interface ActionObserverCameraFollowUnits {
  unitTags: number[];
}

export interface PlayerResult {
  playerId: number;
  result: Result;
}

function createBaseRequest(): Request {
  return {};
}

export const Request = {
  encode(
    message: Request,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.createGame !== undefined) {
      RequestCreateGame.encode(
        message.createGame,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.joinGame !== undefined) {
      RequestJoinGame.encode(
        message.joinGame,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.restartGame !== undefined) {
      RequestRestartGame.encode(
        message.restartGame,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.startReplay !== undefined) {
      RequestStartReplay.encode(
        message.startReplay,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.leaveGame !== undefined) {
      RequestLeaveGame.encode(
        message.leaveGame,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.quickSave !== undefined) {
      RequestQuickSave.encode(
        message.quickSave,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.quickLoad !== undefined) {
      RequestQuickLoad.encode(
        message.quickLoad,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.quit !== undefined) {
      RequestQuit.encode(message.quit, writer.uint32(66).fork()).ldelim();
    }
    if (message.gameInfo !== undefined) {
      RequestGameInfo.encode(
        message.gameInfo,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.observation !== undefined) {
      RequestObservation.encode(
        message.observation,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.action !== undefined) {
      RequestAction.encode(message.action, writer.uint32(90).fork()).ldelim();
    }
    if (message.obsAction !== undefined) {
      RequestObserverAction.encode(
        message.obsAction,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.step !== undefined) {
      RequestStep.encode(message.step, writer.uint32(98).fork()).ldelim();
    }
    if (message.data !== undefined) {
      RequestData.encode(message.data, writer.uint32(106).fork()).ldelim();
    }
    if (message.query !== undefined) {
      RequestQuery.encode(message.query, writer.uint32(114).fork()).ldelim();
    }
    if (message.saveReplay !== undefined) {
      RequestSaveReplay.encode(
        message.saveReplay,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.mapCommand !== undefined) {
      RequestMapCommand.encode(
        message.mapCommand,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.replayInfo !== undefined) {
      RequestReplayInfo.encode(
        message.replayInfo,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.availableMaps !== undefined) {
      RequestAvailableMaps.encode(
        message.availableMaps,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.saveMap !== undefined) {
      RequestSaveMap.encode(
        message.saveMap,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.ping !== undefined) {
      RequestPing.encode(message.ping, writer.uint32(154).fork()).ldelim();
    }
    if (message.debug !== undefined) {
      RequestDebug.encode(message.debug, writer.uint32(162).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(776).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createGame = RequestCreateGame.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.joinGame = RequestJoinGame.decode(reader, reader.uint32());
          break;
        case 3:
          message.restartGame = RequestRestartGame.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.startReplay = RequestStartReplay.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.leaveGame = RequestLeaveGame.decode(reader, reader.uint32());
          break;
        case 6:
          message.quickSave = RequestQuickSave.decode(reader, reader.uint32());
          break;
        case 7:
          message.quickLoad = RequestQuickLoad.decode(reader, reader.uint32());
          break;
        case 8:
          message.quit = RequestQuit.decode(reader, reader.uint32());
          break;
        case 9:
          message.gameInfo = RequestGameInfo.decode(reader, reader.uint32());
          break;
        case 10:
          message.observation = RequestObservation.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 11:
          message.action = RequestAction.decode(reader, reader.uint32());
          break;
        case 21:
          message.obsAction = RequestObserverAction.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 12:
          message.step = RequestStep.decode(reader, reader.uint32());
          break;
        case 13:
          message.data = RequestData.decode(reader, reader.uint32());
          break;
        case 14:
          message.query = RequestQuery.decode(reader, reader.uint32());
          break;
        case 15:
          message.saveReplay = RequestSaveReplay.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 22:
          message.mapCommand = RequestMapCommand.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.replayInfo = RequestReplayInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 17:
          message.availableMaps = RequestAvailableMaps.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 18:
          message.saveMap = RequestSaveMap.decode(reader, reader.uint32());
          break;
        case 19:
          message.ping = RequestPing.decode(reader, reader.uint32());
          break;
        case 20:
          message.debug = RequestDebug.decode(reader, reader.uint32());
          break;
        case 97:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Request {
    return {
      createGame: isSet(object.createGame)
        ? RequestCreateGame.fromJSON(object.createGame)
        : undefined,
      joinGame: isSet(object.joinGame)
        ? RequestJoinGame.fromJSON(object.joinGame)
        : undefined,
      restartGame: isSet(object.restartGame)
        ? RequestRestartGame.fromJSON(object.restartGame)
        : undefined,
      startReplay: isSet(object.startReplay)
        ? RequestStartReplay.fromJSON(object.startReplay)
        : undefined,
      leaveGame: isSet(object.leaveGame)
        ? RequestLeaveGame.fromJSON(object.leaveGame)
        : undefined,
      quickSave: isSet(object.quickSave)
        ? RequestQuickSave.fromJSON(object.quickSave)
        : undefined,
      quickLoad: isSet(object.quickLoad)
        ? RequestQuickLoad.fromJSON(object.quickLoad)
        : undefined,
      quit: isSet(object.quit) ? RequestQuit.fromJSON(object.quit) : undefined,
      gameInfo: isSet(object.gameInfo)
        ? RequestGameInfo.fromJSON(object.gameInfo)
        : undefined,
      observation: isSet(object.observation)
        ? RequestObservation.fromJSON(object.observation)
        : undefined,
      action: isSet(object.action)
        ? RequestAction.fromJSON(object.action)
        : undefined,
      obsAction: isSet(object.obsAction)
        ? RequestObserverAction.fromJSON(object.obsAction)
        : undefined,
      step: isSet(object.step) ? RequestStep.fromJSON(object.step) : undefined,
      data: isSet(object.data) ? RequestData.fromJSON(object.data) : undefined,
      query: isSet(object.query)
        ? RequestQuery.fromJSON(object.query)
        : undefined,
      saveReplay: isSet(object.saveReplay)
        ? RequestSaveReplay.fromJSON(object.saveReplay)
        : undefined,
      mapCommand: isSet(object.mapCommand)
        ? RequestMapCommand.fromJSON(object.mapCommand)
        : undefined,
      replayInfo: isSet(object.replayInfo)
        ? RequestReplayInfo.fromJSON(object.replayInfo)
        : undefined,
      availableMaps: isSet(object.availableMaps)
        ? RequestAvailableMaps.fromJSON(object.availableMaps)
        : undefined,
      saveMap: isSet(object.saveMap)
        ? RequestSaveMap.fromJSON(object.saveMap)
        : undefined,
      ping: isSet(object.ping) ? RequestPing.fromJSON(object.ping) : undefined,
      debug: isSet(object.debug)
        ? RequestDebug.fromJSON(object.debug)
        : undefined,
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: Request): unknown {
    const obj: any = {};
    message.createGame !== undefined &&
      (obj.createGame = message.createGame
        ? RequestCreateGame.toJSON(message.createGame)
        : undefined);
    message.joinGame !== undefined &&
      (obj.joinGame = message.joinGame
        ? RequestJoinGame.toJSON(message.joinGame)
        : undefined);
    message.restartGame !== undefined &&
      (obj.restartGame = message.restartGame
        ? RequestRestartGame.toJSON(message.restartGame)
        : undefined);
    message.startReplay !== undefined &&
      (obj.startReplay = message.startReplay
        ? RequestStartReplay.toJSON(message.startReplay)
        : undefined);
    message.leaveGame !== undefined &&
      (obj.leaveGame = message.leaveGame
        ? RequestLeaveGame.toJSON(message.leaveGame)
        : undefined);
    message.quickSave !== undefined &&
      (obj.quickSave = message.quickSave
        ? RequestQuickSave.toJSON(message.quickSave)
        : undefined);
    message.quickLoad !== undefined &&
      (obj.quickLoad = message.quickLoad
        ? RequestQuickLoad.toJSON(message.quickLoad)
        : undefined);
    message.quit !== undefined &&
      (obj.quit = message.quit ? RequestQuit.toJSON(message.quit) : undefined);
    message.gameInfo !== undefined &&
      (obj.gameInfo = message.gameInfo
        ? RequestGameInfo.toJSON(message.gameInfo)
        : undefined);
    message.observation !== undefined &&
      (obj.observation = message.observation
        ? RequestObservation.toJSON(message.observation)
        : undefined);
    message.action !== undefined &&
      (obj.action = message.action
        ? RequestAction.toJSON(message.action)
        : undefined);
    message.obsAction !== undefined &&
      (obj.obsAction = message.obsAction
        ? RequestObserverAction.toJSON(message.obsAction)
        : undefined);
    message.step !== undefined &&
      (obj.step = message.step ? RequestStep.toJSON(message.step) : undefined);
    message.data !== undefined &&
      (obj.data = message.data ? RequestData.toJSON(message.data) : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? RequestQuery.toJSON(message.query)
        : undefined);
    message.saveReplay !== undefined &&
      (obj.saveReplay = message.saveReplay
        ? RequestSaveReplay.toJSON(message.saveReplay)
        : undefined);
    message.mapCommand !== undefined &&
      (obj.mapCommand = message.mapCommand
        ? RequestMapCommand.toJSON(message.mapCommand)
        : undefined);
    message.replayInfo !== undefined &&
      (obj.replayInfo = message.replayInfo
        ? RequestReplayInfo.toJSON(message.replayInfo)
        : undefined);
    message.availableMaps !== undefined &&
      (obj.availableMaps = message.availableMaps
        ? RequestAvailableMaps.toJSON(message.availableMaps)
        : undefined);
    message.saveMap !== undefined &&
      (obj.saveMap = message.saveMap
        ? RequestSaveMap.toJSON(message.saveMap)
        : undefined);
    message.ping !== undefined &&
      (obj.ping = message.ping ? RequestPing.toJSON(message.ping) : undefined);
    message.debug !== undefined &&
      (obj.debug = message.debug
        ? RequestDebug.toJSON(message.debug)
        : undefined);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Request>, I>>(object: I): Request {
    const message = createBaseRequest();
    message.createGame =
      object.createGame !== undefined && object.createGame !== null
        ? RequestCreateGame.fromPartial(object.createGame)
        : undefined;
    message.joinGame =
      object.joinGame !== undefined && object.joinGame !== null
        ? RequestJoinGame.fromPartial(object.joinGame)
        : undefined;
    message.restartGame =
      object.restartGame !== undefined && object.restartGame !== null
        ? RequestRestartGame.fromPartial(object.restartGame)
        : undefined;
    message.startReplay =
      object.startReplay !== undefined && object.startReplay !== null
        ? RequestStartReplay.fromPartial(object.startReplay)
        : undefined;
    message.leaveGame =
      object.leaveGame !== undefined && object.leaveGame !== null
        ? RequestLeaveGame.fromPartial(object.leaveGame)
        : undefined;
    message.quickSave =
      object.quickSave !== undefined && object.quickSave !== null
        ? RequestQuickSave.fromPartial(object.quickSave)
        : undefined;
    message.quickLoad =
      object.quickLoad !== undefined && object.quickLoad !== null
        ? RequestQuickLoad.fromPartial(object.quickLoad)
        : undefined;
    message.quit =
      object.quit !== undefined && object.quit !== null
        ? RequestQuit.fromPartial(object.quit)
        : undefined;
    message.gameInfo =
      object.gameInfo !== undefined && object.gameInfo !== null
        ? RequestGameInfo.fromPartial(object.gameInfo)
        : undefined;
    message.observation =
      object.observation !== undefined && object.observation !== null
        ? RequestObservation.fromPartial(object.observation)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? RequestAction.fromPartial(object.action)
        : undefined;
    message.obsAction =
      object.obsAction !== undefined && object.obsAction !== null
        ? RequestObserverAction.fromPartial(object.obsAction)
        : undefined;
    message.step =
      object.step !== undefined && object.step !== null
        ? RequestStep.fromPartial(object.step)
        : undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? RequestData.fromPartial(object.data)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? RequestQuery.fromPartial(object.query)
        : undefined;
    message.saveReplay =
      object.saveReplay !== undefined && object.saveReplay !== null
        ? RequestSaveReplay.fromPartial(object.saveReplay)
        : undefined;
    message.mapCommand =
      object.mapCommand !== undefined && object.mapCommand !== null
        ? RequestMapCommand.fromPartial(object.mapCommand)
        : undefined;
    message.replayInfo =
      object.replayInfo !== undefined && object.replayInfo !== null
        ? RequestReplayInfo.fromPartial(object.replayInfo)
        : undefined;
    message.availableMaps =
      object.availableMaps !== undefined && object.availableMaps !== null
        ? RequestAvailableMaps.fromPartial(object.availableMaps)
        : undefined;
    message.saveMap =
      object.saveMap !== undefined && object.saveMap !== null
        ? RequestSaveMap.fromPartial(object.saveMap)
        : undefined;
    message.ping =
      object.ping !== undefined && object.ping !== null
        ? RequestPing.fromPartial(object.ping)
        : undefined;
    message.debug =
      object.debug !== undefined && object.debug !== null
        ? RequestDebug.fromPartial(object.debug)
        : undefined;
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseResponse(): Response {
  return {
    error: [],
  };
}

export const Response = {
  encode(
    message: Response,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.createGame !== undefined) {
      ResponseCreateGame.encode(
        message.createGame,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.joinGame !== undefined) {
      ResponseJoinGame.encode(
        message.joinGame,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.restartGame !== undefined) {
      ResponseRestartGame.encode(
        message.restartGame,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.startReplay !== undefined) {
      ResponseStartReplay.encode(
        message.startReplay,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.leaveGame !== undefined) {
      ResponseLeaveGame.encode(
        message.leaveGame,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.quickSave !== undefined) {
      ResponseQuickSave.encode(
        message.quickSave,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.quickLoad !== undefined) {
      ResponseQuickLoad.encode(
        message.quickLoad,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.quit !== undefined) {
      ResponseQuit.encode(message.quit, writer.uint32(66).fork()).ldelim();
    }
    if (message.gameInfo !== undefined) {
      ResponseGameInfo.encode(
        message.gameInfo,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    if (message.observation !== undefined) {
      ResponseObservation.encode(
        message.observation,
        writer.uint32(82).fork(),
      ).ldelim();
    }
    if (message.action !== undefined) {
      ResponseAction.encode(message.action, writer.uint32(90).fork()).ldelim();
    }
    if (message.obsAction !== undefined) {
      ResponseObserverAction.encode(
        message.obsAction,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.step !== undefined) {
      ResponseStep.encode(message.step, writer.uint32(98).fork()).ldelim();
    }
    if (message.data !== undefined) {
      ResponseData.encode(message.data, writer.uint32(106).fork()).ldelim();
    }
    if (message.query !== undefined) {
      ResponseQuery.encode(message.query, writer.uint32(114).fork()).ldelim();
    }
    if (message.saveReplay !== undefined) {
      ResponseSaveReplay.encode(
        message.saveReplay,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.replayInfo !== undefined) {
      ResponseReplayInfo.encode(
        message.replayInfo,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.availableMaps !== undefined) {
      ResponseAvailableMaps.encode(
        message.availableMaps,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.saveMap !== undefined) {
      ResponseSaveMap.encode(
        message.saveMap,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.mapCommand !== undefined) {
      ResponseMapCommand.encode(
        message.mapCommand,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.ping !== undefined) {
      ResponsePing.encode(message.ping, writer.uint32(154).fork()).ldelim();
    }
    if (message.debug !== undefined) {
      ResponseDebug.encode(message.debug, writer.uint32(162).fork()).ldelim();
    }
    if (message.id !== undefined) {
      writer.uint32(776).uint32(message.id);
    }
    for (const v of message.error) {
      writer.uint32(786).string(v!);
    }
    if (message.status !== undefined) {
      writer.uint32(792).int32(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.createGame = ResponseCreateGame.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.joinGame = ResponseJoinGame.decode(reader, reader.uint32());
          break;
        case 3:
          message.restartGame = ResponseRestartGame.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.startReplay = ResponseStartReplay.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.leaveGame = ResponseLeaveGame.decode(reader, reader.uint32());
          break;
        case 6:
          message.quickSave = ResponseQuickSave.decode(reader, reader.uint32());
          break;
        case 7:
          message.quickLoad = ResponseQuickLoad.decode(reader, reader.uint32());
          break;
        case 8:
          message.quit = ResponseQuit.decode(reader, reader.uint32());
          break;
        case 9:
          message.gameInfo = ResponseGameInfo.decode(reader, reader.uint32());
          break;
        case 10:
          message.observation = ResponseObservation.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 11:
          message.action = ResponseAction.decode(reader, reader.uint32());
          break;
        case 21:
          message.obsAction = ResponseObserverAction.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 12:
          message.step = ResponseStep.decode(reader, reader.uint32());
          break;
        case 13:
          message.data = ResponseData.decode(reader, reader.uint32());
          break;
        case 14:
          message.query = ResponseQuery.decode(reader, reader.uint32());
          break;
        case 15:
          message.saveReplay = ResponseSaveReplay.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.replayInfo = ResponseReplayInfo.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 17:
          message.availableMaps = ResponseAvailableMaps.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 18:
          message.saveMap = ResponseSaveMap.decode(reader, reader.uint32());
          break;
        case 22:
          message.mapCommand = ResponseMapCommand.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 19:
          message.ping = ResponsePing.decode(reader, reader.uint32());
          break;
        case 20:
          message.debug = ResponseDebug.decode(reader, reader.uint32());
          break;
        case 97:
          message.id = reader.uint32();
          break;
        case 98:
          message.error.push(reader.string());
          break;
        case 99:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Response {
    return {
      createGame: isSet(object.createGame)
        ? ResponseCreateGame.fromJSON(object.createGame)
        : undefined,
      joinGame: isSet(object.joinGame)
        ? ResponseJoinGame.fromJSON(object.joinGame)
        : undefined,
      restartGame: isSet(object.restartGame)
        ? ResponseRestartGame.fromJSON(object.restartGame)
        : undefined,
      startReplay: isSet(object.startReplay)
        ? ResponseStartReplay.fromJSON(object.startReplay)
        : undefined,
      leaveGame: isSet(object.leaveGame)
        ? ResponseLeaveGame.fromJSON(object.leaveGame)
        : undefined,
      quickSave: isSet(object.quickSave)
        ? ResponseQuickSave.fromJSON(object.quickSave)
        : undefined,
      quickLoad: isSet(object.quickLoad)
        ? ResponseQuickLoad.fromJSON(object.quickLoad)
        : undefined,
      quit: isSet(object.quit) ? ResponseQuit.fromJSON(object.quit) : undefined,
      gameInfo: isSet(object.gameInfo)
        ? ResponseGameInfo.fromJSON(object.gameInfo)
        : undefined,
      observation: isSet(object.observation)
        ? ResponseObservation.fromJSON(object.observation)
        : undefined,
      action: isSet(object.action)
        ? ResponseAction.fromJSON(object.action)
        : undefined,
      obsAction: isSet(object.obsAction)
        ? ResponseObserverAction.fromJSON(object.obsAction)
        : undefined,
      step: isSet(object.step) ? ResponseStep.fromJSON(object.step) : undefined,
      data: isSet(object.data) ? ResponseData.fromJSON(object.data) : undefined,
      query: isSet(object.query)
        ? ResponseQuery.fromJSON(object.query)
        : undefined,
      saveReplay: isSet(object.saveReplay)
        ? ResponseSaveReplay.fromJSON(object.saveReplay)
        : undefined,
      replayInfo: isSet(object.replayInfo)
        ? ResponseReplayInfo.fromJSON(object.replayInfo)
        : undefined,
      availableMaps: isSet(object.availableMaps)
        ? ResponseAvailableMaps.fromJSON(object.availableMaps)
        : undefined,
      saveMap: isSet(object.saveMap)
        ? ResponseSaveMap.fromJSON(object.saveMap)
        : undefined,
      mapCommand: isSet(object.mapCommand)
        ? ResponseMapCommand.fromJSON(object.mapCommand)
        : undefined,
      ping: isSet(object.ping) ? ResponsePing.fromJSON(object.ping) : undefined,
      debug: isSet(object.debug)
        ? ResponseDebug.fromJSON(object.debug)
        : undefined,
      id: isSet(object.id) ? Number(object.id) : 0,
      error: Array.isArray(object?.error)
        ? object.error.map((e: any) => String(e))
        : [],
      status: isSet(object.status) ? statusFromJSON(object.status) : 1,
    };
  },

  toJSON(message: Response): unknown {
    const obj: any = {};
    message.createGame !== undefined &&
      (obj.createGame = message.createGame
        ? ResponseCreateGame.toJSON(message.createGame)
        : undefined);
    message.joinGame !== undefined &&
      (obj.joinGame = message.joinGame
        ? ResponseJoinGame.toJSON(message.joinGame)
        : undefined);
    message.restartGame !== undefined &&
      (obj.restartGame = message.restartGame
        ? ResponseRestartGame.toJSON(message.restartGame)
        : undefined);
    message.startReplay !== undefined &&
      (obj.startReplay = message.startReplay
        ? ResponseStartReplay.toJSON(message.startReplay)
        : undefined);
    message.leaveGame !== undefined &&
      (obj.leaveGame = message.leaveGame
        ? ResponseLeaveGame.toJSON(message.leaveGame)
        : undefined);
    message.quickSave !== undefined &&
      (obj.quickSave = message.quickSave
        ? ResponseQuickSave.toJSON(message.quickSave)
        : undefined);
    message.quickLoad !== undefined &&
      (obj.quickLoad = message.quickLoad
        ? ResponseQuickLoad.toJSON(message.quickLoad)
        : undefined);
    message.quit !== undefined &&
      (obj.quit = message.quit ? ResponseQuit.toJSON(message.quit) : undefined);
    message.gameInfo !== undefined &&
      (obj.gameInfo = message.gameInfo
        ? ResponseGameInfo.toJSON(message.gameInfo)
        : undefined);
    message.observation !== undefined &&
      (obj.observation = message.observation
        ? ResponseObservation.toJSON(message.observation)
        : undefined);
    message.action !== undefined &&
      (obj.action = message.action
        ? ResponseAction.toJSON(message.action)
        : undefined);
    message.obsAction !== undefined &&
      (obj.obsAction = message.obsAction
        ? ResponseObserverAction.toJSON(message.obsAction)
        : undefined);
    message.step !== undefined &&
      (obj.step = message.step ? ResponseStep.toJSON(message.step) : undefined);
    message.data !== undefined &&
      (obj.data = message.data ? ResponseData.toJSON(message.data) : undefined);
    message.query !== undefined &&
      (obj.query = message.query
        ? ResponseQuery.toJSON(message.query)
        : undefined);
    message.saveReplay !== undefined &&
      (obj.saveReplay = message.saveReplay
        ? ResponseSaveReplay.toJSON(message.saveReplay)
        : undefined);
    message.replayInfo !== undefined &&
      (obj.replayInfo = message.replayInfo
        ? ResponseReplayInfo.toJSON(message.replayInfo)
        : undefined);
    message.availableMaps !== undefined &&
      (obj.availableMaps = message.availableMaps
        ? ResponseAvailableMaps.toJSON(message.availableMaps)
        : undefined);
    message.saveMap !== undefined &&
      (obj.saveMap = message.saveMap
        ? ResponseSaveMap.toJSON(message.saveMap)
        : undefined);
    message.mapCommand !== undefined &&
      (obj.mapCommand = message.mapCommand
        ? ResponseMapCommand.toJSON(message.mapCommand)
        : undefined);
    message.ping !== undefined &&
      (obj.ping = message.ping ? ResponsePing.toJSON(message.ping) : undefined);
    message.debug !== undefined &&
      (obj.debug = message.debug
        ? ResponseDebug.toJSON(message.debug)
        : undefined);
    message.id !== undefined && (obj.id = Math.round(message.id));
    if (message.error) {
      obj.error = message.error.map((e) => e);
    } else {
      obj.error = [];
    }
    message.status !== undefined && (obj.status = statusToJSON(message.status));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Response>, I>>(object: I): Response {
    const message = createBaseResponse();
    message.createGame =
      object.createGame !== undefined && object.createGame !== null
        ? ResponseCreateGame.fromPartial(object.createGame)
        : undefined;
    message.joinGame =
      object.joinGame !== undefined && object.joinGame !== null
        ? ResponseJoinGame.fromPartial(object.joinGame)
        : undefined;
    message.restartGame =
      object.restartGame !== undefined && object.restartGame !== null
        ? ResponseRestartGame.fromPartial(object.restartGame)
        : undefined;
    message.startReplay =
      object.startReplay !== undefined && object.startReplay !== null
        ? ResponseStartReplay.fromPartial(object.startReplay)
        : undefined;
    message.leaveGame =
      object.leaveGame !== undefined && object.leaveGame !== null
        ? ResponseLeaveGame.fromPartial(object.leaveGame)
        : undefined;
    message.quickSave =
      object.quickSave !== undefined && object.quickSave !== null
        ? ResponseQuickSave.fromPartial(object.quickSave)
        : undefined;
    message.quickLoad =
      object.quickLoad !== undefined && object.quickLoad !== null
        ? ResponseQuickLoad.fromPartial(object.quickLoad)
        : undefined;
    message.quit =
      object.quit !== undefined && object.quit !== null
        ? ResponseQuit.fromPartial(object.quit)
        : undefined;
    message.gameInfo =
      object.gameInfo !== undefined && object.gameInfo !== null
        ? ResponseGameInfo.fromPartial(object.gameInfo)
        : undefined;
    message.observation =
      object.observation !== undefined && object.observation !== null
        ? ResponseObservation.fromPartial(object.observation)
        : undefined;
    message.action =
      object.action !== undefined && object.action !== null
        ? ResponseAction.fromPartial(object.action)
        : undefined;
    message.obsAction =
      object.obsAction !== undefined && object.obsAction !== null
        ? ResponseObserverAction.fromPartial(object.obsAction)
        : undefined;
    message.step =
      object.step !== undefined && object.step !== null
        ? ResponseStep.fromPartial(object.step)
        : undefined;
    message.data =
      object.data !== undefined && object.data !== null
        ? ResponseData.fromPartial(object.data)
        : undefined;
    message.query =
      object.query !== undefined && object.query !== null
        ? ResponseQuery.fromPartial(object.query)
        : undefined;
    message.saveReplay =
      object.saveReplay !== undefined && object.saveReplay !== null
        ? ResponseSaveReplay.fromPartial(object.saveReplay)
        : undefined;
    message.replayInfo =
      object.replayInfo !== undefined && object.replayInfo !== null
        ? ResponseReplayInfo.fromPartial(object.replayInfo)
        : undefined;
    message.availableMaps =
      object.availableMaps !== undefined && object.availableMaps !== null
        ? ResponseAvailableMaps.fromPartial(object.availableMaps)
        : undefined;
    message.saveMap =
      object.saveMap !== undefined && object.saveMap !== null
        ? ResponseSaveMap.fromPartial(object.saveMap)
        : undefined;
    message.mapCommand =
      object.mapCommand !== undefined && object.mapCommand !== null
        ? ResponseMapCommand.fromPartial(object.mapCommand)
        : undefined;
    message.ping =
      object.ping !== undefined && object.ping !== null
        ? ResponsePing.fromPartial(object.ping)
        : undefined;
    message.debug =
      object.debug !== undefined && object.debug !== null
        ? ResponseDebug.fromPartial(object.debug)
        : undefined;
    message.id = object.id ?? 0;
    message.error = object.error?.map((e) => e) || [];
    message.status = object.status ?? 1;
    return message;
  },
};

function createBaseRequestCreateGame(): RequestCreateGame {
  return {
    localMap: undefined,
    battlenetMapName: undefined,
    playerSetup: [],
    disableFog: false,
    randomSeed: 0,
    realtime: false,
  };
}

export const RequestCreateGame = {
  encode(
    message: RequestCreateGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.localMap !== undefined) {
      LocalMap.encode(message.localMap, writer.uint32(10).fork()).ldelim();
    }
    if (message.battlenetMapName !== undefined) {
      writer.uint32(18).string(message.battlenetMapName);
    }
    for (const v of message.playerSetup) {
      PlayerSetup.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.disableFog === true) {
      writer.uint32(32).bool(message.disableFog);
    }
    if (message.randomSeed !== 0) {
      writer.uint32(40).uint32(message.randomSeed);
    }
    if (message.realtime === true) {
      writer.uint32(48).bool(message.realtime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestCreateGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestCreateGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localMap = LocalMap.decode(reader, reader.uint32());
          break;
        case 2:
          message.battlenetMapName = reader.string();
          break;
        case 3:
          message.playerSetup.push(PlayerSetup.decode(reader, reader.uint32()));
          break;
        case 4:
          message.disableFog = reader.bool();
          break;
        case 5:
          message.randomSeed = reader.uint32();
          break;
        case 6:
          message.realtime = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestCreateGame {
    return {
      localMap: isSet(object.localMap)
        ? LocalMap.fromJSON(object.localMap)
        : undefined,
      battlenetMapName: isSet(object.battlenetMapName)
        ? String(object.battlenetMapName)
        : undefined,
      playerSetup: Array.isArray(object?.playerSetup)
        ? object.playerSetup.map((e: any) => PlayerSetup.fromJSON(e))
        : [],
      disableFog: isSet(object.disableFog) ? Boolean(object.disableFog) : false,
      randomSeed: isSet(object.randomSeed) ? Number(object.randomSeed) : 0,
      realtime: isSet(object.realtime) ? Boolean(object.realtime) : false,
    };
  },

  toJSON(message: RequestCreateGame): unknown {
    const obj: any = {};
    message.localMap !== undefined &&
      (obj.localMap = message.localMap
        ? LocalMap.toJSON(message.localMap)
        : undefined);
    message.battlenetMapName !== undefined &&
      (obj.battlenetMapName = message.battlenetMapName);
    if (message.playerSetup) {
      obj.playerSetup = message.playerSetup.map((e) =>
        e ? PlayerSetup.toJSON(e) : undefined,
      );
    } else {
      obj.playerSetup = [];
    }
    message.disableFog !== undefined && (obj.disableFog = message.disableFog);
    message.randomSeed !== undefined &&
      (obj.randomSeed = Math.round(message.randomSeed));
    message.realtime !== undefined && (obj.realtime = message.realtime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestCreateGame>, I>>(
    object: I,
  ): RequestCreateGame {
    const message = createBaseRequestCreateGame();
    message.localMap =
      object.localMap !== undefined && object.localMap !== null
        ? LocalMap.fromPartial(object.localMap)
        : undefined;
    message.battlenetMapName = object.battlenetMapName ?? undefined;
    message.playerSetup =
      object.playerSetup?.map((e) => PlayerSetup.fromPartial(e)) || [];
    message.disableFog = object.disableFog ?? false;
    message.randomSeed = object.randomSeed ?? 0;
    message.realtime = object.realtime ?? false;
    return message;
  },
};

function createBaseLocalMap(): LocalMap {
  return { mapPath: "", mapData: new Uint8Array() };
}

export const LocalMap = {
  encode(
    message: LocalMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapPath !== "") {
      writer.uint32(10).string(message.mapPath);
    }
    if (message.mapData !== undefined && message.mapData.length !== 0) {
      writer.uint32(58).bytes(message.mapData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LocalMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocalMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapPath = reader.string();
          break;
        case 7:
          message.mapData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LocalMap {
    return {
      mapPath: isSet(object.mapPath) ? String(object.mapPath) : "",
      mapData: isSet(object.mapData)
        ? bytesFromBase64(object.mapData)
        : new Uint8Array(),
    };
  },

  toJSON(message: LocalMap): unknown {
    const obj: any = {};
    message.mapPath !== undefined && (obj.mapPath = message.mapPath);
    message.mapData !== undefined &&
      (obj.mapData = base64FromBytes(
        message.mapData !== undefined ? message.mapData : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LocalMap>, I>>(object: I): LocalMap {
    const message = createBaseLocalMap();
    message.mapPath = object.mapPath ?? "";
    message.mapData = object.mapData ?? new Uint8Array();
    return message;
  },
};

function createBaseResponseCreateGame(): ResponseCreateGame {
  return { error: 1, errorDetails: "" };
}

export const ResponseCreateGame = {
  encode(
    message: ResponseCreateGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== 1) {
      writer.uint32(8).int32(message.error);
    }
    if (message.errorDetails !== "") {
      writer.uint32(18).string(message.errorDetails);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseCreateGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseCreateGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.errorDetails = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseCreateGame {
    return {
      error: isSet(object.error)
        ? responseCreateGame_ErrorFromJSON(object.error)
        : 1,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
    };
  },

  toJSON(message: ResponseCreateGame): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = responseCreateGame_ErrorToJSON(message.error));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseCreateGame>, I>>(
    object: I,
  ): ResponseCreateGame {
    const message = createBaseResponseCreateGame();
    message.error = object.error ?? 1;
    message.errorDetails = object.errorDetails ?? "";
    return message;
  },
};

function createBaseRequestJoinGame(): RequestJoinGame {
  return {
    race: undefined,
    observedPlayerId: undefined,
    options: undefined,
    serverPorts: undefined,
    clientPorts: [],
    sharedPort: 0,
    playerName: "",
    hostIp: "",
  };
}

export const RequestJoinGame = {
  encode(
    message: RequestJoinGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.race !== undefined) {
      writer.uint32(8).int32(message.race);
    }
    if (message.observedPlayerId !== undefined) {
      writer.uint32(16).uint32(message.observedPlayerId);
    }
    if (message.options !== undefined) {
      InterfaceOptions.encode(
        message.options,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.serverPorts !== undefined) {
      PortSet.encode(message.serverPorts, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.clientPorts) {
      PortSet.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.sharedPort !== 0) {
      writer.uint32(48).int32(message.sharedPort);
    }
    if (message.playerName !== "") {
      writer.uint32(58).string(message.playerName);
    }
    if (message.hostIp !== "") {
      writer.uint32(66).string(message.hostIp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestJoinGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestJoinGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.race = reader.int32() as any;
          break;
        case 2:
          message.observedPlayerId = reader.uint32();
          break;
        case 3:
          message.options = InterfaceOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.serverPorts = PortSet.decode(reader, reader.uint32());
          break;
        case 5:
          message.clientPorts.push(PortSet.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sharedPort = reader.int32();
          break;
        case 7:
          message.playerName = reader.string();
          break;
        case 8:
          message.hostIp = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestJoinGame {
    return {
      race: isSet(object.race) ? raceFromJSON(object.race) : undefined,
      observedPlayerId: isSet(object.observedPlayerId)
        ? Number(object.observedPlayerId)
        : undefined,
      options: isSet(object.options)
        ? InterfaceOptions.fromJSON(object.options)
        : undefined,
      serverPorts: isSet(object.serverPorts)
        ? PortSet.fromJSON(object.serverPorts)
        : undefined,
      clientPorts: Array.isArray(object?.clientPorts)
        ? object.clientPorts.map((e: any) => PortSet.fromJSON(e))
        : [],
      sharedPort: isSet(object.sharedPort) ? Number(object.sharedPort) : 0,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      hostIp: isSet(object.hostIp) ? String(object.hostIp) : "",
    };
  },

  toJSON(message: RequestJoinGame): unknown {
    const obj: any = {};
    message.race !== undefined &&
      (obj.race =
        message.race !== undefined ? raceToJSON(message.race) : undefined);
    message.observedPlayerId !== undefined &&
      (obj.observedPlayerId = Math.round(message.observedPlayerId));
    message.options !== undefined &&
      (obj.options = message.options
        ? InterfaceOptions.toJSON(message.options)
        : undefined);
    message.serverPorts !== undefined &&
      (obj.serverPorts = message.serverPorts
        ? PortSet.toJSON(message.serverPorts)
        : undefined);
    if (message.clientPorts) {
      obj.clientPorts = message.clientPorts.map((e) =>
        e ? PortSet.toJSON(e) : undefined,
      );
    } else {
      obj.clientPorts = [];
    }
    message.sharedPort !== undefined &&
      (obj.sharedPort = Math.round(message.sharedPort));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.hostIp !== undefined && (obj.hostIp = message.hostIp);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestJoinGame>, I>>(
    object: I,
  ): RequestJoinGame {
    const message = createBaseRequestJoinGame();
    message.race = object.race ?? undefined;
    message.observedPlayerId = object.observedPlayerId ?? undefined;
    message.options =
      object.options !== undefined && object.options !== null
        ? InterfaceOptions.fromPartial(object.options)
        : undefined;
    message.serverPorts =
      object.serverPorts !== undefined && object.serverPorts !== null
        ? PortSet.fromPartial(object.serverPorts)
        : undefined;
    message.clientPorts =
      object.clientPorts?.map((e) => PortSet.fromPartial(e)) || [];
    message.sharedPort = object.sharedPort ?? 0;
    message.playerName = object.playerName ?? "";
    message.hostIp = object.hostIp ?? "";
    return message;
  },
};

function createBasePortSet(): PortSet {
  return { gamePort: 0, basePort: 0 };
}

export const PortSet = {
  encode(
    message: PortSet,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gamePort !== 0) {
      writer.uint32(8).int32(message.gamePort);
    }
    if (message.basePort !== 0) {
      writer.uint32(16).int32(message.basePort);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PortSet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePortSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gamePort = reader.int32();
          break;
        case 2:
          message.basePort = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PortSet {
    return {
      gamePort: isSet(object.gamePort) ? Number(object.gamePort) : 0,
      basePort: isSet(object.basePort) ? Number(object.basePort) : 0,
    };
  },

  toJSON(message: PortSet): unknown {
    const obj: any = {};
    message.gamePort !== undefined &&
      (obj.gamePort = Math.round(message.gamePort));
    message.basePort !== undefined &&
      (obj.basePort = Math.round(message.basePort));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PortSet>, I>>(object: I): PortSet {
    const message = createBasePortSet();
    message.gamePort = object.gamePort ?? 0;
    message.basePort = object.basePort ?? 0;
    return message;
  },
};

function createBaseResponseJoinGame(): ResponseJoinGame {
  return { playerId: 0, error: 1, errorDetails: "" };
}

export const ResponseJoinGame = {
  encode(
    message: ResponseJoinGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    if (message.error !== 1) {
      writer.uint32(16).int32(message.error);
    }
    if (message.errorDetails !== "") {
      writer.uint32(26).string(message.errorDetails);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseJoinGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseJoinGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        case 2:
          message.error = reader.int32() as any;
          break;
        case 3:
          message.errorDetails = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseJoinGame {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      error: isSet(object.error)
        ? responseJoinGame_ErrorFromJSON(object.error)
        : 1,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
    };
  },

  toJSON(message: ResponseJoinGame): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    message.error !== undefined &&
      (obj.error = responseJoinGame_ErrorToJSON(message.error));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseJoinGame>, I>>(
    object: I,
  ): ResponseJoinGame {
    const message = createBaseResponseJoinGame();
    message.playerId = object.playerId ?? 0;
    message.error = object.error ?? 1;
    message.errorDetails = object.errorDetails ?? "";
    return message;
  },
};

function createBaseRequestRestartGame(): RequestRestartGame {
  return {};
}

export const RequestRestartGame = {
  encode(
    _: RequestRestartGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestRestartGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestRestartGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestRestartGame {
    return {};
  },

  toJSON(_: RequestRestartGame): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestRestartGame>, I>>(
    _: I,
  ): RequestRestartGame {
    const message = createBaseRequestRestartGame();
    return message;
  },
};

function createBaseResponseRestartGame(): ResponseRestartGame {
  return { error: 1, errorDetails: "", needHardReset: false };
}

export const ResponseRestartGame = {
  encode(
    message: ResponseRestartGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== 1) {
      writer.uint32(8).int32(message.error);
    }
    if (message.errorDetails !== "") {
      writer.uint32(18).string(message.errorDetails);
    }
    if (message.needHardReset === true) {
      writer.uint32(24).bool(message.needHardReset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseRestartGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseRestartGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.errorDetails = reader.string();
          break;
        case 3:
          message.needHardReset = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseRestartGame {
    return {
      error: isSet(object.error)
        ? responseRestartGame_ErrorFromJSON(object.error)
        : 1,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
      needHardReset: isSet(object.needHardReset)
        ? Boolean(object.needHardReset)
        : false,
    };
  },

  toJSON(message: ResponseRestartGame): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = responseRestartGame_ErrorToJSON(message.error));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    message.needHardReset !== undefined &&
      (obj.needHardReset = message.needHardReset);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseRestartGame>, I>>(
    object: I,
  ): ResponseRestartGame {
    const message = createBaseResponseRestartGame();
    message.error = object.error ?? 1;
    message.errorDetails = object.errorDetails ?? "";
    message.needHardReset = object.needHardReset ?? false;
    return message;
  },
};

function createBaseRequestStartReplay(): RequestStartReplay {
  return {
    replayPath: undefined,
    replayData: undefined,
    mapData: new Uint8Array(),
    observedPlayerId: 0,
    options: undefined,
    disableFog: false,
    realtime: false,
    recordReplay: false,
  };
}

export const RequestStartReplay = {
  encode(
    message: RequestStartReplay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.replayPath !== undefined) {
      writer.uint32(10).string(message.replayPath);
    }
    if (message.replayData !== undefined) {
      writer.uint32(42).bytes(message.replayData);
    }
    if (message.mapData.length !== 0) {
      writer.uint32(50).bytes(message.mapData);
    }
    if (message.observedPlayerId !== 0) {
      writer.uint32(16).int32(message.observedPlayerId);
    }
    if (message.options !== undefined) {
      InterfaceOptions.encode(
        message.options,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.disableFog === true) {
      writer.uint32(32).bool(message.disableFog);
    }
    if (message.realtime === true) {
      writer.uint32(56).bool(message.realtime);
    }
    if (message.recordReplay === true) {
      writer.uint32(64).bool(message.recordReplay);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestStartReplay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestStartReplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.replayPath = reader.string();
          break;
        case 5:
          message.replayData = reader.bytes();
          break;
        case 6:
          message.mapData = reader.bytes();
          break;
        case 2:
          message.observedPlayerId = reader.int32();
          break;
        case 3:
          message.options = InterfaceOptions.decode(reader, reader.uint32());
          break;
        case 4:
          message.disableFog = reader.bool();
          break;
        case 7:
          message.realtime = reader.bool();
          break;
        case 8:
          message.recordReplay = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestStartReplay {
    return {
      replayPath: isSet(object.replayPath)
        ? String(object.replayPath)
        : undefined,
      replayData: isSet(object.replayData)
        ? bytesFromBase64(object.replayData)
        : undefined,
      mapData: isSet(object.mapData)
        ? bytesFromBase64(object.mapData)
        : new Uint8Array(),
      observedPlayerId: isSet(object.observedPlayerId)
        ? Number(object.observedPlayerId)
        : 0,
      options: isSet(object.options)
        ? InterfaceOptions.fromJSON(object.options)
        : undefined,
      disableFog: isSet(object.disableFog) ? Boolean(object.disableFog) : false,
      realtime: isSet(object.realtime) ? Boolean(object.realtime) : false,
      recordReplay: isSet(object.recordReplay)
        ? Boolean(object.recordReplay)
        : false,
    };
  },

  toJSON(message: RequestStartReplay): unknown {
    const obj: any = {};
    message.replayPath !== undefined && (obj.replayPath = message.replayPath);
    message.replayData !== undefined &&
      (obj.replayData =
        message.replayData !== undefined
          ? base64FromBytes(message.replayData)
          : undefined);
    message.mapData !== undefined &&
      (obj.mapData = base64FromBytes(
        message.mapData !== undefined ? message.mapData : new Uint8Array(),
      ));
    message.observedPlayerId !== undefined &&
      (obj.observedPlayerId = Math.round(message.observedPlayerId));
    message.options !== undefined &&
      (obj.options = message.options
        ? InterfaceOptions.toJSON(message.options)
        : undefined);
    message.disableFog !== undefined && (obj.disableFog = message.disableFog);
    message.realtime !== undefined && (obj.realtime = message.realtime);
    message.recordReplay !== undefined &&
      (obj.recordReplay = message.recordReplay);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestStartReplay>, I>>(
    object: I,
  ): RequestStartReplay {
    const message = createBaseRequestStartReplay();
    message.replayPath = object.replayPath ?? undefined;
    message.replayData = object.replayData ?? undefined;
    message.mapData = object.mapData ?? new Uint8Array();
    message.observedPlayerId = object.observedPlayerId ?? 0;
    message.options =
      object.options !== undefined && object.options !== null
        ? InterfaceOptions.fromPartial(object.options)
        : undefined;
    message.disableFog = object.disableFog ?? false;
    message.realtime = object.realtime ?? false;
    message.recordReplay = object.recordReplay ?? false;
    return message;
  },
};

function createBaseResponseStartReplay(): ResponseStartReplay {
  return { error: 1, errorDetails: "" };
}

export const ResponseStartReplay = {
  encode(
    message: ResponseStartReplay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== 1) {
      writer.uint32(8).int32(message.error);
    }
    if (message.errorDetails !== "") {
      writer.uint32(18).string(message.errorDetails);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseStartReplay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseStartReplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.errorDetails = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseStartReplay {
    return {
      error: isSet(object.error)
        ? responseStartReplay_ErrorFromJSON(object.error)
        : 1,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
    };
  },

  toJSON(message: ResponseStartReplay): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = responseStartReplay_ErrorToJSON(message.error));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseStartReplay>, I>>(
    object: I,
  ): ResponseStartReplay {
    const message = createBaseResponseStartReplay();
    message.error = object.error ?? 1;
    message.errorDetails = object.errorDetails ?? "";
    return message;
  },
};

function createBaseRequestMapCommand(): RequestMapCommand {
  return { triggerCmd: "" };
}

export const RequestMapCommand = {
  encode(
    message: RequestMapCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.triggerCmd !== "") {
      writer.uint32(10).string(message.triggerCmd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestMapCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestMapCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.triggerCmd = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestMapCommand {
    return {
      triggerCmd: isSet(object.triggerCmd) ? String(object.triggerCmd) : "",
    };
  },

  toJSON(message: RequestMapCommand): unknown {
    const obj: any = {};
    message.triggerCmd !== undefined && (obj.triggerCmd = message.triggerCmd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestMapCommand>, I>>(
    object: I,
  ): RequestMapCommand {
    const message = createBaseRequestMapCommand();
    message.triggerCmd = object.triggerCmd ?? "";
    return message;
  },
};

function createBaseResponseMapCommand(): ResponseMapCommand {
  return { error: 1, errorDetails: "" };
}

export const ResponseMapCommand = {
  encode(
    message: ResponseMapCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== 1) {
      writer.uint32(8).int32(message.error);
    }
    if (message.errorDetails !== "") {
      writer.uint32(18).string(message.errorDetails);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseMapCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseMapCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.errorDetails = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseMapCommand {
    return {
      error: isSet(object.error)
        ? responseMapCommand_ErrorFromJSON(object.error)
        : 1,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
    };
  },

  toJSON(message: ResponseMapCommand): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = responseMapCommand_ErrorToJSON(message.error));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseMapCommand>, I>>(
    object: I,
  ): ResponseMapCommand {
    const message = createBaseResponseMapCommand();
    message.error = object.error ?? 1;
    message.errorDetails = object.errorDetails ?? "";
    return message;
  },
};

function createBaseRequestLeaveGame(): RequestLeaveGame {
  return {};
}

export const RequestLeaveGame = {
  encode(
    _: RequestLeaveGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestLeaveGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestLeaveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestLeaveGame {
    return {};
  },

  toJSON(_: RequestLeaveGame): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestLeaveGame>, I>>(
    _: I,
  ): RequestLeaveGame {
    const message = createBaseRequestLeaveGame();
    return message;
  },
};

function createBaseResponseLeaveGame(): ResponseLeaveGame {
  return {};
}

export const ResponseLeaveGame = {
  encode(
    _: ResponseLeaveGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseLeaveGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseLeaveGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseLeaveGame {
    return {};
  },

  toJSON(_: ResponseLeaveGame): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseLeaveGame>, I>>(
    _: I,
  ): ResponseLeaveGame {
    const message = createBaseResponseLeaveGame();
    return message;
  },
};

function createBaseRequestQuickSave(): RequestQuickSave {
  return {};
}

export const RequestQuickSave = {
  encode(
    _: RequestQuickSave,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuickSave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuickSave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestQuickSave {
    return {};
  },

  toJSON(_: RequestQuickSave): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQuickSave>, I>>(
    _: I,
  ): RequestQuickSave {
    const message = createBaseRequestQuickSave();
    return message;
  },
};

function createBaseResponseQuickSave(): ResponseQuickSave {
  return {};
}

export const ResponseQuickSave = {
  encode(
    _: ResponseQuickSave,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuickSave {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuickSave();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseQuickSave {
    return {};
  },

  toJSON(_: ResponseQuickSave): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQuickSave>, I>>(
    _: I,
  ): ResponseQuickSave {
    const message = createBaseResponseQuickSave();
    return message;
  },
};

function createBaseRequestQuickLoad(): RequestQuickLoad {
  return {};
}

export const RequestQuickLoad = {
  encode(
    _: RequestQuickLoad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuickLoad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuickLoad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestQuickLoad {
    return {};
  },

  toJSON(_: RequestQuickLoad): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQuickLoad>, I>>(
    _: I,
  ): RequestQuickLoad {
    const message = createBaseRequestQuickLoad();
    return message;
  },
};

function createBaseResponseQuickLoad(): ResponseQuickLoad {
  return {};
}

export const ResponseQuickLoad = {
  encode(
    _: ResponseQuickLoad,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuickLoad {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuickLoad();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseQuickLoad {
    return {};
  },

  toJSON(_: ResponseQuickLoad): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQuickLoad>, I>>(
    _: I,
  ): ResponseQuickLoad {
    const message = createBaseResponseQuickLoad();
    return message;
  },
};

function createBaseRequestQuit(): RequestQuit {
  return {};
}

export const RequestQuit = {
  encode(_: RequestQuit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestQuit {
    return {};
  },

  toJSON(_: RequestQuit): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQuit>, I>>(_: I): RequestQuit {
    const message = createBaseRequestQuit();
    return message;
  },
};

function createBaseResponseQuit(): ResponseQuit {
  return {};
}

export const ResponseQuit = {
  encode(
    _: ResponseQuit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseQuit {
    return {};
  },

  toJSON(_: ResponseQuit): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQuit>, I>>(
    _: I,
  ): ResponseQuit {
    const message = createBaseResponseQuit();
    return message;
  },
};

function createBaseRequestGameInfo(): RequestGameInfo {
  return {};
}

export const RequestGameInfo = {
  encode(
    _: RequestGameInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestGameInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestGameInfo {
    return {};
  },

  toJSON(_: RequestGameInfo): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestGameInfo>, I>>(
    _: I,
  ): RequestGameInfo {
    const message = createBaseRequestGameInfo();
    return message;
  },
};

function createBaseResponseGameInfo(): ResponseGameInfo {
  return {
    mapName: "",
    modNames: [],
    localMapPath: "",
    playerInfo: [],
    startRaw: undefined,
    options: undefined,
  };
}

export const ResponseGameInfo = {
  encode(
    message: ResponseGameInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapName !== "") {
      writer.uint32(10).string(message.mapName);
    }
    for (const v of message.modNames) {
      writer.uint32(50).string(v!);
    }
    if (message.localMapPath !== "") {
      writer.uint32(18).string(message.localMapPath);
    }
    for (const v of message.playerInfo) {
      PlayerInfo.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.startRaw !== undefined) {
      StartRaw.encode(message.startRaw, writer.uint32(34).fork()).ldelim();
    }
    if (message.options !== undefined) {
      InterfaceOptions.encode(
        message.options,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseGameInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseGameInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapName = reader.string();
          break;
        case 6:
          message.modNames.push(reader.string());
          break;
        case 2:
          message.localMapPath = reader.string();
          break;
        case 3:
          message.playerInfo.push(PlayerInfo.decode(reader, reader.uint32()));
          break;
        case 4:
          message.startRaw = StartRaw.decode(reader, reader.uint32());
          break;
        case 5:
          message.options = InterfaceOptions.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseGameInfo {
    return {
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
      modNames: Array.isArray(object?.modNames)
        ? object.modNames.map((e: any) => String(e))
        : [],
      localMapPath: isSet(object.localMapPath)
        ? String(object.localMapPath)
        : "",
      playerInfo: Array.isArray(object?.playerInfo)
        ? object.playerInfo.map((e: any) => PlayerInfo.fromJSON(e))
        : [],
      startRaw: isSet(object.startRaw)
        ? StartRaw.fromJSON(object.startRaw)
        : undefined,
      options: isSet(object.options)
        ? InterfaceOptions.fromJSON(object.options)
        : undefined,
    };
  },

  toJSON(message: ResponseGameInfo): unknown {
    const obj: any = {};
    message.mapName !== undefined && (obj.mapName = message.mapName);
    if (message.modNames) {
      obj.modNames = message.modNames.map((e) => e);
    } else {
      obj.modNames = [];
    }
    message.localMapPath !== undefined &&
      (obj.localMapPath = message.localMapPath);
    if (message.playerInfo) {
      obj.playerInfo = message.playerInfo.map((e) =>
        e ? PlayerInfo.toJSON(e) : undefined,
      );
    } else {
      obj.playerInfo = [];
    }
    message.startRaw !== undefined &&
      (obj.startRaw = message.startRaw
        ? StartRaw.toJSON(message.startRaw)
        : undefined);
    message.options !== undefined &&
      (obj.options = message.options
        ? InterfaceOptions.toJSON(message.options)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseGameInfo>, I>>(
    object: I,
  ): ResponseGameInfo {
    const message = createBaseResponseGameInfo();
    message.mapName = object.mapName ?? "";
    message.modNames = object.modNames?.map((e) => e) || [];
    message.localMapPath = object.localMapPath ?? "";
    message.playerInfo =
      object.playerInfo?.map((e) => PlayerInfo.fromPartial(e)) || [];
    message.startRaw =
      object.startRaw !== undefined && object.startRaw !== null
        ? StartRaw.fromPartial(object.startRaw)
        : undefined;
    message.options =
      object.options !== undefined && object.options !== null
        ? InterfaceOptions.fromPartial(object.options)
        : undefined;
    return message;
  },
};

function createBaseRequestObservation(): RequestObservation {
  return { disableFog: false, gameLoop: 0 };
}

export const RequestObservation = {
  encode(
    message: RequestObservation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.disableFog === true) {
      writer.uint32(8).bool(message.disableFog);
    }
    if (message.gameLoop !== 0) {
      writer.uint32(16).uint32(message.gameLoop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestObservation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestObservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.disableFog = reader.bool();
          break;
        case 2:
          message.gameLoop = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestObservation {
    return {
      disableFog: isSet(object.disableFog) ? Boolean(object.disableFog) : false,
      gameLoop: isSet(object.gameLoop) ? Number(object.gameLoop) : 0,
    };
  },

  toJSON(message: RequestObservation): unknown {
    const obj: any = {};
    message.disableFog !== undefined && (obj.disableFog = message.disableFog);
    message.gameLoop !== undefined &&
      (obj.gameLoop = Math.round(message.gameLoop));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestObservation>, I>>(
    object: I,
  ): RequestObservation {
    const message = createBaseRequestObservation();
    message.disableFog = object.disableFog ?? false;
    message.gameLoop = object.gameLoop ?? 0;
    return message;
  },
};

function createBaseResponseObservation(): ResponseObservation {
  return {
    actions: [],
    actionErrors: [],
    observation: undefined,
    playerResult: [],
    chat: [],
  };
}

export const ResponseObservation = {
  encode(
    message: ResponseObservation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.actionErrors) {
      ActionError.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.observation !== undefined) {
      Observation.encode(
        message.observation,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    for (const v of message.playerResult) {
      PlayerResult.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.chat) {
      ChatReceived.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseObservation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseObservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        case 2:
          message.actionErrors.push(
            ActionError.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.observation = Observation.decode(reader, reader.uint32());
          break;
        case 4:
          message.playerResult.push(
            PlayerResult.decode(reader, reader.uint32()),
          );
          break;
        case 5:
          message.chat.push(ChatReceived.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseObservation {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
      actionErrors: Array.isArray(object?.actionErrors)
        ? object.actionErrors.map((e: any) => ActionError.fromJSON(e))
        : [],
      observation: isSet(object.observation)
        ? Observation.fromJSON(object.observation)
        : undefined,
      playerResult: Array.isArray(object?.playerResult)
        ? object.playerResult.map((e: any) => PlayerResult.fromJSON(e))
        : [],
      chat: Array.isArray(object?.chat)
        ? object.chat.map((e: any) => ChatReceived.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResponseObservation): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    if (message.actionErrors) {
      obj.actionErrors = message.actionErrors.map((e) =>
        e ? ActionError.toJSON(e) : undefined,
      );
    } else {
      obj.actionErrors = [];
    }
    message.observation !== undefined &&
      (obj.observation = message.observation
        ? Observation.toJSON(message.observation)
        : undefined);
    if (message.playerResult) {
      obj.playerResult = message.playerResult.map((e) =>
        e ? PlayerResult.toJSON(e) : undefined,
      );
    } else {
      obj.playerResult = [];
    }
    if (message.chat) {
      obj.chat = message.chat.map((e) =>
        e ? ChatReceived.toJSON(e) : undefined,
      );
    } else {
      obj.chat = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseObservation>, I>>(
    object: I,
  ): ResponseObservation {
    const message = createBaseResponseObservation();
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    message.actionErrors =
      object.actionErrors?.map((e) => ActionError.fromPartial(e)) || [];
    message.observation =
      object.observation !== undefined && object.observation !== null
        ? Observation.fromPartial(object.observation)
        : undefined;
    message.playerResult =
      object.playerResult?.map((e) => PlayerResult.fromPartial(e)) || [];
    message.chat = object.chat?.map((e) => ChatReceived.fromPartial(e)) || [];
    return message;
  },
};

function createBaseChatReceived(): ChatReceived {
  return { playerId: 0, message: "" };
}

export const ChatReceived = {
  encode(
    message: ChatReceived,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChatReceived {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChatReceived();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatReceived {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ChatReceived): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChatReceived>, I>>(
    object: I,
  ): ChatReceived {
    const message = createBaseChatReceived();
    message.playerId = object.playerId ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseRequestAction(): RequestAction {
  return { actions: [] };
}

export const RequestAction = {
  encode(
    message: RequestAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.actions) {
      Action.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(Action.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestAction {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => Action.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RequestAction): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? Action.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestAction>, I>>(
    object: I,
  ): RequestAction {
    const message = createBaseRequestAction();
    message.actions = object.actions?.map((e) => Action.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResponseAction(): ResponseAction {
  return { result: [] };
}

export const ResponseAction = {
  encode(
    message: ResponseAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.result) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.result.push(reader.int32() as any);
            }
          } else {
            message.result.push(reader.int32() as any);
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseAction {
    return {
      result: Array.isArray(object?.result)
        ? object.result.map((e: any) => actionResultFromJSON(e))
        : [],
    };
  },

  toJSON(message: ResponseAction): unknown {
    const obj: any = {};
    if (message.result) {
      obj.result = message.result.map((e) => actionResultToJSON(e));
    } else {
      obj.result = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseAction>, I>>(
    object: I,
  ): ResponseAction {
    const message = createBaseResponseAction();
    message.result = object.result?.map((e) => e) || [];
    return message;
  },
};

function createBaseRequestObserverAction(): RequestObserverAction {
  return { actions: [] };
}

export const RequestObserverAction = {
  encode(
    message: RequestObserverAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.actions) {
      ObserverAction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestObserverAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestObserverAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actions.push(ObserverAction.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestObserverAction {
    return {
      actions: Array.isArray(object?.actions)
        ? object.actions.map((e: any) => ObserverAction.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RequestObserverAction): unknown {
    const obj: any = {};
    if (message.actions) {
      obj.actions = message.actions.map((e) =>
        e ? ObserverAction.toJSON(e) : undefined,
      );
    } else {
      obj.actions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestObserverAction>, I>>(
    object: I,
  ): RequestObserverAction {
    const message = createBaseRequestObserverAction();
    message.actions =
      object.actions?.map((e) => ObserverAction.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResponseObserverAction(): ResponseObserverAction {
  return {};
}

export const ResponseObserverAction = {
  encode(
    _: ResponseObserverAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseObserverAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseObserverAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseObserverAction {
    return {};
  },

  toJSON(_: ResponseObserverAction): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseObserverAction>, I>>(
    _: I,
  ): ResponseObserverAction {
    const message = createBaseResponseObserverAction();
    return message;
  },
};

function createBaseRequestStep(): RequestStep {
  return { count: 0 };
}

export const RequestStep = {
  encode(
    message: RequestStep,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestStep {
    return {
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: RequestStep): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestStep>, I>>(
    object: I,
  ): RequestStep {
    const message = createBaseRequestStep();
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseResponseStep(): ResponseStep {
  return { simulationLoop: 0 };
}

export const ResponseStep = {
  encode(
    message: ResponseStep,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.simulationLoop !== 0) {
      writer.uint32(8).uint32(message.simulationLoop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseStep {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseStep();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.simulationLoop = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseStep {
    return {
      simulationLoop: isSet(object.simulationLoop)
        ? Number(object.simulationLoop)
        : 0,
    };
  },

  toJSON(message: ResponseStep): unknown {
    const obj: any = {};
    message.simulationLoop !== undefined &&
      (obj.simulationLoop = Math.round(message.simulationLoop));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseStep>, I>>(
    object: I,
  ): ResponseStep {
    const message = createBaseResponseStep();
    message.simulationLoop = object.simulationLoop ?? 0;
    return message;
  },
};

function createBaseRequestData(): RequestData {
  return {
    abilityId: false,
    unitTypeId: false,
    upgradeId: false,
    buffId: false,
    effectId: false,
  };
}

export const RequestData = {
  encode(
    message: RequestData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId === true) {
      writer.uint32(8).bool(message.abilityId);
    }
    if (message.unitTypeId === true) {
      writer.uint32(16).bool(message.unitTypeId);
    }
    if (message.upgradeId === true) {
      writer.uint32(24).bool(message.upgradeId);
    }
    if (message.buffId === true) {
      writer.uint32(32).bool(message.buffId);
    }
    if (message.effectId === true) {
      writer.uint32(40).bool(message.effectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.bool();
          break;
        case 2:
          message.unitTypeId = reader.bool();
          break;
        case 3:
          message.upgradeId = reader.bool();
          break;
        case 4:
          message.buffId = reader.bool();
          break;
        case 5:
          message.effectId = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestData {
    return {
      abilityId: isSet(object.abilityId) ? Boolean(object.abilityId) : false,
      unitTypeId: isSet(object.unitTypeId) ? Boolean(object.unitTypeId) : false,
      upgradeId: isSet(object.upgradeId) ? Boolean(object.upgradeId) : false,
      buffId: isSet(object.buffId) ? Boolean(object.buffId) : false,
      effectId: isSet(object.effectId) ? Boolean(object.effectId) : false,
    };
  },

  toJSON(message: RequestData): unknown {
    const obj: any = {};
    message.abilityId !== undefined && (obj.abilityId = message.abilityId);
    message.unitTypeId !== undefined && (obj.unitTypeId = message.unitTypeId);
    message.upgradeId !== undefined && (obj.upgradeId = message.upgradeId);
    message.buffId !== undefined && (obj.buffId = message.buffId);
    message.effectId !== undefined && (obj.effectId = message.effectId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestData>, I>>(
    object: I,
  ): RequestData {
    const message = createBaseRequestData();
    message.abilityId = object.abilityId ?? false;
    message.unitTypeId = object.unitTypeId ?? false;
    message.upgradeId = object.upgradeId ?? false;
    message.buffId = object.buffId ?? false;
    message.effectId = object.effectId ?? false;
    return message;
  },
};

function createBaseResponseData(): ResponseData {
  return { abilities: [], units: [], upgrades: [], buffs: [], effects: [] };
}

export const ResponseData = {
  encode(
    message: ResponseData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.abilities) {
      AbilityData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.units) {
      UnitTypeData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.upgrades) {
      UpgradeData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.buffs) {
      BuffData.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.effects) {
      EffectData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilities.push(AbilityData.decode(reader, reader.uint32()));
          break;
        case 2:
          message.units.push(UnitTypeData.decode(reader, reader.uint32()));
          break;
        case 3:
          message.upgrades.push(UpgradeData.decode(reader, reader.uint32()));
          break;
        case 4:
          message.buffs.push(BuffData.decode(reader, reader.uint32()));
          break;
        case 5:
          message.effects.push(EffectData.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseData {
    return {
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => AbilityData.fromJSON(e))
        : [],
      units: Array.isArray(object?.units)
        ? object.units.map((e: any) => UnitTypeData.fromJSON(e))
        : [],
      upgrades: Array.isArray(object?.upgrades)
        ? object.upgrades.map((e: any) => UpgradeData.fromJSON(e))
        : [],
      buffs: Array.isArray(object?.buffs)
        ? object.buffs.map((e: any) => BuffData.fromJSON(e))
        : [],
      effects: Array.isArray(object?.effects)
        ? object.effects.map((e: any) => EffectData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ResponseData): unknown {
    const obj: any = {};
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? AbilityData.toJSON(e) : undefined,
      );
    } else {
      obj.abilities = [];
    }
    if (message.units) {
      obj.units = message.units.map((e) =>
        e ? UnitTypeData.toJSON(e) : undefined,
      );
    } else {
      obj.units = [];
    }
    if (message.upgrades) {
      obj.upgrades = message.upgrades.map((e) =>
        e ? UpgradeData.toJSON(e) : undefined,
      );
    } else {
      obj.upgrades = [];
    }
    if (message.buffs) {
      obj.buffs = message.buffs.map((e) =>
        e ? BuffData.toJSON(e) : undefined,
      );
    } else {
      obj.buffs = [];
    }
    if (message.effects) {
      obj.effects = message.effects.map((e) =>
        e ? EffectData.toJSON(e) : undefined,
      );
    } else {
      obj.effects = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseData>, I>>(
    object: I,
  ): ResponseData {
    const message = createBaseResponseData();
    message.abilities =
      object.abilities?.map((e) => AbilityData.fromPartial(e)) || [];
    message.units = object.units?.map((e) => UnitTypeData.fromPartial(e)) || [];
    message.upgrades =
      object.upgrades?.map((e) => UpgradeData.fromPartial(e)) || [];
    message.buffs = object.buffs?.map((e) => BuffData.fromPartial(e)) || [];
    message.effects =
      object.effects?.map((e) => EffectData.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRequestSaveReplay(): RequestSaveReplay {
  return {};
}

export const RequestSaveReplay = {
  encode(
    _: RequestSaveReplay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestSaveReplay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSaveReplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestSaveReplay {
    return {};
  },

  toJSON(_: RequestSaveReplay): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestSaveReplay>, I>>(
    _: I,
  ): RequestSaveReplay {
    const message = createBaseRequestSaveReplay();
    return message;
  },
};

function createBaseResponseSaveReplay(): ResponseSaveReplay {
  return { data: new Uint8Array() };
}

export const ResponseSaveReplay = {
  encode(
    message: ResponseSaveReplay,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSaveReplay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSaveReplay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseSaveReplay {
    return {
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: ResponseSaveReplay): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseSaveReplay>, I>>(
    object: I,
  ): ResponseSaveReplay {
    const message = createBaseResponseSaveReplay();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBaseRequestReplayInfo(): RequestReplayInfo {
  return { replayPath: undefined, replayData: undefined, downloadData: false };
}

export const RequestReplayInfo = {
  encode(
    message: RequestReplayInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.replayPath !== undefined) {
      writer.uint32(10).string(message.replayPath);
    }
    if (message.replayData !== undefined) {
      writer.uint32(18).bytes(message.replayData);
    }
    if (message.downloadData === true) {
      writer.uint32(24).bool(message.downloadData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestReplayInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestReplayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.replayPath = reader.string();
          break;
        case 2:
          message.replayData = reader.bytes();
          break;
        case 3:
          message.downloadData = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestReplayInfo {
    return {
      replayPath: isSet(object.replayPath)
        ? String(object.replayPath)
        : undefined,
      replayData: isSet(object.replayData)
        ? bytesFromBase64(object.replayData)
        : undefined,
      downloadData: isSet(object.downloadData)
        ? Boolean(object.downloadData)
        : false,
    };
  },

  toJSON(message: RequestReplayInfo): unknown {
    const obj: any = {};
    message.replayPath !== undefined && (obj.replayPath = message.replayPath);
    message.replayData !== undefined &&
      (obj.replayData =
        message.replayData !== undefined
          ? base64FromBytes(message.replayData)
          : undefined);
    message.downloadData !== undefined &&
      (obj.downloadData = message.downloadData);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestReplayInfo>, I>>(
    object: I,
  ): RequestReplayInfo {
    const message = createBaseRequestReplayInfo();
    message.replayPath = object.replayPath ?? undefined;
    message.replayData = object.replayData ?? undefined;
    message.downloadData = object.downloadData ?? false;
    return message;
  },
};

function createBasePlayerInfoExtra(): PlayerInfoExtra {
  return {
    playerInfo: undefined,
    playerResult: undefined,
    playerMmr: 0,
    playerApm: 0,
  };
}

export const PlayerInfoExtra = {
  encode(
    message: PlayerInfoExtra,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerInfo !== undefined) {
      PlayerInfo.encode(message.playerInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.playerResult !== undefined) {
      PlayerResult.encode(
        message.playerResult,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.playerMmr !== 0) {
      writer.uint32(24).int32(message.playerMmr);
    }
    if (message.playerApm !== 0) {
      writer.uint32(32).int32(message.playerApm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInfoExtra {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInfoExtra();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerInfo = PlayerInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.playerResult = PlayerResult.decode(reader, reader.uint32());
          break;
        case 3:
          message.playerMmr = reader.int32();
          break;
        case 4:
          message.playerApm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInfoExtra {
    return {
      playerInfo: isSet(object.playerInfo)
        ? PlayerInfo.fromJSON(object.playerInfo)
        : undefined,
      playerResult: isSet(object.playerResult)
        ? PlayerResult.fromJSON(object.playerResult)
        : undefined,
      playerMmr: isSet(object.playerMmr) ? Number(object.playerMmr) : 0,
      playerApm: isSet(object.playerApm) ? Number(object.playerApm) : 0,
    };
  },

  toJSON(message: PlayerInfoExtra): unknown {
    const obj: any = {};
    message.playerInfo !== undefined &&
      (obj.playerInfo = message.playerInfo
        ? PlayerInfo.toJSON(message.playerInfo)
        : undefined);
    message.playerResult !== undefined &&
      (obj.playerResult = message.playerResult
        ? PlayerResult.toJSON(message.playerResult)
        : undefined);
    message.playerMmr !== undefined &&
      (obj.playerMmr = Math.round(message.playerMmr));
    message.playerApm !== undefined &&
      (obj.playerApm = Math.round(message.playerApm));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInfoExtra>, I>>(
    object: I,
  ): PlayerInfoExtra {
    const message = createBasePlayerInfoExtra();
    message.playerInfo =
      object.playerInfo !== undefined && object.playerInfo !== null
        ? PlayerInfo.fromPartial(object.playerInfo)
        : undefined;
    message.playerResult =
      object.playerResult !== undefined && object.playerResult !== null
        ? PlayerResult.fromPartial(object.playerResult)
        : undefined;
    message.playerMmr = object.playerMmr ?? 0;
    message.playerApm = object.playerApm ?? 0;
    return message;
  },
};

function createBaseResponseReplayInfo(): ResponseReplayInfo {
  return {
    mapName: "",
    localMapPath: "",
    playerInfo: [],
    gameDurationLoops: 0,
    gameDurationSeconds: 0,
    gameVersion: "",
    dataVersion: "",
    dataBuild: 0,
    baseBuild: 0,
    error: 1,
    errorDetails: "",
  };
}

export const ResponseReplayInfo = {
  encode(
    message: ResponseReplayInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapName !== "") {
      writer.uint32(10).string(message.mapName);
    }
    if (message.localMapPath !== "") {
      writer.uint32(18).string(message.localMapPath);
    }
    for (const v of message.playerInfo) {
      PlayerInfoExtra.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.gameDurationLoops !== 0) {
      writer.uint32(32).uint32(message.gameDurationLoops);
    }
    if (message.gameDurationSeconds !== 0) {
      writer.uint32(45).float(message.gameDurationSeconds);
    }
    if (message.gameVersion !== "") {
      writer.uint32(50).string(message.gameVersion);
    }
    if (message.dataVersion !== "") {
      writer.uint32(90).string(message.dataVersion);
    }
    if (message.dataBuild !== 0) {
      writer.uint32(56).uint32(message.dataBuild);
    }
    if (message.baseBuild !== 0) {
      writer.uint32(64).uint32(message.baseBuild);
    }
    if (message.error !== 1) {
      writer.uint32(72).int32(message.error);
    }
    if (message.errorDetails !== "") {
      writer.uint32(82).string(message.errorDetails);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseReplayInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseReplayInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapName = reader.string();
          break;
        case 2:
          message.localMapPath = reader.string();
          break;
        case 3:
          message.playerInfo.push(
            PlayerInfoExtra.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.gameDurationLoops = reader.uint32();
          break;
        case 5:
          message.gameDurationSeconds = reader.float();
          break;
        case 6:
          message.gameVersion = reader.string();
          break;
        case 11:
          message.dataVersion = reader.string();
          break;
        case 7:
          message.dataBuild = reader.uint32();
          break;
        case 8:
          message.baseBuild = reader.uint32();
          break;
        case 9:
          message.error = reader.int32() as any;
          break;
        case 10:
          message.errorDetails = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseReplayInfo {
    return {
      mapName: isSet(object.mapName) ? String(object.mapName) : "",
      localMapPath: isSet(object.localMapPath)
        ? String(object.localMapPath)
        : "",
      playerInfo: Array.isArray(object?.playerInfo)
        ? object.playerInfo.map((e: any) => PlayerInfoExtra.fromJSON(e))
        : [],
      gameDurationLoops: isSet(object.gameDurationLoops)
        ? Number(object.gameDurationLoops)
        : 0,
      gameDurationSeconds: isSet(object.gameDurationSeconds)
        ? Number(object.gameDurationSeconds)
        : 0,
      gameVersion: isSet(object.gameVersion) ? String(object.gameVersion) : "",
      dataVersion: isSet(object.dataVersion) ? String(object.dataVersion) : "",
      dataBuild: isSet(object.dataBuild) ? Number(object.dataBuild) : 0,
      baseBuild: isSet(object.baseBuild) ? Number(object.baseBuild) : 0,
      error: isSet(object.error)
        ? responseReplayInfo_ErrorFromJSON(object.error)
        : 1,
      errorDetails: isSet(object.errorDetails)
        ? String(object.errorDetails)
        : "",
    };
  },

  toJSON(message: ResponseReplayInfo): unknown {
    const obj: any = {};
    message.mapName !== undefined && (obj.mapName = message.mapName);
    message.localMapPath !== undefined &&
      (obj.localMapPath = message.localMapPath);
    if (message.playerInfo) {
      obj.playerInfo = message.playerInfo.map((e) =>
        e ? PlayerInfoExtra.toJSON(e) : undefined,
      );
    } else {
      obj.playerInfo = [];
    }
    message.gameDurationLoops !== undefined &&
      (obj.gameDurationLoops = Math.round(message.gameDurationLoops));
    message.gameDurationSeconds !== undefined &&
      (obj.gameDurationSeconds = message.gameDurationSeconds);
    message.gameVersion !== undefined &&
      (obj.gameVersion = message.gameVersion);
    message.dataVersion !== undefined &&
      (obj.dataVersion = message.dataVersion);
    message.dataBuild !== undefined &&
      (obj.dataBuild = Math.round(message.dataBuild));
    message.baseBuild !== undefined &&
      (obj.baseBuild = Math.round(message.baseBuild));
    message.error !== undefined &&
      (obj.error = responseReplayInfo_ErrorToJSON(message.error));
    message.errorDetails !== undefined &&
      (obj.errorDetails = message.errorDetails);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseReplayInfo>, I>>(
    object: I,
  ): ResponseReplayInfo {
    const message = createBaseResponseReplayInfo();
    message.mapName = object.mapName ?? "";
    message.localMapPath = object.localMapPath ?? "";
    message.playerInfo =
      object.playerInfo?.map((e) => PlayerInfoExtra.fromPartial(e)) || [];
    message.gameDurationLoops = object.gameDurationLoops ?? 0;
    message.gameDurationSeconds = object.gameDurationSeconds ?? 0;
    message.gameVersion = object.gameVersion ?? "";
    message.dataVersion = object.dataVersion ?? "";
    message.dataBuild = object.dataBuild ?? 0;
    message.baseBuild = object.baseBuild ?? 0;
    message.error = object.error ?? 1;
    message.errorDetails = object.errorDetails ?? "";
    return message;
  },
};

function createBaseRequestAvailableMaps(): RequestAvailableMaps {
  return {};
}

export const RequestAvailableMaps = {
  encode(
    _: RequestAvailableMaps,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestAvailableMaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestAvailableMaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestAvailableMaps {
    return {};
  },

  toJSON(_: RequestAvailableMaps): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestAvailableMaps>, I>>(
    _: I,
  ): RequestAvailableMaps {
    const message = createBaseRequestAvailableMaps();
    return message;
  },
};

function createBaseResponseAvailableMaps(): ResponseAvailableMaps {
  return { localMapPaths: [], battlenetMapNames: [] };
}

export const ResponseAvailableMaps = {
  encode(
    message: ResponseAvailableMaps,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.localMapPaths) {
      writer.uint32(10).string(v!);
    }
    for (const v of message.battlenetMapNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseAvailableMaps {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseAvailableMaps();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.localMapPaths.push(reader.string());
          break;
        case 2:
          message.battlenetMapNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseAvailableMaps {
    return {
      localMapPaths: Array.isArray(object?.localMapPaths)
        ? object.localMapPaths.map((e: any) => String(e))
        : [],
      battlenetMapNames: Array.isArray(object?.battlenetMapNames)
        ? object.battlenetMapNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: ResponseAvailableMaps): unknown {
    const obj: any = {};
    if (message.localMapPaths) {
      obj.localMapPaths = message.localMapPaths.map((e) => e);
    } else {
      obj.localMapPaths = [];
    }
    if (message.battlenetMapNames) {
      obj.battlenetMapNames = message.battlenetMapNames.map((e) => e);
    } else {
      obj.battlenetMapNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseAvailableMaps>, I>>(
    object: I,
  ): ResponseAvailableMaps {
    const message = createBaseResponseAvailableMaps();
    message.localMapPaths = object.localMapPaths?.map((e) => e) || [];
    message.battlenetMapNames = object.battlenetMapNames?.map((e) => e) || [];
    return message;
  },
};

function createBaseRequestSaveMap(): RequestSaveMap {
  return { mapPath: "", mapData: new Uint8Array() };
}

export const RequestSaveMap = {
  encode(
    message: RequestSaveMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapPath !== "") {
      writer.uint32(10).string(message.mapPath);
    }
    if (message.mapData.length !== 0) {
      writer.uint32(18).bytes(message.mapData);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestSaveMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestSaveMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapPath = reader.string();
          break;
        case 2:
          message.mapData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestSaveMap {
    return {
      mapPath: isSet(object.mapPath) ? String(object.mapPath) : "",
      mapData: isSet(object.mapData)
        ? bytesFromBase64(object.mapData)
        : new Uint8Array(),
    };
  },

  toJSON(message: RequestSaveMap): unknown {
    const obj: any = {};
    message.mapPath !== undefined && (obj.mapPath = message.mapPath);
    message.mapData !== undefined &&
      (obj.mapData = base64FromBytes(
        message.mapData !== undefined ? message.mapData : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestSaveMap>, I>>(
    object: I,
  ): RequestSaveMap {
    const message = createBaseRequestSaveMap();
    message.mapPath = object.mapPath ?? "";
    message.mapData = object.mapData ?? new Uint8Array();
    return message;
  },
};

function createBaseResponseSaveMap(): ResponseSaveMap {
  return { error: 1 };
}

export const ResponseSaveMap = {
  encode(
    message: ResponseSaveMap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.error !== 1) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseSaveMap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseSaveMap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseSaveMap {
    return {
      error: isSet(object.error)
        ? responseSaveMap_ErrorFromJSON(object.error)
        : 1,
    };
  },

  toJSON(message: ResponseSaveMap): unknown {
    const obj: any = {};
    message.error !== undefined &&
      (obj.error = responseSaveMap_ErrorToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseSaveMap>, I>>(
    object: I,
  ): ResponseSaveMap {
    const message = createBaseResponseSaveMap();
    message.error = object.error ?? 1;
    return message;
  },
};

function createBaseRequestPing(): RequestPing {
  return {};
}

export const RequestPing = {
  encode(_: RequestPing, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestPing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestPing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): RequestPing {
    return {};
  },

  toJSON(_: RequestPing): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestPing>, I>>(_: I): RequestPing {
    const message = createBaseRequestPing();
    return message;
  },
};

function createBaseResponsePing(): ResponsePing {
  return { gameVersion: "", dataVersion: "", dataBuild: 0, baseBuild: 0 };
}

export const ResponsePing = {
  encode(
    message: ResponsePing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gameVersion !== "") {
      writer.uint32(10).string(message.gameVersion);
    }
    if (message.dataVersion !== "") {
      writer.uint32(18).string(message.dataVersion);
    }
    if (message.dataBuild !== 0) {
      writer.uint32(24).uint32(message.dataBuild);
    }
    if (message.baseBuild !== 0) {
      writer.uint32(32).uint32(message.baseBuild);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponsePing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponsePing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameVersion = reader.string();
          break;
        case 2:
          message.dataVersion = reader.string();
          break;
        case 3:
          message.dataBuild = reader.uint32();
          break;
        case 4:
          message.baseBuild = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponsePing {
    return {
      gameVersion: isSet(object.gameVersion) ? String(object.gameVersion) : "",
      dataVersion: isSet(object.dataVersion) ? String(object.dataVersion) : "",
      dataBuild: isSet(object.dataBuild) ? Number(object.dataBuild) : 0,
      baseBuild: isSet(object.baseBuild) ? Number(object.baseBuild) : 0,
    };
  },

  toJSON(message: ResponsePing): unknown {
    const obj: any = {};
    message.gameVersion !== undefined &&
      (obj.gameVersion = message.gameVersion);
    message.dataVersion !== undefined &&
      (obj.dataVersion = message.dataVersion);
    message.dataBuild !== undefined &&
      (obj.dataBuild = Math.round(message.dataBuild));
    message.baseBuild !== undefined &&
      (obj.baseBuild = Math.round(message.baseBuild));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponsePing>, I>>(
    object: I,
  ): ResponsePing {
    const message = createBaseResponsePing();
    message.gameVersion = object.gameVersion ?? "";
    message.dataVersion = object.dataVersion ?? "";
    message.dataBuild = object.dataBuild ?? 0;
    message.baseBuild = object.baseBuild ?? 0;
    return message;
  },
};

function createBaseRequestDebug(): RequestDebug {
  return { debug: [] };
}

export const RequestDebug = {
  encode(
    message: RequestDebug,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.debug) {
      DebugCommand.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestDebug {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestDebug();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.debug.push(DebugCommand.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestDebug {
    return {
      debug: Array.isArray(object?.debug)
        ? object.debug.map((e: any) => DebugCommand.fromJSON(e))
        : [],
    };
  },

  toJSON(message: RequestDebug): unknown {
    const obj: any = {};
    if (message.debug) {
      obj.debug = message.debug.map((e) =>
        e ? DebugCommand.toJSON(e) : undefined,
      );
    } else {
      obj.debug = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestDebug>, I>>(
    object: I,
  ): RequestDebug {
    const message = createBaseRequestDebug();
    message.debug = object.debug?.map((e) => DebugCommand.fromPartial(e)) || [];
    return message;
  },
};

function createBaseResponseDebug(): ResponseDebug {
  return {};
}

export const ResponseDebug = {
  encode(
    _: ResponseDebug,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseDebug {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseDebug();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ResponseDebug {
    return {};
  },

  toJSON(_: ResponseDebug): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseDebug>, I>>(
    _: I,
  ): ResponseDebug {
    const message = createBaseResponseDebug();
    return message;
  },
};

function createBasePlayerSetup(): PlayerSetup {
  return { type: 1, race: 0, difficulty: 1, playerName: "", aiBuild: 1 };
}

export const PlayerSetup = {
  encode(
    message: PlayerSetup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.race !== 0) {
      writer.uint32(16).int32(message.race);
    }
    if (message.difficulty !== 1) {
      writer.uint32(24).int32(message.difficulty);
    }
    if (message.playerName !== "") {
      writer.uint32(34).string(message.playerName);
    }
    if (message.aiBuild !== 1) {
      writer.uint32(40).int32(message.aiBuild);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerSetup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerSetup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.race = reader.int32() as any;
          break;
        case 3:
          message.difficulty = reader.int32() as any;
          break;
        case 4:
          message.playerName = reader.string();
          break;
        case 5:
          message.aiBuild = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerSetup {
    return {
      type: isSet(object.type) ? playerTypeFromJSON(object.type) : 1,
      race: isSet(object.race) ? raceFromJSON(object.race) : 0,
      difficulty: isSet(object.difficulty)
        ? difficultyFromJSON(object.difficulty)
        : 1,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
      aiBuild: isSet(object.aiBuild) ? aIBuildFromJSON(object.aiBuild) : 1,
    };
  },

  toJSON(message: PlayerSetup): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = playerTypeToJSON(message.type));
    message.race !== undefined && (obj.race = raceToJSON(message.race));
    message.difficulty !== undefined &&
      (obj.difficulty = difficultyToJSON(message.difficulty));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    message.aiBuild !== undefined &&
      (obj.aiBuild = aIBuildToJSON(message.aiBuild));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerSetup>, I>>(
    object: I,
  ): PlayerSetup {
    const message = createBasePlayerSetup();
    message.type = object.type ?? 1;
    message.race = object.race ?? 0;
    message.difficulty = object.difficulty ?? 1;
    message.playerName = object.playerName ?? "";
    message.aiBuild = object.aiBuild ?? 1;
    return message;
  },
};

function createBaseSpatialCameraSetup(): SpatialCameraSetup {
  return {
    resolution: undefined,
    minimapResolution: undefined,
    width: 0,
    cropToPlayableArea: false,
    allowCheatingLayers: false,
  };
}

export const SpatialCameraSetup = {
  encode(
    message: SpatialCameraSetup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.resolution !== undefined) {
      Size2DI.encode(message.resolution, writer.uint32(18).fork()).ldelim();
    }
    if (message.minimapResolution !== undefined) {
      Size2DI.encode(
        message.minimapResolution,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.width !== 0) {
      writer.uint32(13).float(message.width);
    }
    if (message.cropToPlayableArea === true) {
      writer.uint32(32).bool(message.cropToPlayableArea);
    }
    if (message.allowCheatingLayers === true) {
      writer.uint32(40).bool(message.allowCheatingLayers);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SpatialCameraSetup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSpatialCameraSetup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.resolution = Size2DI.decode(reader, reader.uint32());
          break;
        case 3:
          message.minimapResolution = Size2DI.decode(reader, reader.uint32());
          break;
        case 1:
          message.width = reader.float();
          break;
        case 4:
          message.cropToPlayableArea = reader.bool();
          break;
        case 5:
          message.allowCheatingLayers = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SpatialCameraSetup {
    return {
      resolution: isSet(object.resolution)
        ? Size2DI.fromJSON(object.resolution)
        : undefined,
      minimapResolution: isSet(object.minimapResolution)
        ? Size2DI.fromJSON(object.minimapResolution)
        : undefined,
      width: isSet(object.width) ? Number(object.width) : 0,
      cropToPlayableArea: isSet(object.cropToPlayableArea)
        ? Boolean(object.cropToPlayableArea)
        : false,
      allowCheatingLayers: isSet(object.allowCheatingLayers)
        ? Boolean(object.allowCheatingLayers)
        : false,
    };
  },

  toJSON(message: SpatialCameraSetup): unknown {
    const obj: any = {};
    message.resolution !== undefined &&
      (obj.resolution = message.resolution
        ? Size2DI.toJSON(message.resolution)
        : undefined);
    message.minimapResolution !== undefined &&
      (obj.minimapResolution = message.minimapResolution
        ? Size2DI.toJSON(message.minimapResolution)
        : undefined);
    message.width !== undefined && (obj.width = message.width);
    message.cropToPlayableArea !== undefined &&
      (obj.cropToPlayableArea = message.cropToPlayableArea);
    message.allowCheatingLayers !== undefined &&
      (obj.allowCheatingLayers = message.allowCheatingLayers);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SpatialCameraSetup>, I>>(
    object: I,
  ): SpatialCameraSetup {
    const message = createBaseSpatialCameraSetup();
    message.resolution =
      object.resolution !== undefined && object.resolution !== null
        ? Size2DI.fromPartial(object.resolution)
        : undefined;
    message.minimapResolution =
      object.minimapResolution !== undefined &&
      object.minimapResolution !== null
        ? Size2DI.fromPartial(object.minimapResolution)
        : undefined;
    message.width = object.width ?? 0;
    message.cropToPlayableArea = object.cropToPlayableArea ?? false;
    message.allowCheatingLayers = object.allowCheatingLayers ?? false;
    return message;
  },
};

function createBaseInterfaceOptions(): InterfaceOptions {
  return {
    raw: false,
    score: false,
    featureLayer: undefined,
    render: undefined,
    showCloaked: false,
    showBurrowedShadows: false,
    showPlaceholders: false,
    rawAffectsSelection: false,
    rawCropToPlayableArea: false,
  };
}

export const InterfaceOptions = {
  encode(
    message: InterfaceOptions,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.raw === true) {
      writer.uint32(8).bool(message.raw);
    }
    if (message.score === true) {
      writer.uint32(16).bool(message.score);
    }
    if (message.featureLayer !== undefined) {
      SpatialCameraSetup.encode(
        message.featureLayer,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.render !== undefined) {
      SpatialCameraSetup.encode(
        message.render,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.showCloaked === true) {
      writer.uint32(40).bool(message.showCloaked);
    }
    if (message.showBurrowedShadows === true) {
      writer.uint32(72).bool(message.showBurrowedShadows);
    }
    if (message.showPlaceholders === true) {
      writer.uint32(64).bool(message.showPlaceholders);
    }
    if (message.rawAffectsSelection === true) {
      writer.uint32(48).bool(message.rawAffectsSelection);
    }
    if (message.rawCropToPlayableArea === true) {
      writer.uint32(56).bool(message.rawCropToPlayableArea);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): InterfaceOptions {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterfaceOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.raw = reader.bool();
          break;
        case 2:
          message.score = reader.bool();
          break;
        case 3:
          message.featureLayer = SpatialCameraSetup.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.render = SpatialCameraSetup.decode(reader, reader.uint32());
          break;
        case 5:
          message.showCloaked = reader.bool();
          break;
        case 9:
          message.showBurrowedShadows = reader.bool();
          break;
        case 8:
          message.showPlaceholders = reader.bool();
          break;
        case 6:
          message.rawAffectsSelection = reader.bool();
          break;
        case 7:
          message.rawCropToPlayableArea = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InterfaceOptions {
    return {
      raw: isSet(object.raw) ? Boolean(object.raw) : false,
      score: isSet(object.score) ? Boolean(object.score) : false,
      featureLayer: isSet(object.featureLayer)
        ? SpatialCameraSetup.fromJSON(object.featureLayer)
        : undefined,
      render: isSet(object.render)
        ? SpatialCameraSetup.fromJSON(object.render)
        : undefined,
      showCloaked: isSet(object.showCloaked)
        ? Boolean(object.showCloaked)
        : false,
      showBurrowedShadows: isSet(object.showBurrowedShadows)
        ? Boolean(object.showBurrowedShadows)
        : false,
      showPlaceholders: isSet(object.showPlaceholders)
        ? Boolean(object.showPlaceholders)
        : false,
      rawAffectsSelection: isSet(object.rawAffectsSelection)
        ? Boolean(object.rawAffectsSelection)
        : false,
      rawCropToPlayableArea: isSet(object.rawCropToPlayableArea)
        ? Boolean(object.rawCropToPlayableArea)
        : false,
    };
  },

  toJSON(message: InterfaceOptions): unknown {
    const obj: any = {};
    message.raw !== undefined && (obj.raw = message.raw);
    message.score !== undefined && (obj.score = message.score);
    message.featureLayer !== undefined &&
      (obj.featureLayer = message.featureLayer
        ? SpatialCameraSetup.toJSON(message.featureLayer)
        : undefined);
    message.render !== undefined &&
      (obj.render = message.render
        ? SpatialCameraSetup.toJSON(message.render)
        : undefined);
    message.showCloaked !== undefined &&
      (obj.showCloaked = message.showCloaked);
    message.showBurrowedShadows !== undefined &&
      (obj.showBurrowedShadows = message.showBurrowedShadows);
    message.showPlaceholders !== undefined &&
      (obj.showPlaceholders = message.showPlaceholders);
    message.rawAffectsSelection !== undefined &&
      (obj.rawAffectsSelection = message.rawAffectsSelection);
    message.rawCropToPlayableArea !== undefined &&
      (obj.rawCropToPlayableArea = message.rawCropToPlayableArea);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InterfaceOptions>, I>>(
    object: I,
  ): InterfaceOptions {
    const message = createBaseInterfaceOptions();
    message.raw = object.raw ?? false;
    message.score = object.score ?? false;
    message.featureLayer =
      object.featureLayer !== undefined && object.featureLayer !== null
        ? SpatialCameraSetup.fromPartial(object.featureLayer)
        : undefined;
    message.render =
      object.render !== undefined && object.render !== null
        ? SpatialCameraSetup.fromPartial(object.render)
        : undefined;
    message.showCloaked = object.showCloaked ?? false;
    message.showBurrowedShadows = object.showBurrowedShadows ?? false;
    message.showPlaceholders = object.showPlaceholders ?? false;
    message.rawAffectsSelection = object.rawAffectsSelection ?? false;
    message.rawCropToPlayableArea = object.rawCropToPlayableArea ?? false;
    return message;
  },
};

function createBasePlayerInfo(): PlayerInfo {
  return {
    playerId: 0,
    type: 1,
    raceRequested: 0,
    raceActual: 0,
    difficulty: 1,
    aiBuild: 1,
    playerName: "",
  };
}

export const PlayerInfo = {
  encode(
    message: PlayerInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    if (message.type !== 1) {
      writer.uint32(16).int32(message.type);
    }
    if (message.raceRequested !== 0) {
      writer.uint32(24).int32(message.raceRequested);
    }
    if (message.raceActual !== 0) {
      writer.uint32(32).int32(message.raceActual);
    }
    if (message.difficulty !== 1) {
      writer.uint32(40).int32(message.difficulty);
    }
    if (message.aiBuild !== 1) {
      writer.uint32(56).int32(message.aiBuild);
    }
    if (message.playerName !== "") {
      writer.uint32(50).string(message.playerName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.raceRequested = reader.int32() as any;
          break;
        case 4:
          message.raceActual = reader.int32() as any;
          break;
        case 5:
          message.difficulty = reader.int32() as any;
          break;
        case 7:
          message.aiBuild = reader.int32() as any;
          break;
        case 6:
          message.playerName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInfo {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      type: isSet(object.type) ? playerTypeFromJSON(object.type) : 1,
      raceRequested: isSet(object.raceRequested)
        ? raceFromJSON(object.raceRequested)
        : 0,
      raceActual: isSet(object.raceActual)
        ? raceFromJSON(object.raceActual)
        : 0,
      difficulty: isSet(object.difficulty)
        ? difficultyFromJSON(object.difficulty)
        : 1,
      aiBuild: isSet(object.aiBuild) ? aIBuildFromJSON(object.aiBuild) : 1,
      playerName: isSet(object.playerName) ? String(object.playerName) : "",
    };
  },

  toJSON(message: PlayerInfo): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    message.type !== undefined && (obj.type = playerTypeToJSON(message.type));
    message.raceRequested !== undefined &&
      (obj.raceRequested = raceToJSON(message.raceRequested));
    message.raceActual !== undefined &&
      (obj.raceActual = raceToJSON(message.raceActual));
    message.difficulty !== undefined &&
      (obj.difficulty = difficultyToJSON(message.difficulty));
    message.aiBuild !== undefined &&
      (obj.aiBuild = aIBuildToJSON(message.aiBuild));
    message.playerName !== undefined && (obj.playerName = message.playerName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInfo>, I>>(
    object: I,
  ): PlayerInfo {
    const message = createBasePlayerInfo();
    message.playerId = object.playerId ?? 0;
    message.type = object.type ?? 1;
    message.raceRequested = object.raceRequested ?? 0;
    message.raceActual = object.raceActual ?? 0;
    message.difficulty = object.difficulty ?? 1;
    message.aiBuild = object.aiBuild ?? 1;
    message.playerName = object.playerName ?? "";
    return message;
  },
};

function createBasePlayerCommon(): PlayerCommon {
  return {
    playerId: 0,
    minerals: 0,
    vespene: 0,
    foodCap: 0,
    foodUsed: 0,
    foodArmy: 0,
    foodWorkers: 0,
    idleWorkerCount: 0,
    armyCount: 0,
    warpGateCount: 0,
    larvaCount: 0,
  };
}

export const PlayerCommon = {
  encode(
    message: PlayerCommon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    if (message.minerals !== 0) {
      writer.uint32(16).uint32(message.minerals);
    }
    if (message.vespene !== 0) {
      writer.uint32(24).uint32(message.vespene);
    }
    if (message.foodCap !== 0) {
      writer.uint32(32).uint32(message.foodCap);
    }
    if (message.foodUsed !== 0) {
      writer.uint32(40).uint32(message.foodUsed);
    }
    if (message.foodArmy !== 0) {
      writer.uint32(48).uint32(message.foodArmy);
    }
    if (message.foodWorkers !== 0) {
      writer.uint32(56).uint32(message.foodWorkers);
    }
    if (message.idleWorkerCount !== 0) {
      writer.uint32(64).uint32(message.idleWorkerCount);
    }
    if (message.armyCount !== 0) {
      writer.uint32(72).uint32(message.armyCount);
    }
    if (message.warpGateCount !== 0) {
      writer.uint32(80).uint32(message.warpGateCount);
    }
    if (message.larvaCount !== 0) {
      writer.uint32(88).uint32(message.larvaCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerCommon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerCommon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        case 2:
          message.minerals = reader.uint32();
          break;
        case 3:
          message.vespene = reader.uint32();
          break;
        case 4:
          message.foodCap = reader.uint32();
          break;
        case 5:
          message.foodUsed = reader.uint32();
          break;
        case 6:
          message.foodArmy = reader.uint32();
          break;
        case 7:
          message.foodWorkers = reader.uint32();
          break;
        case 8:
          message.idleWorkerCount = reader.uint32();
          break;
        case 9:
          message.armyCount = reader.uint32();
          break;
        case 10:
          message.warpGateCount = reader.uint32();
          break;
        case 11:
          message.larvaCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerCommon {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      minerals: isSet(object.minerals) ? Number(object.minerals) : 0,
      vespene: isSet(object.vespene) ? Number(object.vespene) : 0,
      foodCap: isSet(object.foodCap) ? Number(object.foodCap) : 0,
      foodUsed: isSet(object.foodUsed) ? Number(object.foodUsed) : 0,
      foodArmy: isSet(object.foodArmy) ? Number(object.foodArmy) : 0,
      foodWorkers: isSet(object.foodWorkers) ? Number(object.foodWorkers) : 0,
      idleWorkerCount: isSet(object.idleWorkerCount)
        ? Number(object.idleWorkerCount)
        : 0,
      armyCount: isSet(object.armyCount) ? Number(object.armyCount) : 0,
      warpGateCount: isSet(object.warpGateCount)
        ? Number(object.warpGateCount)
        : 0,
      larvaCount: isSet(object.larvaCount) ? Number(object.larvaCount) : 0,
    };
  },

  toJSON(message: PlayerCommon): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    message.minerals !== undefined &&
      (obj.minerals = Math.round(message.minerals));
    message.vespene !== undefined &&
      (obj.vespene = Math.round(message.vespene));
    message.foodCap !== undefined &&
      (obj.foodCap = Math.round(message.foodCap));
    message.foodUsed !== undefined &&
      (obj.foodUsed = Math.round(message.foodUsed));
    message.foodArmy !== undefined &&
      (obj.foodArmy = Math.round(message.foodArmy));
    message.foodWorkers !== undefined &&
      (obj.foodWorkers = Math.round(message.foodWorkers));
    message.idleWorkerCount !== undefined &&
      (obj.idleWorkerCount = Math.round(message.idleWorkerCount));
    message.armyCount !== undefined &&
      (obj.armyCount = Math.round(message.armyCount));
    message.warpGateCount !== undefined &&
      (obj.warpGateCount = Math.round(message.warpGateCount));
    message.larvaCount !== undefined &&
      (obj.larvaCount = Math.round(message.larvaCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerCommon>, I>>(
    object: I,
  ): PlayerCommon {
    const message = createBasePlayerCommon();
    message.playerId = object.playerId ?? 0;
    message.minerals = object.minerals ?? 0;
    message.vespene = object.vespene ?? 0;
    message.foodCap = object.foodCap ?? 0;
    message.foodUsed = object.foodUsed ?? 0;
    message.foodArmy = object.foodArmy ?? 0;
    message.foodWorkers = object.foodWorkers ?? 0;
    message.idleWorkerCount = object.idleWorkerCount ?? 0;
    message.armyCount = object.armyCount ?? 0;
    message.warpGateCount = object.warpGateCount ?? 0;
    message.larvaCount = object.larvaCount ?? 0;
    return message;
  },
};

function createBaseObservation(): Observation {
  return {
    gameLoop: 0,
    playerCommon: undefined,
    alerts: [],
    abilities: [],
    score: undefined,
    rawData: undefined,
    featureLayerData: undefined,
    renderData: undefined,
    uiData: undefined,
  };
}

export const Observation = {
  encode(
    message: Observation,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.gameLoop !== 0) {
      writer.uint32(72).uint32(message.gameLoop);
    }
    if (message.playerCommon !== undefined) {
      PlayerCommon.encode(
        message.playerCommon,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    writer.uint32(82).fork();
    for (const v of message.alerts) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.abilities) {
      AvailableAbility.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.score !== undefined) {
      Score.encode(message.score, writer.uint32(34).fork()).ldelim();
    }
    if (message.rawData !== undefined) {
      ObservationRaw.encode(message.rawData, writer.uint32(42).fork()).ldelim();
    }
    if (message.featureLayerData !== undefined) {
      ObservationFeatureLayer.encode(
        message.featureLayerData,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.renderData !== undefined) {
      ObservationRender.encode(
        message.renderData,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.uiData !== undefined) {
      ObservationUI.encode(message.uiData, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Observation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 9:
          message.gameLoop = reader.uint32();
          break;
        case 1:
          message.playerCommon = PlayerCommon.decode(reader, reader.uint32());
          break;
        case 10:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.alerts.push(reader.int32() as any);
            }
          } else {
            message.alerts.push(reader.int32() as any);
          }
          break;
        case 3:
          message.abilities.push(
            AvailableAbility.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.score = Score.decode(reader, reader.uint32());
          break;
        case 5:
          message.rawData = ObservationRaw.decode(reader, reader.uint32());
          break;
        case 6:
          message.featureLayerData = ObservationFeatureLayer.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 7:
          message.renderData = ObservationRender.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.uiData = ObservationUI.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Observation {
    return {
      gameLoop: isSet(object.gameLoop) ? Number(object.gameLoop) : 0,
      playerCommon: isSet(object.playerCommon)
        ? PlayerCommon.fromJSON(object.playerCommon)
        : undefined,
      alerts: Array.isArray(object?.alerts)
        ? object.alerts.map((e: any) => alertFromJSON(e))
        : [],
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => AvailableAbility.fromJSON(e))
        : [],
      score: isSet(object.score) ? Score.fromJSON(object.score) : undefined,
      rawData: isSet(object.rawData)
        ? ObservationRaw.fromJSON(object.rawData)
        : undefined,
      featureLayerData: isSet(object.featureLayerData)
        ? ObservationFeatureLayer.fromJSON(object.featureLayerData)
        : undefined,
      renderData: isSet(object.renderData)
        ? ObservationRender.fromJSON(object.renderData)
        : undefined,
      uiData: isSet(object.uiData)
        ? ObservationUI.fromJSON(object.uiData)
        : undefined,
    };
  },

  toJSON(message: Observation): unknown {
    const obj: any = {};
    message.gameLoop !== undefined &&
      (obj.gameLoop = Math.round(message.gameLoop));
    message.playerCommon !== undefined &&
      (obj.playerCommon = message.playerCommon
        ? PlayerCommon.toJSON(message.playerCommon)
        : undefined);
    if (message.alerts) {
      obj.alerts = message.alerts.map((e) => alertToJSON(e));
    } else {
      obj.alerts = [];
    }
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? AvailableAbility.toJSON(e) : undefined,
      );
    } else {
      obj.abilities = [];
    }
    message.score !== undefined &&
      (obj.score = message.score ? Score.toJSON(message.score) : undefined);
    message.rawData !== undefined &&
      (obj.rawData = message.rawData
        ? ObservationRaw.toJSON(message.rawData)
        : undefined);
    message.featureLayerData !== undefined &&
      (obj.featureLayerData = message.featureLayerData
        ? ObservationFeatureLayer.toJSON(message.featureLayerData)
        : undefined);
    message.renderData !== undefined &&
      (obj.renderData = message.renderData
        ? ObservationRender.toJSON(message.renderData)
        : undefined);
    message.uiData !== undefined &&
      (obj.uiData = message.uiData
        ? ObservationUI.toJSON(message.uiData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Observation>, I>>(
    object: I,
  ): Observation {
    const message = createBaseObservation();
    message.gameLoop = object.gameLoop ?? 0;
    message.playerCommon =
      object.playerCommon !== undefined && object.playerCommon !== null
        ? PlayerCommon.fromPartial(object.playerCommon)
        : undefined;
    message.alerts = object.alerts?.map((e) => e) || [];
    message.abilities =
      object.abilities?.map((e) => AvailableAbility.fromPartial(e)) || [];
    message.score =
      object.score !== undefined && object.score !== null
        ? Score.fromPartial(object.score)
        : undefined;
    message.rawData =
      object.rawData !== undefined && object.rawData !== null
        ? ObservationRaw.fromPartial(object.rawData)
        : undefined;
    message.featureLayerData =
      object.featureLayerData !== undefined && object.featureLayerData !== null
        ? ObservationFeatureLayer.fromPartial(object.featureLayerData)
        : undefined;
    message.renderData =
      object.renderData !== undefined && object.renderData !== null
        ? ObservationRender.fromPartial(object.renderData)
        : undefined;
    message.uiData =
      object.uiData !== undefined && object.uiData !== null
        ? ObservationUI.fromPartial(object.uiData)
        : undefined;
    return message;
  },
};

function createBaseAction(): Action {
  return {
    actionRaw: undefined,
    actionFeatureLayer: undefined,
    actionRender: undefined,
    actionUi: undefined,
    actionChat: undefined,
    gameLoop: 0,
  };
}

export const Action = {
  encode(
    message: Action,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.actionRaw !== undefined) {
      ActionRaw.encode(message.actionRaw, writer.uint32(10).fork()).ldelim();
    }
    if (message.actionFeatureLayer !== undefined) {
      ActionSpatial.encode(
        message.actionFeatureLayer,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.actionRender !== undefined) {
      ActionSpatial.encode(
        message.actionRender,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.actionUi !== undefined) {
      ActionUI.encode(message.actionUi, writer.uint32(34).fork()).ldelim();
    }
    if (message.actionChat !== undefined) {
      ActionChat.encode(message.actionChat, writer.uint32(50).fork()).ldelim();
    }
    if (message.gameLoop !== 0) {
      writer.uint32(56).uint32(message.gameLoop);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Action {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionRaw = ActionRaw.decode(reader, reader.uint32());
          break;
        case 2:
          message.actionFeatureLayer = ActionSpatial.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.actionRender = ActionSpatial.decode(reader, reader.uint32());
          break;
        case 4:
          message.actionUi = ActionUI.decode(reader, reader.uint32());
          break;
        case 6:
          message.actionChat = ActionChat.decode(reader, reader.uint32());
          break;
        case 7:
          message.gameLoop = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Action {
    return {
      actionRaw: isSet(object.actionRaw)
        ? ActionRaw.fromJSON(object.actionRaw)
        : undefined,
      actionFeatureLayer: isSet(object.actionFeatureLayer)
        ? ActionSpatial.fromJSON(object.actionFeatureLayer)
        : undefined,
      actionRender: isSet(object.actionRender)
        ? ActionSpatial.fromJSON(object.actionRender)
        : undefined,
      actionUi: isSet(object.actionUi)
        ? ActionUI.fromJSON(object.actionUi)
        : undefined,
      actionChat: isSet(object.actionChat)
        ? ActionChat.fromJSON(object.actionChat)
        : undefined,
      gameLoop: isSet(object.gameLoop) ? Number(object.gameLoop) : 0,
    };
  },

  toJSON(message: Action): unknown {
    const obj: any = {};
    message.actionRaw !== undefined &&
      (obj.actionRaw = message.actionRaw
        ? ActionRaw.toJSON(message.actionRaw)
        : undefined);
    message.actionFeatureLayer !== undefined &&
      (obj.actionFeatureLayer = message.actionFeatureLayer
        ? ActionSpatial.toJSON(message.actionFeatureLayer)
        : undefined);
    message.actionRender !== undefined &&
      (obj.actionRender = message.actionRender
        ? ActionSpatial.toJSON(message.actionRender)
        : undefined);
    message.actionUi !== undefined &&
      (obj.actionUi = message.actionUi
        ? ActionUI.toJSON(message.actionUi)
        : undefined);
    message.actionChat !== undefined &&
      (obj.actionChat = message.actionChat
        ? ActionChat.toJSON(message.actionChat)
        : undefined);
    message.gameLoop !== undefined &&
      (obj.gameLoop = Math.round(message.gameLoop));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Action>, I>>(object: I): Action {
    const message = createBaseAction();
    message.actionRaw =
      object.actionRaw !== undefined && object.actionRaw !== null
        ? ActionRaw.fromPartial(object.actionRaw)
        : undefined;
    message.actionFeatureLayer =
      object.actionFeatureLayer !== undefined &&
      object.actionFeatureLayer !== null
        ? ActionSpatial.fromPartial(object.actionFeatureLayer)
        : undefined;
    message.actionRender =
      object.actionRender !== undefined && object.actionRender !== null
        ? ActionSpatial.fromPartial(object.actionRender)
        : undefined;
    message.actionUi =
      object.actionUi !== undefined && object.actionUi !== null
        ? ActionUI.fromPartial(object.actionUi)
        : undefined;
    message.actionChat =
      object.actionChat !== undefined && object.actionChat !== null
        ? ActionChat.fromPartial(object.actionChat)
        : undefined;
    message.gameLoop = object.gameLoop ?? 0;
    return message;
  },
};

function createBaseActionChat(): ActionChat {
  return { channel: 1, message: "" };
}

export const ActionChat = {
  encode(
    message: ActionChat,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.channel !== 1) {
      writer.uint32(8).int32(message.channel);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionChat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionChat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channel = reader.int32() as any;
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionChat {
    return {
      channel: isSet(object.channel)
        ? actionChat_ChannelFromJSON(object.channel)
        : 1,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: ActionChat): unknown {
    const obj: any = {};
    message.channel !== undefined &&
      (obj.channel = actionChat_ChannelToJSON(message.channel));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionChat>, I>>(
    object: I,
  ): ActionChat {
    const message = createBaseActionChat();
    message.channel = object.channel ?? 1;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseActionError(): ActionError {
  return { unitTag: 0, abilityId: 0, result: 1 };
}

export const ActionError = {
  encode(
    message: ActionError,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitTag !== 0) {
      writer.uint32(8).uint64(message.unitTag);
    }
    if (message.abilityId !== 0) {
      writer.uint32(16).uint64(message.abilityId);
    }
    if (message.result !== 1) {
      writer.uint32(24).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionError {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitTag = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.abilityId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionError {
    return {
      unitTag: isSet(object.unitTag) ? Number(object.unitTag) : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      result: isSet(object.result) ? actionResultFromJSON(object.result) : 1,
    };
  },

  toJSON(message: ActionError): unknown {
    const obj: any = {};
    message.unitTag !== undefined &&
      (obj.unitTag = Math.round(message.unitTag));
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.result !== undefined &&
      (obj.result = actionResultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionError>, I>>(
    object: I,
  ): ActionError {
    const message = createBaseActionError();
    message.unitTag = object.unitTag ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.result = object.result ?? 1;
    return message;
  },
};

function createBaseObserverAction(): ObserverAction {
  return {
    playerPerspective: undefined,
    cameraMove: undefined,
    cameraFollowPlayer: undefined,
    cameraFollowUnits: undefined,
  };
}

export const ObserverAction = {
  encode(
    message: ObserverAction,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerPerspective !== undefined) {
      ActionObserverPlayerPerspective.encode(
        message.playerPerspective,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.cameraMove !== undefined) {
      ActionObserverCameraMove.encode(
        message.cameraMove,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.cameraFollowPlayer !== undefined) {
      ActionObserverCameraFollowPlayer.encode(
        message.cameraFollowPlayer,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.cameraFollowUnits !== undefined) {
      ActionObserverCameraFollowUnits.encode(
        message.cameraFollowUnits,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObserverAction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObserverAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerPerspective = ActionObserverPlayerPerspective.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.cameraMove = ActionObserverCameraMove.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.cameraFollowPlayer = ActionObserverCameraFollowPlayer.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.cameraFollowUnits = ActionObserverCameraFollowUnits.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObserverAction {
    return {
      playerPerspective: isSet(object.playerPerspective)
        ? ActionObserverPlayerPerspective.fromJSON(object.playerPerspective)
        : undefined,
      cameraMove: isSet(object.cameraMove)
        ? ActionObserverCameraMove.fromJSON(object.cameraMove)
        : undefined,
      cameraFollowPlayer: isSet(object.cameraFollowPlayer)
        ? ActionObserverCameraFollowPlayer.fromJSON(object.cameraFollowPlayer)
        : undefined,
      cameraFollowUnits: isSet(object.cameraFollowUnits)
        ? ActionObserverCameraFollowUnits.fromJSON(object.cameraFollowUnits)
        : undefined,
    };
  },

  toJSON(message: ObserverAction): unknown {
    const obj: any = {};
    message.playerPerspective !== undefined &&
      (obj.playerPerspective = message.playerPerspective
        ? ActionObserverPlayerPerspective.toJSON(message.playerPerspective)
        : undefined);
    message.cameraMove !== undefined &&
      (obj.cameraMove = message.cameraMove
        ? ActionObserverCameraMove.toJSON(message.cameraMove)
        : undefined);
    message.cameraFollowPlayer !== undefined &&
      (obj.cameraFollowPlayer = message.cameraFollowPlayer
        ? ActionObserverCameraFollowPlayer.toJSON(message.cameraFollowPlayer)
        : undefined);
    message.cameraFollowUnits !== undefined &&
      (obj.cameraFollowUnits = message.cameraFollowUnits
        ? ActionObserverCameraFollowUnits.toJSON(message.cameraFollowUnits)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObserverAction>, I>>(
    object: I,
  ): ObserverAction {
    const message = createBaseObserverAction();
    message.playerPerspective =
      object.playerPerspective !== undefined &&
      object.playerPerspective !== null
        ? ActionObserverPlayerPerspective.fromPartial(object.playerPerspective)
        : undefined;
    message.cameraMove =
      object.cameraMove !== undefined && object.cameraMove !== null
        ? ActionObserverCameraMove.fromPartial(object.cameraMove)
        : undefined;
    message.cameraFollowPlayer =
      object.cameraFollowPlayer !== undefined &&
      object.cameraFollowPlayer !== null
        ? ActionObserverCameraFollowPlayer.fromPartial(
            object.cameraFollowPlayer,
          )
        : undefined;
    message.cameraFollowUnits =
      object.cameraFollowUnits !== undefined &&
      object.cameraFollowUnits !== null
        ? ActionObserverCameraFollowUnits.fromPartial(object.cameraFollowUnits)
        : undefined;
    return message;
  },
};

function createBaseActionObserverPlayerPerspective(): ActionObserverPlayerPerspective {
  return { playerId: 0 };
}

export const ActionObserverPlayerPerspective = {
  encode(
    message: ActionObserverPlayerPerspective,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionObserverPlayerPerspective {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionObserverPlayerPerspective();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionObserverPlayerPerspective {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
    };
  },

  toJSON(message: ActionObserverPlayerPerspective): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionObserverPlayerPerspective>, I>>(
    object: I,
  ): ActionObserverPlayerPerspective {
    const message = createBaseActionObserverPlayerPerspective();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseActionObserverCameraMove(): ActionObserverCameraMove {
  return { worldPos: undefined, distance: 0 };
}

export const ActionObserverCameraMove = {
  encode(
    message: ActionObserverCameraMove,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.worldPos !== undefined) {
      Point2D.encode(message.worldPos, writer.uint32(10).fork()).ldelim();
    }
    if (message.distance !== 0) {
      writer.uint32(21).float(message.distance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionObserverCameraMove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionObserverCameraMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.worldPos = Point2D.decode(reader, reader.uint32());
          break;
        case 2:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionObserverCameraMove {
    return {
      worldPos: isSet(object.worldPos)
        ? Point2D.fromJSON(object.worldPos)
        : undefined,
      distance: isSet(object.distance) ? Number(object.distance) : 0,
    };
  },

  toJSON(message: ActionObserverCameraMove): unknown {
    const obj: any = {};
    message.worldPos !== undefined &&
      (obj.worldPos = message.worldPos
        ? Point2D.toJSON(message.worldPos)
        : undefined);
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionObserverCameraMove>, I>>(
    object: I,
  ): ActionObserverCameraMove {
    const message = createBaseActionObserverCameraMove();
    message.worldPos =
      object.worldPos !== undefined && object.worldPos !== null
        ? Point2D.fromPartial(object.worldPos)
        : undefined;
    message.distance = object.distance ?? 0;
    return message;
  },
};

function createBaseActionObserverCameraFollowPlayer(): ActionObserverCameraFollowPlayer {
  return { playerId: 0 };
}

export const ActionObserverCameraFollowPlayer = {
  encode(
    message: ActionObserverCameraFollowPlayer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionObserverCameraFollowPlayer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionObserverCameraFollowPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionObserverCameraFollowPlayer {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
    };
  },

  toJSON(message: ActionObserverCameraFollowPlayer): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ActionObserverCameraFollowPlayer>, I>,
  >(object: I): ActionObserverCameraFollowPlayer {
    const message = createBaseActionObserverCameraFollowPlayer();
    message.playerId = object.playerId ?? 0;
    return message;
  },
};

function createBaseActionObserverCameraFollowUnits(): ActionObserverCameraFollowUnits {
  return { unitTags: [] };
}

export const ActionObserverCameraFollowUnits = {
  encode(
    message: ActionObserverCameraFollowUnits,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.unitTags) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionObserverCameraFollowUnits {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionObserverCameraFollowUnits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unitTags.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.unitTags.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionObserverCameraFollowUnits {
    return {
      unitTags: Array.isArray(object?.unitTags)
        ? object.unitTags.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: ActionObserverCameraFollowUnits): unknown {
    const obj: any = {};
    if (message.unitTags) {
      obj.unitTags = message.unitTags.map((e) => Math.round(e));
    } else {
      obj.unitTags = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionObserverCameraFollowUnits>, I>>(
    object: I,
  ): ActionObserverCameraFollowUnits {
    const message = createBaseActionObserverCameraFollowUnits();
    message.unitTags = object.unitTags?.map((e) => e) || [];
    return message;
  },
};

function createBasePlayerResult(): PlayerResult {
  return { playerId: 0, result: 1 };
}

export const PlayerResult = {
  encode(
    message: PlayerResult,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.playerId !== 0) {
      writer.uint32(8).uint32(message.playerId);
    }
    if (message.result !== 1) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerId = reader.uint32();
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerResult {
    return {
      playerId: isSet(object.playerId) ? Number(object.playerId) : 0,
      result: isSet(object.result) ? resultFromJSON(object.result) : 1,
    };
  },

  toJSON(message: PlayerResult): unknown {
    const obj: any = {};
    message.playerId !== undefined &&
      (obj.playerId = Math.round(message.playerId));
    message.result !== undefined && (obj.result = resultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerResult>, I>>(
    object: I,
  ): PlayerResult {
    const message = createBasePlayerResult();
    message.playerId = object.playerId ?? 0;
    message.result = object.result ?? 1;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
