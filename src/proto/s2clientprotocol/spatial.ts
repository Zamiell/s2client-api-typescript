/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { ImageData, PointI, RectangleI } from "../s2clientprotocol/common";

export const protobufPackage = "SC2APIProtocol";

export interface ObservationFeatureLayer {
  renders: FeatureLayers | undefined;
  minimapRenders: FeatureLayersMinimap | undefined;
}

export interface FeatureLayers {
  /** uint8. Terrain height. World space units of [-200, 200] encoded into [0, 255]. */
  heightMap: ImageData | undefined;
  /** uint8. 0=Hidden, 1=Fogged, 2=Visible, 3=FullHidden */
  visibilityMap: ImageData | undefined;
  /** 1-bit. Zerg creep. */
  creep: ImageData | undefined;
  /** 1-bit. Protoss power. */
  power: ImageData | undefined;
  /** uint8. Participants: [1, 15] Neutral: 16 */
  playerId: ImageData | undefined;
  /** int32. Unique identifier for type of unit. */
  unitType: ImageData | undefined;
  /** 1-bit. Selected units. */
  selected: ImageData | undefined;
  /** int32. */
  unitHitPoints: ImageData | undefined;
  /** uint8. Ratio of current health to max health. [0%, 100%] encoded into [0, 255]. */
  unitHitPointsRatio: ImageData | undefined;
  /** int32. */
  unitEnergy: ImageData | undefined;
  /** uint8. Ratio of current energy to max energy. [0%, 100%] encoded into [0, 255]. */
  unitEnergyRatio: ImageData | undefined;
  /** int32. */
  unitShields: ImageData | undefined;
  /** uint8. Ratio of current shields to max shields. [0%, 100%] encoded into [0, 255]. */
  unitShieldsRatio: ImageData | undefined;
  /** uint8. See "Alliance" enum in raw.proto. Range: [1, 4] */
  playerRelative: ImageData | undefined;
  /** uint8. Density of units overlapping a pixel, anti-aliased. [0.0, 16.0f] encoded into [0, 255]. */
  unitDensityAa: ImageData | undefined;
  /** uint8. Count of units overlapping a pixel. */
  unitDensity: ImageData | undefined;
  /** uint8. Visuals of persistent abilities. (eg. Psistorm) */
  effects: ImageData | undefined;
  /** 1-bit. Whether the unit here is a hallucination. */
  hallucinations: ImageData | undefined;
  /** 1-bit. Whether the unit here is cloaked. Hidden units will show up too, but with less details in other layers. */
  cloaked: ImageData | undefined;
  /** 1-bit. Whether the unit here is a blip. */
  blip: ImageData | undefined;
  /** int32. One of the buffs applied to this unit. Extras are ignored. */
  buffs: ImageData | undefined;
  /** uint8. Ratio of buff remaining. [0%, 100%] encoded into [0, 255]. */
  buffDuration: ImageData | undefined;
  /** 1-bit. Whether the unit here is active. */
  active: ImageData | undefined;
  /** uint8. How far along the building is building something. [0%, 100%] encoded into [0, 255]. */
  buildProgress: ImageData | undefined;
  /** 1-bit. Whether a building can be built here. */
  buildable: ImageData | undefined;
  /** 1-bit. Whether a unit can walk here. */
  pathable: ImageData | undefined;
  /** 1-bit. Whether the unit here is a placeholder building to be constructed. */
  placeholder: ImageData | undefined;
}

export interface FeatureLayersMinimap {
  /** uint8. Terrain height. World space units of [-200, 200] encoded into [0, 255]. */
  heightMap: ImageData | undefined;
  /** uint8. 0=Hidden, 1=Fogged, 2=Visible, 3=FullHidden */
  visibilityMap: ImageData | undefined;
  /** 1-bit. Zerg creep. */
  creep: ImageData | undefined;
  /** 1-bit. Area covered by the camera. */
  camera: ImageData | undefined;
  /** uint8. Participants: [1, 15] Neutral: 16 */
  playerId: ImageData | undefined;
  /** uint8. See "Alliance" enum in raw.proto. Range: [1, 4] */
  playerRelative: ImageData | undefined;
  /** 1-bit. Selected units. */
  selected: ImageData | undefined;
  /** 1-bit. Shows 'UnitAttacked' alert location. */
  alerts: ImageData | undefined;
  /** 1-bit. Whether a building can be built here. */
  buildable: ImageData | undefined;
  /** 1-bit. Whether a unit can walk here. */
  pathable: ImageData | undefined;
  /** Cheat layers, enable with SpatialCameraSetup.allow_cheating_layers. */
  unitType: ImageData | undefined;
}

export interface ObservationRender {
  map: ImageData | undefined;
  minimap: ImageData | undefined;
}

export interface ActionSpatial {
  unitCommand: ActionSpatialUnitCommand | undefined;
  cameraMove: ActionSpatialCameraMove | undefined;
  unitSelectionPoint: ActionSpatialUnitSelectionPoint | undefined;
  unitSelectionRect: ActionSpatialUnitSelectionRect | undefined;
}

export interface ActionSpatialUnitCommand {
  abilityId: number;
  targetScreenCoord: PointI | undefined;
  targetMinimapCoord: PointI | undefined;
  /** Equivalent to shift+command. */
  queueCommand: boolean;
}

export interface ActionSpatialCameraMove {
  /** Simulates a click on the minimap to move the camera. */
  centerMinimap: PointI | undefined;
}

export interface ActionSpatialUnitSelectionPoint {
  selectionScreenCoord: PointI | undefined;
  type: ActionSpatialUnitSelectionPoint_Type;
}

export enum ActionSpatialUnitSelectionPoint_Type {
  /** Select - Equivalent to normal click. Changes selection to unit. */
  Select = 1,
  /** Toggle - Equivalent to shift+click. Toggle selection of unit. */
  Toggle = 2,
  /** AllType - Equivalent to control+click. Selects all units of a given type. */
  AllType = 3,
  /** AddAllType - Equivalent to shift+control+click. Selects all units of a given type. */
  AddAllType = 4,
  UNRECOGNIZED = -1,
}

