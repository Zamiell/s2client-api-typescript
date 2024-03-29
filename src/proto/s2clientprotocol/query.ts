/* eslint-disable */
// @generated by protobuf-ts 2.8.2 with parameter ts_nocheck,eslint_disable
// @generated from protobuf file "s2clientprotocol/query.proto" (package "SC2APIProtocol", syntax proto2)
// tslint:disable
// @ts-nocheck
import type {
  BinaryReadOptions,
  BinaryWriteOptions,
  IBinaryReader,
  IBinaryWriter,
  PartialMessage,
} from "@protobuf-ts/runtime";
import {
  MESSAGE_TYPE,
  MessageType,
  UnknownFieldHandler,
  WireType,
  reflectionMergePartial,
} from "@protobuf-ts/runtime";
import { AvailableAbility, Point2D } from "./common";
import { ActionResult } from "./error";
/**
 * @generated from protobuf message SC2APIProtocol.RequestQuery
 */
export interface RequestQuery {
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.RequestQueryPathing pathing = 1;
   */
  pathing: RequestQueryPathing[];
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.RequestQueryAvailableAbilities abilities = 2;
   */
  abilities: RequestQueryAvailableAbilities[];
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.RequestQueryBuildingPlacement placements = 3;
   */
  placements: RequestQueryBuildingPlacement[];
  /**
   * @generated from protobuf field: optional bool ignore_resource_requirements = 4;
   */
  ignoreResourceRequirements?: boolean; // Ignores requirements like food, minerals and so on.
}
/**
 * @generated from protobuf message SC2APIProtocol.ResponseQuery
 */
export interface ResponseQuery {
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.ResponseQueryPathing pathing = 1;
   */
  pathing: ResponseQueryPathing[];
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.ResponseQueryAvailableAbilities abilities = 2;
   */
  abilities: ResponseQueryAvailableAbilities[];
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.ResponseQueryBuildingPlacement placements = 3;
   */
  placements: ResponseQueryBuildingPlacement[];
}
/**
 * --------------------------------------------------------------------------------------------------
 *
 * @generated from protobuf message SC2APIProtocol.RequestQueryPathing
 */
export interface RequestQueryPathing {
  /**
   * @generated from protobuf oneof: start
   */
  start:
    | {
        oneofKind: "startPos";
        /**
         * @generated from protobuf field: SC2APIProtocol.Point2D start_pos = 1;
         */
        startPos: Point2D;
      }
    | {
        oneofKind: "unitTag";
        /**
         * @generated from protobuf field: uint64 unit_tag = 2;
         */
        unitTag: bigint;
      }
    | {
        oneofKind: undefined;
      };
  /**
   * @generated from protobuf field: optional SC2APIProtocol.Point2D end_pos = 3;
   */
  endPos?: Point2D;
}
/**
 * @generated from protobuf message SC2APIProtocol.ResponseQueryPathing
 */
export interface ResponseQueryPathing {
  /**
   * @generated from protobuf field: optional float distance = 1;
   */
  distance?: number; // 0 if no path exists
}
/**
 * --------------------------------------------------------------------------------------------------
 *
 * @generated from protobuf message SC2APIProtocol.RequestQueryAvailableAbilities
 */
export interface RequestQueryAvailableAbilities {
  /**
   * @generated from protobuf field: optional uint64 unit_tag = 1;
   */
  unitTag?: bigint;
}
/**
 * @generated from protobuf message SC2APIProtocol.ResponseQueryAvailableAbilities
 */
export interface ResponseQueryAvailableAbilities {
  /**
   * @generated from protobuf field: repeated SC2APIProtocol.AvailableAbility abilities = 1;
   */
  abilities: AvailableAbility[];
  /**
   * @generated from protobuf field: optional uint64 unit_tag = 2;
   */
  unitTag?: bigint;
  /**
   * @generated from protobuf field: optional uint32 unit_type_id = 3;
   */
  unitTypeId?: number;
}
/**
 * --------------------------------------------------------------------------------------------------
 *
 * @generated from protobuf message SC2APIProtocol.RequestQueryBuildingPlacement
 */
