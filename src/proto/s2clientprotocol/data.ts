/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Race, raceFromJSON, raceToJSON } from "../s2clientprotocol/common";

export const protobufPackage = "SC2APIProtocol";

export enum Attribute {
  Light = 1,
  Armored = 2,
  Biological = 3,
  Mechanical = 4,
  Robotic = 5,
  Psionic = 6,
  Massive = 7,
  Structure = 8,
  Hover = 9,
  Heroic = 10,
  Summoned = 11,
  UNRECOGNIZED = -1,
}

export function attributeFromJSON(object: any): Attribute {
  switch (object) {
    case 1:
    case "Light":
      return Attribute.Light;
    case 2:
    case "Armored":
      return Attribute.Armored;
    case 3:
    case "Biological":
      return Attribute.Biological;
    case 4:
    case "Mechanical":
      return Attribute.Mechanical;
    case 5:
    case "Robotic":
      return Attribute.Robotic;
    case 6:
    case "Psionic":
      return Attribute.Psionic;
    case 7:
    case "Massive":
      return Attribute.Massive;
    case 8:
    case "Structure":
      return Attribute.Structure;
    case 9:
    case "Hover":
      return Attribute.Hover;
    case 10:
    case "Heroic":
      return Attribute.Heroic;
    case 11:
    case "Summoned":
      return Attribute.Summoned;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Attribute.UNRECOGNIZED;
  }
}

export function attributeToJSON(object: Attribute): string {
  switch (object) {
    case Attribute.Light:
      return "Light";
    case Attribute.Armored:
      return "Armored";
    case Attribute.Biological:
      return "Biological";
    case Attribute.Mechanical:
      return "Mechanical";
    case Attribute.Robotic:
      return "Robotic";
    case Attribute.Psionic:
      return "Psionic";
    case Attribute.Massive:
      return "Massive";
    case Attribute.Structure:
      return "Structure";
    case Attribute.Hover:
      return "Hover";
    case Attribute.Heroic:
      return "Heroic";
    case Attribute.Summoned:
      return "Summoned";
    default:
      return "UNKNOWN";
  }
}

/**
 * May not relevant: queueable (everything is queueable).
 * May not be important: AbilSetId - marine stim, marauder stim.
 * Stuff omitted: transient.
 * Stuff that may be important: cost, range, Alignment, targetfilters.
 */
export interface AbilityData {
  /** Stable ID. */
  abilityId: number;
  /** Catalog name of the ability. */
  linkName: string;
  /** Catalog index of the ability. */
  linkIndex: number;
  /** Name used for the command card. May not always be set. */
  buttonName: string;
  /** A human friendly name when the button name or link name isn't descriptive. */
  friendlyName: string;
  /** Hotkey. May not always be set. */
  hotkey: string;
  /** This ability id may be represented by the given more generic id. */
  remapsToAbilityId: number;
  /** If true, the ability may be used by this set of mods/map. */
  available: boolean;
  /** Determines if a point is optional or required. */
  target: AbilityData_Target;
  /** Can be cast in the minimap. */
  allowMinimap: boolean;
  /** Autocast can be set. */
  allowAutocast: boolean;
  /** Requires placement to construct a building. */
  isBuilding: boolean;
  /** Estimation of the footprint size. Need a better footprint. */
  footprintRadius: number;
  /** Placement next to an existing structure, e.g., an add-on like a Tech Lab. */
  isInstantPlacement: boolean;
  /** Range unit can cast ability without needing to approach target. */
  castRange: number;
}

export enum AbilityData_Target {
  /** None - Does not require a target. */
  None = 1,
  /** Point - Requires a target position. */
  Point = 2,
  /** Unit - Requires a unit to target. Given by position using feature layers. */
  Unit = 3,
  /** PointOrUnit - Requires either a target point or target unit. */
  PointOrUnit = 4,
  /** PointOrNone - Requires either a target point or no target. (eg. building add-ons) */
  PointOrNone = 5,
  UNRECOGNIZED = -1,
}

