import type { RequestTypeToResponseObject } from "./RequestTypeToResponseObject.js";

export type ResponseObject =
  RequestTypeToResponseObject[keyof RequestTypeToResponseObject];
