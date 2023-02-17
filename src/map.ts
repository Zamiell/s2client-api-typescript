import * as path from "node:path";
import { GAME_NAME } from "./constants";
import { fileExists } from "./file";
import { getStarCraft2Directory } from "./launch";

const MAPS_DIRECTORY = "Maps";
const MAP_FILE_SUFFIX = ".SC2Map";

export function getMapPath(mapName: string): string {
  const starCraft2Directory = getStarCraft2Directory();
  const mapFilename = mapName + MAP_FILE_SUFFIX;
  const mapPath = path.join(starCraft2Directory, MAPS_DIRECTORY, mapFilename);

  if (fileExists(mapPath)) {
    return mapPath;
  }

  throw new Error(`Failed to find ${GAME_NAME} map: ${mapName}`);
}
