import fs from "fs";
import { error } from "./utils";

export function exists(filePath: string, verbose = false): boolean {
  if (verbose) {
    console.log(`Checking to see if the following path exists: ${filePath}`);
  }

  let pathExists: boolean;
  try {
    pathExists = fs.existsSync(filePath);
  } catch (err) {
    error(`Failed to check if "${filePath}" exists:`, err);
  }

  if (verbose) {
    console.log(`Path exists: ${pathExists}`);
  }

  return pathExists;
}

export function read(filePath: string, verbose = false): string {
  if (verbose) {
    console.log(`Reading a file: ${filePath}`);
  }

  let fileContents: string;
  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    error(`Failed to read the "${filePath}" file:`, err);
  }

  if (verbose) {
    console.log(`Read a file: ${filePath}`);
  }

  return fileContents;
}