export function actionSpatialUnitSelectionPoint_TypeFromJSON(
  object: any,
): ActionSpatialUnitSelectionPoint_Type {
  switch (object) {
    case 1:
    case "Select":
      return ActionSpatialUnitSelectionPoint_Type.Select;
    case 2:
    case "Toggle":
      return ActionSpatialUnitSelectionPoint_Type.Toggle;
    case 3:
    case "AllType":
      return ActionSpatialUnitSelectionPoint_Type.AllType;
    case 4:
    case "AddAllType":
      return ActionSpatialUnitSelectionPoint_Type.AddAllType;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionSpatialUnitSelectionPoint_Type.UNRECOGNIZED;
  }
}

export function actionSpatialUnitSelectionPoint_TypeToJSON(
  object: ActionSpatialUnitSelectionPoint_Type,
): string {
  switch (object) {
    case ActionSpatialUnitSelectionPoint_Type.Select:
      return "Select";
    case ActionSpatialUnitSelectionPoint_Type.Toggle:
      return "Toggle";
    case ActionSpatialUnitSelectionPoint_Type.AllType:
      return "AllType";
    case ActionSpatialUnitSelectionPoint_Type.AddAllType:
      return "AddAllType";
    default:
      return "UNKNOWN";
  }
}

export interface ActionSpatialUnitSelectionRect {
  /** Eventually this should not be an array, but a single field (multiple would be cheating). */
  selectionScreenCoord: RectangleI[];
  /** Equivalent to shift+drag. Adds units to selection. */
  selectionAdd: boolean;
}

function createBaseObservationFeatureLayer(): ObservationFeatureLayer {
  return { renders: undefined, minimapRenders: undefined };
}

