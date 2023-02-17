import * as fs from "node:fs";
import * as path from "node:path";
import { GAME_NAME } from "../constants";
import { getStarCraft2Directory } from "../utils";

const MAPS_DIRECTORY = "Maps";
const MAP_FILE_SUFFIX = ".SC2Map";

/**
 * Helper function to convert a map name to the full path of the map (from the currently installed
 * StarCraft 2 directory).
 *
 * This is useful when creating a new game. (The "mapPath" property must contain the full path to
 * the map.)
 */
export function getMapPath(mapName: string): string {
  const starCraft2Directory = getStarCraft2Directory();
  const mapFilename = mapName + MAP_FILE_SUFFIX;
  const mapPath = path.join(starCraft2Directory, MAPS_DIRECTORY, mapFilename);

  if (fs.existsSync(mapPath)) {
    return mapPath;
  }

  throw new Error(`Failed to find ${GAME_NAME} map: ${mapName}`);
}
