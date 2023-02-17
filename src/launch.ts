import findProcess from "find-process";
import { spawn } from "node:child_process";
import * as os from "node:os";
import * as path from "node:path";
import {
  DEFAULT_DISPLAY_MODE,
  DEFAULT_HOSTNAME,
  DEFAULT_PORT,
  GAME_NAME,
} from "./constants";
import { readFile } from "./file";
import { debug, error } from "./utils";

const PLATFORM = os.platform();
const IS_WINDOWS_OS = PLATFORM === "win32";
const IS_MAC_OS = PLATFORM === "darwin";
if (!IS_WINDOWS_OS && !IS_MAC_OS) {
  error(`The platform of ${PLATFORM} is not supported.`);
}

const WINDOWS_EXECUTE_INFO_SUB_PATH = path.join(
  "Documents",
  "StarCraft II",
  "ExecuteInfo.txt",
);
const MAC_OS_EXECUTE_INFO_SUB_PATH = path.join(
  "Library",
  "Application Support",
  "Blizzard",
  "StarCraft II",
  "ExecuteInfo.txt",
);
const EXECUTE_INFO_SUB_PATH = IS_MAC_OS
  ? MAC_OS_EXECUTE_INFO_SUB_PATH
  : WINDOWS_EXECUTE_INFO_SUB_PATH;
const HOME_DIR = os.homedir();
const EXECUTE_INFO_PATH = path.join(HOME_DIR, EXECUTE_INFO_SUB_PATH);

export async function launchStarCraft2(): Promise<void> {
  if (await isStarCraft2Open()) {
    debug("Skipping launch.");
    return;
  }

  debug(`Launching a new ${GAME_NAME} process.`);
  const executablePath = getStarCraft2ExecutablePath();
  const starCraft2Directory = getStarCraft2Directory();

  const args = [
    "-listen",
    DEFAULT_HOSTNAME,
    "-port",
    DEFAULT_PORT.toString(),
    "-displayMode",
    DEFAULT_DISPLAY_MODE.toString(),
  ];
  const cwd = IS_WINDOWS_OS
    ? path.join(starCraft2Directory, "Support64")
    : undefined;
  const options = {
    cwd,
    detached: true,
    stdio: "ignore" as const,
  };
  const starCraft2Process = spawn(executablePath, args, options);
  starCraft2Process.unref();

  await waitUntilStarCraft2IsOpen();
  debug(`${GAME_NAME} is launched successfully.`);
}

/** Specifically checks for versions of StarCraft 2 that are listening on the WebSocket port. */
async function isStarCraft2Open(): Promise<boolean> {
  const processes = await findProcess("port", DEFAULT_PORT);

  // Sometimes, the process can show up as PID 0 for an old TIME_WAIT process.
  const validProcesses = processes.filter((process) => process.pid !== 0);

  return validProcesses.length > 0;
}

function getStarCraft2ExecutablePath() {
  // The location of the StarCraft 2 executable is contained within the "ExecuteInfo.txt" file.
  const executeInfo = readFile(EXECUTE_INFO_PATH);
  const lines = executeInfo.split("\n"); // Even on Windows, this file has LF line endings
  const firstLine = lines[0];
  if (firstLine === undefined) {
    error(`Failed to split the "${EXECUTE_INFO_PATH}" file: ${executeInfo}`);
  }

  const trimmedFirstLine = firstLine.trim();
  const match = trimmedFirstLine.trim().match(/^executable = (.+)$/);
  if (match === null) {
    error(`Failed to parse the "${EXECUTE_INFO_PATH}" file: ${executeInfo}`);
  }

  const executablePath = match[1];
  if (executablePath === undefined) {
    error(`Failed to parse the executable path from: ${executeInfo}`);
  }

  return executablePath;
}

export function getStarCraft2Directory(): string {
  const executablePath = getStarCraft2ExecutablePath();
  const executableDirectory = path.dirname(executablePath);
  return path.join(executableDirectory, "..", "..");
}

async function waitUntilStarCraft2IsOpen(): Promise<void> {
  while (!(await isStarCraft2Open())) {} // eslint-disable-line
}
