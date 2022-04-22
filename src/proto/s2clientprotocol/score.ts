/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SC2APIProtocol";

export interface Score {
  scoreType: Score_ScoreType;
  /** Note: check score_type to know whether this is a melee score or curriculum score */
  score: number;
  scoreDetails: ScoreDetails | undefined;
}

export enum Score_ScoreType {
  /** Curriculum - map generated score (from curriculum maps with special scoring) */
  Curriculum = 1,
  /** Melee - summation of in-progress and current units/buildings value + minerals + vespene */
  Melee = 2,
  UNRECOGNIZED = -1,
}

export function score_ScoreTypeFromJSON(object: any): Score_ScoreType {
  switch (object) {
    case 1:
    case "Curriculum":
      return Score_ScoreType.Curriculum;
    case 2:
    case "Melee":
      return Score_ScoreType.Melee;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Score_ScoreType.UNRECOGNIZED;
  }
}

export function score_ScoreTypeToJSON(object: Score_ScoreType): string {
  switch (object) {
    case Score_ScoreType.Curriculum:
      return "Curriculum";
    case Score_ScoreType.Melee:
      return "Melee";
    default:
      return "UNKNOWN";
  }
}

export interface CategoryScoreDetails {
  /** Used when no other category is configured in game data */
  none: number;
  army: number;
  economy: number;
  technology: number;
  upgrade: number;
}

export interface VitalScoreDetails {
  life: number;
  shields: number;
  energy: number;
}

export interface ScoreDetails {
  /** Sum of time any available structure able to produce a unit is not. The time stacks, as in, three idle barracks will increase idle_production_time three times quicker than just one. */
  idleProductionTime: number;
  /** Sum of time any worker is not mining. Note a worker building is not idle and three idle workers will increase this value three times quicker than just one. */
  idleWorkerTime: number;
  /** Sum of minerals and vespene spent on completed units. */
  totalValueUnits: number;
  /** Sum of minerals and vespene spent on completed structures. */
  totalValueStructures: number;
  /** Sum of minerals and vespene of units, belonging to the opponent, that the player has destroyed. */
  killedValueUnits: number;
  /** Sum of minerals and vespene of structures, belonging to the opponent, that the player has destroyed. */
  killedValueStructures: number;
  /** Sum of minerals collected by the player. */
  collectedMinerals: number;
  /** Sum of vespene collected by the player. */
  collectedVespene: number;
  /** Estimated income of minerals over the next minute based on the players current income. The unit is minerals per minute. */
  collectionRateMinerals: number;
  /** Estimated income of vespene over the next minute based on the players current income. The unit is vespene per minute. */
  collectionRateVespene: number;
  /** Sum of spent minerals at the moment it is spent. For example, this number is incremented by 50 the moment an scv is queued in a command center.  It is decremented by 50 if that unit is canceled. */
  spentMinerals: number;
  /** Sum of spent vespene at the moment it is spent. For example, this number is incremented by 50 when a reaper is queued but decremented by 50 if it is canceled. */
  spentVespene: number;
  /** Sum of food, or supply, utilized in the categories above. */
  foodUsed: CategoryScoreDetails | undefined;
  /** Sum of enemies catagories destroyed in minerals. */
  killedMinerals: CategoryScoreDetails | undefined;
  /** Sum of enemies catagories destroyed in vespene. */
  killedVespene: CategoryScoreDetails | undefined;
  /** Sum of lost minerals for the player in each category. */
  lostMinerals: CategoryScoreDetails | undefined;
  /** Sum of lost vespene for the player in each category. */
  lostVespene: CategoryScoreDetails | undefined;
  /** Sum of the lost minerals via destroying the players own units/buildings. */
  friendlyFireMinerals: CategoryScoreDetails | undefined;
  /** Sum of the lost vespene via destroying the players own units/buildings. */
  friendlyFireVespene: CategoryScoreDetails | undefined;
  /** Sum of used minerals for the player in each category for each existing unit or upgrade. Therefore if a unit died worth 50 mierals this number will be decremented by 50. */
  usedMinerals: CategoryScoreDetails | undefined;
  /** Sum of used vespene for the player in each category. Therefore if a unit died worth 50 vespene this number will be decremented by 50. */
  usedVespene: CategoryScoreDetails | undefined;
  /** Sum of used minerals throughout the entire game for each category. Unliked used_minerals, this value is never decremented. */
  totalUsedMinerals: CategoryScoreDetails | undefined;
  /** Sum of used vespene throughout the entire game for each category. Unliked used_vespene, this value is never decremented. */
  totalUsedVespene: CategoryScoreDetails | undefined;
  /** Sum of damage dealt to the player's opponent for each category. */
  totalDamageDealt: VitalScoreDetails | undefined;
  /** Sum of damage taken by the player for each category. */
  totalDamageTaken: VitalScoreDetails | undefined;
  /** Sum of health healed by the player. Note that technology can be healed (by queens) or repaired (by scvs). */
  totalHealed: VitalScoreDetails | undefined;
  /** Recent raw APM. */
  currentApm: number;
  /** Recent effective APM. */
  currentEffectiveApm: number;
}

