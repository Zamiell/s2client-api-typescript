import { RequestTypeToResponseObject } from "./RequestTypeToResponseObject";

export type ResponseObject =
  RequestTypeToResponseObject[keyof RequestTypeToResponseObject];
