import findProcess from "find-process";
import { spawn } from "node:child_process";
import * as path from "node:path";
import {
  DEFAULT_DISPLAY_MODE,
  DEFAULT_HOSTNAME,
  DEFAULT_PORT,
  GAME_NAME,
} from "../constants.js";
import {
  getStarCraft2Directory,
  getStarCraft2ExecutablePath,
} from "../utils.js";

/**
 * Helper function to launch StarCraft 2 and wait until it is open. Flags are provided to enable the
 * WebSocket API.
 *
 * If you get an error related to "icuuc52.dll", then try opening the Battle.net launcher (and
 * making sure you are logged in).
 *
 * @param hostname Optional. If not specified, "127.0.0.1" will be used.
 * @param port Optional. If not specified, 5000 will be used.
 * @param displayMode Optional. If not specified, 0 (windowed) will be used.
 */
export async function launchStarCraft2(
  hostname = DEFAULT_HOSTNAME,
  port = DEFAULT_PORT,
  displayMode = DEFAULT_DISPLAY_MODE,
): Promise<void> {
  if (await isStarCraft2Open()) {
    console.log(`${GAME_NAME} is open. Skipping launch.`);
    return;
  }

  console.log(`Launching a new ${GAME_NAME} process.`);
  const executablePath = getStarCraft2ExecutablePath();
  const starCraft2Directory = getStarCraft2Directory();

  const args = [
    "-listen",
    hostname,
    "-port",
    port.toString(),
    "-displayMode",
    displayMode.toString(),
  ];
  const isWindows = process.platform === "win32";
  const cwd = isWindows
    ? path.join(starCraft2Directory, "Support64")
    : undefined;
  const options = {
    cwd,
    detached: true,
    stdio: "ignore",
  } as const;
  const starCraft2Process = spawn(executablePath, args, options);
  starCraft2Process.unref();

  await waitUntilStarCraft2IsOpen();
  console.log(`${GAME_NAME} is launched successfully.`);
}

async function waitUntilStarCraft2IsOpen(): Promise<void> {
  while (!(await isStarCraft2Open())) {} // eslint-disable-line
}

/** Specifically checks for versions of StarCraft 2 that are listening on the WebSocket port. */
async function isStarCraft2Open(): Promise<boolean> {
  const processes = await findProcess("port", DEFAULT_PORT);

  // Sometimes, the process can show up as PID 0 for an old TIME_WAIT process.
  const validProcesses = processes.filter((process) => process.pid !== 0);

  return validProcesses.length > 0;
}
