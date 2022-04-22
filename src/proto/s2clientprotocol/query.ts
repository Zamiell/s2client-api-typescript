/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  ActionResult,
  actionResultFromJSON,
  actionResultToJSON,
} from "../s2clientprotocol/error";
import { Point2D, AvailableAbility } from "../s2clientprotocol/common";

export const protobufPackage = "SC2APIProtocol";

export interface RequestQuery {
  pathing: RequestQueryPathing[];
  abilities: RequestQueryAvailableAbilities[];
  placements: RequestQueryBuildingPlacement[];
  /** Ignores requirements like food, minerals and so on. */
  ignoreResourceRequirements: boolean;
}

export interface ResponseQuery {
  pathing: ResponseQueryPathing[];
  abilities: ResponseQueryAvailableAbilities[];
  placements: ResponseQueryBuildingPlacement[];
}

/** -------------------------------------------------------------------------------------------------- */
export interface RequestQueryPathing {
  startPos: Point2D | undefined;
  unitTag: number | undefined;
  endPos: Point2D | undefined;
}

export interface ResponseQueryPathing {
  /** 0 if no path exists */
  distance: number;
}

/** -------------------------------------------------------------------------------------------------- */
export interface RequestQueryAvailableAbilities {
  unitTag: number;
}

export interface ResponseQueryAvailableAbilities {
  abilities: AvailableAbility[];
  unitTag: number;
  unitTypeId: number;
}

/** -------------------------------------------------------------------------------------------------- */
export interface RequestQueryBuildingPlacement {
  abilityId: number;
  targetPos: Point2D | undefined;
  /** Not required */
  placingUnitTag: number;
}

export interface ResponseQueryBuildingPlacement {
  result: ActionResult;
}

function createBaseRequestQuery(): RequestQuery {
  return {
    pathing: [],
    abilities: [],
    placements: [],
    ignoreResourceRequirements: false,
  };
}

