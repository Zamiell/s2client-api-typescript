/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Point, Point2D } from "../s2clientprotocol/common";

export const protobufPackage = "SC2APIProtocol";

export enum DebugGameState {
  show_map = 1,
  control_enemy = 2,
  food = 3,
  free = 4,
  all_resources = 5,
  god = 6,
  minerals = 7,
  gas = 8,
  cooldown = 9,
  tech_tree = 10,
  upgrade = 11,
  fast_build = 12,
  UNRECOGNIZED = -1,
}

export function debugGameStateFromJSON(object: any): DebugGameState {
  switch (object) {
    case 1:
    case "show_map":
      return DebugGameState.show_map;
    case 2:
    case "control_enemy":
      return DebugGameState.control_enemy;
    case 3:
    case "food":
      return DebugGameState.food;
    case 4:
    case "free":
      return DebugGameState.free;
    case 5:
    case "all_resources":
      return DebugGameState.all_resources;
    case 6:
    case "god":
      return DebugGameState.god;
    case 7:
    case "minerals":
      return DebugGameState.minerals;
    case 8:
    case "gas":
      return DebugGameState.gas;
    case 9:
    case "cooldown":
      return DebugGameState.cooldown;
    case 10:
    case "tech_tree":
      return DebugGameState.tech_tree;
    case 11:
    case "upgrade":
      return DebugGameState.upgrade;
    case 12:
    case "fast_build":
      return DebugGameState.fast_build;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DebugGameState.UNRECOGNIZED;
  }
}

export function debugGameStateToJSON(object: DebugGameState): string {
  switch (object) {
    case DebugGameState.show_map:
      return "show_map";
    case DebugGameState.control_enemy:
      return "control_enemy";
    case DebugGameState.food:
      return "food";
    case DebugGameState.free:
      return "free";
    case DebugGameState.all_resources:
      return "all_resources";
    case DebugGameState.god:
      return "god";
    case DebugGameState.minerals:
      return "minerals";
    case DebugGameState.gas:
      return "gas";
    case DebugGameState.cooldown:
      return "cooldown";
    case DebugGameState.tech_tree:
      return "tech_tree";
    case DebugGameState.upgrade:
      return "upgrade";
    case DebugGameState.fast_build:
      return "fast_build";
    default:
      return "UNKNOWN";
  }
}

/** Issue various useful commands to the game engine. */
export interface DebugCommand {
  draw: DebugDraw | undefined;
  gameState: DebugGameState | undefined;
  createUnit: DebugCreateUnit | undefined;
  killUnit: DebugKillUnit | undefined;
  testProcess: DebugTestProcess | undefined;
  /** Useful only for single-player "curriculum" maps. */
  score: DebugSetScore | undefined;
  endGame: DebugEndGame | undefined;
  unitValue: DebugSetUnitValue | undefined;
}

export interface DebugDraw {
  text: DebugText[];
  lines: DebugLine[];
  boxes: DebugBox[];
  spheres: DebugSphere[];
}

export interface Line {
  p0: Point | undefined;
  p1: Point | undefined;
}

export interface Color {
  r: number;
  g: number;
  b: number;
}

/** Display debug text on screen. */
export interface DebugText {
  color: Color | undefined;
  /** Text to display. */
  text: string;
  /** Virtualized position in 2D (the screen is 0..1, 0..1 for any resolution). */
  virtualPos: Point | undefined;
  /** Position in the world. */
  worldPos: Point | undefined;
  /** Pixel height of the text. Defaults to 8px. */
  size: number;
}

/** Display debug lines on screen. */
export interface DebugLine {
  color: Color | undefined;
  /** World space line. */
  line: Line | undefined;
}

/** Display debug boxes on screen. */
export interface DebugBox {
  color: Color | undefined;
  min: Point | undefined;
  max: Point | undefined;
}

/** Display debug spheres on screen. */
export interface DebugSphere {
  color: Color | undefined;
  p: Point | undefined;
  r: number;
}

export interface DebugCreateUnit {
  unitType: number;
  owner: number;
  pos: Point2D | undefined;
  quantity: number;
}

export interface DebugKillUnit {
  tag: number[];
}

export interface DebugTestProcess {
  test: DebugTestProcess_Test;
  delayMs: number;
}

export enum DebugTestProcess_Test {
  hang = 1,
  crash = 2,
  exit = 3,
  UNRECOGNIZED = -1,
}