export interface RequestQueryBuildingPlacement {
  /**
   * @generated from protobuf field: optional int32 ability_id = 1;
   */
  abilityId?: number;
  /**
   * @generated from protobuf field: optional SC2APIProtocol.Point2D target_pos = 2;
   */
  targetPos?: Point2D;
  /**
   * @generated from protobuf field: optional uint64 placing_unit_tag = 3;
   */
  placingUnitTag?: bigint; // Not required
}
/**
 * @generated from protobuf message SC2APIProtocol.ResponseQueryBuildingPlacement
 */
export interface ResponseQueryBuildingPlacement {
  /**
   * @generated from protobuf field: optional SC2APIProtocol.ActionResult result = 1;
   */
  result?: ActionResult;
}
// @generated message type with reflection information, may provide speed optimized methods
class RequestQuery$Type extends MessageType<RequestQuery> {
  constructor() {
    super("SC2APIProtocol.RequestQuery", [
      {
        no: 1,
        name: "pathing",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => RequestQueryPathing,
      },
      {
        no: 2,
        name: "abilities",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => RequestQueryAvailableAbilities,
      },
      {
        no: 3,
        name: "placements",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => RequestQueryBuildingPlacement,
      },
      {
        no: 4,
        name: "ignore_resource_requirements",
        kind: "scalar",
        opt: true,
        T: 8 /*ScalarType.BOOL*/,
      },
    ]);
  }
  create(value?: PartialMessage<RequestQuery>): RequestQuery {
    const message = { pathing: [], abilities: [], placements: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<RequestQuery>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: RequestQuery,
  ): RequestQuery {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated SC2APIProtocol.RequestQueryPathing pathing */ 1:
          message.pathing.push(
            RequestQueryPathing.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        case /* repeated SC2APIProtocol.RequestQueryAvailableAbilities abilities */ 2:
          message.abilities.push(
            RequestQueryAvailableAbilities.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        case /* repeated SC2APIProtocol.RequestQueryBuildingPlacement placements */ 3:
          message.placements.push(
            RequestQueryBuildingPlacement.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        case /* optional bool ignore_resource_requirements */ 4:
          message.ignoreResourceRequirements = reader.bool();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: RequestQuery,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated SC2APIProtocol.RequestQueryPathing pathing = 1; */
    for (let i = 0; i < message.pathing.length; i++)
      RequestQueryPathing.internalBinaryWrite(
        message.pathing[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated SC2APIProtocol.RequestQueryAvailableAbilities abilities = 2; */
    for (let i = 0; i < message.abilities.length; i++)
      RequestQueryAvailableAbilities.internalBinaryWrite(
        message.abilities[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated SC2APIProtocol.RequestQueryBuildingPlacement placements = 3; */
    for (let i = 0; i < message.placements.length; i++)
      RequestQueryBuildingPlacement.internalBinaryWrite(
        message.placements[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional bool ignore_resource_requirements = 4; */
    if (message.ignoreResourceRequirements !== undefined)
      writer.tag(4, WireType.Varint).bool(message.ignoreResourceRequirements);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.RequestQuery
 */
export const RequestQuery = new RequestQuery$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResponseQuery$Type extends MessageType<ResponseQuery> {
  constructor() {
    super("SC2APIProtocol.ResponseQuery", [
      {
        no: 1,
        name: "pathing",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => ResponseQueryPathing,
      },
      {
        no: 2,
        name: "abilities",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => ResponseQueryAvailableAbilities,
      },
      {
        no: 3,
        name: "placements",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => ResponseQueryBuildingPlacement,
      },
    ]);
  }
  create(value?: PartialMessage<ResponseQuery>): ResponseQuery {
    const message = { pathing: [], abilities: [], placements: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<ResponseQuery>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ResponseQuery,
  ): ResponseQuery {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated SC2APIProtocol.ResponseQueryPathing pathing */ 1:
          message.pathing.push(
            ResponseQueryPathing.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        case /* repeated SC2APIProtocol.ResponseQueryAvailableAbilities abilities */ 2:
          message.abilities.push(
            ResponseQueryAvailableAbilities.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        case /* repeated SC2APIProtocol.ResponseQueryBuildingPlacement placements */ 3:
          message.placements.push(
            ResponseQueryBuildingPlacement.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ResponseQuery,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated SC2APIProtocol.ResponseQueryPathing pathing = 1; */
    for (let i = 0; i < message.pathing.length; i++)
      ResponseQueryPathing.internalBinaryWrite(
        message.pathing[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated SC2APIProtocol.ResponseQueryAvailableAbilities abilities = 2; */
    for (let i = 0; i < message.abilities.length; i++)
      ResponseQueryAvailableAbilities.internalBinaryWrite(
        message.abilities[i],
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* repeated SC2APIProtocol.ResponseQueryBuildingPlacement placements = 3; */
    for (let i = 0; i < message.placements.length; i++)
      ResponseQueryBuildingPlacement.internalBinaryWrite(
        message.placements[i],
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.ResponseQuery
 */
export const ResponseQuery = new ResponseQuery$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestQueryPathing$Type extends MessageType<RequestQueryPathing> {
  constructor() {
    super("SC2APIProtocol.RequestQueryPathing", [
      {
        no: 1,
        name: "start_pos",
        kind: "message",
        oneof: "start",
        T: () => Point2D,
      },
      {
        no: 2,
        name: "unit_tag",
        kind: "scalar",
        oneof: "start",
        T: 4 /*ScalarType.UINT64*/,
        L: 0 /*LongType.BIGINT*/,
      },
      { no: 3, name: "end_pos", kind: "message", T: () => Point2D },
    ]);
  }
  create(value?: PartialMessage<RequestQueryPathing>): RequestQueryPathing {
    const message = { start: { oneofKind: undefined } };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<RequestQueryPathing>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: RequestQueryPathing,
  ): RequestQueryPathing {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* SC2APIProtocol.Point2D start_pos */ 1:
          message.start = {
            oneofKind: "startPos",
            startPos: Point2D.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
              (message.start as any).startPos,
            ),
          };
          break;
        case /* uint64 unit_tag */ 2:
          message.start = {
            oneofKind: "unitTag",
            unitTag: reader.uint64().toBigInt(),
          };
          break;
        case /* optional SC2APIProtocol.Point2D end_pos */ 3:
          message.endPos = Point2D.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.endPos,
          );
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: RequestQueryPathing,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* SC2APIProtocol.Point2D start_pos = 1; */
    if (message.start.oneofKind === "startPos")
      Point2D.internalBinaryWrite(
        message.start.startPos,
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* uint64 unit_tag = 2; */
    if (message.start.oneofKind === "unitTag")
      writer.tag(2, WireType.Varint).uint64(message.start.unitTag);
    /* optional SC2APIProtocol.Point2D end_pos = 3; */
    if (message.endPos)
      Point2D.internalBinaryWrite(
        message.endPos,
        writer.tag(3, WireType.LengthDelimited).fork(),
        options,
      ).join();
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.RequestQueryPathing
 */
export const RequestQueryPathing = new RequestQueryPathing$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResponseQueryPathing$Type extends MessageType<ResponseQueryPathing> {
  constructor() {
    super("SC2APIProtocol.ResponseQueryPathing", [
      {
        no: 1,
        name: "distance",
        kind: "scalar",
        opt: true,
        T: 2 /*ScalarType.FLOAT*/,
      },
    ]);
  }
  create(value?: PartialMessage<ResponseQueryPathing>): ResponseQueryPathing {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<ResponseQueryPathing>(this, message, value);
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ResponseQueryPathing,
  ): ResponseQueryPathing {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional float distance */ 1:
          message.distance = reader.float();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ResponseQueryPathing,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional float distance = 1; */
    if (message.distance !== undefined)
      writer.tag(1, WireType.Bit32).float(message.distance);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.ResponseQueryPathing
 */
export const ResponseQueryPathing = new ResponseQueryPathing$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestQueryAvailableAbilities$Type extends MessageType<RequestQueryAvailableAbilities> {
  constructor() {
    super("SC2APIProtocol.RequestQueryAvailableAbilities", [
      {
        no: 1,
        name: "unit_tag",
        kind: "scalar",
        opt: true,
        T: 4 /*ScalarType.UINT64*/,
        L: 0 /*LongType.BIGINT*/,
      },
    ]);
  }
  create(
    value?: PartialMessage<RequestQueryAvailableAbilities>,
  ): RequestQueryAvailableAbilities {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<RequestQueryAvailableAbilities>(
        this,
        message,
        value,
      );
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: RequestQueryAvailableAbilities,
  ): RequestQueryAvailableAbilities {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional uint64 unit_tag */ 1:
          message.unitTag = reader.uint64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: RequestQueryAvailableAbilities,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional uint64 unit_tag = 1; */
    if (message.unitTag !== undefined)
      writer.tag(1, WireType.Varint).uint64(message.unitTag);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.RequestQueryAvailableAbilities
 */
export const RequestQueryAvailableAbilities =
  new RequestQueryAvailableAbilities$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResponseQueryAvailableAbilities$Type extends MessageType<ResponseQueryAvailableAbilities> {
  constructor() {
    super("SC2APIProtocol.ResponseQueryAvailableAbilities", [
      {
        no: 1,
        name: "abilities",
        kind: "message",
        repeat: 2 /*RepeatType.UNPACKED*/,
        T: () => AvailableAbility,
      },
      {
        no: 2,
        name: "unit_tag",
        kind: "scalar",
        opt: true,
        T: 4 /*ScalarType.UINT64*/,
        L: 0 /*LongType.BIGINT*/,
      },
      {
        no: 3,
        name: "unit_type_id",
        kind: "scalar",
        opt: true,
        T: 13 /*ScalarType.UINT32*/,
      },
    ]);
  }
  create(
    value?: PartialMessage<ResponseQueryAvailableAbilities>,
  ): ResponseQueryAvailableAbilities {
    const message = { abilities: [] };
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<ResponseQueryAvailableAbilities>(
        this,
        message,
        value,
      );
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ResponseQueryAvailableAbilities,
  ): ResponseQueryAvailableAbilities {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* repeated SC2APIProtocol.AvailableAbility abilities */ 1:
          message.abilities.push(
            AvailableAbility.internalBinaryRead(
              reader,
              reader.uint32(),
              options,
            ),
          );
          break;
        case /* optional uint64 unit_tag */ 2:
          message.unitTag = reader.uint64().toBigInt();
          break;
        case /* optional uint32 unit_type_id */ 3:
          message.unitTypeId = reader.uint32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ResponseQueryAvailableAbilities,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* repeated SC2APIProtocol.AvailableAbility abilities = 1; */
    for (let i = 0; i < message.abilities.length; i++)
      AvailableAbility.internalBinaryWrite(
        message.abilities[i],
        writer.tag(1, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional uint64 unit_tag = 2; */
    if (message.unitTag !== undefined)
      writer.tag(2, WireType.Varint).uint64(message.unitTag);
    /* optional uint32 unit_type_id = 3; */
    if (message.unitTypeId !== undefined)
      writer.tag(3, WireType.Varint).uint32(message.unitTypeId);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.ResponseQueryAvailableAbilities
 */
export const ResponseQueryAvailableAbilities =
  new ResponseQueryAvailableAbilities$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RequestQueryBuildingPlacement$Type extends MessageType<RequestQueryBuildingPlacement> {
  constructor() {
    super("SC2APIProtocol.RequestQueryBuildingPlacement", [
      {
        no: 1,
        name: "ability_id",
        kind: "scalar",
        opt: true,
        T: 5 /*ScalarType.INT32*/,
      },
      { no: 2, name: "target_pos", kind: "message", T: () => Point2D },
      {
        no: 3,
        name: "placing_unit_tag",
        kind: "scalar",
        opt: true,
        T: 4 /*ScalarType.UINT64*/,
        L: 0 /*LongType.BIGINT*/,
      },
    ]);
  }
  create(
    value?: PartialMessage<RequestQueryBuildingPlacement>,
  ): RequestQueryBuildingPlacement {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<RequestQueryBuildingPlacement>(
        this,
        message,
        value,
      );
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: RequestQueryBuildingPlacement,
  ): RequestQueryBuildingPlacement {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional int32 ability_id */ 1:
          message.abilityId = reader.int32();
          break;
        case /* optional SC2APIProtocol.Point2D target_pos */ 2:
          message.targetPos = Point2D.internalBinaryRead(
            reader,
            reader.uint32(),
            options,
            message.targetPos,
          );
          break;
        case /* optional uint64 placing_unit_tag */ 3:
          message.placingUnitTag = reader.uint64().toBigInt();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: RequestQueryBuildingPlacement,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional int32 ability_id = 1; */
    if (message.abilityId !== undefined)
      writer.tag(1, WireType.Varint).int32(message.abilityId);
    /* optional SC2APIProtocol.Point2D target_pos = 2; */
    if (message.targetPos)
      Point2D.internalBinaryWrite(
        message.targetPos,
        writer.tag(2, WireType.LengthDelimited).fork(),
        options,
      ).join();
    /* optional uint64 placing_unit_tag = 3; */
    if (message.placingUnitTag !== undefined)
      writer.tag(3, WireType.Varint).uint64(message.placingUnitTag);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.RequestQueryBuildingPlacement
 */
export const RequestQueryBuildingPlacement =
  new RequestQueryBuildingPlacement$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ResponseQueryBuildingPlacement$Type extends MessageType<ResponseQueryBuildingPlacement> {
  constructor() {
    super("SC2APIProtocol.ResponseQueryBuildingPlacement", [
      {
        no: 1,
        name: "result",
        kind: "enum",
        opt: true,
        T: () => ["SC2APIProtocol.ActionResult", ActionResult],
      },
    ]);
  }
  create(
    value?: PartialMessage<ResponseQueryBuildingPlacement>,
  ): ResponseQueryBuildingPlacement {
    const message = {};
    globalThis.Object.defineProperty(message, MESSAGE_TYPE, {
      enumerable: false,
      value: this,
    });
    if (value !== undefined)
      reflectionMergePartial<ResponseQueryBuildingPlacement>(
        this,
        message,
        value,
      );
    return message;
  }
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: ResponseQueryBuildingPlacement,
  ): ResponseQueryBuildingPlacement {
    let message = target ?? this.create(),
      end = reader.pos + length;
    while (reader.pos < end) {
      let [fieldNo, wireType] = reader.tag();
      switch (fieldNo) {
        case /* optional SC2APIProtocol.ActionResult result */ 1:
          message.result = reader.int32();
          break;
        default:
          let u = options.readUnknownField;
          if (u === "throw")
            throw new globalThis.Error(
              `Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`,
            );
          let d = reader.skip(wireType);
          if (u !== false)
            (u === true ? UnknownFieldHandler.onRead : u)(
              this.typeName,
              message,
              fieldNo,
              wireType,
              d,
            );
      }
    }
    return message;
  }
  internalBinaryWrite(
    message: ResponseQueryBuildingPlacement,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter {
    /* optional SC2APIProtocol.ActionResult result = 1; */
    if (message.result !== undefined)
      writer.tag(1, WireType.Varint).int32(message.result);
    let u = options.writeUnknownFields;
    if (u !== false)
      (u == true ? UnknownFieldHandler.onWrite : u)(
        this.typeName,
        message,
        writer,
      );
    return writer;
  }
}
/**
 * @generated MessageType for protobuf message SC2APIProtocol.ResponseQueryBuildingPlacement
 */
export const ResponseQueryBuildingPlacement =
  new ResponseQueryBuildingPlacement$Type();