export const RequestQuery = {
  encode(
    message: RequestQuery,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pathing) {
      RequestQueryPathing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.abilities) {
      RequestQueryAvailableAbilities.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.placements) {
      RequestQueryBuildingPlacement.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.ignoreResourceRequirements === true) {
      writer.uint32(32).bool(message.ignoreResourceRequirements);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pathing.push(
            RequestQueryPathing.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.abilities.push(
            RequestQueryAvailableAbilities.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.placements.push(
            RequestQueryBuildingPlacement.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.ignoreResourceRequirements = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestQuery {
    return {
      pathing: Array.isArray(object?.pathing)
        ? object.pathing.map((e: any) => RequestQueryPathing.fromJSON(e))
        : [],
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) =>
            RequestQueryAvailableAbilities.fromJSON(e),
          )
        : [],
      placements: Array.isArray(object?.placements)
        ? object.placements.map((e: any) =>
            RequestQueryBuildingPlacement.fromJSON(e),
          )
        : [],
      ignoreResourceRequirements: isSet(object.ignoreResourceRequirements)
        ? Boolean(object.ignoreResourceRequirements)
        : false,
    };
  },

  toJSON(message: RequestQuery): unknown {
    const obj: any = {};
    if (message.pathing) {
      obj.pathing = message.pathing.map((e) =>
        e ? RequestQueryPathing.toJSON(e) : undefined,
      );
    } else {
      obj.pathing = [];
    }
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? RequestQueryAvailableAbilities.toJSON(e) : undefined,
      );
    } else {
      obj.abilities = [];
    }
    if (message.placements) {
      obj.placements = message.placements.map((e) =>
        e ? RequestQueryBuildingPlacement.toJSON(e) : undefined,
      );
    } else {
      obj.placements = [];
    }
    message.ignoreResourceRequirements !== undefined &&
      (obj.ignoreResourceRequirements = message.ignoreResourceRequirements);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQuery>, I>>(
    object: I,
  ): RequestQuery {
    const message = createBaseRequestQuery();
    message.pathing =
      object.pathing?.map((e) => RequestQueryPathing.fromPartial(e)) || [];
    message.abilities =
      object.abilities?.map((e) =>
        RequestQueryAvailableAbilities.fromPartial(e),
      ) || [];
    message.placements =
      object.placements?.map((e) =>
        RequestQueryBuildingPlacement.fromPartial(e),
      ) || [];
    message.ignoreResourceRequirements =
      object.ignoreResourceRequirements ?? false;
    return message;
  },
};

function createBaseResponseQuery(): ResponseQuery {
  return { pathing: [], abilities: [], placements: [] };
}

export const ResponseQuery = {
  encode(
    message: ResponseQuery,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.pathing) {
      ResponseQueryPathing.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.abilities) {
      ResponseQueryAvailableAbilities.encode(
        v!,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    for (const v of message.placements) {
      ResponseQueryBuildingPlacement.encode(
        v!,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pathing.push(
            ResponseQueryPathing.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.abilities.push(
            ResponseQueryAvailableAbilities.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.placements.push(
            ResponseQueryBuildingPlacement.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseQuery {
    return {
      pathing: Array.isArray(object?.pathing)
        ? object.pathing.map((e: any) => ResponseQueryPathing.fromJSON(e))
        : [],
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) =>
            ResponseQueryAvailableAbilities.fromJSON(e),
          )
        : [],
      placements: Array.isArray(object?.placements)
        ? object.placements.map((e: any) =>
            ResponseQueryBuildingPlacement.fromJSON(e),
          )
        : [],
    };
  },

  toJSON(message: ResponseQuery): unknown {
    const obj: any = {};
    if (message.pathing) {
      obj.pathing = message.pathing.map((e) =>
        e ? ResponseQueryPathing.toJSON(e) : undefined,
      );
    } else {
      obj.pathing = [];
    }
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? ResponseQueryAvailableAbilities.toJSON(e) : undefined,
      );
    } else {
      obj.abilities = [];
    }
    if (message.placements) {
      obj.placements = message.placements.map((e) =>
        e ? ResponseQueryBuildingPlacement.toJSON(e) : undefined,
      );
    } else {
      obj.placements = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQuery>, I>>(
    object: I,
  ): ResponseQuery {
    const message = createBaseResponseQuery();
    message.pathing =
      object.pathing?.map((e) => ResponseQueryPathing.fromPartial(e)) || [];
    message.abilities =
      object.abilities?.map((e) =>
        ResponseQueryAvailableAbilities.fromPartial(e),
      ) || [];
    message.placements =
      object.placements?.map((e) =>
        ResponseQueryBuildingPlacement.fromPartial(e),
      ) || [];
    return message;
  },
};

function createBaseRequestQueryPathing(): RequestQueryPathing {
  return { startPos: undefined, unitTag: undefined, endPos: undefined };
}

export const RequestQueryPathing = {
  encode(
    message: RequestQueryPathing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.startPos !== undefined) {
      Point2D.encode(message.startPos, writer.uint32(10).fork()).ldelim();
    }
    if (message.unitTag !== undefined) {
      writer.uint32(16).uint64(message.unitTag);
    }
    if (message.endPos !== undefined) {
      Point2D.encode(message.endPos, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RequestQueryPathing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQueryPathing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startPos = Point2D.decode(reader, reader.uint32());
          break;
        case 2:
          message.unitTag = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.endPos = Point2D.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestQueryPathing {
    return {
      startPos: isSet(object.startPos)
        ? Point2D.fromJSON(object.startPos)
        : undefined,
      unitTag: isSet(object.unitTag) ? Number(object.unitTag) : undefined,
      endPos: isSet(object.endPos)
        ? Point2D.fromJSON(object.endPos)
        : undefined,
    };
  },

  toJSON(message: RequestQueryPathing): unknown {
    const obj: any = {};
    message.startPos !== undefined &&
      (obj.startPos = message.startPos
        ? Point2D.toJSON(message.startPos)
        : undefined);
    message.unitTag !== undefined &&
      (obj.unitTag = Math.round(message.unitTag));
    message.endPos !== undefined &&
      (obj.endPos = message.endPos
        ? Point2D.toJSON(message.endPos)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQueryPathing>, I>>(
    object: I,
  ): RequestQueryPathing {
    const message = createBaseRequestQueryPathing();
    message.startPos =
      object.startPos !== undefined && object.startPos !== null
        ? Point2D.fromPartial(object.startPos)
        : undefined;
    message.unitTag = object.unitTag ?? undefined;
    message.endPos =
      object.endPos !== undefined && object.endPos !== null
        ? Point2D.fromPartial(object.endPos)
        : undefined;
    return message;
  },
};

function createBaseResponseQueryPathing(): ResponseQueryPathing {
  return { distance: 0 };
}

export const ResponseQueryPathing = {
  encode(
    message: ResponseQueryPathing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.distance !== 0) {
      writer.uint32(13).float(message.distance);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseQueryPathing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQueryPathing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.distance = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseQueryPathing {
    return {
      distance: isSet(object.distance) ? Number(object.distance) : 0,
    };
  },

  toJSON(message: ResponseQueryPathing): unknown {
    const obj: any = {};
    message.distance !== undefined && (obj.distance = message.distance);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQueryPathing>, I>>(
    object: I,
  ): ResponseQueryPathing {
    const message = createBaseResponseQueryPathing();
    message.distance = object.distance ?? 0;
    return message;
  },
};

function createBaseRequestQueryAvailableAbilities(): RequestQueryAvailableAbilities {
  return { unitTag: 0 };
}

export const RequestQueryAvailableAbilities = {
  encode(
    message: RequestQueryAvailableAbilities,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitTag !== 0) {
      writer.uint32(8).uint64(message.unitTag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestQueryAvailableAbilities {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQueryAvailableAbilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitTag = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestQueryAvailableAbilities {
    return {
      unitTag: isSet(object.unitTag) ? Number(object.unitTag) : 0,
    };
  },

  toJSON(message: RequestQueryAvailableAbilities): unknown {
    const obj: any = {};
    message.unitTag !== undefined &&
      (obj.unitTag = Math.round(message.unitTag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQueryAvailableAbilities>, I>>(
    object: I,
  ): RequestQueryAvailableAbilities {
    const message = createBaseRequestQueryAvailableAbilities();
    message.unitTag = object.unitTag ?? 0;
    return message;
  },
};

function createBaseResponseQueryAvailableAbilities(): ResponseQueryAvailableAbilities {
  return { abilities: [], unitTag: 0, unitTypeId: 0 };
}

export const ResponseQueryAvailableAbilities = {
  encode(
    message: ResponseQueryAvailableAbilities,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.abilities) {
      AvailableAbility.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.unitTag !== 0) {
      writer.uint32(16).uint64(message.unitTag);
    }
    if (message.unitTypeId !== 0) {
      writer.uint32(24).uint32(message.unitTypeId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseQueryAvailableAbilities {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQueryAvailableAbilities();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilities.push(
            AvailableAbility.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.unitTag = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.unitTypeId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseQueryAvailableAbilities {
    return {
      abilities: Array.isArray(object?.abilities)
        ? object.abilities.map((e: any) => AvailableAbility.fromJSON(e))
        : [],
      unitTag: isSet(object.unitTag) ? Number(object.unitTag) : 0,
      unitTypeId: isSet(object.unitTypeId) ? Number(object.unitTypeId) : 0,
    };
  },

  toJSON(message: ResponseQueryAvailableAbilities): unknown {
    const obj: any = {};
    if (message.abilities) {
      obj.abilities = message.abilities.map((e) =>
        e ? AvailableAbility.toJSON(e) : undefined,
      );
    } else {
      obj.abilities = [];
    }
    message.unitTag !== undefined &&
      (obj.unitTag = Math.round(message.unitTag));
    message.unitTypeId !== undefined &&
      (obj.unitTypeId = Math.round(message.unitTypeId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQueryAvailableAbilities>, I>>(
    object: I,
  ): ResponseQueryAvailableAbilities {
    const message = createBaseResponseQueryAvailableAbilities();
    message.abilities =
      object.abilities?.map((e) => AvailableAbility.fromPartial(e)) || [];
    message.unitTag = object.unitTag ?? 0;
    message.unitTypeId = object.unitTypeId ?? 0;
    return message;
  },
};

function createBaseRequestQueryBuildingPlacement(): RequestQueryBuildingPlacement {
  return { abilityId: 0, targetPos: undefined, placingUnitTag: 0 };
}

export const RequestQueryBuildingPlacement = {
  encode(
    message: RequestQueryBuildingPlacement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.targetPos !== undefined) {
      Point2D.encode(message.targetPos, writer.uint32(18).fork()).ldelim();
    }
    if (message.placingUnitTag !== 0) {
      writer.uint32(24).uint64(message.placingUnitTag);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): RequestQueryBuildingPlacement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRequestQueryBuildingPlacement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.int32();
          break;
        case 2:
          message.targetPos = Point2D.decode(reader, reader.uint32());
          break;
        case 3:
          message.placingUnitTag = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RequestQueryBuildingPlacement {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      targetPos: isSet(object.targetPos)
        ? Point2D.fromJSON(object.targetPos)
        : undefined,
      placingUnitTag: isSet(object.placingUnitTag)
        ? Number(object.placingUnitTag)
        : 0,
    };
  },

  toJSON(message: RequestQueryBuildingPlacement): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.targetPos !== undefined &&
      (obj.targetPos = message.targetPos
        ? Point2D.toJSON(message.targetPos)
        : undefined);
    message.placingUnitTag !== undefined &&
      (obj.placingUnitTag = Math.round(message.placingUnitTag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RequestQueryBuildingPlacement>, I>>(
    object: I,
  ): RequestQueryBuildingPlacement {
    const message = createBaseRequestQueryBuildingPlacement();
    message.abilityId = object.abilityId ?? 0;
    message.targetPos =
      object.targetPos !== undefined && object.targetPos !== null
        ? Point2D.fromPartial(object.targetPos)
        : undefined;
    message.placingUnitTag = object.placingUnitTag ?? 0;
    return message;
  },
};

function createBaseResponseQueryBuildingPlacement(): ResponseQueryBuildingPlacement {
  return { result: 1 };
}

export const ResponseQueryBuildingPlacement = {
  encode(
    message: ResponseQueryBuildingPlacement,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.result !== 1) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ResponseQueryBuildingPlacement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseQueryBuildingPlacement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResponseQueryBuildingPlacement {
    return {
      result: isSet(object.result) ? actionResultFromJSON(object.result) : 1,
    };
  },

  toJSON(message: ResponseQueryBuildingPlacement): unknown {
    const obj: any = {};
    message.result !== undefined &&
      (obj.result = actionResultToJSON(message.result));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResponseQueryBuildingPlacement>, I>>(
    object: I,
  ): ResponseQueryBuildingPlacement {
    const message = createBaseResponseQueryBuildingPlacement();
    message.result = object.result ?? 1;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