export function debugTestProcess_TestFromJSON(
  object: any,
): DebugTestProcess_Test {
  switch (object) {
    case 1:
    case "hang":
      return DebugTestProcess_Test.hang;
    case 2:
    case "crash":
      return DebugTestProcess_Test.crash;
    case 3:
    case "exit":
      return DebugTestProcess_Test.exit;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DebugTestProcess_Test.UNRECOGNIZED;
  }
}

export function debugTestProcess_TestToJSON(
  object: DebugTestProcess_Test,
): string {
  switch (object) {
    case DebugTestProcess_Test.hang:
      return "hang";
    case DebugTestProcess_Test.crash:
      return "crash";
    case DebugTestProcess_Test.exit:
      return "exit";
    default:
      return "UNKNOWN";
  }
}

export interface DebugSetScore {
  score: number;
}

export interface DebugEndGame {
  endResult: DebugEndGame_EndResult;
}

export enum DebugEndGame_EndResult {
  /** Surrender - Default if nothing is set. The current player admits defeat. */
  Surrender = 1,
  DeclareVictory = 2,
  UNRECOGNIZED = -1,
}

export function debugEndGame_EndResultFromJSON(
  object: any,
): DebugEndGame_EndResult {
  switch (object) {
    case 1:
    case "Surrender":
      return DebugEndGame_EndResult.Surrender;
    case 2:
    case "DeclareVictory":
      return DebugEndGame_EndResult.DeclareVictory;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DebugEndGame_EndResult.UNRECOGNIZED;
  }
}

export function debugEndGame_EndResultToJSON(
  object: DebugEndGame_EndResult,
): string {
  switch (object) {
    case DebugEndGame_EndResult.Surrender:
      return "Surrender";
    case DebugEndGame_EndResult.DeclareVictory:
      return "DeclareVictory";
    default:
      return "UNKNOWN";
  }
}

export interface DebugSetUnitValue {
  unitValue: DebugSetUnitValue_UnitValue;
  value: number;
  unitTag: number;
}

export enum DebugSetUnitValue_UnitValue {
  Energy = 1,
  Life = 2,
  Shields = 3,
  UNRECOGNIZED = -1,
}

export function debugSetUnitValue_UnitValueFromJSON(
  object: any,
): DebugSetUnitValue_UnitValue {
  switch (object) {
    case 1:
    case "Energy":
      return DebugSetUnitValue_UnitValue.Energy;
    case 2:
    case "Life":
      return DebugSetUnitValue_UnitValue.Life;
    case 3:
    case "Shields":
      return DebugSetUnitValue_UnitValue.Shields;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DebugSetUnitValue_UnitValue.UNRECOGNIZED;
  }
}

export function debugSetUnitValue_UnitValueToJSON(
  object: DebugSetUnitValue_UnitValue,
): string {
  switch (object) {
    case DebugSetUnitValue_UnitValue.Energy:
      return "Energy";
    case DebugSetUnitValue_UnitValue.Life:
      return "Life";
    case DebugSetUnitValue_UnitValue.Shields:
      return "Shields";
    default:
      return "UNKNOWN";
  }
}

function createBaseDebugCommand(): DebugCommand {
  return {
    draw: undefined,
    gameState: undefined,
    createUnit: undefined,
    killUnit: undefined,
    testProcess: undefined,
    score: undefined,
    endGame: undefined,
    unitValue: undefined,
  };
}

