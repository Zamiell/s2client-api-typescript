import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

const EXECUTE_INFO_PATH = (() => {
  const isWindows = process.platform === "win32";
  const isMacOS = process.platform === "darwin";
  if (!isWindows && !isMacOS) {
    throw new Error(`The platform of "${process.platform}" is not supported.`);
  }

  const windowsExecuteInfoSubPath = path.join(
    "Documents",
    "StarCraft II",
    "ExecuteInfo.txt",
  );

  const macOSExecuteInfoSubPath = path.join(
    "Library",
    "Application Support",
    "Blizzard",
    "StarCraft II",
    "ExecuteInfo.txt",
  );

  const executeInfoSubPath = isMacOS
    ? macOSExecuteInfoSubPath
    : windowsExecuteInfoSubPath;

  const homeDir = os.homedir();
  return path.join(homeDir, executeInfoSubPath);
})();

export function getStarCraft2Directory(): string {
  const executablePath = getStarCraft2ExecutablePath();
  const executableDirectory = path.dirname(executablePath);
  return path.join(executableDirectory, "..", "..");
}

export function getStarCraft2ExecutablePath(): string {
  // The location of the StarCraft 2 executable is contained within the "ExecuteInfo.txt" file.
  const executeInfo = fs.readFileSync(EXECUTE_INFO_PATH, "utf8");
  const lines = executeInfo.split("\n"); // Even on Windows, this file has LF line endings
  const firstLine = lines[0];
  if (firstLine === undefined) {
    throw new Error(
      `Failed to split the "${EXECUTE_INFO_PATH}" file: ${executeInfo}`,
    );
  }

  const trimmedFirstLine = firstLine.trim();
  const match = trimmedFirstLine.trim().match(/^executable = (.+)$/);
  if (match === null) {
    throw new Error(
      `Failed to parse the "${EXECUTE_INFO_PATH}" file: ${executeInfo}`,
    );
  }

  const executablePath = match[1];
  if (executablePath === undefined) {
    throw new Error(`Failed to parse the executable path from: ${executeInfo}`);
  }

  return executablePath;
}
