/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SC2APIProtocol";

export enum Race {
  NoRace = 0,
  Terran = 1,
  Zerg = 2,
  Protoss = 3,
  Random = 4,
  UNRECOGNIZED = -1,
}

export function raceFromJSON(object: any): Race {
  switch (object) {
    case 0:
    case "NoRace":
      return Race.NoRace;
    case 1:
    case "Terran":
      return Race.Terran;
    case 2:
    case "Zerg":
      return Race.Zerg;
    case 3:
    case "Protoss":
      return Race.Protoss;
    case 4:
    case "Random":
      return Race.Random;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Race.UNRECOGNIZED;
  }
}

export function raceToJSON(object: Race): string {
  switch (object) {
    case Race.NoRace:
      return "NoRace";
    case Race.Terran:
      return "Terran";
    case Race.Zerg:
      return "Zerg";
    case Race.Protoss:
      return "Protoss";
    case Race.Random:
      return "Random";
    default:
      return "UNKNOWN";
  }
}

export interface AvailableAbility {
  abilityId: number;
  requiresPoint: boolean;
}

export interface ImageData {
  /** Number of bits per pixel; 8 bits for a byte etc. */
  bitsPerPixel: number;
  /** Dimension in pixels. */
  size: Size2DI | undefined;
  /** Binary data; the size of this buffer in bytes is width * height * bits_per_pixel / 8. */
  data: Uint8Array;
}

/**
 * Point on the screen/minimap (e.g., 0..64).
 * Note: bottom left of the screen is 0, 0.
 */
export interface PointI {
  x: number;
  y: number;
}

/** Screen space rectangular area. */
export interface RectangleI {
  p0: PointI | undefined;
  p1: PointI | undefined;
}

/**
 * Point on the game board, 0..255.
 * Note: bottom left of the screen is 0, 0.
 */
export interface Point2D {
  x: number;
  y: number;
}

/**
 * Point on the game board, 0..255.
 * Note: bottom left of the screen is 0, 0.
 */
export interface Point {
  x: number;
  y: number;
  z: number;
}

/** Screen dimensions. */
export interface Size2DI {
  x: number;
  y: number;
}

function createBaseAvailableAbility(): AvailableAbility {
  return { abilityId: 0, requiresPoint: false };
}

export const AvailableAbility = {
  encode(
    message: AvailableAbility,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.requiresPoint === true) {
      writer.uint32(16).bool(message.requiresPoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AvailableAbility {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAvailableAbility();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.int32();
          break;
        case 2:
          message.requiresPoint = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AvailableAbility {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      requiresPoint: isSet(object.requiresPoint)
        ? Boolean(object.requiresPoint)
        : false,
    };
  },

  toJSON(message: AvailableAbility): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.requiresPoint !== undefined &&
      (obj.requiresPoint = message.requiresPoint);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AvailableAbility>, I>>(
    object: I,
  ): AvailableAbility {
    const message = createBaseAvailableAbility();
    message.abilityId = object.abilityId ?? 0;
    message.requiresPoint = object.requiresPoint ?? false;
    return message;
  },
};

function createBaseImageData(): ImageData {
  return { bitsPerPixel: 0, size: undefined, data: new Uint8Array() };
}

export const ImageData = {
  encode(
    message: ImageData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.bitsPerPixel !== 0) {
      writer.uint32(8).int32(message.bitsPerPixel);
    }
    if (message.size !== undefined) {
      Size2DI.encode(message.size, writer.uint32(18).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ImageData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseImageData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bitsPerPixel = reader.int32();
          break;
        case 2:
          message.size = Size2DI.decode(reader, reader.uint32());
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ImageData {
    return {
      bitsPerPixel: isSet(object.bitsPerPixel)
        ? Number(object.bitsPerPixel)
        : 0,
      size: isSet(object.size) ? Size2DI.fromJSON(object.size) : undefined,
      data: isSet(object.data)
        ? bytesFromBase64(object.data)
        : new Uint8Array(),
    };
  },

  toJSON(message: ImageData): unknown {
    const obj: any = {};
    message.bitsPerPixel !== undefined &&
      (obj.bitsPerPixel = Math.round(message.bitsPerPixel));
    message.size !== undefined &&
      (obj.size = message.size ? Size2DI.toJSON(message.size) : undefined);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ImageData>, I>>(
    object: I,
  ): ImageData {
    const message = createBaseImageData();
    message.bitsPerPixel = object.bitsPerPixel ?? 0;
    message.size =
      object.size !== undefined && object.size !== null
        ? Size2DI.fromPartial(object.size)
        : undefined;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

function createBasePointI(): PointI {
  return { x: 0, y: 0 };
}

export const PointI = {
  encode(
    message: PointI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PointI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePointI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.int32();
          break;
        case 2:
          message.y = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PointI {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: PointI): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PointI>, I>>(object: I): PointI {
    const message = createBasePointI();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBaseRectangleI(): RectangleI {
  return { p0: undefined, p1: undefined };
}

export const RectangleI = {
  encode(
    message: RectangleI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.p0 !== undefined) {
      PointI.encode(message.p0, writer.uint32(10).fork()).ldelim();
    }
    if (message.p1 !== undefined) {
      PointI.encode(message.p1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RectangleI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRectangleI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p0 = PointI.decode(reader, reader.uint32());
          break;
        case 2:
          message.p1 = PointI.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RectangleI {
    return {
      p0: isSet(object.p0) ? PointI.fromJSON(object.p0) : undefined,
      p1: isSet(object.p1) ? PointI.fromJSON(object.p1) : undefined,
    };
  },

  toJSON(message: RectangleI): unknown {
    const obj: any = {};
    message.p0 !== undefined &&
      (obj.p0 = message.p0 ? PointI.toJSON(message.p0) : undefined);
    message.p1 !== undefined &&
      (obj.p1 = message.p1 ? PointI.toJSON(message.p1) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RectangleI>, I>>(
    object: I,
  ): RectangleI {
    const message = createBaseRectangleI();
    message.p0 =
      object.p0 !== undefined && object.p0 !== null
        ? PointI.fromPartial(object.p0)
        : undefined;
    message.p1 =
      object.p1 !== undefined && object.p1 !== null
        ? PointI.fromPartial(object.p1)
        : undefined;
    return message;
  },
};

function createBasePoint2D(): Point2D {
  return { x: 0, y: 0 };
}

export const Point2D = {
  encode(
    message: Point2D,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Point2D {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoint2D();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Point2D {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: Point2D): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Point2D>, I>>(object: I): Point2D {
    const message = createBasePoint2D();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    return message;
  },
};

function createBasePoint(): Point {
  return { x: 0, y: 0, z: 0 };
}

export const Point = {
  encode(message: Point, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Point {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Point {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Point): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Point>, I>>(object: I): Point {
    const message = createBasePoint();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseSize2DI(): Size2DI {
  return { x: 0, y: 0 };
}

export const Size2DI = {
  encode(
    message: Size2DI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(8).int32(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(16).int32(message.y);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Size2DI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSize2DI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.int32();
          break;
        case 2:
          message.y = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Size2DI {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
    };
  },

  toJSON(message: Size2DI): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = Math.round(message.x));
    message.y !== undefined && (obj.y = Math.round(message.y));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Size2DI>, I>>(object: I): Size2DI {
    const message = createBaseSize2DI();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