export function abilityData_TargetFromJSON(object: any): AbilityData_Target {
  switch (object) {
    case 1:
    case "None":
      return AbilityData_Target.None;
    case 2:
    case "Point":
      return AbilityData_Target.Point;
    case 3:
    case "Unit":
      return AbilityData_Target.Unit;
    case 4:
    case "PointOrUnit":
      return AbilityData_Target.PointOrUnit;
    case 5:
    case "PointOrNone":
      return AbilityData_Target.PointOrNone;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AbilityData_Target.UNRECOGNIZED;
  }
}

export function abilityData_TargetToJSON(object: AbilityData_Target): string {
  switch (object) {
    case AbilityData_Target.None:
      return "None";
    case AbilityData_Target.Point:
      return "Point";
    case AbilityData_Target.Unit:
      return "Unit";
    case AbilityData_Target.PointOrUnit:
      return "PointOrUnit";
    case AbilityData_Target.PointOrNone:
      return "PointOrNone";
    default:
      return "UNKNOWN";
  }
}

export interface DamageBonus {
  attribute: Attribute;
  bonus: number;
}

export interface Weapon {
  type: Weapon_TargetType;
  damage: number;
  damageBonus: DamageBonus[];
  /** Number of hits per attack. (eg. Colossus has 2 beams) */
  attacks: number;
  range: number;
  /** Time between attacks. */
  speed: number;
}

export enum Weapon_TargetType {
  Ground = 1,
  Air = 2,
  Any = 3,
  UNRECOGNIZED = -1,
}

export function weapon_TargetTypeFromJSON(object: any): Weapon_TargetType {
  switch (object) {
    case 1:
    case "Ground":
      return Weapon_TargetType.Ground;
    case 2:
    case "Air":
      return Weapon_TargetType.Air;
    case 3:
    case "Any":
      return Weapon_TargetType.Any;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Weapon_TargetType.UNRECOGNIZED;
  }
}

export function weapon_TargetTypeToJSON(object: Weapon_TargetType): string {
  switch (object) {
    case Weapon_TargetType.Ground:
      return "Ground";
    case Weapon_TargetType.Air:
      return "Air";
    case Weapon_TargetType.Any:
      return "Any";
    default:
      return "UNKNOWN";
  }
}

export interface UnitTypeData {
  /** Stable ID. */
  unitId: number;
  /** Catalog name of the unit. */
  name: string;
  /** If true, the ability may be used by this set of mods/map. */
  available: boolean;
  /** Number of cargo slots it occupies in transports. */
  cargoSize: number;
  mineralCost: number;
  vespeneCost: number;
  foodRequired: number;
  foodProvided: number;
  /** The ability that builds this unit. */
  abilityId: number;
  race: Race;
  buildTime: number;
  hasVespene: boolean;
  hasMinerals: boolean;
  /** Range unit reveals vision. */
  sightRange: number;
  /** Other units that satisfy the same tech requirement. */
  techAlias: number[];
  /** The morphed variant of this unit. */
  unitAlias: number;
  /** Structure required to build this unit. (Or any with the same tech_alias) */
  techRequirement: number;
  /** Whether tech_requirement is an add-on. */
  requireAttached: boolean;
  /** Values include changes from upgrades */
  attributes: Attribute[];
  movementSpeed: number;
  armor: number;
  weapons: Weapon[];
}

export interface UpgradeData {
  /** Stable ID. */
  upgradeId: number;
  name: string;
  mineralCost: number;
  vespeneCost: number;
  researchTime: number;
  abilityId: number;
}

export interface BuffData {
  /** Stable ID. */
  buffId: number;
  name: string;
}

export interface EffectData {
  /** Stable ID. */
  effectId: number;
  name: string;
  friendlyName: string;
  radius: number;
}

