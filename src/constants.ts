import { DisplayMode } from "./enums/DisplayMode";
import { Race } from "./proto/s2clientprotocol/common";

export const GAME_NAME = "StarCraft 2";

export const DEFAULT_HOSTNAME = "127.0.0.1";
export const DEFAULT_PORT = 5000;
const SC2_API_PATH = "sc2api";
export const WEBSOCKET_URL = `ws://${DEFAULT_HOSTNAME}:${DEFAULT_PORT}/${SC2_API_PATH}`;
export const DEFAULT_DISPLAY_MODE = DisplayMode.WINDOWED;
export const DEFAULT_MAP_NAME = "BerlingradAIE";

export const BOT_RACE = Race.Protoss;
