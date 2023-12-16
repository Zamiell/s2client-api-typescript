// This script converts the values in the "C:\Users\[username]\Documents\StarCraft II\stableid.json"
// file to TypeScript enums.

import type { ReadonlyRecord } from "isaacscript-common-ts";
import * as fs from "node:fs";
import * as path from "node:path";
import * as url from "node:url";

interface StableIDArrayElement {
  id: number;
  name: string;

  /** Only "Abilities" has a "buttonname" field. */
  buttonname?: string;

  /** Only "Abilities" has an "index" field. */
  index?: number;
}

export const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const REPO_ROOT = path.join(__dirname, "..");
const GENERATED_ENUMS_PATH = path.join(REPO_ROOT, "src", "enums", "generated");

main();

function main() {
  const stableIDs = getStableIDs();
  createEnums(stableIDs);
}

function getStableIDs(): Record<string, StableIDArrayElement[]> {
  const userProfile = process.env["USERPROFILE"];
  if (userProfile === undefined || userProfile === "") {
    throw new Error(
      'Failed to parse the "USERPROFILE" environment variable. (This script will only work on Windows.)',
    );
  }

  const stableIdJSONPath = path.join(
    userProfile,
    "Documents",
    "StarCraft II",
    "stableid.json",
  );

  if (!fs.existsSync(stableIdJSONPath)) {
    throw new Error(
      `Failed to find the "stableid.json" file at: ${stableIdJSONPath}`,
    );
  }

  const stableIdJSONRaw = fs.readFileSync(stableIdJSONPath, "utf8");

  const stableIdJSON = JSON.parse(stableIdJSONRaw) as unknown;
  if (
    typeof stableIdJSON !== "object" ||
    stableIdJSON === null ||
    Array.isArray(stableIdJSON)
  ) {
    throw new Error('Failed to parse the "stableid.json" file.');
  }

  const stableIDs = stableIdJSON as Record<string, unknown>;

  for (const [key, value] of Object.entries(stableIDs)) {
    if (typeof key !== "string") {
      throw new TypeError(`Failed to parse the key of: ${key}`);
    }

    if (!Array.isArray(value)) {
      throw new TypeError(
        `Failed to parse the value of key "${key}": ${value}`,
      );
    }

    for (const elementAny of value) {
      const element = elementAny as unknown;

      if (typeof element !== "object" || element === null) {
        throw new Error(
          `Failed to parse an array element of key "${key}": ${element}`,
        );
      }

      if (!("id" in element)) {
        throw new Error(
          `An array element of key "${key}" did not have an "id" field.`,
        );
      }

      if (!("name" in element)) {
        throw new Error(
          `An array element of key "${key}" did not have an "name" field.`,
        );
      }
    }
  }

  return stableIdJSON as Record<string, StableIDArrayElement[]>;
}

function createEnums(
  stableIDs: ReadonlyRecord<string, StableIDArrayElement[]>,
) {
  if (!fs.existsSync(GENERATED_ENUMS_PATH)) {
    fs.mkdirSync(GENERATED_ENUMS_PATH);
  }

  for (const [key, value] of Object.entries(stableIDs)) {
    const enumFileName = `${key}.ts`;
    const enumPath = path.join(GENERATED_ENUMS_PATH, enumFileName);
    const enumFileContents = getEnumFileContents(key, value);
    fs.writeFileSync(enumPath, enumFileContents);
    console.log(`Successfully created: ${enumPath}`);
  }
}

function getEnumFileContents(
  enumName: string,
  array: readonly StableIDArrayElement[],
): string {
  let enumFileContents = `export enum ${enumName} {\n`;

  for (const element of array) {
    const { id, name, buttonname, index } = element;
    const safeName = getSafeEnumName(id, name, buttonname, index);
    enumFileContents += `  ${safeName} = ${id},\n`;
  }

  enumFileContents += "}\n";

  return enumFileContents;
}

function getSafeEnumName(
  id: number,
  name: string,
  buttonname?: string,
  index?: number,
): string {
  // One specific enum has a duplicate name. For this case, we hard-code the names from here:
  // https://github.com/BurnySc2/python-sc2/blob/master/sc2/ids/ability_id.py
  if (id === 4 && index !== undefined) {
    return "StopStop";
  }
  if (id === 3665 && index !== undefined) {
    return "Stop";
  }

  const capitalizedName = capitalizeFirstLetter(name);
  const capitalizedButtonName = capitalizeFirstLetter(buttonname ?? "");
  const indexString = index?.toString() ?? "";

  const combinedName = capitalizedName + capitalizedButtonName + indexString;

  let safeEnumEnum = removeWhitespace(combinedName);

  // Some names have symbols in them which are not allowed in enum names. Replace them with an
  // underscore if this is the case.
  safeEnumEnum = safeEnumEnum.replaceAll("@", "_");

  // Some names have leading numbers, which are not allowed. Add an "N" at the beginning if this is
  // the case.
  if (safeEnumEnum.match(/^\d/) !== null) {
    safeEnumEnum = `N${safeEnumEnum}`;
  }

  return safeEnumEnum;
}

function capitalizeFirstLetter(string: string): string {
  if (string === "") {
    return string;
  }

  const firstCharacter = string.charAt(0);
  const capitalizedFirstLetter = firstCharacter.toUpperCase();
  const restOfString = string.slice(1);

  return `${capitalizedFirstLetter}${restOfString}`;
}

function removeWhitespace(string: string): string {
  return string.replaceAll(/\s/g, "");
}
