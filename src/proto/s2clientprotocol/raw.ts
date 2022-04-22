/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Size2DI,
  ImageData,
  RectangleI,
  Point2D,
  Point,
} from "../s2clientprotocol/common";

export const protobufPackage = "SC2APIProtocol";

export enum DisplayType {
  /** Visible - Fully visible */
  Visible = 1,
  /** Snapshot - Dimmed version of unit left behind after entering fog of war */
  Snapshot = 2,
  /** Hidden - Fully hidden */
  Hidden = 3,
  /** Placeholder - Building that hasn't started construction. */
  Placeholder = 4,
  UNRECOGNIZED = -1,
}

export function displayTypeFromJSON(object: any): DisplayType {
  switch (object) {
    case 1:
    case "Visible":
      return DisplayType.Visible;
    case 2:
    case "Snapshot":
      return DisplayType.Snapshot;
    case 3:
    case "Hidden":
      return DisplayType.Hidden;
    case 4:
    case "Placeholder":
      return DisplayType.Placeholder;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DisplayType.UNRECOGNIZED;
  }
}

export function displayTypeToJSON(object: DisplayType): string {
  switch (object) {
    case DisplayType.Visible:
      return "Visible";
    case DisplayType.Snapshot:
      return "Snapshot";
    case DisplayType.Hidden:
      return "Hidden";
    case DisplayType.Placeholder:
      return "Placeholder";
    default:
      return "UNKNOWN";
  }
}

export enum Alliance {
  Self = 1,
  Ally = 2,
  Neutral = 3,
  Enemy = 4,
  UNRECOGNIZED = -1,
}

export function allianceFromJSON(object: any): Alliance {
  switch (object) {
    case 1:
    case "Self":
      return Alliance.Self;
    case 2:
    case "Ally":
      return Alliance.Ally;
    case 3:
    case "Neutral":
      return Alliance.Neutral;
    case 4:
    case "Enemy":
      return Alliance.Enemy;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Alliance.UNRECOGNIZED;
  }
}

export function allianceToJSON(object: Alliance): string {
  switch (object) {
    case Alliance.Self:
      return "Self";
    case Alliance.Ally:
      return "Ally";
    case Alliance.Neutral:
      return "Neutral";
    case Alliance.Enemy:
      return "Enemy";
    default:
      return "UNKNOWN";
  }
}

export enum CloakState {
  /** CloakedUnknown - Under the fog, so unknown whether it's cloaked or not. */
  CloakedUnknown = 0,
  Cloaked = 1,
  CloakedDetected = 2,
  NotCloaked = 3,
  CloakedAllied = 4,
  UNRECOGNIZED = -1,
}

export function cloakStateFromJSON(object: any): CloakState {
  switch (object) {
    case 0:
    case "CloakedUnknown":
      return CloakState.CloakedUnknown;
    case 1:
    case "Cloaked":
      return CloakState.Cloaked;
    case 2:
    case "CloakedDetected":
      return CloakState.CloakedDetected;
    case 3:
    case "NotCloaked":
      return CloakState.NotCloaked;
    case 4:
    case "CloakedAllied":
      return CloakState.CloakedAllied;
    case -1:
    case "UNRECOGNIZED":
    default:
      return CloakState.UNRECOGNIZED;
  }
}

export function cloakStateToJSON(object: CloakState): string {
  switch (object) {
    case CloakState.CloakedUnknown:
      return "CloakedUnknown";
    case CloakState.Cloaked:
      return "Cloaked";
    case CloakState.CloakedDetected:
      return "CloakedDetected";
    case CloakState.NotCloaked:
      return "NotCloaked";
    case CloakState.CloakedAllied:
      return "CloakedAllied";
    default:
      return "UNKNOWN";
  }
}

export interface StartRaw {
  /** Width and height of the map. */
  mapSize: Size2DI | undefined;
  /** 1 bit bitmap of the pathing grid. */
  pathingGrid: ImageData | undefined;
  /** 1 byte bitmap of the terrain height. */
  terrainHeight: ImageData | undefined;
  /** 1 bit bitmap of the building placement grid. */
  placementGrid: ImageData | undefined;
  /** The playable cells. */
  playableArea: RectangleI | undefined;
  /** Possible start locations for players. */
  startLocations: Point2D[];
}

export interface ObservationRaw {
  player: PlayerRaw | undefined;
  units: Unit[];
  /** Fog of war, creep and so on. Board stuff that changes per frame. */
  mapState: MapState | undefined;
  event: Event | undefined;
  effects: Effect[];
  radar: RadarRing[];
}

export interface RadarRing {
  pos: Point | undefined;
  radius: number;
}

export interface PowerSource {
  pos: Point | undefined;
  radius: number;
  tag: number;
}

export interface PlayerRaw {
  powerSources: PowerSource[];
  camera: Point | undefined;
  /** TODO: Add to UI observation? */
  upgradeIds: number[];
}

export interface UnitOrder {
  abilityId: number;
  targetWorldSpacePos: Point | undefined;
  targetUnitTag: number | undefined;
  /** Progress of train abilities. Range: [0.0, 1.0] */
  progress: number;
}

export interface PassengerUnit {
  tag: number;
  health: number;
  healthMax: number;
  shield: number;
  shieldMax: number;
  energy: number;
  energyMax: number;
  unitType: number;
}

export interface RallyTarget {
  /** Will always be filled. */
  point: Point | undefined;
  /** Only if it's targeting a unit. */
  tag: number;
}

export interface Unit {
  /** Fields are populated based on type/alliance */
  displayType: DisplayType;
  alliance: Alliance;
  /** Unique identifier for a unit */
  tag: number;
  unitType: number;
  owner: number;
  pos: Point | undefined;
  facing: number;
  radius: number;
  /** Range: [0.0, 1.0] */
  buildProgress: number;
  cloak: CloakState;
  buffIds: number[];
  detectRange: number;
  radarRange: number;
  isSelected: boolean;
  /** Visible and within the camera frustrum. */
  isOnScreen: boolean;
  /** Detected by sensor tower */
  isBlip: boolean;
  isPowered: boolean;
  /** Building is training/researching (ie animated). */
  isActive: boolean;
  attackUpgradeLevel: number;
  armorUpgradeLevel: number;
  shieldUpgradeLevel: number;
  /** Not populated for snapshots */
  health: number;
  healthMax: number;
  shield: number;
  shieldMax: number;
  energy: number;
  energyMax: number;
  mineralContents: number;
  vespeneContents: number;
  isFlying: boolean;
  isBurrowed: boolean;
  /** Unit is your own or detected as a hallucination. */
  isHallucination: boolean;
  /** Not populated for enemies */
  orders: UnitOrder[];
  addOnTag: number;
  passengers: PassengerUnit[];
  cargoSpaceTaken: number;
  cargoSpaceMax: number;
  assignedHarvesters: number;
  idealHarvesters: number;
  weaponCooldown: number;
  engagedTargetTag: number;
  /** How long a buff or unit is still around (eg mule, broodling, chronoboost). */
  buffDurationRemain: number;
  /** How long the buff or unit is still around (eg mule, broodling, chronoboost). */
  buffDurationMax: number;
  rallyTargets: RallyTarget[];
}

export interface MapState {
  /** 1 byte visibility layer. */
  visibility: ImageData | undefined;
  /** 1 bit creep layer. */
  creep: ImageData | undefined;
}