function createBaseAbilityData(): AbilityData {
  return {
    abilityId: 0,
    linkName: "",
    linkIndex: 0,
    buttonName: "",
    friendlyName: "",
    hotkey: "",
    remapsToAbilityId: 0,
    available: false,
    target: 1,
    allowMinimap: false,
    allowAutocast: false,
    isBuilding: false,
    footprintRadius: 0,
    isInstantPlacement: false,
    castRange: 0,
  };
}

export const AbilityData = {
  encode(
    message: AbilityData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).uint32(message.abilityId);
    }
    if (message.linkName !== "") {
      writer.uint32(18).string(message.linkName);
    }
    if (message.linkIndex !== 0) {
      writer.uint32(24).uint32(message.linkIndex);
    }
    if (message.buttonName !== "") {
      writer.uint32(34).string(message.buttonName);
    }
    if (message.friendlyName !== "") {
      writer.uint32(42).string(message.friendlyName);
    }
    if (message.hotkey !== "") {
      writer.uint32(50).string(message.hotkey);
    }
    if (message.remapsToAbilityId !== 0) {
      writer.uint32(56).uint32(message.remapsToAbilityId);
    }
    if (message.available === true) {
      writer.uint32(64).bool(message.available);
    }
    if (message.target !== 1) {
      writer.uint32(72).int32(message.target);
    }
    if (message.allowMinimap === true) {
      writer.uint32(80).bool(message.allowMinimap);
    }
    if (message.allowAutocast === true) {
      writer.uint32(88).bool(message.allowAutocast);
    }
    if (message.isBuilding === true) {
      writer.uint32(96).bool(message.isBuilding);
    }
    if (message.footprintRadius !== 0) {
      writer.uint32(109).float(message.footprintRadius);
    }
    if (message.isInstantPlacement === true) {
      writer.uint32(112).bool(message.isInstantPlacement);
    }
    if (message.castRange !== 0) {
      writer.uint32(125).float(message.castRange);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AbilityData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAbilityData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.uint32();
          break;
        case 2:
          message.linkName = reader.string();
          break;
        case 3:
          message.linkIndex = reader.uint32();
          break;
        case 4:
          message.buttonName = reader.string();
          break;
        case 5:
          message.friendlyName = reader.string();
          break;
        case 6:
          message.hotkey = reader.string();
          break;
        case 7:
          message.remapsToAbilityId = reader.uint32();
          break;
        case 8:
          message.available = reader.bool();
          break;
        case 9:
          message.target = reader.int32() as any;
          break;
        case 10:
          message.allowMinimap = reader.bool();
          break;
        case 11:
          message.allowAutocast = reader.bool();
          break;
        case 12:
          message.isBuilding = reader.bool();
          break;
        case 13:
          message.footprintRadius = reader.float();
          break;
        case 14:
          message.isInstantPlacement = reader.bool();
          break;
        case 15:
          message.castRange = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AbilityData {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      linkName: isSet(object.linkName) ? String(object.linkName) : "",
      linkIndex: isSet(object.linkIndex) ? Number(object.linkIndex) : 0,
      buttonName: isSet(object.buttonName) ? String(object.buttonName) : "",
      friendlyName: isSet(object.friendlyName)
        ? String(object.friendlyName)
        : "",
      hotkey: isSet(object.hotkey) ? String(object.hotkey) : "",
      remapsToAbilityId: isSet(object.remapsToAbilityId)
        ? Number(object.remapsToAbilityId)
        : 0,
      available: isSet(object.available) ? Boolean(object.available) : false,
      target: isSet(object.target)
        ? abilityData_TargetFromJSON(object.target)
        : 1,
      allowMinimap: isSet(object.allowMinimap)
        ? Boolean(object.allowMinimap)
        : false,
      allowAutocast: isSet(object.allowAutocast)
        ? Boolean(object.allowAutocast)
        : false,
      isBuilding: isSet(object.isBuilding) ? Boolean(object.isBuilding) : false,
      footprintRadius: isSet(object.footprintRadius)
        ? Number(object.footprintRadius)
        : 0,
      isInstantPlacement: isSet(object.isInstantPlacement)
        ? Boolean(object.isInstantPlacement)
        : false,
      castRange: isSet(object.castRange) ? Number(object.castRange) : 0,
    };
  },

  toJSON(message: AbilityData): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.linkName !== undefined && (obj.linkName = message.linkName);
    message.linkIndex !== undefined &&
      (obj.linkIndex = Math.round(message.linkIndex));
    message.buttonName !== undefined && (obj.buttonName = message.buttonName);
    message.friendlyName !== undefined &&
      (obj.friendlyName = message.friendlyName);
    message.hotkey !== undefined && (obj.hotkey = message.hotkey);
    message.remapsToAbilityId !== undefined &&
      (obj.remapsToAbilityId = Math.round(message.remapsToAbilityId));
    message.available !== undefined && (obj.available = message.available);
    message.target !== undefined &&
      (obj.target = abilityData_TargetToJSON(message.target));
    message.allowMinimap !== undefined &&
      (obj.allowMinimap = message.allowMinimap);
    message.allowAutocast !== undefined &&
      (obj.allowAutocast = message.allowAutocast);
    message.isBuilding !== undefined && (obj.isBuilding = message.isBuilding);
    message.footprintRadius !== undefined &&
      (obj.footprintRadius = message.footprintRadius);
    message.isInstantPlacement !== undefined &&
      (obj.isInstantPlacement = message.isInstantPlacement);
    message.castRange !== undefined && (obj.castRange = message.castRange);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AbilityData>, I>>(
    object: I,
  ): AbilityData {
    const message = createBaseAbilityData();
    message.abilityId = object.abilityId ?? 0;
    message.linkName = object.linkName ?? "";
    message.linkIndex = object.linkIndex ?? 0;
    message.buttonName = object.buttonName ?? "";
    message.friendlyName = object.friendlyName ?? "";
    message.hotkey = object.hotkey ?? "";
    message.remapsToAbilityId = object.remapsToAbilityId ?? 0;
    message.available = object.available ?? false;
    message.target = object.target ?? 1;
    message.allowMinimap = object.allowMinimap ?? false;
    message.allowAutocast = object.allowAutocast ?? false;
    message.isBuilding = object.isBuilding ?? false;
    message.footprintRadius = object.footprintRadius ?? 0;
    message.isInstantPlacement = object.isInstantPlacement ?? false;
    message.castRange = object.castRange ?? 0;
    return message;
  },
};