function createBaseScore(): Score {
  return { scoreType: 1, score: 0, scoreDetails: undefined };
}

export const Score = {
  encode(message: Score, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.scoreType !== 1) {
      writer.uint32(48).int32(message.scoreType);
    }
    if (message.score !== 0) {
      writer.uint32(56).int32(message.score);
    }
    if (message.scoreDetails !== undefined) {
      ScoreDetails.encode(
        message.scoreDetails,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Score {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          message.scoreType = reader.int32() as any;
          break;
        case 7:
          message.score = reader.int32();
          break;
        case 8:
          message.scoreDetails = ScoreDetails.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Score {
    return {
      scoreType: isSet(object.scoreType)
        ? score_ScoreTypeFromJSON(object.scoreType)
        : 1,
      score: isSet(object.score) ? Number(object.score) : 0,
      scoreDetails: isSet(object.scoreDetails)
        ? ScoreDetails.fromJSON(object.scoreDetails)
        : undefined,
    };
  },

  toJSON(message: Score): unknown {
    const obj: any = {};
    message.scoreType !== undefined &&
      (obj.scoreType = score_ScoreTypeToJSON(message.scoreType));
    message.score !== undefined && (obj.score = Math.round(message.score));
    message.scoreDetails !== undefined &&
      (obj.scoreDetails = message.scoreDetails
        ? ScoreDetails.toJSON(message.scoreDetails)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Score>, I>>(object: I): Score {
    const message = createBaseScore();
    message.scoreType = object.scoreType ?? 1;
    message.score = object.score ?? 0;
    message.scoreDetails =
      object.scoreDetails !== undefined && object.scoreDetails !== null
        ? ScoreDetails.fromPartial(object.scoreDetails)
        : undefined;
    return message;
  },
};

function createBaseCategoryScoreDetails(): CategoryScoreDetails {
  return { none: 0, army: 0, economy: 0, technology: 0, upgrade: 0 };
}

export const CategoryScoreDetails = {
  encode(
    message: CategoryScoreDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.none !== 0) {
      writer.uint32(13).float(message.none);
    }
    if (message.army !== 0) {
      writer.uint32(21).float(message.army);
    }
    if (message.economy !== 0) {
      writer.uint32(29).float(message.economy);
    }
    if (message.technology !== 0) {
      writer.uint32(37).float(message.technology);
    }
    if (message.upgrade !== 0) {
      writer.uint32(45).float(message.upgrade);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): CategoryScoreDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCategoryScoreDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.none = reader.float();
          break;
        case 2:
          message.army = reader.float();
          break;
        case 3:
          message.economy = reader.float();
          break;
        case 4:
          message.technology = reader.float();
          break;
        case 5:
          message.upgrade = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CategoryScoreDetails {
    return {
      none: isSet(object.none) ? Number(object.none) : 0,
      army: isSet(object.army) ? Number(object.army) : 0,
      economy: isSet(object.economy) ? Number(object.economy) : 0,
      technology: isSet(object.technology) ? Number(object.technology) : 0,
      upgrade: isSet(object.upgrade) ? Number(object.upgrade) : 0,
    };
  },

  toJSON(message: CategoryScoreDetails): unknown {
    const obj: any = {};
    message.none !== undefined && (obj.none = message.none);
    message.army !== undefined && (obj.army = message.army);
    message.economy !== undefined && (obj.economy = message.economy);
    message.technology !== undefined && (obj.technology = message.technology);
    message.upgrade !== undefined && (obj.upgrade = message.upgrade);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CategoryScoreDetails>, I>>(
    object: I,
  ): CategoryScoreDetails {
    const message = createBaseCategoryScoreDetails();
    message.none = object.none ?? 0;
    message.army = object.army ?? 0;
    message.economy = object.economy ?? 0;
    message.technology = object.technology ?? 0;
    message.upgrade = object.upgrade ?? 0;
    return message;
  },
};

function createBaseVitalScoreDetails(): VitalScoreDetails {
  return { life: 0, shields: 0, energy: 0 };
}

export const VitalScoreDetails = {
  encode(
    message: VitalScoreDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.life !== 0) {
      writer.uint32(13).float(message.life);
    }
    if (message.shields !== 0) {
      writer.uint32(21).float(message.shields);
    }
    if (message.energy !== 0) {
      writer.uint32(29).float(message.energy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VitalScoreDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVitalScoreDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.life = reader.float();
          break;
        case 2:
          message.shields = reader.float();
          break;
        case 3:
          message.energy = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VitalScoreDetails {
    return {
      life: isSet(object.life) ? Number(object.life) : 0,
      shields: isSet(object.shields) ? Number(object.shields) : 0,
      energy: isSet(object.energy) ? Number(object.energy) : 0,
    };
  },

  toJSON(message: VitalScoreDetails): unknown {
    const obj: any = {};
    message.life !== undefined && (obj.life = message.life);
    message.shields !== undefined && (obj.shields = message.shields);
    message.energy !== undefined && (obj.energy = message.energy);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VitalScoreDetails>, I>>(
    object: I,
  ): VitalScoreDetails {
    const message = createBaseVitalScoreDetails();
    message.life = object.life ?? 0;
    message.shields = object.shields ?? 0;
    message.energy = object.energy ?? 0;
    return message;
  },
};

function createBaseScoreDetails(): ScoreDetails {
  return {
    idleProductionTime: 0,
    idleWorkerTime: 0,
    totalValueUnits: 0,
    totalValueStructures: 0,
    killedValueUnits: 0,
    killedValueStructures: 0,
    collectedMinerals: 0,
    collectedVespene: 0,
    collectionRateMinerals: 0,
    collectionRateVespene: 0,
    spentMinerals: 0,
    spentVespene: 0,
    foodUsed: undefined,
    killedMinerals: undefined,
    killedVespene: undefined,
    lostMinerals: undefined,
    lostVespene: undefined,
    friendlyFireMinerals: undefined,
    friendlyFireVespene: undefined,
    usedMinerals: undefined,
    usedVespene: undefined,
    totalUsedMinerals: undefined,
    totalUsedVespene: undefined,
    totalDamageDealt: undefined,
    totalDamageTaken: undefined,
    totalHealed: undefined,
    currentApm: 0,
    currentEffectiveApm: 0,
  };
}

export const ScoreDetails = {
  encode(
    message: ScoreDetails,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.idleProductionTime !== 0) {
      writer.uint32(13).float(message.idleProductionTime);
    }
    if (message.idleWorkerTime !== 0) {
      writer.uint32(21).float(message.idleWorkerTime);
    }
    if (message.totalValueUnits !== 0) {
      writer.uint32(29).float(message.totalValueUnits);
    }
    if (message.totalValueStructures !== 0) {
      writer.uint32(37).float(message.totalValueStructures);
    }
    if (message.killedValueUnits !== 0) {
      writer.uint32(45).float(message.killedValueUnits);
    }
    if (message.killedValueStructures !== 0) {
      writer.uint32(53).float(message.killedValueStructures);
    }
    if (message.collectedMinerals !== 0) {
      writer.uint32(61).float(message.collectedMinerals);
    }
    if (message.collectedVespene !== 0) {
      writer.uint32(69).float(message.collectedVespene);
    }
    if (message.collectionRateMinerals !== 0) {
      writer.uint32(77).float(message.collectionRateMinerals);
    }
    if (message.collectionRateVespene !== 0) {
      writer.uint32(85).float(message.collectionRateVespene);
    }
    if (message.spentMinerals !== 0) {
      writer.uint32(93).float(message.spentMinerals);
    }
    if (message.spentVespene !== 0) {
      writer.uint32(101).float(message.spentVespene);
    }
    if (message.foodUsed !== undefined) {
      CategoryScoreDetails.encode(
        message.foodUsed,
        writer.uint32(106).fork(),
      ).ldelim();
    }
    if (message.killedMinerals !== undefined) {
      CategoryScoreDetails.encode(
        message.killedMinerals,
        writer.uint32(114).fork(),
      ).ldelim();
    }
    if (message.killedVespene !== undefined) {
      CategoryScoreDetails.encode(
        message.killedVespene,
        writer.uint32(122).fork(),
      ).ldelim();
    }
    if (message.lostMinerals !== undefined) {
      CategoryScoreDetails.encode(
        message.lostMinerals,
        writer.uint32(130).fork(),
      ).ldelim();
    }
    if (message.lostVespene !== undefined) {
      CategoryScoreDetails.encode(
        message.lostVespene,
        writer.uint32(138).fork(),
      ).ldelim();
    }
    if (message.friendlyFireMinerals !== undefined) {
      CategoryScoreDetails.encode(
        message.friendlyFireMinerals,
        writer.uint32(146).fork(),
      ).ldelim();
    }
    if (message.friendlyFireVespene !== undefined) {
      CategoryScoreDetails.encode(
        message.friendlyFireVespene,
        writer.uint32(154).fork(),
      ).ldelim();
    }
    if (message.usedMinerals !== undefined) {
      CategoryScoreDetails.encode(
        message.usedMinerals,
        writer.uint32(162).fork(),
      ).ldelim();
    }
    if (message.usedVespene !== undefined) {
      CategoryScoreDetails.encode(
        message.usedVespene,
        writer.uint32(170).fork(),
      ).ldelim();
    }
    if (message.totalUsedMinerals !== undefined) {
      CategoryScoreDetails.encode(
        message.totalUsedMinerals,
        writer.uint32(178).fork(),
      ).ldelim();
    }
    if (message.totalUsedVespene !== undefined) {
      CategoryScoreDetails.encode(
        message.totalUsedVespene,
        writer.uint32(186).fork(),
      ).ldelim();
    }
    if (message.totalDamageDealt !== undefined) {
      VitalScoreDetails.encode(
        message.totalDamageDealt,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.totalDamageTaken !== undefined) {
      VitalScoreDetails.encode(
        message.totalDamageTaken,
        writer.uint32(202).fork(),
      ).ldelim();
    }
    if (message.totalHealed !== undefined) {
      VitalScoreDetails.encode(
        message.totalHealed,
        writer.uint32(210).fork(),
      ).ldelim();
    }
    if (message.currentApm !== 0) {
      writer.uint32(221).float(message.currentApm);
    }
    if (message.currentEffectiveApm !== 0) {
      writer.uint32(229).float(message.currentEffectiveApm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScoreDetails {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScoreDetails();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idleProductionTime = reader.float();
          break;
        case 2:
          message.idleWorkerTime = reader.float();
          break;
        case 3:
          message.totalValueUnits = reader.float();
          break;
        case 4:
          message.totalValueStructures = reader.float();
          break;
        case 5:
          message.killedValueUnits = reader.float();
          break;
        case 6:
          message.killedValueStructures = reader.float();
          break;
        case 7:
          message.collectedMinerals = reader.float();
          break;
        case 8:
          message.collectedVespene = reader.float();
          break;
        case 9:
          message.collectionRateMinerals = reader.float();
          break;
        case 10:
          message.collectionRateVespene = reader.float();
          break;
        case 11:
          message.spentMinerals = reader.float();
          break;
        case 12:
          message.spentVespene = reader.float();
          break;
        case 13:
          message.foodUsed = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 14:
          message.killedMinerals = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 15:
          message.killedVespene = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 16:
          message.lostMinerals = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 17:
          message.lostVespene = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 18:
          message.friendlyFireMinerals = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 19:
          message.friendlyFireVespene = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 20:
          message.usedMinerals = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 21:
          message.usedVespene = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 22:
          message.totalUsedMinerals = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 23:
          message.totalUsedVespene = CategoryScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 24:
          message.totalDamageDealt = VitalScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 25:
          message.totalDamageTaken = VitalScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 26:
          message.totalHealed = VitalScoreDetails.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 27:
          message.currentApm = reader.float();
          break;
        case 28:
          message.currentEffectiveApm = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScoreDetails {
    return {
      idleProductionTime: isSet(object.idleProductionTime)
        ? Number(object.idleProductionTime)
        : 0,
      idleWorkerTime: isSet(object.idleWorkerTime)
        ? Number(object.idleWorkerTime)
        : 0,
      totalValueUnits: isSet(object.totalValueUnits)
        ? Number(object.totalValueUnits)
        : 0,
      totalValueStructures: isSet(object.totalValueStructures)
        ? Number(object.totalValueStructures)
        : 0,
      killedValueUnits: isSet(object.killedValueUnits)
        ? Number(object.killedValueUnits)
        : 0,
      killedValueStructures: isSet(object.killedValueStructures)
        ? Number(object.killedValueStructures)
        : 0,
      collectedMinerals: isSet(object.collectedMinerals)
        ? Number(object.collectedMinerals)
        : 0,
      collectedVespene: isSet(object.collectedVespene)
        ? Number(object.collectedVespene)
        : 0,
      collectionRateMinerals: isSet(object.collectionRateMinerals)
        ? Number(object.collectionRateMinerals)
        : 0,
      collectionRateVespene: isSet(object.collectionRateVespene)
        ? Number(object.collectionRateVespene)
        : 0,
      spentMinerals: isSet(object.spentMinerals)
        ? Number(object.spentMinerals)
        : 0,
      spentVespene: isSet(object.spentVespene)
        ? Number(object.spentVespene)
        : 0,
      foodUsed: isSet(object.foodUsed)
        ? CategoryScoreDetails.fromJSON(object.foodUsed)
        : undefined,
      killedMinerals: isSet(object.killedMinerals)
        ? CategoryScoreDetails.fromJSON(object.killedMinerals)
        : undefined,
      killedVespene: isSet(object.killedVespene)
        ? CategoryScoreDetails.fromJSON(object.killedVespene)
        : undefined,
      lostMinerals: isSet(object.lostMinerals)
        ? CategoryScoreDetails.fromJSON(object.lostMinerals)
        : undefined,
      lostVespene: isSet(object.lostVespene)
        ? CategoryScoreDetails.fromJSON(object.lostVespene)
        : undefined,
      friendlyFireMinerals: isSet(object.friendlyFireMinerals)
        ? CategoryScoreDetails.fromJSON(object.friendlyFireMinerals)
        : undefined,
      friendlyFireVespene: isSet(object.friendlyFireVespene)
        ? CategoryScoreDetails.fromJSON(object.friendlyFireVespene)
        : undefined,
      usedMinerals: isSet(object.usedMinerals)
        ? CategoryScoreDetails.fromJSON(object.usedMinerals)
        : undefined,
      usedVespene: isSet(object.usedVespene)
        ? CategoryScoreDetails.fromJSON(object.usedVespene)
        : undefined,
      totalUsedMinerals: isSet(object.totalUsedMinerals)
        ? CategoryScoreDetails.fromJSON(object.totalUsedMinerals)
        : undefined,
      totalUsedVespene: isSet(object.totalUsedVespene)
        ? CategoryScoreDetails.fromJSON(object.totalUsedVespene)
        : undefined,
      totalDamageDealt: isSet(object.totalDamageDealt)
        ? VitalScoreDetails.fromJSON(object.totalDamageDealt)
        : undefined,
      totalDamageTaken: isSet(object.totalDamageTaken)
        ? VitalScoreDetails.fromJSON(object.totalDamageTaken)
        : undefined,
      totalHealed: isSet(object.totalHealed)
        ? VitalScoreDetails.fromJSON(object.totalHealed)
        : undefined,
      currentApm: isSet(object.currentApm) ? Number(object.currentApm) : 0,
      currentEffectiveApm: isSet(object.currentEffectiveApm)
        ? Number(object.currentEffectiveApm)
        : 0,
    };
  },

  toJSON(message: ScoreDetails): unknown {
    const obj: any = {};
    message.idleProductionTime !== undefined &&
      (obj.idleProductionTime = message.idleProductionTime);
    message.idleWorkerTime !== undefined &&
      (obj.idleWorkerTime = message.idleWorkerTime);
    message.totalValueUnits !== undefined &&
      (obj.totalValueUnits = message.totalValueUnits);
    message.totalValueStructures !== undefined &&
      (obj.totalValueStructures = message.totalValueStructures);
    message.killedValueUnits !== undefined &&
      (obj.killedValueUnits = message.killedValueUnits);
    message.killedValueStructures !== undefined &&
      (obj.killedValueStructures = message.killedValueStructures);
    message.collectedMinerals !== undefined &&
      (obj.collectedMinerals = message.collectedMinerals);
    message.collectedVespene !== undefined &&
      (obj.collectedVespene = message.collectedVespene);
    message.collectionRateMinerals !== undefined &&
      (obj.collectionRateMinerals = message.collectionRateMinerals);
    message.collectionRateVespene !== undefined &&
      (obj.collectionRateVespene = message.collectionRateVespene);
    message.spentMinerals !== undefined &&
      (obj.spentMinerals = message.spentMinerals);
    message.spentVespene !== undefined &&
      (obj.spentVespene = message.spentVespene);
    message.foodUsed !== undefined &&
      (obj.foodUsed = message.foodUsed
        ? CategoryScoreDetails.toJSON(message.foodUsed)
        : undefined);
    message.killedMinerals !== undefined &&
      (obj.killedMinerals = message.killedMinerals
        ? CategoryScoreDetails.toJSON(message.killedMinerals)
        : undefined);
    message.killedVespene !== undefined &&
      (obj.killedVespene = message.killedVespene
        ? CategoryScoreDetails.toJSON(message.killedVespene)
        : undefined);
    message.lostMinerals !== undefined &&
      (obj.lostMinerals = message.lostMinerals
        ? CategoryScoreDetails.toJSON(message.lostMinerals)
        : undefined);
    message.lostVespene !== undefined &&
      (obj.lostVespene = message.lostVespene
        ? CategoryScoreDetails.toJSON(message.lostVespene)
        : undefined);
    message.friendlyFireMinerals !== undefined &&
      (obj.friendlyFireMinerals = message.friendlyFireMinerals
        ? CategoryScoreDetails.toJSON(message.friendlyFireMinerals)
        : undefined);
    message.friendlyFireVespene !== undefined &&
      (obj.friendlyFireVespene = message.friendlyFireVespene
        ? CategoryScoreDetails.toJSON(message.friendlyFireVespene)
        : undefined);
    message.usedMinerals !== undefined &&
      (obj.usedMinerals = message.usedMinerals
        ? CategoryScoreDetails.toJSON(message.usedMinerals)
        : undefined);
    message.usedVespene !== undefined &&
      (obj.usedVespene = message.usedVespene
        ? CategoryScoreDetails.toJSON(message.usedVespene)
        : undefined);
    message.totalUsedMinerals !== undefined &&
      (obj.totalUsedMinerals = message.totalUsedMinerals
        ? CategoryScoreDetails.toJSON(message.totalUsedMinerals)
        : undefined);
    message.totalUsedVespene !== undefined &&
      (obj.totalUsedVespene = message.totalUsedVespene
        ? CategoryScoreDetails.toJSON(message.totalUsedVespene)
        : undefined);
    message.totalDamageDealt !== undefined &&
      (obj.totalDamageDealt = message.totalDamageDealt
        ? VitalScoreDetails.toJSON(message.totalDamageDealt)
        : undefined);
    message.totalDamageTaken !== undefined &&
      (obj.totalDamageTaken = message.totalDamageTaken
        ? VitalScoreDetails.toJSON(message.totalDamageTaken)
        : undefined);
    message.totalHealed !== undefined &&
      (obj.totalHealed = message.totalHealed
        ? VitalScoreDetails.toJSON(message.totalHealed)
        : undefined);
    message.currentApm !== undefined && (obj.currentApm = message.currentApm);
    message.currentEffectiveApm !== undefined &&
      (obj.currentEffectiveApm = message.currentEffectiveApm);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScoreDetails>, I>>(
    object: I,
  ): ScoreDetails {
    const message = createBaseScoreDetails();
    message.idleProductionTime = object.idleProductionTime ?? 0;
    message.idleWorkerTime = object.idleWorkerTime ?? 0;
    message.totalValueUnits = object.totalValueUnits ?? 0;
    message.totalValueStructures = object.totalValueStructures ?? 0;
    message.killedValueUnits = object.killedValueUnits ?? 0;
    message.killedValueStructures = object.killedValueStructures ?? 0;
    message.collectedMinerals = object.collectedMinerals ?? 0;
    message.collectedVespene = object.collectedVespene ?? 0;
    message.collectionRateMinerals = object.collectionRateMinerals ?? 0;
    message.collectionRateVespene = object.collectionRateVespene ?? 0;
    message.spentMinerals = object.spentMinerals ?? 0;
    message.spentVespene = object.spentVespene ?? 0;
    message.foodUsed =
      object.foodUsed !== undefined && object.foodUsed !== null
        ? CategoryScoreDetails.fromPartial(object.foodUsed)
        : undefined;
    message.killedMinerals =
      object.killedMinerals !== undefined && object.killedMinerals !== null
        ? CategoryScoreDetails.fromPartial(object.killedMinerals)
        : undefined;
    message.killedVespene =
      object.killedVespene !== undefined && object.killedVespene !== null
        ? CategoryScoreDetails.fromPartial(object.killedVespene)
        : undefined;
    message.lostMinerals =
      object.lostMinerals !== undefined && object.lostMinerals !== null
        ? CategoryScoreDetails.fromPartial(object.lostMinerals)
        : undefined;
    message.lostVespene =
      object.lostVespene !== undefined && object.lostVespene !== null
        ? CategoryScoreDetails.fromPartial(object.lostVespene)
        : undefined;
    message.friendlyFireMinerals =
      object.friendlyFireMinerals !== undefined &&
      object.friendlyFireMinerals !== null
        ? CategoryScoreDetails.fromPartial(object.friendlyFireMinerals)
        : undefined;
    message.friendlyFireVespene =
      object.friendlyFireVespene !== undefined &&
      object.friendlyFireVespene !== null
        ? CategoryScoreDetails.fromPartial(object.friendlyFireVespene)
        : undefined;
    message.usedMinerals =
      object.usedMinerals !== undefined && object.usedMinerals !== null
        ? CategoryScoreDetails.fromPartial(object.usedMinerals)
        : undefined;
    message.usedVespene =
      object.usedVespene !== undefined && object.usedVespene !== null
        ? CategoryScoreDetails.fromPartial(object.usedVespene)
        : undefined;
    message.totalUsedMinerals =
      object.totalUsedMinerals !== undefined &&
      object.totalUsedMinerals !== null
        ? CategoryScoreDetails.fromPartial(object.totalUsedMinerals)
        : undefined;
    message.totalUsedVespene =
      object.totalUsedVespene !== undefined && object.totalUsedVespene !== null
        ? CategoryScoreDetails.fromPartial(object.totalUsedVespene)
        : undefined;
    message.totalDamageDealt =
      object.totalDamageDealt !== undefined && object.totalDamageDealt !== null
        ? VitalScoreDetails.fromPartial(object.totalDamageDealt)
        : undefined;
    message.totalDamageTaken =
      object.totalDamageTaken !== undefined && object.totalDamageTaken !== null
        ? VitalScoreDetails.fromPartial(object.totalDamageTaken)
        : undefined;
    message.totalHealed =
      object.totalHealed !== undefined && object.totalHealed !== null
        ? VitalScoreDetails.fromPartial(object.totalHealed)
        : undefined;
    message.currentApm = object.currentApm ?? 0;
    message.currentEffectiveApm = object.currentEffectiveApm ?? 0;
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
