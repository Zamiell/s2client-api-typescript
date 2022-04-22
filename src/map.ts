import path from "path";
import * as file from "./file";
import { getStarCraft2Directory } from "./launch";

const MAPS_DIRECTORY = "Maps";
const MAP_FILE_SUFFIX = ".SC2Map";

export function getMapPath(mapName: string): string {
  const starCraft2Directory = getStarCraft2Directory();
  const mapFilename = mapName + MAP_FILE_SUFFIX;
  const mapPath = path.join(starCraft2Directory, MAPS_DIRECTORY, mapFilename);

  if (file.exists(mapPath)) {
    return mapPath;
  }

  throw new Error(`Failed to find StarCraft 2 map: ${mapName}`);
}