export interface Event {
  deadUnits: number[];
}

export interface Effect {
  effectId: number;
  /** Effect may impact multiple locations. (eg. Lurker attack) */
  pos: Point2D[];
  alliance: Alliance;
  owner: number;
  radius: number;
}

export interface ActionRaw {
  unitCommand: ActionRawUnitCommand | undefined;
  cameraMove: ActionRawCameraMove | undefined;
  toggleAutocast: ActionRawToggleAutocast | undefined;
}

export interface ActionRawUnitCommand {
  abilityId: number;
  targetWorldSpacePos: Point2D | undefined;
  targetUnitTag: number | undefined;
  unitTags: number[];
  queueCommand: boolean;
}

export interface ActionRawCameraMove {
  centerWorldSpace: Point | undefined;
}

export interface ActionRawToggleAutocast {
  abilityId: number;
  unitTags: number[];
}

function createBaseStartRaw(): StartRaw {
  return {
    mapSize: undefined,
    pathingGrid: undefined,
    terrainHeight: undefined,
    placementGrid: undefined,
    playableArea: undefined,
    startLocations: [],
  };
}

export const StartRaw = {
  encode(
    message: StartRaw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.mapSize !== undefined) {
      Size2DI.encode(message.mapSize, writer.uint32(10).fork()).ldelim();
    }
    if (message.pathingGrid !== undefined) {
      ImageData.encode(message.pathingGrid, writer.uint32(18).fork()).ldelim();
    }
    if (message.terrainHeight !== undefined) {
      ImageData.encode(
        message.terrainHeight,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.placementGrid !== undefined) {
      ImageData.encode(
        message.placementGrid,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.playableArea !== undefined) {
      RectangleI.encode(
        message.playableArea,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    for (const v of message.startLocations) {
      Point2D.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StartRaw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mapSize = Size2DI.decode(reader, reader.uint32());
          break;
        case 2:
          message.pathingGrid = ImageData.decode(reader, reader.uint32());
          break;
        case 3:
          message.terrainHeight = ImageData.decode(reader, reader.uint32());
          break;
        case 4:
          message.placementGrid = ImageData.decode(reader, reader.uint32());
          break;
        case 5:
          message.playableArea = RectangleI.decode(reader, reader.uint32());
          break;
        case 6:
          message.startLocations.push(Point2D.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartRaw {
    return {
      mapSize: isSet(object.mapSize)
        ? Size2DI.fromJSON(object.mapSize)
        : undefined,
      pathingGrid: isSet(object.pathingGrid)
        ? ImageData.fromJSON(object.pathingGrid)
        : undefined,
      terrainHeight: isSet(object.terrainHeight)
        ? ImageData.fromJSON(object.terrainHeight)
        : undefined,
      placementGrid: isSet(object.placementGrid)
        ? ImageData.fromJSON(object.placementGrid)
        : undefined,
      playableArea: isSet(object.playableArea)
        ? RectangleI.fromJSON(object.playableArea)
        : undefined,
      startLocations: Array.isArray(object?.startLocations)
        ? object.startLocations.map((e: any) => Point2D.fromJSON(e))
        : [],
    };
  },

  toJSON(message: StartRaw): unknown {
    const obj: any = {};
    message.mapSize !== undefined &&
      (obj.mapSize = message.mapSize
        ? Size2DI.toJSON(message.mapSize)
        : undefined);
    message.pathingGrid !== undefined &&
      (obj.pathingGrid = message.pathingGrid
        ? ImageData.toJSON(message.pathingGrid)
        : undefined);
    message.terrainHeight !== undefined &&
      (obj.terrainHeight = message.terrainHeight
        ? ImageData.toJSON(message.terrainHeight)
        : undefined);
    message.placementGrid !== undefined &&
      (obj.placementGrid = message.placementGrid
        ? ImageData.toJSON(message.placementGrid)
        : undefined);
    message.playableArea !== undefined &&
      (obj.playableArea = message.playableArea
        ? RectangleI.toJSON(message.playableArea)
        : undefined);
    if (message.startLocations) {
      obj.startLocations = message.startLocations.map((e) =>
        e ? Point2D.toJSON(e) : undefined,
      );
    } else {
      obj.startLocations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartRaw>, I>>(object: I): StartRaw {
    const message = createBaseStartRaw();
    message.mapSize =
      object.mapSize !== undefined && object.mapSize !== null
        ? Size2DI.fromPartial(object.mapSize)
        : undefined;
    message.pathingGrid =
      object.pathingGrid !== undefined && object.pathingGrid !== null
        ? ImageData.fromPartial(object.pathingGrid)
        : undefined;
    message.terrainHeight =
      object.terrainHeight !== undefined && object.terrainHeight !== null
        ? ImageData.fromPartial(object.terrainHeight)
        : undefined;
    message.placementGrid =
      object.placementGrid !== undefined && object.placementGrid !== null
        ? ImageData.fromPartial(object.placementGrid)
        : undefined;
    message.playableArea =
      object.playableArea !== undefined && object.playableArea !== null
        ? RectangleI.fromPartial(object.playableArea)
        : undefined;
    message.startLocations =
      object.startLocations?.map((e) => Point2D.fromPartial(e)) || [];
    return message;
  },
};

function createBaseObservationRaw(): ObservationRaw {
  return {
    player: undefined,
    units: [],
    mapState: undefined,
    event: undefined,
    effects: [],
    radar: [],
  };
}

export const ObservationRaw = {
  encode(
    message: ObservationRaw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.player !== undefined) {
      PlayerRaw.encode(message.player, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.units) {
      Unit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.mapState !== undefined) {
      MapState.encode(message.mapState, writer.uint32(26).fork()).ldelim();
    }
    if (message.event !== undefined) {
      Event.encode(message.event, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.effects) {
      Effect.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.radar) {
      RadarRing.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObservationRaw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservationRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.player = PlayerRaw.decode(reader, reader.uint32());
          break;
        case 2:
          message.units.push(Unit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.mapState = MapState.decode(reader, reader.uint32());
          break;
        case 4:
          message.event = Event.decode(reader, reader.uint32());
          break;
        case 5:
          message.effects.push(Effect.decode(reader, reader.uint32()));
          break;
        case 6:
          message.radar.push(RadarRing.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservationRaw {
    return {
      player: isSet(object.player)
        ? PlayerRaw.fromJSON(object.player)
        : undefined,
      units: Array.isArray(object?.units)
        ? object.units.map((e: any) => Unit.fromJSON(e))
        : [],
      mapState: isSet(object.mapState)
        ? MapState.fromJSON(object.mapState)
        : undefined,
      event: isSet(object.event) ? Event.fromJSON(object.event) : undefined,
      effects: Array.isArray(object?.effects)
        ? object.effects.map((e: any) => Effect.fromJSON(e))
        : [],
      radar: Array.isArray(object?.radar)
        ? object.radar.map((e: any) => RadarRing.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ObservationRaw): unknown {
    const obj: any = {};
    message.player !== undefined &&
      (obj.player = message.player
        ? PlayerRaw.toJSON(message.player)
        : undefined);
    if (message.units) {
      obj.units = message.units.map((e) => (e ? Unit.toJSON(e) : undefined));
    } else {
      obj.units = [];
    }
    message.mapState !== undefined &&
      (obj.mapState = message.mapState
        ? MapState.toJSON(message.mapState)
        : undefined);
    message.event !== undefined &&
      (obj.event = message.event ? Event.toJSON(message.event) : undefined);
    if (message.effects) {
      obj.effects = message.effects.map((e) =>
        e ? Effect.toJSON(e) : undefined,
      );
    } else {
      obj.effects = [];
    }
    if (message.radar) {
      obj.radar = message.radar.map((e) =>
        e ? RadarRing.toJSON(e) : undefined,
      );
    } else {
      obj.radar = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservationRaw>, I>>(
    object: I,
  ): ObservationRaw {
    const message = createBaseObservationRaw();
    message.player =
      object.player !== undefined && object.player !== null
        ? PlayerRaw.fromPartial(object.player)
        : undefined;
    message.units = object.units?.map((e) => Unit.fromPartial(e)) || [];
    message.mapState =
      object.mapState !== undefined && object.mapState !== null
        ? MapState.fromPartial(object.mapState)
        : undefined;
    message.event =
      object.event !== undefined && object.event !== null
        ? Event.fromPartial(object.event)
        : undefined;
    message.effects = object.effects?.map((e) => Effect.fromPartial(e)) || [];
    message.radar = object.radar?.map((e) => RadarRing.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRadarRing(): RadarRing {
  return { pos: undefined, radius: 0 };
}

export const RadarRing = {
  encode(
    message: RadarRing,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pos !== undefined) {
      Point.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(21).float(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RadarRing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRadarRing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pos = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.radius = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RadarRing {
    return {
      pos: isSet(object.pos) ? Point.fromJSON(object.pos) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: RadarRing): unknown {
    const obj: any = {};
    message.pos !== undefined &&
      (obj.pos = message.pos ? Point.toJSON(message.pos) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RadarRing>, I>>(
    object: I,
  ): RadarRing {
    const message = createBaseRadarRing();
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? Point.fromPartial(object.pos)
        : undefined;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBasePowerSource(): PowerSource {
  return { pos: undefined, radius: 0, tag: 0 };
}

export const PowerSource = {
  encode(
    message: PowerSource,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pos !== undefined) {
      Point.encode(message.pos, writer.uint32(10).fork()).ldelim();
    }
    if (message.radius !== 0) {
      writer.uint32(21).float(message.radius);
    }
    if (message.tag !== 0) {
      writer.uint32(24).uint64(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PowerSource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePowerSource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pos = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.radius = reader.float();
          break;
        case 3:
          message.tag = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PowerSource {
    return {
      pos: isSet(object.pos) ? Point.fromJSON(object.pos) : undefined,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      tag: isSet(object.tag) ? Number(object.tag) : 0,
    };
  },

  toJSON(message: PowerSource): unknown {
    const obj: any = {};
    message.pos !== undefined &&
      (obj.pos = message.pos ? Point.toJSON(message.pos) : undefined);
    message.radius !== undefined && (obj.radius = message.radius);
    message.tag !== undefined && (obj.tag = Math.round(message.tag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PowerSource>, I>>(
    object: I,
  ): PowerSource {
    const message = createBasePowerSource();
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? Point.fromPartial(object.pos)
        : undefined;
    message.radius = object.radius ?? 0;
    message.tag = object.tag ?? 0;
    return message;
  },
};

function createBasePlayerRaw(): PlayerRaw {
  return { powerSources: [], camera: undefined, upgradeIds: [] };
}

export const PlayerRaw = {
  encode(
    message: PlayerRaw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.powerSources) {
      PowerSource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.camera !== undefined) {
      Point.encode(message.camera, writer.uint32(18).fork()).ldelim();
    }
    writer.uint32(26).fork();
    for (const v of message.upgradeIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerRaw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.powerSources.push(
            PowerSource.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.camera = Point.decode(reader, reader.uint32());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.upgradeIds.push(reader.uint32());
            }
          } else {
            message.upgradeIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerRaw {
    return {
      powerSources: Array.isArray(object?.powerSources)
        ? object.powerSources.map((e: any) => PowerSource.fromJSON(e))
        : [],
      camera: isSet(object.camera) ? Point.fromJSON(object.camera) : undefined,
      upgradeIds: Array.isArray(object?.upgradeIds)
        ? object.upgradeIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: PlayerRaw): unknown {
    const obj: any = {};
    if (message.powerSources) {
      obj.powerSources = message.powerSources.map((e) =>
        e ? PowerSource.toJSON(e) : undefined,
      );
    } else {
      obj.powerSources = [];
    }
    message.camera !== undefined &&
      (obj.camera = message.camera ? Point.toJSON(message.camera) : undefined);
    if (message.upgradeIds) {
      obj.upgradeIds = message.upgradeIds.map((e) => Math.round(e));
    } else {
      obj.upgradeIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerRaw>, I>>(
    object: I,
  ): PlayerRaw {
    const message = createBasePlayerRaw();
    message.powerSources =
      object.powerSources?.map((e) => PowerSource.fromPartial(e)) || [];
    message.camera =
      object.camera !== undefined && object.camera !== null
        ? Point.fromPartial(object.camera)
        : undefined;
    message.upgradeIds = object.upgradeIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseUnitOrder(): UnitOrder {
  return {
    abilityId: 0,
    targetWorldSpacePos: undefined,
    targetUnitTag: undefined,
    progress: 0,
  };
}

export const UnitOrder = {
  encode(
    message: UnitOrder,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).uint32(message.abilityId);
    }
    if (message.targetWorldSpacePos !== undefined) {
      Point.encode(
        message.targetWorldSpacePos,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.targetUnitTag !== undefined) {
      writer.uint32(24).uint64(message.targetUnitTag);
    }
    if (message.progress !== 0) {
      writer.uint32(37).float(message.progress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.uint32();
          break;
        case 2:
          message.targetWorldSpacePos = Point.decode(reader, reader.uint32());
          break;
        case 3:
          message.targetUnitTag = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.progress = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitOrder {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      targetWorldSpacePos: isSet(object.targetWorldSpacePos)
        ? Point.fromJSON(object.targetWorldSpacePos)
        : undefined,
      targetUnitTag: isSet(object.targetUnitTag)
        ? Number(object.targetUnitTag)
        : undefined,
      progress: isSet(object.progress) ? Number(object.progress) : 0,
    };
  },

  toJSON(message: UnitOrder): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.targetWorldSpacePos !== undefined &&
      (obj.targetWorldSpacePos = message.targetWorldSpacePos
        ? Point.toJSON(message.targetWorldSpacePos)
        : undefined);
    message.targetUnitTag !== undefined &&
      (obj.targetUnitTag = Math.round(message.targetUnitTag));
    message.progress !== undefined && (obj.progress = message.progress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnitOrder>, I>>(
    object: I,
  ): UnitOrder {
    const message = createBaseUnitOrder();
    message.abilityId = object.abilityId ?? 0;
    message.targetWorldSpacePos =
      object.targetWorldSpacePos !== undefined &&
      object.targetWorldSpacePos !== null
        ? Point.fromPartial(object.targetWorldSpacePos)
        : undefined;
    message.targetUnitTag = object.targetUnitTag ?? undefined;
    message.progress = object.progress ?? 0;
    return message;
  },
};

function createBasePassengerUnit(): PassengerUnit {
  return {
    tag: 0,
    health: 0,
    healthMax: 0,
    shield: 0,
    shieldMax: 0,
    energy: 0,
    energyMax: 0,
    unitType: 0,
  };
}

export const PassengerUnit = {
  encode(
    message: PassengerUnit,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.tag !== 0) {
      writer.uint32(8).uint64(message.tag);
    }
    if (message.health !== 0) {
      writer.uint32(21).float(message.health);
    }
    if (message.healthMax !== 0) {
      writer.uint32(29).float(message.healthMax);
    }
    if (message.shield !== 0) {
      writer.uint32(37).float(message.shield);
    }
    if (message.shieldMax !== 0) {
      writer.uint32(61).float(message.shieldMax);
    }
    if (message.energy !== 0) {
      writer.uint32(45).float(message.energy);
    }
    if (message.energyMax !== 0) {
      writer.uint32(69).float(message.energyMax);
    }
    if (message.unitType !== 0) {
      writer.uint32(48).uint32(message.unitType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PassengerUnit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePassengerUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tag = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.health = reader.float();
          break;
        case 3:
          message.healthMax = reader.float();
          break;
        case 4:
          message.shield = reader.float();
          break;
        case 7:
          message.shieldMax = reader.float();
          break;
        case 5:
          message.energy = reader.float();
          break;
        case 8:
          message.energyMax = reader.float();
          break;
        case 6:
          message.unitType = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PassengerUnit {
    return {
      tag: isSet(object.tag) ? Number(object.tag) : 0,
      health: isSet(object.health) ? Number(object.health) : 0,
      healthMax: isSet(object.healthMax) ? Number(object.healthMax) : 0,
      shield: isSet(object.shield) ? Number(object.shield) : 0,
      shieldMax: isSet(object.shieldMax) ? Number(object.shieldMax) : 0,
      energy: isSet(object.energy) ? Number(object.energy) : 0,
      energyMax: isSet(object.energyMax) ? Number(object.energyMax) : 0,
      unitType: isSet(object.unitType) ? Number(object.unitType) : 0,
    };
  },

  toJSON(message: PassengerUnit): unknown {
    const obj: any = {};
    message.tag !== undefined && (obj.tag = Math.round(message.tag));
    message.health !== undefined && (obj.health = message.health);
    message.healthMax !== undefined && (obj.healthMax = message.healthMax);
    message.shield !== undefined && (obj.shield = message.shield);
    message.shieldMax !== undefined && (obj.shieldMax = message.shieldMax);
    message.energy !== undefined && (obj.energy = message.energy);
    message.energyMax !== undefined && (obj.energyMax = message.energyMax);
    message.unitType !== undefined &&
      (obj.unitType = Math.round(message.unitType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PassengerUnit>, I>>(
    object: I,
  ): PassengerUnit {
    const message = createBasePassengerUnit();
    message.tag = object.tag ?? 0;
    message.health = object.health ?? 0;
    message.healthMax = object.healthMax ?? 0;
    message.shield = object.shield ?? 0;
    message.shieldMax = object.shieldMax ?? 0;
    message.energy = object.energy ?? 0;
    message.energyMax = object.energyMax ?? 0;
    message.unitType = object.unitType ?? 0;
    return message;
  },
};

function createBaseRallyTarget(): RallyTarget {
  return { point: undefined, tag: 0 };
}

export const RallyTarget = {
  encode(
    message: RallyTarget,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.point !== undefined) {
      Point.encode(message.point, writer.uint32(10).fork()).ldelim();
    }
    if (message.tag !== 0) {
      writer.uint32(16).uint64(message.tag);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RallyTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRallyTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.point = Point.decode(reader, reader.uint32());
          break;
        case 2:
          message.tag = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RallyTarget {
    return {
      point: isSet(object.point) ? Point.fromJSON(object.point) : undefined,
      tag: isSet(object.tag) ? Number(object.tag) : 0,
    };
  },

  toJSON(message: RallyTarget): unknown {
    const obj: any = {};
    message.point !== undefined &&
      (obj.point = message.point ? Point.toJSON(message.point) : undefined);
    message.tag !== undefined && (obj.tag = Math.round(message.tag));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RallyTarget>, I>>(
    object: I,
  ): RallyTarget {
    const message = createBaseRallyTarget();
    message.point =
      object.point !== undefined && object.point !== null
        ? Point.fromPartial(object.point)
        : undefined;
    message.tag = object.tag ?? 0;
    return message;
  },
};

function createBaseUnit(): Unit {
  return {
    displayType: 1,
    alliance: 1,
    tag: 0,
    unitType: 0,
    owner: 0,
    pos: undefined,
    facing: 0,
    radius: 0,
    buildProgress: 0,
    cloak: 0,
    buffIds: [],
    detectRange: 0,
    radarRange: 0,
    isSelected: false,
    isOnScreen: false,
    isBlip: false,
    isPowered: false,
    isActive: false,
    attackUpgradeLevel: 0,
    armorUpgradeLevel: 0,
    shieldUpgradeLevel: 0,
    health: 0,
    healthMax: 0,
    shield: 0,
    shieldMax: 0,
    energy: 0,
    energyMax: 0,
    mineralContents: 0,
    vespeneContents: 0,
    isFlying: false,
    isBurrowed: false,
    isHallucination: false,
    orders: [],
    addOnTag: 0,
    passengers: [],
    cargoSpaceTaken: 0,
    cargoSpaceMax: 0,
    assignedHarvesters: 0,
    idealHarvesters: 0,
    weaponCooldown: 0,
    engagedTargetTag: 0,
    buffDurationRemain: 0,
    buffDurationMax: 0,
    rallyTargets: [],
  };
}

export const Unit = {
  encode(message: Unit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.displayType !== 1) {
      writer.uint32(8).int32(message.displayType);
    }
    if (message.alliance !== 1) {
      writer.uint32(16).int32(message.alliance);
    }
    if (message.tag !== 0) {
      writer.uint32(24).uint64(message.tag);
    }
    if (message.unitType !== 0) {
      writer.uint32(32).uint32(message.unitType);
    }
    if (message.owner !== 0) {
      writer.uint32(40).int32(message.owner);
    }
    if (message.pos !== undefined) {
      Point.encode(message.pos, writer.uint32(50).fork()).ldelim();
    }
    if (message.facing !== 0) {
      writer.uint32(61).float(message.facing);
    }
    if (message.radius !== 0) {
      writer.uint32(69).float(message.radius);
    }
    if (message.buildProgress !== 0) {
      writer.uint32(77).float(message.buildProgress);
    }
    if (message.cloak !== 0) {
      writer.uint32(80).int32(message.cloak);
    }
    writer.uint32(218).fork();
    for (const v of message.buffIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.detectRange !== 0) {
      writer.uint32(253).float(message.detectRange);
    }
    if (message.radarRange !== 0) {
      writer.uint32(261).float(message.radarRange);
    }
    if (message.isSelected === true) {
      writer.uint32(88).bool(message.isSelected);
    }
    if (message.isOnScreen === true) {
      writer.uint32(96).bool(message.isOnScreen);
    }
    if (message.isBlip === true) {
      writer.uint32(104).bool(message.isBlip);
    }
    if (message.isPowered === true) {
      writer.uint32(280).bool(message.isPowered);
    }
    if (message.isActive === true) {
      writer.uint32(312).bool(message.isActive);
    }
    if (message.attackUpgradeLevel !== 0) {
      writer.uint32(320).int32(message.attackUpgradeLevel);
    }
    if (message.armorUpgradeLevel !== 0) {
      writer.uint32(328).int32(message.armorUpgradeLevel);
    }
    if (message.shieldUpgradeLevel !== 0) {
      writer.uint32(336).int32(message.shieldUpgradeLevel);
    }
    if (message.health !== 0) {
      writer.uint32(117).float(message.health);
    }
    if (message.healthMax !== 0) {
      writer.uint32(125).float(message.healthMax);
    }
    if (message.shield !== 0) {
      writer.uint32(133).float(message.shield);
    }
    if (message.shieldMax !== 0) {
      writer.uint32(293).float(message.shieldMax);
    }
    if (message.energy !== 0) {
      writer.uint32(141).float(message.energy);
    }
    if (message.energyMax !== 0) {
      writer.uint32(301).float(message.energyMax);
    }
    if (message.mineralContents !== 0) {
      writer.uint32(144).int32(message.mineralContents);
    }
    if (message.vespeneContents !== 0) {
      writer.uint32(152).int32(message.vespeneContents);
    }
    if (message.isFlying === true) {
      writer.uint32(160).bool(message.isFlying);
    }
    if (message.isBurrowed === true) {
      writer.uint32(168).bool(message.isBurrowed);
    }
    if (message.isHallucination === true) {
      writer.uint32(304).bool(message.isHallucination);
    }
    for (const v of message.orders) {
      UnitOrder.encode(v!, writer.uint32(178).fork()).ldelim();
    }
    if (message.addOnTag !== 0) {
      writer.uint32(184).uint64(message.addOnTag);
    }
    for (const v of message.passengers) {
      PassengerUnit.encode(v!, writer.uint32(194).fork()).ldelim();
    }
    if (message.cargoSpaceTaken !== 0) {
      writer.uint32(200).int32(message.cargoSpaceTaken);
    }
    if (message.cargoSpaceMax !== 0) {
      writer.uint32(208).int32(message.cargoSpaceMax);
    }
    if (message.assignedHarvesters !== 0) {
      writer.uint32(224).int32(message.assignedHarvesters);
    }
    if (message.idealHarvesters !== 0) {
      writer.uint32(232).int32(message.idealHarvesters);
    }
    if (message.weaponCooldown !== 0) {
      writer.uint32(245).float(message.weaponCooldown);
    }
    if (message.engagedTargetTag !== 0) {
      writer.uint32(272).uint64(message.engagedTargetTag);
    }
    if (message.buffDurationRemain !== 0) {
      writer.uint32(344).int32(message.buffDurationRemain);
    }
    if (message.buffDurationMax !== 0) {
      writer.uint32(352).int32(message.buffDurationMax);
    }
    for (const v of message.rallyTargets) {
      RallyTarget.encode(v!, writer.uint32(362).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Unit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.displayType = reader.int32() as any;
          break;
        case 2:
          message.alliance = reader.int32() as any;
          break;
        case 3:
          message.tag = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.unitType = reader.uint32();
          break;
        case 5:
          message.owner = reader.int32();
          break;
        case 6:
          message.pos = Point.decode(reader, reader.uint32());
          break;
        case 7:
          message.facing = reader.float();
          break;
        case 8:
          message.radius = reader.float();
          break;
        case 9:
          message.buildProgress = reader.float();
          break;
        case 10:
          message.cloak = reader.int32() as any;
          break;
        case 27:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.buffIds.push(reader.uint32());
            }
          } else {
            message.buffIds.push(reader.uint32());
          }
          break;
        case 31:
          message.detectRange = reader.float();
          break;
        case 32:
          message.radarRange = reader.float();
          break;
        case 11:
          message.isSelected = reader.bool();
          break;
        case 12:
          message.isOnScreen = reader.bool();
          break;
        case 13:
          message.isBlip = reader.bool();
          break;
        case 35:
          message.isPowered = reader.bool();
          break;
        case 39:
          message.isActive = reader.bool();
          break;
        case 40:
          message.attackUpgradeLevel = reader.int32();
          break;
        case 41:
          message.armorUpgradeLevel = reader.int32();
          break;
        case 42:
          message.shieldUpgradeLevel = reader.int32();
          break;
        case 14:
          message.health = reader.float();
          break;
        case 15:
          message.healthMax = reader.float();
          break;
        case 16:
          message.shield = reader.float();
          break;
        case 36:
          message.shieldMax = reader.float();
          break;
        case 17:
          message.energy = reader.float();
          break;
        case 37:
          message.energyMax = reader.float();
          break;
        case 18:
          message.mineralContents = reader.int32();
          break;
        case 19:
          message.vespeneContents = reader.int32();
          break;
        case 20:
          message.isFlying = reader.bool();
          break;
        case 21:
          message.isBurrowed = reader.bool();
          break;
        case 38:
          message.isHallucination = reader.bool();
          break;
        case 22:
          message.orders.push(UnitOrder.decode(reader, reader.uint32()));
          break;
        case 23:
          message.addOnTag = longToNumber(reader.uint64() as Long);
          break;
        case 24:
          message.passengers.push(
            PassengerUnit.decode(reader, reader.uint32()),
          );
          break;
        case 25:
          message.cargoSpaceTaken = reader.int32();
          break;
        case 26:
          message.cargoSpaceMax = reader.int32();
          break;
        case 28:
          message.assignedHarvesters = reader.int32();
          break;
        case 29:
          message.idealHarvesters = reader.int32();
          break;
        case 30:
          message.weaponCooldown = reader.float();
          break;
        case 34:
          message.engagedTargetTag = longToNumber(reader.uint64() as Long);
          break;
        case 43:
          message.buffDurationRemain = reader.int32();
          break;
        case 44:
          message.buffDurationMax = reader.int32();
          break;
        case 45:
          message.rallyTargets.push(
            RallyTarget.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Unit {
    return {
      displayType: isSet(object.displayType)
        ? displayTypeFromJSON(object.displayType)
        : 1,
      alliance: isSet(object.alliance) ? allianceFromJSON(object.alliance) : 1,
      tag: isSet(object.tag) ? Number(object.tag) : 0,
      unitType: isSet(object.unitType) ? Number(object.unitType) : 0,
      owner: isSet(object.owner) ? Number(object.owner) : 0,
      pos: isSet(object.pos) ? Point.fromJSON(object.pos) : undefined,
      facing: isSet(object.facing) ? Number(object.facing) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
      buildProgress: isSet(object.buildProgress)
        ? Number(object.buildProgress)
        : 0,
      cloak: isSet(object.cloak) ? cloakStateFromJSON(object.cloak) : 0,
      buffIds: Array.isArray(object?.buffIds)
        ? object.buffIds.map((e: any) => Number(e))
        : [],
      detectRange: isSet(object.detectRange) ? Number(object.detectRange) : 0,
      radarRange: isSet(object.radarRange) ? Number(object.radarRange) : 0,
      isSelected: isSet(object.isSelected) ? Boolean(object.isSelected) : false,
      isOnScreen: isSet(object.isOnScreen) ? Boolean(object.isOnScreen) : false,
      isBlip: isSet(object.isBlip) ? Boolean(object.isBlip) : false,
      isPowered: isSet(object.isPowered) ? Boolean(object.isPowered) : false,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      attackUpgradeLevel: isSet(object.attackUpgradeLevel)
        ? Number(object.attackUpgradeLevel)
        : 0,
      armorUpgradeLevel: isSet(object.armorUpgradeLevel)
        ? Number(object.armorUpgradeLevel)
        : 0,
      shieldUpgradeLevel: isSet(object.shieldUpgradeLevel)
        ? Number(object.shieldUpgradeLevel)
        : 0,
      health: isSet(object.health) ? Number(object.health) : 0,
      healthMax: isSet(object.healthMax) ? Number(object.healthMax) : 0,
      shield: isSet(object.shield) ? Number(object.shield) : 0,
      shieldMax: isSet(object.shieldMax) ? Number(object.shieldMax) : 0,
      energy: isSet(object.energy) ? Number(object.energy) : 0,
      energyMax: isSet(object.energyMax) ? Number(object.energyMax) : 0,
      mineralContents: isSet(object.mineralContents)
        ? Number(object.mineralContents)
        : 0,
      vespeneContents: isSet(object.vespeneContents)
        ? Number(object.vespeneContents)
        : 0,
      isFlying: isSet(object.isFlying) ? Boolean(object.isFlying) : false,
      isBurrowed: isSet(object.isBurrowed) ? Boolean(object.isBurrowed) : false,
      isHallucination: isSet(object.isHallucination)
        ? Boolean(object.isHallucination)
        : false,
      orders: Array.isArray(object?.orders)
        ? object.orders.map((e: any) => UnitOrder.fromJSON(e))
        : [],
      addOnTag: isSet(object.addOnTag) ? Number(object.addOnTag) : 0,
      passengers: Array.isArray(object?.passengers)
        ? object.passengers.map((e: any) => PassengerUnit.fromJSON(e))
        : [],
      cargoSpaceTaken: isSet(object.cargoSpaceTaken)
        ? Number(object.cargoSpaceTaken)
        : 0,
      cargoSpaceMax: isSet(object.cargoSpaceMax)
        ? Number(object.cargoSpaceMax)
        : 0,
      assignedHarvesters: isSet(object.assignedHarvesters)
        ? Number(object.assignedHarvesters)
        : 0,
      idealHarvesters: isSet(object.idealHarvesters)
        ? Number(object.idealHarvesters)
        : 0,
      weaponCooldown: isSet(object.weaponCooldown)
        ? Number(object.weaponCooldown)
        : 0,
      engagedTargetTag: isSet(object.engagedTargetTag)
        ? Number(object.engagedTargetTag)
        : 0,
      buffDurationRemain: isSet(object.buffDurationRemain)
        ? Number(object.buffDurationRemain)
        : 0,
      buffDurationMax: isSet(object.buffDurationMax)
        ? Number(object.buffDurationMax)
        : 0,
      rallyTargets: Array.isArray(object?.rallyTargets)
        ? object.rallyTargets.map((e: any) => RallyTarget.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Unit): unknown {
    const obj: any = {};
    message.displayType !== undefined &&
      (obj.displayType = displayTypeToJSON(message.displayType));
    message.alliance !== undefined &&
      (obj.alliance = allianceToJSON(message.alliance));
    message.tag !== undefined && (obj.tag = Math.round(message.tag));
    message.unitType !== undefined &&
      (obj.unitType = Math.round(message.unitType));
    message.owner !== undefined && (obj.owner = Math.round(message.owner));
    message.pos !== undefined &&
      (obj.pos = message.pos ? Point.toJSON(message.pos) : undefined);
    message.facing !== undefined && (obj.facing = message.facing);
    message.radius !== undefined && (obj.radius = message.radius);
    message.buildProgress !== undefined &&
      (obj.buildProgress = message.buildProgress);
    message.cloak !== undefined &&
      (obj.cloak = cloakStateToJSON(message.cloak));
    if (message.buffIds) {
      obj.buffIds = message.buffIds.map((e) => Math.round(e));
    } else {
      obj.buffIds = [];
    }
    message.detectRange !== undefined &&
      (obj.detectRange = message.detectRange);
    message.radarRange !== undefined && (obj.radarRange = message.radarRange);
    message.isSelected !== undefined && (obj.isSelected = message.isSelected);
    message.isOnScreen !== undefined && (obj.isOnScreen = message.isOnScreen);
    message.isBlip !== undefined && (obj.isBlip = message.isBlip);
    message.isPowered !== undefined && (obj.isPowered = message.isPowered);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.attackUpgradeLevel !== undefined &&
      (obj.attackUpgradeLevel = Math.round(message.attackUpgradeLevel));
    message.armorUpgradeLevel !== undefined &&
      (obj.armorUpgradeLevel = Math.round(message.armorUpgradeLevel));
    message.shieldUpgradeLevel !== undefined &&
      (obj.shieldUpgradeLevel = Math.round(message.shieldUpgradeLevel));
    message.health !== undefined && (obj.health = message.health);
    message.healthMax !== undefined && (obj.healthMax = message.healthMax);
    message.shield !== undefined && (obj.shield = message.shield);
    message.shieldMax !== undefined && (obj.shieldMax = message.shieldMax);
    message.energy !== undefined && (obj.energy = message.energy);
    message.energyMax !== undefined && (obj.energyMax = message.energyMax);
    message.mineralContents !== undefined &&
      (obj.mineralContents = Math.round(message.mineralContents));
    message.vespeneContents !== undefined &&
      (obj.vespeneContents = Math.round(message.vespeneContents));
    message.isFlying !== undefined && (obj.isFlying = message.isFlying);
    message.isBurrowed !== undefined && (obj.isBurrowed = message.isBurrowed);
    message.isHallucination !== undefined &&
      (obj.isHallucination = message.isHallucination);
    if (message.orders) {
      obj.orders = message.orders.map((e) =>
        e ? UnitOrder.toJSON(e) : undefined,
      );
    } else {
      obj.orders = [];
    }
    message.addOnTag !== undefined &&
      (obj.addOnTag = Math.round(message.addOnTag));
    if (message.passengers) {
      obj.passengers = message.passengers.map((e) =>
        e ? PassengerUnit.toJSON(e) : undefined,
      );
    } else {
      obj.passengers = [];
    }
    message.cargoSpaceTaken !== undefined &&
      (obj.cargoSpaceTaken = Math.round(message.cargoSpaceTaken));
    message.cargoSpaceMax !== undefined &&
      (obj.cargoSpaceMax = Math.round(message.cargoSpaceMax));
    message.assignedHarvesters !== undefined &&
      (obj.assignedHarvesters = Math.round(message.assignedHarvesters));
    message.idealHarvesters !== undefined &&
      (obj.idealHarvesters = Math.round(message.idealHarvesters));
    message.weaponCooldown !== undefined &&
      (obj.weaponCooldown = message.weaponCooldown);
    message.engagedTargetTag !== undefined &&
      (obj.engagedTargetTag = Math.round(message.engagedTargetTag));
    message.buffDurationRemain !== undefined &&
      (obj.buffDurationRemain = Math.round(message.buffDurationRemain));
    message.buffDurationMax !== undefined &&
      (obj.buffDurationMax = Math.round(message.buffDurationMax));
    if (message.rallyTargets) {
      obj.rallyTargets = message.rallyTargets.map((e) =>
        e ? RallyTarget.toJSON(e) : undefined,
      );
    } else {
      obj.rallyTargets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Unit>, I>>(object: I): Unit {
    const message = createBaseUnit();
    message.displayType = object.displayType ?? 1;
    message.alliance = object.alliance ?? 1;
    message.tag = object.tag ?? 0;
    message.unitType = object.unitType ?? 0;
    message.owner = object.owner ?? 0;
    message.pos =
      object.pos !== undefined && object.pos !== null
        ? Point.fromPartial(object.pos)
        : undefined;
    message.facing = object.facing ?? 0;
    message.radius = object.radius ?? 0;
    message.buildProgress = object.buildProgress ?? 0;
    message.cloak = object.cloak ?? 0;
    message.buffIds = object.buffIds?.map((e) => e) || [];
    message.detectRange = object.detectRange ?? 0;
    message.radarRange = object.radarRange ?? 0;
    message.isSelected = object.isSelected ?? false;
    message.isOnScreen = object.isOnScreen ?? false;
    message.isBlip = object.isBlip ?? false;
    message.isPowered = object.isPowered ?? false;
    message.isActive = object.isActive ?? false;
    message.attackUpgradeLevel = object.attackUpgradeLevel ?? 0;
    message.armorUpgradeLevel = object.armorUpgradeLevel ?? 0;
    message.shieldUpgradeLevel = object.shieldUpgradeLevel ?? 0;
    message.health = object.health ?? 0;
    message.healthMax = object.healthMax ?? 0;
    message.shield = object.shield ?? 0;
    message.shieldMax = object.shieldMax ?? 0;
    message.energy = object.energy ?? 0;
    message.energyMax = object.energyMax ?? 0;
    message.mineralContents = object.mineralContents ?? 0;
    message.vespeneContents = object.vespeneContents ?? 0;
    message.isFlying = object.isFlying ?? false;
    message.isBurrowed = object.isBurrowed ?? false;
    message.isHallucination = object.isHallucination ?? false;
    message.orders = object.orders?.map((e) => UnitOrder.fromPartial(e)) || [];
    message.addOnTag = object.addOnTag ?? 0;
    message.passengers =
      object.passengers?.map((e) => PassengerUnit.fromPartial(e)) || [];
    message.cargoSpaceTaken = object.cargoSpaceTaken ?? 0;
    message.cargoSpaceMax = object.cargoSpaceMax ?? 0;
    message.assignedHarvesters = object.assignedHarvesters ?? 0;
    message.idealHarvesters = object.idealHarvesters ?? 0;
    message.weaponCooldown = object.weaponCooldown ?? 0;
    message.engagedTargetTag = object.engagedTargetTag ?? 0;
    message.buffDurationRemain = object.buffDurationRemain ?? 0;
    message.buffDurationMax = object.buffDurationMax ?? 0;
    message.rallyTargets =
      object.rallyTargets?.map((e) => RallyTarget.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMapState(): MapState {
  return { visibility: undefined, creep: undefined };
}

export const MapState = {
  encode(
    message: MapState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.visibility !== undefined) {
      ImageData.encode(message.visibility, writer.uint32(10).fork()).ldelim();
    }
    if (message.creep !== undefined) {
      ImageData.encode(message.creep, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.visibility = ImageData.decode(reader, reader.uint32());
          break;
        case 2:
          message.creep = ImageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapState {
    return {
      visibility: isSet(object.visibility)
        ? ImageData.fromJSON(object.visibility)
        : undefined,
      creep: isSet(object.creep) ? ImageData.fromJSON(object.creep) : undefined,
    };
  },

  toJSON(message: MapState): unknown {
    const obj: any = {};
    message.visibility !== undefined &&
      (obj.visibility = message.visibility
        ? ImageData.toJSON(message.visibility)
        : undefined);
    message.creep !== undefined &&
      (obj.creep = message.creep ? ImageData.toJSON(message.creep) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapState>, I>>(object: I): MapState {
    const message = createBaseMapState();
    message.visibility =
      object.visibility !== undefined && object.visibility !== null
        ? ImageData.fromPartial(object.visibility)
        : undefined;
    message.creep =
      object.creep !== undefined && object.creep !== null
        ? ImageData.fromPartial(object.creep)
        : undefined;
    return message;
  },
};

function createBaseEvent(): Event {
  return { deadUnits: [] };
}

export const Event = {
  encode(message: Event, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.deadUnits) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Event {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.deadUnits.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.deadUnits.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Event {
    return {
      deadUnits: Array.isArray(object?.deadUnits)
        ? object.deadUnits.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: Event): unknown {
    const obj: any = {};
    if (message.deadUnits) {
      obj.deadUnits = message.deadUnits.map((e) => Math.round(e));
    } else {
      obj.deadUnits = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Event>, I>>(object: I): Event {
    const message = createBaseEvent();
    message.deadUnits = object.deadUnits?.map((e) => e) || [];
    return message;
  },
};

function createBaseEffect(): Effect {
  return { effectId: 0, pos: [], alliance: 1, owner: 0, radius: 0 };
}

export const Effect = {
  encode(
    message: Effect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.effectId !== 0) {
      writer.uint32(8).uint32(message.effectId);
    }
    for (const v of message.pos) {
      Point2D.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.alliance !== 1) {
      writer.uint32(24).int32(message.alliance);
    }
    if (message.owner !== 0) {
      writer.uint32(32).int32(message.owner);
    }
    if (message.radius !== 0) {
      writer.uint32(45).float(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Effect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectId = reader.uint32();
          break;
        case 2:
          message.pos.push(Point2D.decode(reader, reader.uint32()));
          break;
        case 3:
          message.alliance = reader.int32() as any;
          break;
        case 4:
          message.owner = reader.int32();
          break;
        case 5:
          message.radius = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Effect {
    return {
      effectId: isSet(object.effectId) ? Number(object.effectId) : 0,
      pos: Array.isArray(object?.pos)
        ? object.pos.map((e: any) => Point2D.fromJSON(e))
        : [],
      alliance: isSet(object.alliance) ? allianceFromJSON(object.alliance) : 1,
      owner: isSet(object.owner) ? Number(object.owner) : 0,
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: Effect): unknown {
    const obj: any = {};
    message.effectId !== undefined &&
      (obj.effectId = Math.round(message.effectId));
    if (message.pos) {
      obj.pos = message.pos.map((e) => (e ? Point2D.toJSON(e) : undefined));
    } else {
      obj.pos = [];
    }
    message.alliance !== undefined &&
      (obj.alliance = allianceToJSON(message.alliance));
    message.owner !== undefined && (obj.owner = Math.round(message.owner));
    message.radius !== undefined && (obj.radius = message.radius);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Effect>, I>>(object: I): Effect {
    const message = createBaseEffect();
    message.effectId = object.effectId ?? 0;
    message.pos = object.pos?.map((e) => Point2D.fromPartial(e)) || [];
    message.alliance = object.alliance ?? 1;
    message.owner = object.owner ?? 0;
    message.radius = object.radius ?? 0;
    return message;
  },
};

function createBaseActionRaw(): ActionRaw {
  return {
    unitCommand: undefined,
    cameraMove: undefined,
    toggleAutocast: undefined,
  };
}

export const ActionRaw = {
  encode(
    message: ActionRaw,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitCommand !== undefined) {
      ActionRawUnitCommand.encode(
        message.unitCommand,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.cameraMove !== undefined) {
      ActionRawCameraMove.encode(
        message.cameraMove,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.toggleAutocast !== undefined) {
      ActionRawToggleAutocast.encode(
        message.toggleAutocast,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionRaw {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionRaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitCommand = ActionRawUnitCommand.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.cameraMove = ActionRawCameraMove.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.toggleAutocast = ActionRawToggleAutocast.decode(
            reader,
            reader.uint32(),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionRaw {
    return {
      unitCommand: isSet(object.unitCommand)
        ? ActionRawUnitCommand.fromJSON(object.unitCommand)
        : undefined,
      cameraMove: isSet(object.cameraMove)
        ? ActionRawCameraMove.fromJSON(object.cameraMove)
        : undefined,
      toggleAutocast: isSet(object.toggleAutocast)
        ? ActionRawToggleAutocast.fromJSON(object.toggleAutocast)
        : undefined,
    };
  },

  toJSON(message: ActionRaw): unknown {
    const obj: any = {};
    message.unitCommand !== undefined &&
      (obj.unitCommand = message.unitCommand
        ? ActionRawUnitCommand.toJSON(message.unitCommand)
        : undefined);
    message.cameraMove !== undefined &&
      (obj.cameraMove = message.cameraMove
        ? ActionRawCameraMove.toJSON(message.cameraMove)
        : undefined);
    message.toggleAutocast !== undefined &&
      (obj.toggleAutocast = message.toggleAutocast
        ? ActionRawToggleAutocast.toJSON(message.toggleAutocast)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionRaw>, I>>(
    object: I,
  ): ActionRaw {
    const message = createBaseActionRaw();
    message.unitCommand =
      object.unitCommand !== undefined && object.unitCommand !== null
        ? ActionRawUnitCommand.fromPartial(object.unitCommand)
        : undefined;
    message.cameraMove =
      object.cameraMove !== undefined && object.cameraMove !== null
        ? ActionRawCameraMove.fromPartial(object.cameraMove)
        : undefined;
    message.toggleAutocast =
      object.toggleAutocast !== undefined && object.toggleAutocast !== null
        ? ActionRawToggleAutocast.fromPartial(object.toggleAutocast)
        : undefined;
    return message;
  },
};

function createBaseActionRawUnitCommand(): ActionRawUnitCommand {
  return {
    abilityId: 0,
    targetWorldSpacePos: undefined,
    targetUnitTag: undefined,
    unitTags: [],
    queueCommand: false,
  };
}

export const ActionRawUnitCommand = {
  encode(
    message: ActionRawUnitCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.targetWorldSpacePos !== undefined) {
      Point2D.encode(
        message.targetWorldSpacePos,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.targetUnitTag !== undefined) {
      writer.uint32(24).uint64(message.targetUnitTag);
    }
    writer.uint32(34).fork();
    for (const v of message.unitTags) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.queueCommand === true) {
      writer.uint32(40).bool(message.queueCommand);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionRawUnitCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionRawUnitCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.int32();
          break;
        case 2:
          message.targetWorldSpacePos = Point2D.decode(reader, reader.uint32());
          break;
        case 3:
          message.targetUnitTag = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unitTags.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.unitTags.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 5:
          message.queueCommand = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionRawUnitCommand {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      targetWorldSpacePos: isSet(object.targetWorldSpacePos)
        ? Point2D.fromJSON(object.targetWorldSpacePos)
        : undefined,
      targetUnitTag: isSet(object.targetUnitTag)
        ? Number(object.targetUnitTag)
        : undefined,
      unitTags: Array.isArray(object?.unitTags)
        ? object.unitTags.map((e: any) => Number(e))
        : [],
      queueCommand: isSet(object.queueCommand)
        ? Boolean(object.queueCommand)
        : false,
    };
  },

  toJSON(message: ActionRawUnitCommand): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.targetWorldSpacePos !== undefined &&
      (obj.targetWorldSpacePos = message.targetWorldSpacePos
        ? Point2D.toJSON(message.targetWorldSpacePos)
        : undefined);
    message.targetUnitTag !== undefined &&
      (obj.targetUnitTag = Math.round(message.targetUnitTag));
    if (message.unitTags) {
      obj.unitTags = message.unitTags.map((e) => Math.round(e));
    } else {
      obj.unitTags = [];
    }
    message.queueCommand !== undefined &&
      (obj.queueCommand = message.queueCommand);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionRawUnitCommand>, I>>(
    object: I,
  ): ActionRawUnitCommand {
    const message = createBaseActionRawUnitCommand();
    message.abilityId = object.abilityId ?? 0;
    message.targetWorldSpacePos =
      object.targetWorldSpacePos !== undefined &&
      object.targetWorldSpacePos !== null
        ? Point2D.fromPartial(object.targetWorldSpacePos)
        : undefined;
    message.targetUnitTag = object.targetUnitTag ?? undefined;
    message.unitTags = object.unitTags?.map((e) => e) || [];
    message.queueCommand = object.queueCommand ?? false;
    return message;
  },
};

function createBaseActionRawCameraMove(): ActionRawCameraMove {
  return { centerWorldSpace: undefined };
}

export const ActionRawCameraMove = {
  encode(
    message: ActionRawCameraMove,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.centerWorldSpace !== undefined) {
      Point.encode(message.centerWorldSpace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionRawCameraMove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionRawCameraMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.centerWorldSpace = Point.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionRawCameraMove {
    return {
      centerWorldSpace: isSet(object.centerWorldSpace)
        ? Point.fromJSON(object.centerWorldSpace)
        : undefined,
    };
  },

  toJSON(message: ActionRawCameraMove): unknown {
    const obj: any = {};
    message.centerWorldSpace !== undefined &&
      (obj.centerWorldSpace = message.centerWorldSpace
        ? Point.toJSON(message.centerWorldSpace)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionRawCameraMove>, I>>(
    object: I,
  ): ActionRawCameraMove {
    const message = createBaseActionRawCameraMove();
    message.centerWorldSpace =
      object.centerWorldSpace !== undefined && object.centerWorldSpace !== null
        ? Point.fromPartial(object.centerWorldSpace)
        : undefined;
    return message;
  },
};

function createBaseActionRawToggleAutocast(): ActionRawToggleAutocast {
  return { abilityId: 0, unitTags: [] };
}

export const ActionRawToggleAutocast = {
  encode(
    message: ActionRawToggleAutocast,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    writer.uint32(18).fork();
    for (const v of message.unitTags) {
      writer.uint64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionRawToggleAutocast {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionRawToggleAutocast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.int32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.unitTags.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.unitTags.push(longToNumber(reader.uint64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionRawToggleAutocast {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      unitTags: Array.isArray(object?.unitTags)
        ? object.unitTags.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: ActionRawToggleAutocast): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    if (message.unitTags) {
      obj.unitTags = message.unitTags.map((e) => Math.round(e));
    } else {
      obj.unitTags = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionRawToggleAutocast>, I>>(
    object: I,
  ): ActionRawToggleAutocast {
    const message = createBaseActionRawToggleAutocast();
    message.abilityId = object.abilityId ?? 0;
    message.unitTags = object.unitTags?.map((e) => e) || [];
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