export const DebugCommand = {
  encode(
    message: DebugCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.draw !== undefined) {
      DebugDraw.encode(message.draw, writer.uint32(10).fork()).ldelim();
    }
    if (message.gameState !== undefined) {
      writer.uint32(16).int32(message.gameState);
    }
    if (message.createUnit !== undefined) {
      DebugCreateUnit.encode(
        message.createUnit,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.killUnit !== undefined) {
      DebugKillUnit.encode(message.killUnit, writer.uint32(34).fork()).ldelim();
    }
    if (message.testProcess !== undefined) {
      DebugTestProcess.encode(
        message.testProcess,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.score !== undefined) {
      DebugSetScore.encode(message.score, writer.uint32(50).fork()).ldelim();
    }
    if (message.endGame !== undefined) {
      DebugEndGame.encode(message.endGame, writer.uint32(58).fork()).ldelim();
    }
    if (message.unitValue !== undefined) {
      DebugSetUnitValue.encode(
        message.unitValue,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.draw = DebugDraw.decode(reader, reader.uint32());
          break;
        case 2:
          message.gameState = reader.int32() as any;
          break;
        case 3:
          message.createUnit = DebugCreateUnit.decode(reader, reader.uint32());
          break;
        case 4:
          message.killUnit = DebugKillUnit.decode(reader, reader.uint32());
          break;
        case 5:
          message.testProcess = DebugTestProcess.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.score = DebugSetScore.decode(reader, reader.uint32());
          break;
        case 7:
          message.endGame = DebugEndGame.decode(reader, reader.uint32());
          break;
        case 8:
          message.unitValue = DebugSetUnitValue.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugCommand {
    return {
      draw: isSet(object.draw) ? DebugDraw.fromJSON(object.draw) : undefined,
      gameState: isSet(object.gameState)
        ? debugGameStateFromJSON(object.gameState)
        : undefined,
      createUnit: isSet(object.createUnit)
        ? DebugCreateUnit.fromJSON(object.createUnit)
        : undefined,
      killUnit: isSet(object.killUnit)
        ? DebugKillUnit.fromJSON(object.killUnit)
        : undefined,
      testProcess: isSet(object.testProcess)
        ? DebugTestProcess.fromJSON(object.testProcess)
        : undefined,
      score: isSet(object.score)
        ? DebugSetScore.fromJSON(object.score)
        : undefined,
      endGame: isSet(object.endGame)
        ? DebugEndGame.fromJSON(object.endGame)
        : undefined,
      unitValue: isSet(object.unitValue)
        ? DebugSetUnitValue.fromJSON(object.unitValue)
        : undefined,
    };
  },

  toJSON(message: DebugCommand): unknown {
    const obj: any = {};
    message.draw !== undefined &&
      (obj.draw = message.draw ? DebugDraw.toJSON(message.draw) : undefined);
    message.gameState !== undefined &&
      (obj.gameState =
        message.gameState !== undefined
          ? debugGameStateToJSON(message.gameState)
          : undefined);
    message.createUnit !== undefined &&
      (obj.createUnit = message.createUnit
        ? DebugCreateUnit.toJSON(message.createUnit)
        : undefined);
    message.killUnit !== undefined &&
      (obj.killUnit = message.killUnit
        ? DebugKillUnit.toJSON(message.killUnit)
        : undefined);
    message.testProcess !== undefined &&
      (obj.testProcess = message.testProcess
        ? DebugTestProcess.toJSON(message.testProcess)
        : undefined);
    message.score !== undefined &&
      (obj.score = message.score
        ? DebugSetScore.toJSON(message.score)
        : undefined);
    message.endGame !== undefined &&
      (obj.endGame = message.endGame
        ? DebugEndGame.toJSON(message.endGame)
        : undefined);
    message.unitValue !== undefined &&
      (obj.unitValue = message.unitValue
        ? DebugSetUnitValue.toJSON(message.unitValue)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugCommand>, I>>(
    object: I,
  ): DebugCommand {
    const message = createBaseDebugCommand();
    message.draw =
      object.draw !== undefined && object.draw !== null
        ? DebugDraw.fromPartial(object.draw)
        : undefined;
    message.gameState = object.gameState ?? undefined;
    message.createUnit =
      object.createUnit !== undefined && object.createUnit !== null
        ? DebugCreateUnit.fromPartial(object.createUnit)
        : undefined;
    message.killUnit =
      object.killUnit !== undefined && object.killUnit !== null
        ? DebugKillUnit.fromPartial(object.killUnit)
        : undefined;
    message.testProcess =
      object.testProcess !== undefined && object.testProcess !== null
        ? DebugTestProcess.fromPartial(object.testProcess)
        : undefined;
    message.score =
      object.score !== undefined && object.score !== null
        ? DebugSetScore.fromPartial(object.score)
        : undefined;
    message.endGame =
      object.endGame !== undefined && object.endGame !== null
        ? DebugEndGame.fromPartial(object.endGame)
        : undefined;
    message.unitValue =
      object.unitValue !== undefined && object.unitValue !== null
        ? DebugSetUnitValue.fromPartial(object.unitValue)
        : undefined;
    return message;
  },
};

function createBaseDebugDraw(): DebugDraw {
  return { text: [], lines: [], boxes: [], spheres: [] };
}

export const DebugDraw = {
  encode(
    message: DebugDraw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.text) {
      DebugText.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lines) {
      DebugLine.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.boxes) {
      DebugBox.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.spheres) {
      DebugSphere.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugDraw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugDraw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text.push(DebugText.decode(reader, reader.uint32()));
          break;
        case 2:
          message.lines.push(DebugLine.decode(reader, reader.uint32()));
          break;
        case 3:
          message.boxes.push(DebugBox.decode(reader, reader.uint32()));
          break;
        case 4:
          message.spheres.push(DebugSphere.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugDraw {
    return {
      text: Array.isArray(object?.text)
        ? object.text.map((e: any) => DebugText.fromJSON(e))
        : [],
      lines: Array.isArray(object?.lines)
        ? object.lines.map((e: any) => DebugLine.fromJSON(e))
        : [],
      boxes: Array.isArray(object?.boxes)
        ? object.boxes.map((e: any) => DebugBox.fromJSON(e))
        : [],
      spheres: Array.isArray(object?.spheres)
        ? object.spheres.map((e: any) => DebugSphere.fromJSON(e))
        : [],
    };
  },

  toJSON(message: DebugDraw): unknown {
    const obj: any = {};
    if (message.text) {
      obj.text = message.text.map((e) => (e ? DebugText.toJSON(e) : undefined));
    } else {
      obj.text = [];
    }
    if (message.lines) {
      obj.lines = message.lines.map((e) =>
        e ? DebugLine.toJSON(e) : undefined,
      );
    } else {
      obj.lines = [];
    }
    if (message.boxes) {
      obj.boxes = message.boxes.map((e) =>
        e ? DebugBox.toJSON(e) : undefined,
      );
    } else {
      obj.boxes = [];
    }
    if (message.spheres) {
      obj.spheres = message.spheres.map((e) =>
        e ? DebugSphere.toJSON(e) : undefined,
      );
    } else {
      obj.spheres = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugDraw>, I>>(
    object: I,
  ): DebugDraw {
    const message = createBaseDebugDraw();
    message.text = object.text?.map((e) => DebugText.fromPartial(e)) || [];
    message.lines = object.lines?.map((e) => DebugLine.fromPartial(e)) || [];
    message.boxes = object.boxes?.map((e) => DebugBox.fromPartial(e)) || [];
    message.spheres =
      object.spheres?.map((e) => DebugSphere.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLine(): Line {
  return { p0: undefined, p1: undefined };
}

export const Line = {
  encode(message: Line, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.p0 !== undefined) {
      Point.encode(message.p0, writer.uint32(10).fork()).ldelim();
    }
    if (message.p1 !== undefined) {
      Point.encode(message.p1, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Line {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.p0 = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.p1 = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Line {
    return {
      p0: isSet(object.p0) ? Point.fromJSON(object.p0) : undefined,
      p1: isSet(object.p1) ? Point.fromJSON(object.p1) : undefined,
    };
  },

  toJSON(message: Line): unknown {
    const obj: any = {};
    message.p0 !== undefined &&
      (obj.p0 = message.p0 ? Point.toJSON(message.p0) : undefined);
    message.p1 !== undefined &&
      (obj.p1 = message.p1 ? Point.toJSON(message.p1) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Line>, I>>(object: I): Line {
    const message = createBaseLine();
    message.p0 =
      object.p0 !== undefined && object.p0 !== null
        ? Point.fromPartial(object.p0)
        : undefined;
    message.p1 =
      object.p1 !== undefined && object.p1 !== null
        ? Point.fromPartial(object.p1)
        : undefined;
    return message;
  },
};

function createBaseColor(): Color {
  return { r: 0, g: 0, b: 0 };
}

export const Color = {
  encode(message: Color, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.r !== 0) {
      writer.uint32(8).uint32(message.r);
    }
    if (message.g !== 0) {
      writer.uint32(16).uint32(message.g);
    }
    if (message.b !== 0) {
      writer.uint32(24).uint32(message.b);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Color {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseColor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.r = reader.uint32();
          break;
        case 2:
          message.g = reader.uint32();
          break;
        case 3:
          message.b = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Color {
    return {
      r: isSet(object.r) ? Number(object.r) : 0,
      g: isSet(object.g) ? Number(object.g) : 0,
      b: isSet(object.b) ? Number(object.b) : 0,
    };
  },

  toJSON(message: Color): unknown {
    const obj: any = {};
    message.r !== undefined && (obj.r = Math.round(message.r));
    message.g !== undefined && (obj.g = Math.round(message.g));
    message.b !== undefined && (obj.b = Math.round(message.b));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Color>, I>>(object: I): Color {
    const message = createBaseColor();
    message.r = object.r ?? 0;
    message.g = object.g ?? 0;
    message.b = object.b ?? 0;
    return message;
  },
};

function createBaseDebugText(): DebugText {
  return {
    color: undefined,
    text: "",
    virtualPos: undefined,
    worldPos: undefined,
    size: 0,
  };
}

export const DebugText = {
  encode(
    message: DebugText,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.text !== "") {
      writer.uint32(18).string(message.text);
    }
    if (message.virtualPos !== undefined) {
      Point.encode(message.virtualPos, writer.uint32(26).fork()).ldelim();
    }
    if (message.worldPos !== undefined) {
      Point.encode(message.worldPos, writer.uint32(34).fork()).ldelim();
    }
    if (message.size !== 0) {
      writer.uint32(40).uint32(message.size);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugText {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugText();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.text = reader.string();
          break;
        case 3:
          message.virtualPos = Point.decode(reader, reader.uint32());
          break;
        case 4:
          message.worldPos = Point.decode(reader, reader.uint32());
          break;
        case 5:
          message.size = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugText {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      text: isSet(object.text) ? String(object.text) : "",
      virtualPos: isSet(object.virtualPos)
        ? Point.fromJSON(object.virtualPos)
        : undefined,
      worldPos: isSet(object.worldPos)
        ? Point.fromJSON(object.worldPos)
        : undefined,
      size: isSet(object.size) ? Number(object.size) : 0,
    };
  },

  toJSON(message: DebugText): unknown {
    const obj: any = {};
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.text !== undefined && (obj.text = message.text);
    message.virtualPos !== undefined &&
      (obj.virtualPos = message.virtualPos
        ? Point.toJSON(message.virtualPos)
        : undefined);
    message.worldPos !== undefined &&
      (obj.worldPos = message.worldPos
        ? Point.toJSON(message.worldPos)
        : undefined);
    message.size !== undefined && (obj.size = Math.round(message.size));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugText>, I>>(
    object: I,
  ): DebugText {
    const message = createBaseDebugText();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.text = object.text ?? "";
    message.virtualPos =
      object.virtualPos !== undefined && object.virtualPos !== null
        ? Point.fromPartial(object.virtualPos)
        : undefined;
    message.worldPos =
      object.worldPos !== undefined && object.worldPos !== null
        ? Point.fromPartial(object.worldPos)
        : undefined;
    message.size = object.size ?? 0;
    return message;
  },
};

function createBaseDebugLine(): DebugLine {
  return { color: undefined, line: undefined };
}

export const DebugLine = {
  encode(
    message: DebugLine,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.line !== undefined) {
      Line.encode(message.line, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugLine {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugLine();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.line = Line.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugLine {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      line: isSet(object.line) ? Line.fromJSON(object.line) : undefined,
    };
  },

  toJSON(message: DebugLine): unknown {
    const obj: any = {};
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.line !== undefined &&
      (obj.line = message.line ? Line.toJSON(message.line) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugLine>, I>>(
    object: I,
  ): DebugLine {
    const message = createBaseDebugLine();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.line =
      object.line !== undefined && object.line !== null
        ? Line.fromPartial(object.line)
        : undefined;
    return message;
  },
};

function createBaseDebugBox(): DebugBox {
  return { color: undefined, min: undefined, max: undefined };
}

export const DebugBox = {
  encode(
    message: DebugBox,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.min !== undefined) {
      Point.encode(message.min, writer.uint32(18).fork()).ldelim();
    }
    if (message.max !== undefined) {
      Point.encode(message.max, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugBox {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.min = Point.decode(reader, reader.uint32());
          break;
        case 3:
          message.max = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugBox {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      min: isSet(object.min) ? Point.fromJSON(object.min) : undefined,
      max: isSet(object.max) ? Point.fromJSON(object.max) : undefined,
    };
  },

  toJSON(message: DebugBox): unknown {
    const obj: any = {};
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.min !== undefined &&
      (obj.min = message.min ? Point.toJSON(message.min) : undefined);
    message.max !== undefined &&
      (obj.max = message.max ? Point.toJSON(message.max) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugBox>, I>>(object: I): DebugBox {
    const message = createBaseDebugBox();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.min =
      object.min !== undefined && object.min !== null
        ? Point.fromPartial(object.min)
        : undefined;
    message.max =
      object.max !== undefined && object.max !== null
        ? Point.fromPartial(object.max)
        : undefined;
    return message;
  },
};

function createBaseDebugSphere(): DebugSphere {
  return { color: undefined, p: undefined, r: 0 };
}

export const DebugSphere = {
  encode(
    message: DebugSphere,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.color !== undefined) {
      Color.encode(message.color, writer.uint32(10).fork()).ldelim();
    }
    if (message.p !== undefined) {
      Point.encode(message.p, writer.uint32(18).fork()).ldelim();
    }
    if (message.r !== 0) {
      writer.uint32(29).float(message.r);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugSphere {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugSphere();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.color = Color.decode(reader, reader.uint32());
          break;
        case 2:
          message.p = Point.decode(reader, reader.uint32());
          break;
        case 3:
          message.r = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugSphere {
    return {
      color: isSet(object.color) ? Color.fromJSON(object.color) : undefined,
      p: isSet(object.p) ? Point.fromJSON(object.p) : undefined,
      r: isSet(object.r) ? Number(object.r) : 0,
    };
  },

  toJSON(message: DebugSphere): unknown {
    const obj: any = {};
    message.color !== undefined &&
      (obj.color = message.color ? Color.toJSON(message.color) : undefined);
    message.p !== undefined &&
      (obj.p = message.p ? Point.toJSON(message.p) : undefined);
    message.r !== undefined && (obj.r = message.r);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugSphere>, I>>(
    object: I,
  ): DebugSphere {
    const message = createBaseDebugSphere();
    message.color =
      object.color !== undefined && object.color !== null
        ? Color.fromPartial(object.color)
        : undefined;
    message.p =
      object.p !== undefined && object.p !== null
        ? Point.fromPartial(object.p)
        : undefined;
    message.r = object.r ?? 0;
    return message;
  },
};

function createBaseDebugCreateUnit(): DebugCreateUnit {
  return { unitType: 0, owner: 0, pos: undefined, quantity: 0 };
}

export const DebugCreateUnit = {
  encode(
    message: DebugCreateUnit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitType !== 0) {
      writer.uint32(8).uint32(message.unitType);
    }
    if (message.owner !== 0) {
      writer.uint32(16).int32(message.owner);
    }
    if (message.pos !== undefined) {
      Point2D.encode(message.pos, writer.uint32(26).fork()).ldelim();
    }
    if (message.quantity !== 0) {
      writer.uint32(32).uint32(message.quantity);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugCreateUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugCreateUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitType = reader.uint32();
          break;
        case 2:
          message.owner = reader.int32();
          break;
        case 3:
          message.pos = Point2D.decode(reader, reader.uint32());
          break;
        case 4:
          message.quantity = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugCreateUnit {
    return {
      unitType: isSet(object.unitType) ? Number(object.unitType) : 0,
      owner: isSet(object.owner) ? Number(object.owner) : 0,
      pos: isSet(object.pos) ? Point2D.fromJSON(object.pos) : undefined,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: DebugCreateUnit): unknown {
    const obj: any = {};
    message.unitType !== undefined &&
      (obj.unitType = Math.round(message.unitType));
    message.owner !== undefined && (obj.owner = Math.round(message.owner));
    message.pos !== undefined &&
      (obj.pos = message.pos ? Point2D.toJSON(message.pos) : undefined);
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugCreateUnit>, I>>(
    object: I,
  ): DebugCreateUnit {
    const message = createBaseDebugCreateUnit();
    message.unitType = object.unitType ?? 0;
    message.owner = object.owner ?? 0;
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? Point2D.fromPartial(object.pos)
        : undefined;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseDebugKillUnit(): DebugKillUnit {
  return { tag: [] };
}

export const DebugKillUnit = {
  encode(
    message: DebugKillUnit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.tag) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugKillUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugKillUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tag.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.tag.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugKillUnit {
    return {
      tag: Array.isArray(object?.tag)
        ? object.tag.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: DebugKillUnit): unknown {
    const obj: any = {};
    if (message.tag) {
      obj.tag = message.tag.map((e) => Math.round(e));
    } else {
      obj.tag = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugKillUnit>, I>>(
    object: I,
  ): DebugKillUnit {
    const message = createBaseDebugKillUnit();
    message.tag = object.tag?.map((e) => e) || [];
    return message;
  },
};

function createBaseDebugTestProcess(): DebugTestProcess {
  return { test: 1, delayMs: 0 };
}

export const DebugTestProcess = {
  encode(
    message: DebugTestProcess,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.test !== 1) {
      writer.uint32(8).int32(message.test);
    }
    if (message.delayMs !== 0) {
      writer.uint32(16).int32(message.delayMs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugTestProcess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugTestProcess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.test = reader.int32() as any;
          break;
        case 2:
          message.delayMs = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugTestProcess {
    return {
      test: isSet(object.test) ? debugTestProcess_TestFromJSON(object.test) : 1,
      delayMs: isSet(object.delayMs) ? Number(object.delayMs) : 0,
    };
  },

  toJSON(message: DebugTestProcess): unknown {
    const obj: any = {};
    message.test !== undefined &&
      (obj.test = debugTestProcess_TestToJSON(message.test));
    message.delayMs !== undefined &&
      (obj.delayMs = Math.round(message.delayMs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugTestProcess>, I>>(
    object: I,
  ): DebugTestProcess {
    const message = createBaseDebugTestProcess();
    message.test = object.test ?? 1;
    message.delayMs = object.delayMs ?? 0;
    return message;
  },
};

function createBaseDebugSetScore(): DebugSetScore {
  return { score: 0 };
}

export const DebugSetScore = {
  encode(
    message: DebugSetScore,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.score !== 0) {
      writer.uint32(13).float(message.score);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugSetScore {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugSetScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.score = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugSetScore {
    return {
      score: isSet(object.score) ? Number(object.score) : 0,
    };
  },

  toJSON(message: DebugSetScore): unknown {
    const obj: any = {};
    message.score !== undefined && (obj.score = message.score);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugSetScore>, I>>(
    object: I,
  ): DebugSetScore {
    const message = createBaseDebugSetScore();
    message.score = object.score ?? 0;
    return message;
  },
};

function createBaseDebugEndGame(): DebugEndGame {
  return { endResult: 1 };
}

export const DebugEndGame = {
  encode(
    message: DebugEndGame,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.endResult !== 1) {
      writer.uint32(8).int32(message.endResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugEndGame {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugEndGame();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endResult = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugEndGame {
    return {
      endResult: isSet(object.endResult)
        ? debugEndGame_EndResultFromJSON(object.endResult)
        : 1,
    };
  },

  toJSON(message: DebugEndGame): unknown {
    const obj: any = {};
    message.endResult !== undefined &&
      (obj.endResult = debugEndGame_EndResultToJSON(message.endResult));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugEndGame>, I>>(
    object: I,
  ): DebugEndGame {
    const message = createBaseDebugEndGame();
    message.endResult = object.endResult ?? 1;
    return message;
  },
};

function createBaseDebugSetUnitValue(): DebugSetUnitValue {
  return { unitValue: 1, value: 0, unitTag: 0 };
}

export const DebugSetUnitValue = {
  encode(
    message: DebugSetUnitValue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitValue !== 1) {
      writer.uint32(8).int32(message.unitValue);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    if (message.unitTag !== 0) {
      writer.uint32(24).uint64(message.unitTag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DebugSetUnitValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDebugSetUnitValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitValue = reader.int32() as any;
          break;
        case 2:
          message.value = reader.float();
          break;
        case 3:
          message.unitTag = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DebugSetUnitValue {
    return {
      unitValue: isSet(object.unitValue)
        ? debugSetUnitValue_UnitValueFromJSON(object.unitValue)
        : 1,
      value: isSet(object.value) ? Number(object.value) : 0,
      unitTag: isSet(object.unitTag) ? Number(object.unitTag) : 0,
    };
  },

  toJSON(message: DebugSetUnitValue): unknown {
    const obj: any = {};
    message.unitValue !== undefined &&
      (obj.unitValue = debugSetUnitValue_UnitValueToJSON(message.unitValue));
    message.value !== undefined && (obj.value = message.value);
    message.unitTag !== undefined &&
      (obj.unitTag = Math.round(message.unitTag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DebugSetUnitValue>, I>>(
    object: I,
  ): DebugSetUnitValue {
    const message = createBaseDebugSetUnitValue();
    message.unitValue = object.unitValue ?? 1;
    message.value = object.value ?? 0;
    message.unitTag = object.unitTag ?? 0;
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