function createBaseDamageBonus(): DamageBonus {
  return { attribute: 1, bonus: 0 };
}

export const DamageBonus = {
  encode(
    message: DamageBonus,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.attribute !== 1) {
      writer.uint32(8).int32(message.attribute);
    }
    if (message.bonus !== 0) {
      writer.uint32(21).float(message.bonus);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DamageBonus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDamageBonus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attribute = reader.int32() as any;
          break;
        case 2:
          message.bonus = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DamageBonus {
    return {
      attribute: isSet(object.attribute)
        ? attributeFromJSON(object.attribute)
        : 1,
      bonus: isSet(object.bonus) ? Number(object.bonus) : 0,
    };
  },

  toJSON(message: DamageBonus): unknown {
    const obj: any = {};
    message.attribute !== undefined &&
      (obj.attribute = attributeToJSON(message.attribute));
    message.bonus !== undefined && (obj.bonus = message.bonus);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DamageBonus>, I>>(
    object: I,
  ): DamageBonus {
    const message = createBaseDamageBonus();
    message.attribute = object.attribute ?? 1;
    message.bonus = object.bonus ?? 0;
    return message;
  },
};

function createBaseWeapon(): Weapon {
  return {
    type: 1,
    damage: 0,
    damageBonus: [],
    attacks: 0,
    range: 0,
    speed: 0,
  };
}

export const Weapon = {
  encode(
    message: Weapon,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.damage !== 0) {
      writer.uint32(21).float(message.damage);
    }
    for (const v of message.damageBonus) {
      DamageBonus.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.attacks !== 0) {
      writer.uint32(32).uint32(message.attacks);
    }
    if (message.range !== 0) {
      writer.uint32(45).float(message.range);
    }
    if (message.speed !== 0) {
      writer.uint32(53).float(message.speed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Weapon {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeapon();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.damage = reader.float();
          break;
        case 3:
          message.damageBonus.push(DamageBonus.decode(reader, reader.uint32()));
          break;
        case 4:
          message.attacks = reader.uint32();
          break;
        case 5:
          message.range = reader.float();
          break;
        case 6:
          message.speed = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Weapon {
    return {
      type: isSet(object.type) ? weapon_TargetTypeFromJSON(object.type) : 1,
      damage: isSet(object.damage) ? Number(object.damage) : 0,
      damageBonus: Array.isArray(object?.damageBonus)
        ? object.damageBonus.map((e: any) => DamageBonus.fromJSON(e))
        : [],
      attacks: isSet(object.attacks) ? Number(object.attacks) : 0,
      range: isSet(object.range) ? Number(object.range) : 0,
      speed: isSet(object.speed) ? Number(object.speed) : 0,
    };
  },

  toJSON(message: Weapon): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = weapon_TargetTypeToJSON(message.type));
    message.damage !== undefined && (obj.damage = message.damage);
    if (message.damageBonus) {
      obj.damageBonus = message.damageBonus.map((e) =>
        e ? DamageBonus.toJSON(e) : undefined,
      );
    } else {
      obj.damageBonus = [];
    }
    message.attacks !== undefined &&
      (obj.attacks = Math.round(message.attacks));
    message.range !== undefined && (obj.range = message.range);
    message.speed !== undefined && (obj.speed = message.speed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Weapon>, I>>(object: I): Weapon {
    const message = createBaseWeapon();
    message.type = object.type ?? 1;
    message.damage = object.damage ?? 0;
    message.damageBonus =
      object.damageBonus?.map((e) => DamageBonus.fromPartial(e)) || [];
    message.attacks = object.attacks ?? 0;
    message.range = object.range ?? 0;
    message.speed = object.speed ?? 0;
    return message;
  },
};

function createBaseUnitTypeData(): UnitTypeData {
  return {
    unitId: 0,
    name: "",
    available: false,
    cargoSize: 0,
    mineralCost: 0,
    vespeneCost: 0,
    foodRequired: 0,
    foodProvided: 0,
    abilityId: 0,
    race: 0,
    buildTime: 0,
    hasVespene: false,
    hasMinerals: false,
    sightRange: 0,
    techAlias: [],
    unitAlias: 0,
    techRequirement: 0,
    requireAttached: false,
    attributes: [],
    movementSpeed: 0,
    armor: 0,
    weapons: [],
  };
}

export const UnitTypeData = {
  encode(
    message: UnitTypeData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitId !== 0) {
      writer.uint32(8).uint32(message.unitId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.available === true) {
      writer.uint32(24).bool(message.available);
    }
    if (message.cargoSize !== 0) {
      writer.uint32(32).uint32(message.cargoSize);
    }
    if (message.mineralCost !== 0) {
      writer.uint32(96).uint32(message.mineralCost);
    }
    if (message.vespeneCost !== 0) {
      writer.uint32(104).uint32(message.vespeneCost);
    }
    if (message.foodRequired !== 0) {
      writer.uint32(117).float(message.foodRequired);
    }
    if (message.foodProvided !== 0) {
      writer.uint32(149).float(message.foodProvided);
    }
    if (message.abilityId !== 0) {
      writer.uint32(120).uint32(message.abilityId);
    }
    if (message.race !== 0) {
      writer.uint32(128).int32(message.race);
    }
    if (message.buildTime !== 0) {
      writer.uint32(141).float(message.buildTime);
    }
    if (message.hasVespene === true) {
      writer.uint32(152).bool(message.hasVespene);
    }
    if (message.hasMinerals === true) {
      writer.uint32(160).bool(message.hasMinerals);
    }
    if (message.sightRange !== 0) {
      writer.uint32(205).float(message.sightRange);
    }
    writer.uint32(170).fork();
    for (const v of message.techAlias) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.unitAlias !== 0) {
      writer.uint32(176).uint32(message.unitAlias);
    }
    if (message.techRequirement !== 0) {
      writer.uint32(184).uint32(message.techRequirement);
    }
    if (message.requireAttached === true) {
      writer.uint32(192).bool(message.requireAttached);
    }
    writer.uint32(66).fork();
    for (const v of message.attributes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.movementSpeed !== 0) {
      writer.uint32(77).float(message.movementSpeed);
    }
    if (message.armor !== 0) {
      writer.uint32(85).float(message.armor);
    }
    for (const v of message.weapons) {
      Weapon.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitTypeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitTypeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitId = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.available = reader.bool();
          break;
        case 4:
          message.cargoSize = reader.uint32();
          break;
        case 12:
          message.mineralCost = reader.uint32();
          break;
        case 13:
          message.vespeneCost = reader.uint32();
          break;
        case 14:
          message.foodRequired = reader.float();
          break;
        case 18:
          message.foodProvided = reader.float();
          break;
        case 15:
          message.abilityId = reader.uint32();
          break;
        case 16:
          message.race = reader.int32() as any;
          break;
        case 17:
          message.buildTime = reader.float();
          break;
        case 19:
          message.hasVespene = reader.bool();
          break;
        case 20:
          message.hasMinerals = reader.bool();
          break;
        case 25:
          message.sightRange = reader.float();
          break;
        case 21:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.techAlias.push(reader.uint32());
            }
          } else {
            message.techAlias.push(reader.uint32());
          }
          break;
        case 22:
          message.unitAlias = reader.uint32();
          break;
        case 23:
          message.techRequirement = reader.uint32();
          break;
        case 24:
          message.requireAttached = reader.bool();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.attributes.push(reader.int32() as any);
            }
          } else {
            message.attributes.push(reader.int32() as any);
          }
          break;
        case 9:
          message.movementSpeed = reader.float();
          break;
        case 10:
          message.armor = reader.float();
          break;
        case 11:
          message.weapons.push(Weapon.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitTypeData {
    return {
      unitId: isSet(object.unitId) ? Number(object.unitId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      available: isSet(object.available) ? Boolean(object.available) : false,
      cargoSize: isSet(object.cargoSize) ? Number(object.cargoSize) : 0,
      mineralCost: isSet(object.mineralCost) ? Number(object.mineralCost) : 0,
      vespeneCost: isSet(object.vespeneCost) ? Number(object.vespeneCost) : 0,
      foodRequired: isSet(object.foodRequired)
        ? Number(object.foodRequired)
        : 0,
      foodProvided: isSet(object.foodProvided)
        ? Number(object.foodProvided)
        : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      race: isSet(object.race) ? raceFromJSON(object.race) : 0,
      buildTime: isSet(object.buildTime) ? Number(object.buildTime) : 0,
      hasVespene: isSet(object.hasVespene) ? Boolean(object.hasVespene) : false,
      hasMinerals: isSet(object.hasMinerals)
        ? Boolean(object.hasMinerals)
        : false,
      sightRange: isSet(object.sightRange) ? Number(object.sightRange) : 0,
      techAlias: Array.isArray(object?.techAlias)
        ? object.techAlias.map((e: any) => Number(e))
        : [],
      unitAlias: isSet(object.unitAlias) ? Number(object.unitAlias) : 0,
      techRequirement: isSet(object.techRequirement)
        ? Number(object.techRequirement)
        : 0,
      requireAttached: isSet(object.requireAttached)
        ? Boolean(object.requireAttached)
        : false,
      attributes: Array.isArray(object?.attributes)
        ? object.attributes.map((e: any) => attributeFromJSON(e))
        : [],
      movementSpeed: isSet(object.movementSpeed)
        ? Number(object.movementSpeed)
        : 0,
      armor: isSet(object.armor) ? Number(object.armor) : 0,
      weapons: Array.isArray(object?.weapons)
        ? object.weapons.map((e: any) => Weapon.fromJSON(e))
        : [],
    };
  },

  toJSON(message: UnitTypeData): unknown {
    const obj: any = {};
    message.unitId !== undefined && (obj.unitId = Math.round(message.unitId));
    message.name !== undefined && (obj.name = message.name);
    message.available !== undefined && (obj.available = message.available);
    message.cargoSize !== undefined &&
      (obj.cargoSize = Math.round(message.cargoSize));
    message.mineralCost !== undefined &&
      (obj.mineralCost = Math.round(message.mineralCost));
    message.vespeneCost !== undefined &&
      (obj.vespeneCost = Math.round(message.vespeneCost));
    message.foodRequired !== undefined &&
      (obj.foodRequired = message.foodRequired);
    message.foodProvided !== undefined &&
      (obj.foodProvided = message.foodProvided);
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.race !== undefined && (obj.race = raceToJSON(message.race));
    message.buildTime !== undefined && (obj.buildTime = message.buildTime);
    message.hasVespene !== undefined && (obj.hasVespene = message.hasVespene);
    message.hasMinerals !== undefined &&
      (obj.hasMinerals = message.hasMinerals);
    message.sightRange !== undefined && (obj.sightRange = message.sightRange);
    if (message.techAlias) {
      obj.techAlias = message.techAlias.map((e) => Math.round(e));
    } else {
      obj.techAlias = [];
    }
    message.unitAlias !== undefined &&
      (obj.unitAlias = Math.round(message.unitAlias));
    message.techRequirement !== undefined &&
      (obj.techRequirement = Math.round(message.techRequirement));
    message.requireAttached !== undefined &&
      (obj.requireAttached = message.requireAttached);
    if (message.attributes) {
      obj.attributes = message.attributes.map((e) => attributeToJSON(e));
    } else {
      obj.attributes = [];
    }
    message.movementSpeed !== undefined &&
      (obj.movementSpeed = message.movementSpeed);
    message.armor !== undefined && (obj.armor = message.armor);
    if (message.weapons) {
      obj.weapons = message.weapons.map((e) =>
        e ? Weapon.toJSON(e) : undefined,
      );
    } else {
      obj.weapons = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnitTypeData>, I>>(
    object: I,
  ): UnitTypeData {
    const message = createBaseUnitTypeData();
    message.unitId = object.unitId ?? 0;
    message.name = object.name ?? "";
    message.available = object.available ?? false;
    message.cargoSize = object.cargoSize ?? 0;
    message.mineralCost = object.mineralCost ?? 0;
    message.vespeneCost = object.vespeneCost ?? 0;
    message.foodRequired = object.foodRequired ?? 0;
    message.foodProvided = object.foodProvided ?? 0;
    message.abilityId = object.abilityId ?? 0;
    message.race = object.race ?? 0;
    message.buildTime = object.buildTime ?? 0;
    message.hasVespene = object.hasVespene ?? false;
    message.hasMinerals = object.hasMinerals ?? false;
    message.sightRange = object.sightRange ?? 0;
    message.techAlias = object.techAlias?.map((e) => e) || [];
    message.unitAlias = object.unitAlias ?? 0;
    message.techRequirement = object.techRequirement ?? 0;
    message.requireAttached = object.requireAttached ?? false;
    message.attributes = object.attributes?.map((e) => e) || [];
    message.movementSpeed = object.movementSpeed ?? 0;
    message.armor = object.armor ?? 0;
    message.weapons = object.weapons?.map((e) => Weapon.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUpgradeData(): UpgradeData {
  return {
    upgradeId: 0,
    name: "",
    mineralCost: 0,
    vespeneCost: 0,
    researchTime: 0,
    abilityId: 0,
  };
}

export const UpgradeData = {
  encode(
    message: UpgradeData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.upgradeId !== 0) {
      writer.uint32(8).uint32(message.upgradeId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.mineralCost !== 0) {
      writer.uint32(24).uint32(message.mineralCost);
    }
    if (message.vespeneCost !== 0) {
      writer.uint32(32).uint32(message.vespeneCost);
    }
    if (message.researchTime !== 0) {
      writer.uint32(45).float(message.researchTime);
    }
    if (message.abilityId !== 0) {
      writer.uint32(48).uint32(message.abilityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradeId = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.mineralCost = reader.uint32();
          break;
        case 4:
          message.vespeneCost = reader.uint32();
          break;
        case 5:
          message.researchTime = reader.float();
          break;
        case 6:
          message.abilityId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpgradeData {
    return {
      upgradeId: isSet(object.upgradeId) ? Number(object.upgradeId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      mineralCost: isSet(object.mineralCost) ? Number(object.mineralCost) : 0,
      vespeneCost: isSet(object.vespeneCost) ? Number(object.vespeneCost) : 0,
      researchTime: isSet(object.researchTime)
        ? Number(object.researchTime)
        : 0,
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
    };
  },

  toJSON(message: UpgradeData): unknown {
    const obj: any = {};
    message.upgradeId !== undefined &&
      (obj.upgradeId = Math.round(message.upgradeId));
    message.name !== undefined && (obj.name = message.name);
    message.mineralCost !== undefined &&
      (obj.mineralCost = Math.round(message.mineralCost));
    message.vespeneCost !== undefined &&
      (obj.vespeneCost = Math.round(message.vespeneCost));
    message.researchTime !== undefined &&
      (obj.researchTime = message.researchTime);
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpgradeData>, I>>(
    object: I,
  ): UpgradeData {
    const message = createBaseUpgradeData();
    message.upgradeId = object.upgradeId ?? 0;
    message.name = object.name ?? "";
    message.mineralCost = object.mineralCost ?? 0;
    message.vespeneCost = object.vespeneCost ?? 0;
    message.researchTime = object.researchTime ?? 0;
    message.abilityId = object.abilityId ?? 0;
    return message;
  },
};

function createBaseBuffData(): BuffData {
  return { buffId: 0, name: "" };
}

export const BuffData = {
  encode(
    message: BuffData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.buffId !== 0) {
      writer.uint32(8).uint32(message.buffId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuffData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuffData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.buffId = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuffData {
    return {
      buffId: isSet(object.buffId) ? Number(object.buffId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: BuffData): unknown {
    const obj: any = {};
    message.buffId !== undefined && (obj.buffId = Math.round(message.buffId));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuffData>, I>>(object: I): BuffData {
    const message = createBaseBuffData();
    message.buffId = object.buffId ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEffectData(): EffectData {
  return { effectId: 0, name: "", friendlyName: "", radius: 0 };
}

export const EffectData = {
  encode(
    message: EffectData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.effectId !== 0) {
      writer.uint32(8).uint32(message.effectId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.friendlyName !== "") {
      writer.uint32(26).string(message.friendlyName);
    }
    if (message.radius !== 0) {
      writer.uint32(37).float(message.radius);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EffectData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEffectData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.effectId = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.friendlyName = reader.string();
          break;
        case 4:
          message.radius = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EffectData {
    return {
      effectId: isSet(object.effectId) ? Number(object.effectId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      friendlyName: isSet(object.friendlyName)
        ? String(object.friendlyName)
        : "",
      radius: isSet(object.radius) ? Number(object.radius) : 0,
    };
  },

  toJSON(message: EffectData): unknown {
    const obj: any = {};
    message.effectId !== undefined &&
      (obj.effectId = Math.round(message.effectId));
    message.name !== undefined && (obj.name = message.name);
    message.friendlyName !== undefined &&
      (obj.friendlyName = message.friendlyName);
    message.radius !== undefined && (obj.radius = message.radius);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EffectData>, I>>(
    object: I,
  ): EffectData {
    const message = createBaseEffectData();
    message.effectId = object.effectId ?? 0;
    message.name = object.name ?? "";
    message.friendlyName = object.friendlyName ?? "";
    message.radius = object.radius ?? 0;
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