export const ObservationFeatureLayer = {
  encode(
    message: ObservationFeatureLayer,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.renders !== undefined) {
      FeatureLayers.encode(message.renders, writer.uint32(10).fork()).ldelim();
    }
    if (message.minimapRenders !== undefined) {
      FeatureLayersMinimap.encode(
        message.minimapRenders,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ObservationFeatureLayer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservationFeatureLayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.renders = FeatureLayers.decode(reader, reader.uint32());
          break;
        case 2:
          message.minimapRenders = FeatureLayersMinimap.decode(
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

  fromJSON(object: any): ObservationFeatureLayer {
    return {
      renders: isSet(object.renders)
        ? FeatureLayers.fromJSON(object.renders)
        : undefined,
      minimapRenders: isSet(object.minimapRenders)
        ? FeatureLayersMinimap.fromJSON(object.minimapRenders)
        : undefined,
    };
  },

  toJSON(message: ObservationFeatureLayer): unknown {
    const obj: any = {};
    message.renders !== undefined &&
      (obj.renders = message.renders
        ? FeatureLayers.toJSON(message.renders)
        : undefined);
    message.minimapRenders !== undefined &&
      (obj.minimapRenders = message.minimapRenders
        ? FeatureLayersMinimap.toJSON(message.minimapRenders)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservationFeatureLayer>, I>>(
    object: I,
  ): ObservationFeatureLayer {
    const message = createBaseObservationFeatureLayer();
    message.renders =
      object.renders !== undefined && object.renders !== null
        ? FeatureLayers.fromPartial(object.renders)
        : undefined;
    message.minimapRenders =
      object.minimapRenders !== undefined && object.minimapRenders !== null
        ? FeatureLayersMinimap.fromPartial(object.minimapRenders)
        : undefined;
    return message;
  },
};

function createBaseFeatureLayers(): FeatureLayers {
  return {
    heightMap: undefined,
    visibilityMap: undefined,
    creep: undefined,
    power: undefined,
    playerId: undefined,
    unitType: undefined,
    selected: undefined,
    unitHitPoints: undefined,
    unitHitPointsRatio: undefined,
    unitEnergy: undefined,
    unitEnergyRatio: undefined,
    unitShields: undefined,
    unitShieldsRatio: undefined,
    playerRelative: undefined,
    unitDensityAa: undefined,
    unitDensity: undefined,
    effects: undefined,
    hallucinations: undefined,
    cloaked: undefined,
    blip: undefined,
    buffs: undefined,
    buffDuration: undefined,
    active: undefined,
    buildProgress: undefined,
    buildable: undefined,
    pathable: undefined,
    placeholder: undefined,
  };
}

export const FeatureLayers = {
  encode(
    message: FeatureLayers,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heightMap !== undefined) {
      ImageData.encode(message.heightMap, writer.uint32(10).fork()).ldelim();
    }
    if (message.visibilityMap !== undefined) {
      ImageData.encode(
        message.visibilityMap,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.creep !== undefined) {
      ImageData.encode(message.creep, writer.uint32(26).fork()).ldelim();
    }
    if (message.power !== undefined) {
      ImageData.encode(message.power, writer.uint32(34).fork()).ldelim();
    }
    if (message.playerId !== undefined) {
      ImageData.encode(message.playerId, writer.uint32(42).fork()).ldelim();
    }
    if (message.unitType !== undefined) {
      ImageData.encode(message.unitType, writer.uint32(50).fork()).ldelim();
    }
    if (message.selected !== undefined) {
      ImageData.encode(message.selected, writer.uint32(58).fork()).ldelim();
    }
    if (message.unitHitPoints !== undefined) {
      ImageData.encode(
        message.unitHitPoints,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.unitHitPointsRatio !== undefined) {
      ImageData.encode(
        message.unitHitPointsRatio,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.unitEnergy !== undefined) {
      ImageData.encode(message.unitEnergy, writer.uint32(74).fork()).ldelim();
    }
    if (message.unitEnergyRatio !== undefined) {
      ImageData.encode(
        message.unitEnergyRatio,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.unitShields !== undefined) {
      ImageData.encode(message.unitShields, writer.uint32(82).fork()).ldelim();
    }
    if (message.unitShieldsRatio !== undefined) {
      ImageData.encode(
        message.unitShieldsRatio,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.playerRelative !== undefined) {
      ImageData.encode(
        message.playerRelative,
        writer.uint32(90).fork(),
      ).ldelim();
    }
    if (message.unitDensityAa !== undefined) {
      ImageData.encode(
        message.unitDensityAa,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.unitDensity !== undefined) {
      ImageData.encode(message.unitDensity, writer.uint32(122).fork()).ldelim();
    }
    if (message.effects !== undefined) {
      ImageData.encode(message.effects, writer.uint32(162).fork()).ldelim();
    }
    if (message.hallucinations !== undefined) {
      ImageData.encode(
        message.hallucinations,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.cloaked !== undefined) {
      ImageData.encode(message.cloaked, writer.uint32(178).fork()).ldelim();
    }
    if (message.blip !== undefined) {
      ImageData.encode(message.blip, writer.uint32(186).fork()).ldelim();
    }
    if (message.buffs !== undefined) {
      ImageData.encode(message.buffs, writer.uint32(194).fork()).ldelim();
    }
    if (message.buffDuration !== undefined) {
      ImageData.encode(
        message.buffDuration,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.active !== undefined) {
      ImageData.encode(message.active, writer.uint32(202).fork()).ldelim();
    }
    if (message.buildProgress !== undefined) {
      ImageData.encode(
        message.buildProgress,
        writer.uint32(218).fork(),
      ).ldelim();
    }
    if (message.buildable !== undefined) {
      ImageData.encode(message.buildable, writer.uint32(226).fork()).ldelim();
    }
    if (message.pathable !== undefined) {
      ImageData.encode(message.pathable, writer.uint32(234).fork()).ldelim();
    }
    if (message.placeholder !== undefined) {
      ImageData.encode(message.placeholder, writer.uint32(242).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeatureLayers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureLayers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heightMap = ImageData.decode(reader, reader.uint32());
          break;
        case 2:
          message.visibilityMap = ImageData.decode(reader, reader.uint32());
          break;
        case 3:
          message.creep = ImageData.decode(reader, reader.uint32());
          break;
        case 4:
          message.power = ImageData.decode(reader, reader.uint32());
          break;
        case 5:
          message.playerId = ImageData.decode(reader, reader.uint32());
          break;
        case 6:
          message.unitType = ImageData.decode(reader, reader.uint32());
          break;
        case 7:
          message.selected = ImageData.decode(reader, reader.uint32());
          break;
        case 8:
          message.unitHitPoints = ImageData.decode(reader, reader.uint32());
          break;
        case 17:
          message.unitHitPointsRatio = ImageData.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 9:
          message.unitEnergy = ImageData.decode(reader, reader.uint32());
          break;
        case 18:
          message.unitEnergyRatio = ImageData.decode(reader, reader.uint32());
          break;
        case 10:
          message.unitShields = ImageData.decode(reader, reader.uint32());
          break;
        case 19:
          message.unitShieldsRatio = ImageData.decode(reader, reader.uint32());
          break;
        case 11:
          message.playerRelative = ImageData.decode(reader, reader.uint32());
          break;
        case 14:
          message.unitDensityAa = ImageData.decode(reader, reader.uint32());
          break;
        case 15:
          message.unitDensity = ImageData.decode(reader, reader.uint32());
          break;
        case 20:
          message.effects = ImageData.decode(reader, reader.uint32());
          break;
        case 21:
          message.hallucinations = ImageData.decode(reader, reader.uint32());
          break;
        case 22:
          message.cloaked = ImageData.decode(reader, reader.uint32());
          break;
        case 23:
          message.blip = ImageData.decode(reader, reader.uint32());
          break;
        case 24:
          message.buffs = ImageData.decode(reader, reader.uint32());
          break;
        case 26:
          message.buffDuration = ImageData.decode(reader, reader.uint32());
          break;
        case 25:
          message.active = ImageData.decode(reader, reader.uint32());
          break;
        case 27:
          message.buildProgress = ImageData.decode(reader, reader.uint32());
          break;
        case 28:
          message.buildable = ImageData.decode(reader, reader.uint32());
          break;
        case 29:
          message.pathable = ImageData.decode(reader, reader.uint32());
          break;
        case 30:
          message.placeholder = ImageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureLayers {
    return {
      heightMap: isSet(object.heightMap)
        ? ImageData.fromJSON(object.heightMap)
        : undefined,
      visibilityMap: isSet(object.visibilityMap)
        ? ImageData.fromJSON(object.visibilityMap)
        : undefined,
      creep: isSet(object.creep) ? ImageData.fromJSON(object.creep) : undefined,
      power: isSet(object.power) ? ImageData.fromJSON(object.power) : undefined,
      playerId: isSet(object.playerId)
        ? ImageData.fromJSON(object.playerId)
        : undefined,
      unitType: isSet(object.unitType)
        ? ImageData.fromJSON(object.unitType)
        : undefined,
      selected: isSet(object.selected)
        ? ImageData.fromJSON(object.selected)
        : undefined,
      unitHitPoints: isSet(object.unitHitPoints)
        ? ImageData.fromJSON(object.unitHitPoints)
        : undefined,
      unitHitPointsRatio: isSet(object.unitHitPointsRatio)
        ? ImageData.fromJSON(object.unitHitPointsRatio)
        : undefined,
      unitEnergy: isSet(object.unitEnergy)
        ? ImageData.fromJSON(object.unitEnergy)
        : undefined,
      unitEnergyRatio: isSet(object.unitEnergyRatio)
        ? ImageData.fromJSON(object.unitEnergyRatio)
        : undefined,
      unitShields: isSet(object.unitShields)
        ? ImageData.fromJSON(object.unitShields)
        : undefined,
      unitShieldsRatio: isSet(object.unitShieldsRatio)
        ? ImageData.fromJSON(object.unitShieldsRatio)
        : undefined,
      playerRelative: isSet(object.playerRelative)
        ? ImageData.fromJSON(object.playerRelative)
        : undefined,
      unitDensityAa: isSet(object.unitDensityAa)
        ? ImageData.fromJSON(object.unitDensityAa)
        : undefined,
      unitDensity: isSet(object.unitDensity)
        ? ImageData.fromJSON(object.unitDensity)
        : undefined,
      effects: isSet(object.effects)
        ? ImageData.fromJSON(object.effects)
        : undefined,
      hallucinations: isSet(object.hallucinations)
        ? ImageData.fromJSON(object.hallucinations)
        : undefined,
      cloaked: isSet(object.cloaked)
        ? ImageData.fromJSON(object.cloaked)
        : undefined,
      blip: isSet(object.blip) ? ImageData.fromJSON(object.blip) : undefined,
      buffs: isSet(object.buffs) ? ImageData.fromJSON(object.buffs) : undefined,
      buffDuration: isSet(object.buffDuration)
        ? ImageData.fromJSON(object.buffDuration)
        : undefined,
      active: isSet(object.active)
        ? ImageData.fromJSON(object.active)
        : undefined,
      buildProgress: isSet(object.buildProgress)
        ? ImageData.fromJSON(object.buildProgress)
        : undefined,
      buildable: isSet(object.buildable)
        ? ImageData.fromJSON(object.buildable)
        : undefined,
      pathable: isSet(object.pathable)
        ? ImageData.fromJSON(object.pathable)
        : undefined,
      placeholder: isSet(object.placeholder)
        ? ImageData.fromJSON(object.placeholder)
        : undefined,
    };
  },

  toJSON(message: FeatureLayers): unknown {
    const obj: any = {};
    message.heightMap !== undefined &&
      (obj.heightMap = message.heightMap
        ? ImageData.toJSON(message.heightMap)
        : undefined);
    message.visibilityMap !== undefined &&
      (obj.visibilityMap = message.visibilityMap
        ? ImageData.toJSON(message.visibilityMap)
        : undefined);
    message.creep !== undefined &&
      (obj.creep = message.creep ? ImageData.toJSON(message.creep) : undefined);
    message.power !== undefined &&
      (obj.power = message.power ? ImageData.toJSON(message.power) : undefined);
    message.playerId !== undefined &&
      (obj.playerId = message.playerId
        ? ImageData.toJSON(message.playerId)
        : undefined);
    message.unitType !== undefined &&
      (obj.unitType = message.unitType
        ? ImageData.toJSON(message.unitType)
        : undefined);
    message.selected !== undefined &&
      (obj.selected = message.selected
        ? ImageData.toJSON(message.selected)
        : undefined);
    message.unitHitPoints !== undefined &&
      (obj.unitHitPoints = message.unitHitPoints
        ? ImageData.toJSON(message.unitHitPoints)
        : undefined);
    message.unitHitPointsRatio !== undefined &&
      (obj.unitHitPointsRatio = message.unitHitPointsRatio
        ? ImageData.toJSON(message.unitHitPointsRatio)
        : undefined);
    message.unitEnergy !== undefined &&
      (obj.unitEnergy = message.unitEnergy
        ? ImageData.toJSON(message.unitEnergy)
        : undefined);
    message.unitEnergyRatio !== undefined &&
      (obj.unitEnergyRatio = message.unitEnergyRatio
        ? ImageData.toJSON(message.unitEnergyRatio)
        : undefined);
    message.unitShields !== undefined &&
      (obj.unitShields = message.unitShields
        ? ImageData.toJSON(message.unitShields)
        : undefined);
    message.unitShieldsRatio !== undefined &&
      (obj.unitShieldsRatio = message.unitShieldsRatio
        ? ImageData.toJSON(message.unitShieldsRatio)
        : undefined);
    message.playerRelative !== undefined &&
      (obj.playerRelative = message.playerRelative
        ? ImageData.toJSON(message.playerRelative)
        : undefined);
    message.unitDensityAa !== undefined &&
      (obj.unitDensityAa = message.unitDensityAa
        ? ImageData.toJSON(message.unitDensityAa)
        : undefined);
    message.unitDensity !== undefined &&
      (obj.unitDensity = message.unitDensity
        ? ImageData.toJSON(message.unitDensity)
        : undefined);
    message.effects !== undefined &&
      (obj.effects = message.effects
        ? ImageData.toJSON(message.effects)
        : undefined);
    message.hallucinations !== undefined &&
      (obj.hallucinations = message.hallucinations
        ? ImageData.toJSON(message.hallucinations)
        : undefined);
    message.cloaked !== undefined &&
      (obj.cloaked = message.cloaked
        ? ImageData.toJSON(message.cloaked)
        : undefined);
    message.blip !== undefined &&
      (obj.blip = message.blip ? ImageData.toJSON(message.blip) : undefined);
    message.buffs !== undefined &&
      (obj.buffs = message.buffs ? ImageData.toJSON(message.buffs) : undefined);
    message.buffDuration !== undefined &&
      (obj.buffDuration = message.buffDuration
        ? ImageData.toJSON(message.buffDuration)
        : undefined);
    message.active !== undefined &&
      (obj.active = message.active
        ? ImageData.toJSON(message.active)
        : undefined);
    message.buildProgress !== undefined &&
      (obj.buildProgress = message.buildProgress
        ? ImageData.toJSON(message.buildProgress)
        : undefined);
    message.buildable !== undefined &&
      (obj.buildable = message.buildable
        ? ImageData.toJSON(message.buildable)
        : undefined);
    message.pathable !== undefined &&
      (obj.pathable = message.pathable
        ? ImageData.toJSON(message.pathable)
        : undefined);
    message.placeholder !== undefined &&
      (obj.placeholder = message.placeholder
        ? ImageData.toJSON(message.placeholder)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeatureLayers>, I>>(
    object: I,
  ): FeatureLayers {
    const message = createBaseFeatureLayers();
    message.heightMap =
      object.heightMap !== undefined && object.heightMap !== null
        ? ImageData.fromPartial(object.heightMap)
        : undefined;
    message.visibilityMap =
      object.visibilityMap !== undefined && object.visibilityMap !== null
        ? ImageData.fromPartial(object.visibilityMap)
        : undefined;
    message.creep =
      object.creep !== undefined && object.creep !== null
        ? ImageData.fromPartial(object.creep)
        : undefined;
    message.power =
      object.power !== undefined && object.power !== null
        ? ImageData.fromPartial(object.power)
        : undefined;
    message.playerId =
      object.playerId !== undefined && object.playerId !== null
        ? ImageData.fromPartial(object.playerId)
        : undefined;
    message.unitType =
      object.unitType !== undefined && object.unitType !== null
        ? ImageData.fromPartial(object.unitType)
        : undefined;
    message.selected =
      object.selected !== undefined && object.selected !== null
        ? ImageData.fromPartial(object.selected)
        : undefined;
    message.unitHitPoints =
      object.unitHitPoints !== undefined && object.unitHitPoints !== null
        ? ImageData.fromPartial(object.unitHitPoints)
        : undefined;
    message.unitHitPointsRatio =
      object.unitHitPointsRatio !== undefined &&
      object.unitHitPointsRatio !== null
        ? ImageData.fromPartial(object.unitHitPointsRatio)
        : undefined;
    message.unitEnergy =
      object.unitEnergy !== undefined && object.unitEnergy !== null
        ? ImageData.fromPartial(object.unitEnergy)
        : undefined;
    message.unitEnergyRatio =
      object.unitEnergyRatio !== undefined && object.unitEnergyRatio !== null
        ? ImageData.fromPartial(object.unitEnergyRatio)
        : undefined;
    message.unitShields =
      object.unitShields !== undefined && object.unitShields !== null
        ? ImageData.fromPartial(object.unitShields)
        : undefined;
    message.unitShieldsRatio =
      object.unitShieldsRatio !== undefined && object.unitShieldsRatio !== null
        ? ImageData.fromPartial(object.unitShieldsRatio)
        : undefined;
    message.playerRelative =
      object.playerRelative !== undefined && object.playerRelative !== null
        ? ImageData.fromPartial(object.playerRelative)
        : undefined;
    message.unitDensityAa =
      object.unitDensityAa !== undefined && object.unitDensityAa !== null
        ? ImageData.fromPartial(object.unitDensityAa)
        : undefined;
    message.unitDensity =
      object.unitDensity !== undefined && object.unitDensity !== null
        ? ImageData.fromPartial(object.unitDensity)
        : undefined;
    message.effects =
      object.effects !== undefined && object.effects !== null
        ? ImageData.fromPartial(object.effects)
        : undefined;
    message.hallucinations =
      object.hallucinations !== undefined && object.hallucinations !== null
        ? ImageData.fromPartial(object.hallucinations)
        : undefined;
    message.cloaked =
      object.cloaked !== undefined && object.cloaked !== null
        ? ImageData.fromPartial(object.cloaked)
        : undefined;
    message.blip =
      object.blip !== undefined && object.blip !== null
        ? ImageData.fromPartial(object.blip)
        : undefined;
    message.buffs =
      object.buffs !== undefined && object.buffs !== null
        ? ImageData.fromPartial(object.buffs)
        : undefined;
    message.buffDuration =
      object.buffDuration !== undefined && object.buffDuration !== null
        ? ImageData.fromPartial(object.buffDuration)
        : undefined;
    message.active =
      object.active !== undefined && object.active !== null
        ? ImageData.fromPartial(object.active)
        : undefined;
    message.buildProgress =
      object.buildProgress !== undefined && object.buildProgress !== null
        ? ImageData.fromPartial(object.buildProgress)
        : undefined;
    message.buildable =
      object.buildable !== undefined && object.buildable !== null
        ? ImageData.fromPartial(object.buildable)
        : undefined;
    message.pathable =
      object.pathable !== undefined && object.pathable !== null
        ? ImageData.fromPartial(object.pathable)
        : undefined;
    message.placeholder =
      object.placeholder !== undefined && object.placeholder !== null
        ? ImageData.fromPartial(object.placeholder)
        : undefined;
    return message;
  },
};

function createBaseFeatureLayersMinimap(): FeatureLayersMinimap {
  return {
    heightMap: undefined,
    visibilityMap: undefined,
    creep: undefined,
    camera: undefined,
    playerId: undefined,
    playerRelative: undefined,
    selected: undefined,
    alerts: undefined,
    buildable: undefined,
    pathable: undefined,
    unitType: undefined,
  };
}

export const FeatureLayersMinimap = {
  encode(
    message: FeatureLayersMinimap,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.heightMap !== undefined) {
      ImageData.encode(message.heightMap, writer.uint32(10).fork()).ldelim();
    }
    if (message.visibilityMap !== undefined) {
      ImageData.encode(
        message.visibilityMap,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.creep !== undefined) {
      ImageData.encode(message.creep, writer.uint32(26).fork()).ldelim();
    }
    if (message.camera !== undefined) {
      ImageData.encode(message.camera, writer.uint32(34).fork()).ldelim();
    }
    if (message.playerId !== undefined) {
      ImageData.encode(message.playerId, writer.uint32(42).fork()).ldelim();
    }
    if (message.playerRelative !== undefined) {
      ImageData.encode(
        message.playerRelative,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.selected !== undefined) {
      ImageData.encode(message.selected, writer.uint32(58).fork()).ldelim();
    }
    if (message.alerts !== undefined) {
      ImageData.encode(message.alerts, writer.uint32(74).fork()).ldelim();
    }
    if (message.buildable !== undefined) {
      ImageData.encode(message.buildable, writer.uint32(82).fork()).ldelim();
    }
    if (message.pathable !== undefined) {
      ImageData.encode(message.pathable, writer.uint32(90).fork()).ldelim();
    }
    if (message.unitType !== undefined) {
      ImageData.encode(message.unitType, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): FeatureLayersMinimap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeatureLayersMinimap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.heightMap = ImageData.decode(reader, reader.uint32());
          break;
        case 2:
          message.visibilityMap = ImageData.decode(reader, reader.uint32());
          break;
        case 3:
          message.creep = ImageData.decode(reader, reader.uint32());
          break;
        case 4:
          message.camera = ImageData.decode(reader, reader.uint32());
          break;
        case 5:
          message.playerId = ImageData.decode(reader, reader.uint32());
          break;
        case 6:
          message.playerRelative = ImageData.decode(reader, reader.uint32());
          break;
        case 7:
          message.selected = ImageData.decode(reader, reader.uint32());
          break;
        case 9:
          message.alerts = ImageData.decode(reader, reader.uint32());
          break;
        case 10:
          message.buildable = ImageData.decode(reader, reader.uint32());
          break;
        case 11:
          message.pathable = ImageData.decode(reader, reader.uint32());
          break;
        case 8:
          message.unitType = ImageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeatureLayersMinimap {
    return {
      heightMap: isSet(object.heightMap)
        ? ImageData.fromJSON(object.heightMap)
        : undefined,
      visibilityMap: isSet(object.visibilityMap)
        ? ImageData.fromJSON(object.visibilityMap)
        : undefined,
      creep: isSet(object.creep) ? ImageData.fromJSON(object.creep) : undefined,
      camera: isSet(object.camera)
        ? ImageData.fromJSON(object.camera)
        : undefined,
      playerId: isSet(object.playerId)
        ? ImageData.fromJSON(object.playerId)
        : undefined,
      playerRelative: isSet(object.playerRelative)
        ? ImageData.fromJSON(object.playerRelative)
        : undefined,
      selected: isSet(object.selected)
        ? ImageData.fromJSON(object.selected)
        : undefined,
      alerts: isSet(object.alerts)
        ? ImageData.fromJSON(object.alerts)
        : undefined,
      buildable: isSet(object.buildable)
        ? ImageData.fromJSON(object.buildable)
        : undefined,
      pathable: isSet(object.pathable)
        ? ImageData.fromJSON(object.pathable)
        : undefined,
      unitType: isSet(object.unitType)
        ? ImageData.fromJSON(object.unitType)
        : undefined,
    };
  },

  toJSON(message: FeatureLayersMinimap): unknown {
    const obj: any = {};
    message.heightMap !== undefined &&
      (obj.heightMap = message.heightMap
        ? ImageData.toJSON(message.heightMap)
        : undefined);
    message.visibilityMap !== undefined &&
      (obj.visibilityMap = message.visibilityMap
        ? ImageData.toJSON(message.visibilityMap)
        : undefined);
    message.creep !== undefined &&
      (obj.creep = message.creep ? ImageData.toJSON(message.creep) : undefined);
    message.camera !== undefined &&
      (obj.camera = message.camera
        ? ImageData.toJSON(message.camera)
        : undefined);
    message.playerId !== undefined &&
      (obj.playerId = message.playerId
        ? ImageData.toJSON(message.playerId)
        : undefined);
    message.playerRelative !== undefined &&
      (obj.playerRelative = message.playerRelative
        ? ImageData.toJSON(message.playerRelative)
        : undefined);
    message.selected !== undefined &&
      (obj.selected = message.selected
        ? ImageData.toJSON(message.selected)
        : undefined);
    message.alerts !== undefined &&
      (obj.alerts = message.alerts
        ? ImageData.toJSON(message.alerts)
        : undefined);
    message.buildable !== undefined &&
      (obj.buildable = message.buildable
        ? ImageData.toJSON(message.buildable)
        : undefined);
    message.pathable !== undefined &&
      (obj.pathable = message.pathable
        ? ImageData.toJSON(message.pathable)
        : undefined);
    message.unitType !== undefined &&
      (obj.unitType = message.unitType
        ? ImageData.toJSON(message.unitType)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeatureLayersMinimap>, I>>(
    object: I,
  ): FeatureLayersMinimap {
    const message = createBaseFeatureLayersMinimap();
    message.heightMap =
      object.heightMap !== undefined && object.heightMap !== null
        ? ImageData.fromPartial(object.heightMap)
        : undefined;
    message.visibilityMap =
      object.visibilityMap !== undefined && object.visibilityMap !== null
        ? ImageData.fromPartial(object.visibilityMap)
        : undefined;
    message.creep =
      object.creep !== undefined && object.creep !== null
        ? ImageData.fromPartial(object.creep)
        : undefined;
    message.camera =
      object.camera !== undefined && object.camera !== null
        ? ImageData.fromPartial(object.camera)
        : undefined;
    message.playerId =
      object.playerId !== undefined && object.playerId !== null
        ? ImageData.fromPartial(object.playerId)
        : undefined;
    message.playerRelative =
      object.playerRelative !== undefined && object.playerRelative !== null
        ? ImageData.fromPartial(object.playerRelative)
        : undefined;
    message.selected =
      object.selected !== undefined && object.selected !== null
        ? ImageData.fromPartial(object.selected)
        : undefined;
    message.alerts =
      object.alerts !== undefined && object.alerts !== null
        ? ImageData.fromPartial(object.alerts)
        : undefined;
    message.buildable =
      object.buildable !== undefined && object.buildable !== null
        ? ImageData.fromPartial(object.buildable)
        : undefined;
    message.pathable =
      object.pathable !== undefined && object.pathable !== null
        ? ImageData.fromPartial(object.pathable)
        : undefined;
    message.unitType =
      object.unitType !== undefined && object.unitType !== null
        ? ImageData.fromPartial(object.unitType)
        : undefined;
    return message;
  },
};

function createBaseObservationRender(): ObservationRender {
  return { map: undefined, minimap: undefined };
}

export const ObservationRender = {
  encode(
    message: ObservationRender,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.map !== undefined) {
      ImageData.encode(message.map, writer.uint32(10).fork()).ldelim();
    }
    if (message.minimap !== undefined) {
      ImageData.encode(message.minimap, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObservationRender {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservationRender();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.map = ImageData.decode(reader, reader.uint32());
          break;
        case 2:
          message.minimap = ImageData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservationRender {
    return {
      map: isSet(object.map) ? ImageData.fromJSON(object.map) : undefined,
      minimap: isSet(object.minimap)
        ? ImageData.fromJSON(object.minimap)
        : undefined,
    };
  },

  toJSON(message: ObservationRender): unknown {
    const obj: any = {};
    message.map !== undefined &&
      (obj.map = message.map ? ImageData.toJSON(message.map) : undefined);
    message.minimap !== undefined &&
      (obj.minimap = message.minimap
        ? ImageData.toJSON(message.minimap)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservationRender>, I>>(
    object: I,
  ): ObservationRender {
    const message = createBaseObservationRender();
    message.map =
      object.map !== undefined && object.map !== null
        ? ImageData.fromPartial(object.map)
        : undefined;
    message.minimap =
      object.minimap !== undefined && object.minimap !== null
        ? ImageData.fromPartial(object.minimap)
        : undefined;
    return message;
  },
};

function createBaseActionSpatial(): ActionSpatial {
  return {
    unitCommand: undefined,
    cameraMove: undefined,
    unitSelectionPoint: undefined,
    unitSelectionRect: undefined,
  };
}

export const ActionSpatial = {
  encode(
    message: ActionSpatial,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitCommand !== undefined) {
      ActionSpatialUnitCommand.encode(
        message.unitCommand,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.cameraMove !== undefined) {
      ActionSpatialCameraMove.encode(
        message.cameraMove,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.unitSelectionPoint !== undefined) {
      ActionSpatialUnitSelectionPoint.encode(
        message.unitSelectionPoint,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.unitSelectionRect !== undefined) {
      ActionSpatialUnitSelectionRect.encode(
        message.unitSelectionRect,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionSpatial {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSpatial();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitCommand = ActionSpatialUnitCommand.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.cameraMove = ActionSpatialCameraMove.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 3:
          message.unitSelectionPoint = ActionSpatialUnitSelectionPoint.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.unitSelectionRect = ActionSpatialUnitSelectionRect.decode(
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

  fromJSON(object: any): ActionSpatial {
    return {
      unitCommand: isSet(object.unitCommand)
        ? ActionSpatialUnitCommand.fromJSON(object.unitCommand)
        : undefined,
      cameraMove: isSet(object.cameraMove)
        ? ActionSpatialCameraMove.fromJSON(object.cameraMove)
        : undefined,
      unitSelectionPoint: isSet(object.unitSelectionPoint)
        ? ActionSpatialUnitSelectionPoint.fromJSON(object.unitSelectionPoint)
        : undefined,
      unitSelectionRect: isSet(object.unitSelectionRect)
        ? ActionSpatialUnitSelectionRect.fromJSON(object.unitSelectionRect)
        : undefined,
    };
  },

  toJSON(message: ActionSpatial): unknown {
    const obj: any = {};
    message.unitCommand !== undefined &&
      (obj.unitCommand = message.unitCommand
        ? ActionSpatialUnitCommand.toJSON(message.unitCommand)
        : undefined);
    message.cameraMove !== undefined &&
      (obj.cameraMove = message.cameraMove
        ? ActionSpatialCameraMove.toJSON(message.cameraMove)
        : undefined);
    message.unitSelectionPoint !== undefined &&
      (obj.unitSelectionPoint = message.unitSelectionPoint
        ? ActionSpatialUnitSelectionPoint.toJSON(message.unitSelectionPoint)
        : undefined);
    message.unitSelectionRect !== undefined &&
      (obj.unitSelectionRect = message.unitSelectionRect
        ? ActionSpatialUnitSelectionRect.toJSON(message.unitSelectionRect)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSpatial>, I>>(
    object: I,
  ): ActionSpatial {
    const message = createBaseActionSpatial();
    message.unitCommand =
      object.unitCommand !== undefined && object.unitCommand !== null
        ? ActionSpatialUnitCommand.fromPartial(object.unitCommand)
        : undefined;
    message.cameraMove =
      object.cameraMove !== undefined && object.cameraMove !== null
        ? ActionSpatialCameraMove.fromPartial(object.cameraMove)
        : undefined;
    message.unitSelectionPoint =
      object.unitSelectionPoint !== undefined &&
      object.unitSelectionPoint !== null
        ? ActionSpatialUnitSelectionPoint.fromPartial(object.unitSelectionPoint)
        : undefined;
    message.unitSelectionRect =
      object.unitSelectionRect !== undefined &&
      object.unitSelectionRect !== null
        ? ActionSpatialUnitSelectionRect.fromPartial(object.unitSelectionRect)
        : undefined;
    return message;
  },
};

function createBaseActionSpatialUnitCommand(): ActionSpatialUnitCommand {
  return {
    abilityId: 0,
    targetScreenCoord: undefined,
    targetMinimapCoord: undefined,
    queueCommand: false,
  };
}

export const ActionSpatialUnitCommand = {
  encode(
    message: ActionSpatialUnitCommand,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    if (message.targetScreenCoord !== undefined) {
      PointI.encode(
        message.targetScreenCoord,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.targetMinimapCoord !== undefined) {
      PointI.encode(
        message.targetMinimapCoord,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.queueCommand === true) {
      writer.uint32(32).bool(message.queueCommand);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionSpatialUnitCommand {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSpatialUnitCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.int32();
          break;
        case 2:
          message.targetScreenCoord = PointI.decode(reader, reader.uint32());
          break;
        case 3:
          message.targetMinimapCoord = PointI.decode(reader, reader.uint32());
          break;
        case 4:
          message.queueCommand = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSpatialUnitCommand {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      targetScreenCoord: isSet(object.targetScreenCoord)
        ? PointI.fromJSON(object.targetScreenCoord)
        : undefined,
      targetMinimapCoord: isSet(object.targetMinimapCoord)
        ? PointI.fromJSON(object.targetMinimapCoord)
        : undefined,
      queueCommand: isSet(object.queueCommand)
        ? Boolean(object.queueCommand)
        : false,
    };
  },

  toJSON(message: ActionSpatialUnitCommand): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.targetScreenCoord !== undefined &&
      (obj.targetScreenCoord = message.targetScreenCoord
        ? PointI.toJSON(message.targetScreenCoord)
        : undefined);
    message.targetMinimapCoord !== undefined &&
      (obj.targetMinimapCoord = message.targetMinimapCoord
        ? PointI.toJSON(message.targetMinimapCoord)
        : undefined);
    message.queueCommand !== undefined &&
      (obj.queueCommand = message.queueCommand);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSpatialUnitCommand>, I>>(
    object: I,
  ): ActionSpatialUnitCommand {
    const message = createBaseActionSpatialUnitCommand();
    message.abilityId = object.abilityId ?? 0;
    message.targetScreenCoord =
      object.targetScreenCoord !== undefined &&
      object.targetScreenCoord !== null
        ? PointI.fromPartial(object.targetScreenCoord)
        : undefined;
    message.targetMinimapCoord =
      object.targetMinimapCoord !== undefined &&
      object.targetMinimapCoord !== null
        ? PointI.fromPartial(object.targetMinimapCoord)
        : undefined;
    message.queueCommand = object.queueCommand ?? false;
    return message;
  },
};

function createBaseActionSpatialCameraMove(): ActionSpatialCameraMove {
  return { centerMinimap: undefined };
}

export const ActionSpatialCameraMove = {
  encode(
    message: ActionSpatialCameraMove,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.centerMinimap !== undefined) {
      PointI.encode(message.centerMinimap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionSpatialCameraMove {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSpatialCameraMove();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.centerMinimap = PointI.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSpatialCameraMove {
    return {
      centerMinimap: isSet(object.centerMinimap)
        ? PointI.fromJSON(object.centerMinimap)
        : undefined,
    };
  },

  toJSON(message: ActionSpatialCameraMove): unknown {
    const obj: any = {};
    message.centerMinimap !== undefined &&
      (obj.centerMinimap = message.centerMinimap
        ? PointI.toJSON(message.centerMinimap)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSpatialCameraMove>, I>>(
    object: I,
  ): ActionSpatialCameraMove {
    const message = createBaseActionSpatialCameraMove();
    message.centerMinimap =
      object.centerMinimap !== undefined && object.centerMinimap !== null
        ? PointI.fromPartial(object.centerMinimap)
        : undefined;
    return message;
  },
};

function createBaseActionSpatialUnitSelectionPoint(): ActionSpatialUnitSelectionPoint {
  return { selectionScreenCoord: undefined, type: 1 };
}

export const ActionSpatialUnitSelectionPoint = {
  encode(
    message: ActionSpatialUnitSelectionPoint,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selectionScreenCoord !== undefined) {
      PointI.encode(
        message.selectionScreenCoord,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.type !== 1) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionSpatialUnitSelectionPoint {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSpatialUnitSelectionPoint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectionScreenCoord = PointI.decode(reader, reader.uint32());
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSpatialUnitSelectionPoint {
    return {
      selectionScreenCoord: isSet(object.selectionScreenCoord)
        ? PointI.fromJSON(object.selectionScreenCoord)
        : undefined,
      type: isSet(object.type)
        ? actionSpatialUnitSelectionPoint_TypeFromJSON(object.type)
        : 1,
    };
  },

  toJSON(message: ActionSpatialUnitSelectionPoint): unknown {
    const obj: any = {};
    message.selectionScreenCoord !== undefined &&
      (obj.selectionScreenCoord = message.selectionScreenCoord
        ? PointI.toJSON(message.selectionScreenCoord)
        : undefined);
    message.type !== undefined &&
      (obj.type = actionSpatialUnitSelectionPoint_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSpatialUnitSelectionPoint>, I>>(
    object: I,
  ): ActionSpatialUnitSelectionPoint {
    const message = createBaseActionSpatialUnitSelectionPoint();
    message.selectionScreenCoord =
      object.selectionScreenCoord !== undefined &&
      object.selectionScreenCoord !== null
        ? PointI.fromPartial(object.selectionScreenCoord)
        : undefined;
    message.type = object.type ?? 1;
    return message;
  },
};

function createBaseActionSpatialUnitSelectionRect(): ActionSpatialUnitSelectionRect {
  return { selectionScreenCoord: [], selectionAdd: false };
}

export const ActionSpatialUnitSelectionRect = {
  encode(
    message: ActionSpatialUnitSelectionRect,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.selectionScreenCoord) {
      RectangleI.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.selectionAdd === true) {
      writer.uint32(16).bool(message.selectionAdd);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionSpatialUnitSelectionRect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSpatialUnitSelectionRect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectionScreenCoord.push(
            RectangleI.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.selectionAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSpatialUnitSelectionRect {
    return {
      selectionScreenCoord: Array.isArray(object?.selectionScreenCoord)
        ? object.selectionScreenCoord.map((e: any) => RectangleI.fromJSON(e))
        : [],
      selectionAdd: isSet(object.selectionAdd)
        ? Boolean(object.selectionAdd)
        : false,
    };
  },

  toJSON(message: ActionSpatialUnitSelectionRect): unknown {
    const obj: any = {};
    if (message.selectionScreenCoord) {
      obj.selectionScreenCoord = message.selectionScreenCoord.map((e) =>
        e ? RectangleI.toJSON(e) : undefined,
      );
    } else {
      obj.selectionScreenCoord = [];
    }
    message.selectionAdd !== undefined &&
      (obj.selectionAdd = message.selectionAdd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSpatialUnitSelectionRect>, I>>(
    object: I,
  ): ActionSpatialUnitSelectionRect {
    const message = createBaseActionSpatialUnitSelectionRect();
    message.selectionScreenCoord =
      object.selectionScreenCoord?.map((e) => RectangleI.fromPartial(e)) || [];
    message.selectionAdd = object.selectionAdd ?? false;
    return message;
  },
};

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
