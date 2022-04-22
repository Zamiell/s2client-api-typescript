/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SC2APIProtocol";

export enum ActionResult {
  Success = 1,
  NotSupported = 2,
  Error = 3,
  CantQueueThatOrder = 4,
  Retry = 5,
  Cooldown = 6,
  QueueIsFull = 7,
  RallyQueueIsFull = 8,
  NotEnoughMinerals = 9,
  NotEnoughVespene = 10,
  NotEnoughTerrazine = 11,
  NotEnoughCustom = 12,
  NotEnoughFood = 13,
  FoodUsageImpossible = 14,
  NotEnoughLife = 15,
  NotEnoughShields = 16,
  NotEnoughEnergy = 17,
  LifeSuppressed = 18,
  ShieldsSuppressed = 19,
  EnergySuppressed = 20,
  NotEnoughCharges = 21,
  CantAddMoreCharges = 22,
  TooMuchMinerals = 23,
  TooMuchVespene = 24,
  TooMuchTerrazine = 25,
  TooMuchCustom = 26,
  TooMuchFood = 27,
  TooMuchLife = 28,
  TooMuchShields = 29,
  TooMuchEnergy = 30,
  MustTargetUnitWithLife = 31,
  MustTargetUnitWithShields = 32,
  MustTargetUnitWithEnergy = 33,
  CantTrade = 34,
  CantSpend = 35,
  CantTargetThatUnit = 36,
  CouldntAllocateUnit = 37,
  UnitCantMove = 38,
  TransportIsHoldingPosition = 39,
  BuildTechRequirementsNotMet = 40,
  CantFindPlacementLocation = 41,
  CantBuildOnThat = 42,
  CantBuildTooCloseToDropOff = 43,
  CantBuildLocationInvalid = 44,
  CantSeeBuildLocation = 45,
  CantBuildTooCloseToCreepSource = 46,
  CantBuildTooCloseToResources = 47,
  CantBuildTooFarFromWater = 48,
  CantBuildTooFarFromCreepSource = 49,
  CantBuildTooFarFromBuildPowerSource = 50,
  CantBuildOnDenseTerrain = 51,
  CantTrainTooFarFromTrainPowerSource = 52,
  CantLandLocationInvalid = 53,
  CantSeeLandLocation = 54,
  CantLandTooCloseToCreepSource = 55,
  CantLandTooCloseToResources = 56,
  CantLandTooFarFromWater = 57,
  CantLandTooFarFromCreepSource = 58,
  CantLandTooFarFromBuildPowerSource = 59,
  CantLandTooFarFromTrainPowerSource = 60,
  CantLandOnDenseTerrain = 61,
  AddOnTooFarFromBuilding = 62,
  MustBuildRefineryFirst = 63,
  BuildingIsUnderConstruction = 64,
  CantFindDropOff = 65,
  CantLoadOtherPlayersUnits = 66,
  NotEnoughRoomToLoadUnit = 67,
  CantUnloadUnitsThere = 68,
  CantWarpInUnitsThere = 69,
  CantLoadImmobileUnits = 70,
  CantRechargeImmobileUnits = 71,
  CantRechargeUnderConstructionUnits = 72,
  CantLoadThatUnit = 73,
  NoCargoToUnload = 74,
  LoadAllNoTargetsFound = 75,
  NotWhileOccupied = 76,
  CantAttackWithoutAmmo = 77,
  CantHoldAnyMoreAmmo = 78,
  TechRequirementsNotMet = 79,
  MustLockdownUnitFirst = 80,
  MustTargetUnit = 81,
  MustTargetInventory = 82,
  MustTargetVisibleUnit = 83,
  MustTargetVisibleLocation = 84,
  MustTargetWalkableLocation = 85,
  MustTargetPawnableUnit = 86,
  YouCantControlThatUnit = 87,
  YouCantIssueCommandsToThatUnit = 88,
  MustTargetResources = 89,
  RequiresHealTarget = 90,
  RequiresRepairTarget = 91,
  NoItemsToDrop = 92,
  CantHoldAnyMoreItems = 93,
  CantHoldThat = 94,
  TargetHasNoInventory = 95,
  CantDropThisItem = 96,
  CantMoveThisItem = 97,
  CantPawnThisUnit = 98,
  MustTargetCaster = 99,
  CantTargetCaster = 100,
  MustTargetOuter = 101,
  CantTargetOuter = 102,
  MustTargetYourOwnUnits = 103,
  CantTargetYourOwnUnits = 104,
  MustTargetFriendlyUnits = 105,
  CantTargetFriendlyUnits = 106,
  MustTargetNeutralUnits = 107,
  CantTargetNeutralUnits = 108,
  MustTargetEnemyUnits = 109,
  CantTargetEnemyUnits = 110,
  MustTargetAirUnits = 111,
  CantTargetAirUnits = 112,
  MustTargetGroundUnits = 113,
  CantTargetGroundUnits = 114,
  MustTargetStructures = 115,
  CantTargetStructures = 116,
  MustTargetLightUnits = 117,
  CantTargetLightUnits = 118,
  MustTargetArmoredUnits = 119,
  CantTargetArmoredUnits = 120,
  MustTargetBiologicalUnits = 121,
  CantTargetBiologicalUnits = 122,
  MustTargetHeroicUnits = 123,
  CantTargetHeroicUnits = 124,
  MustTargetRoboticUnits = 125,
  CantTargetRoboticUnits = 126,
  MustTargetMechanicalUnits = 127,
  CantTargetMechanicalUnits = 128,
  MustTargetPsionicUnits = 129,
  CantTargetPsionicUnits = 130,
  MustTargetMassiveUnits = 131,
  CantTargetMassiveUnits = 132,
  MustTargetMissile = 133,
  CantTargetMissile = 134,
  MustTargetWorkerUnits = 135,
  CantTargetWorkerUnits = 136,
  MustTargetEnergyCapableUnits = 137,
  CantTargetEnergyCapableUnits = 138,
  MustTargetShieldCapableUnits = 139,
  CantTargetShieldCapableUnits = 140,
  MustTargetFlyers = 141,
  CantTargetFlyers = 142,
  MustTargetBuriedUnits = 143,
  CantTargetBuriedUnits = 144,
  MustTargetCloakedUnits = 145,
  CantTargetCloakedUnits = 146,
  MustTargetUnitsInAStasisField = 147,
  CantTargetUnitsInAStasisField = 148,
  MustTargetUnderConstructionUnits = 149,
  CantTargetUnderConstructionUnits = 150,
  MustTargetDeadUnits = 151,
  CantTargetDeadUnits = 152,
  MustTargetRevivableUnits = 153,
  CantTargetRevivableUnits = 154,
  MustTargetHiddenUnits = 155,
  CantTargetHiddenUnits = 156,
  CantRechargeOtherPlayersUnits = 157,
  MustTargetHallucinations = 158,
  CantTargetHallucinations = 159,
  MustTargetInvulnerableUnits = 160,
  CantTargetInvulnerableUnits = 161,
  MustTargetDetectedUnits = 162,
  CantTargetDetectedUnits = 163,
  CantTargetUnitWithEnergy = 164,
  CantTargetUnitWithShields = 165,
  MustTargetUncommandableUnits = 166,
  CantTargetUncommandableUnits = 167,
  MustTargetPreventDefeatUnits = 168,
  CantTargetPreventDefeatUnits = 169,
  MustTargetPreventRevealUnits = 170,
  CantTargetPreventRevealUnits = 171,
  MustTargetPassiveUnits = 172,
  CantTargetPassiveUnits = 173,
  MustTargetStunnedUnits = 174,
  CantTargetStunnedUnits = 175,
  MustTargetSummonedUnits = 176,
  CantTargetSummonedUnits = 177,
  MustTargetUser1 = 178,
  CantTargetUser1 = 179,
  MustTargetUnstoppableUnits = 180,
  CantTargetUnstoppableUnits = 181,
  MustTargetResistantUnits = 182,
  CantTargetResistantUnits = 183,
  MustTargetDazedUnits = 184,
  CantTargetDazedUnits = 185,
  CantLockdown = 186,
  CantMindControl = 187,
  MustTargetDestructibles = 188,
  CantTargetDestructibles = 189,
  MustTargetItems = 190,
  CantTargetItems = 191,
  NoCalldownAvailable = 192,
  WaypointListFull = 193,
  MustTargetRace = 194,
  CantTargetRace = 195,
  MustTargetSimilarUnits = 196,
  CantTargetSimilarUnits = 197,
  CantFindEnoughTargets = 198,
  AlreadySpawningLarva = 199,
  CantTargetExhaustedResources = 200,
  CantUseMinimap = 201,
  CantUseInfoPanel = 202,
  OrderQueueIsFull = 203,
  CantHarvestThatResource = 204,
  HarvestersNotRequired = 205,
  AlreadyTargeted = 206,
  CantAttackWeaponsDisabled = 207,
  CouldntReachTarget = 208,
  TargetIsOutOfRange = 209,
  TargetIsTooClose = 210,
  TargetIsOutOfArc = 211,
  CantFindTeleportLocation = 212,
  InvalidItemClass = 213,
  CantFindCancelOrder = 214,
  UNRECOGNIZED = -1,
}

export function actionResultFromJSON(object: any): ActionResult {
  switch (object) {
    case 1:
    case "Success":
      return ActionResult.Success;
    case 2:
    case "NotSupported":
      return ActionResult.NotSupported;
    case 3:
    case "Error":
      return ActionResult.Error;
    case 4:
    case "CantQueueThatOrder":
      return ActionResult.CantQueueThatOrder;
    case 5:
    case "Retry":
      return ActionResult.Retry;
    case 6:
    case "Cooldown":
      return ActionResult.Cooldown;
    case 7:
    case "QueueIsFull":
      return ActionResult.QueueIsFull;
    case 8:
    case "RallyQueueIsFull":
      return ActionResult.RallyQueueIsFull;
    case 9:
    case "NotEnoughMinerals":
      return ActionResult.NotEnoughMinerals;
    case 10:
    case "NotEnoughVespene":
      return ActionResult.NotEnoughVespene;
    case 11:
    case "NotEnoughTerrazine":
      return ActionResult.NotEnoughTerrazine;
    case 12:
    case "NotEnoughCustom":
      return ActionResult.NotEnoughCustom;
    case 13:
    case "NotEnoughFood":
      return ActionResult.NotEnoughFood;
    case 14:
    case "FoodUsageImpossible":
      return ActionResult.FoodUsageImpossible;
    case 15:
    case "NotEnoughLife":
      return ActionResult.NotEnoughLife;
    case 16:
    case "NotEnoughShields":
      return ActionResult.NotEnoughShields;
    case 17:
    case "NotEnoughEnergy":
      return ActionResult.NotEnoughEnergy;
    case 18:
    case "LifeSuppressed":
      return ActionResult.LifeSuppressed;
    case 19:
    case "ShieldsSuppressed":
      return ActionResult.ShieldsSuppressed;
    case 20:
    case "EnergySuppressed":
      return ActionResult.EnergySuppressed;
    case 21:
    case "NotEnoughCharges":
      return ActionResult.NotEnoughCharges;
    case 22:
    case "CantAddMoreCharges":
      return ActionResult.CantAddMoreCharges;
    case 23:
    case "TooMuchMinerals":
      return ActionResult.TooMuchMinerals;
    case 24:
    case "TooMuchVespene":
      return ActionResult.TooMuchVespene;
    case 25:
    case "TooMuchTerrazine":
      return ActionResult.TooMuchTerrazine;
    case 26:
    case "TooMuchCustom":
      return ActionResult.TooMuchCustom;
    case 27:
    case "TooMuchFood":
      return ActionResult.TooMuchFood;
    case 28:
    case "TooMuchLife":
      return ActionResult.TooMuchLife;
    case 29:
    case "TooMuchShields":
      return ActionResult.TooMuchShields;
    case 30:
    case "TooMuchEnergy":
      return ActionResult.TooMuchEnergy;
    case 31:
    case "MustTargetUnitWithLife":
      return ActionResult.MustTargetUnitWithLife;
    case 32:
    case "MustTargetUnitWithShields":
      return ActionResult.MustTargetUnitWithShields;
    case 33:
    case "MustTargetUnitWithEnergy":
      return ActionResult.MustTargetUnitWithEnergy;
    case 34:
    case "CantTrade":
      return ActionResult.CantTrade;
    case 35:
    case "CantSpend":
      return ActionResult.CantSpend;
    case 36:
    case "CantTargetThatUnit":
      return ActionResult.CantTargetThatUnit;
    case 37:
    case "CouldntAllocateUnit":
      return ActionResult.CouldntAllocateUnit;
    case 38:
    case "UnitCantMove":
      return ActionResult.UnitCantMove;
    case 39:
    case "TransportIsHoldingPosition":
      return ActionResult.TransportIsHoldingPosition;
    case 40:
    case "BuildTechRequirementsNotMet":
      return ActionResult.BuildTechRequirementsNotMet;
    case 41:
    case "CantFindPlacementLocation":
      return ActionResult.CantFindPlacementLocation;
    case 42:
    case "CantBuildOnThat":
      return ActionResult.CantBuildOnThat;
    case 43:
    case "CantBuildTooCloseToDropOff":
      return ActionResult.CantBuildTooCloseToDropOff;
    case 44:
    case "CantBuildLocationInvalid":
      return ActionResult.CantBuildLocationInvalid;
    case 45:
    case "CantSeeBuildLocation":
      return ActionResult.CantSeeBuildLocation;
    case 46:
    case "CantBuildTooCloseToCreepSource":
      return ActionResult.CantBuildTooCloseToCreepSource;
    case 47:
    case "CantBuildTooCloseToResources":
      return ActionResult.CantBuildTooCloseToResources;
    case 48:
    case "CantBuildTooFarFromWater":
      return ActionResult.CantBuildTooFarFromWater;
    case 49:
    case "CantBuildTooFarFromCreepSource":
      return ActionResult.CantBuildTooFarFromCreepSource;
    case 50:
    case "CantBuildTooFarFromBuildPowerSource":
      return ActionResult.CantBuildTooFarFromBuildPowerSource;
    case 51:
    case "CantBuildOnDenseTerrain":
      return ActionResult.CantBuildOnDenseTerrain;
    case 52:
    case "CantTrainTooFarFromTrainPowerSource":
      return ActionResult.CantTrainTooFarFromTrainPowerSource;
    case 53:
    case "CantLandLocationInvalid":
      return ActionResult.CantLandLocationInvalid;
    case 54:
    case "CantSeeLandLocation":
      return ActionResult.CantSeeLandLocation;
    case 55:
    case "CantLandTooCloseToCreepSource":
      return ActionResult.CantLandTooCloseToCreepSource;
    case 56:
    case "CantLandTooCloseToResources":
      return ActionResult.CantLandTooCloseToResources;
    case 57:
    case "CantLandTooFarFromWater":
      return ActionResult.CantLandTooFarFromWater;
    case 58:
    case "CantLandTooFarFromCreepSource":
      return ActionResult.CantLandTooFarFromCreepSource;
    case 59:
    case "CantLandTooFarFromBuildPowerSource":
      return ActionResult.CantLandTooFarFromBuildPowerSource;
    case 60:
    case "CantLandTooFarFromTrainPowerSource":
      return ActionResult.CantLandTooFarFromTrainPowerSource;
    case 61:
    case "CantLandOnDenseTerrain":
      return ActionResult.CantLandOnDenseTerrain;
    case 62:
    case "AddOnTooFarFromBuilding":
      return ActionResult.AddOnTooFarFromBuilding;
    case 63:
    case "MustBuildRefineryFirst":
      return ActionResult.MustBuildRefineryFirst;
    case 64:
    case "BuildingIsUnderConstruction":
      return ActionResult.BuildingIsUnderConstruction;
    case 65:
    case "CantFindDropOff":
      return ActionResult.CantFindDropOff;
    case 66:
    case "CantLoadOtherPlayersUnits":
      return ActionResult.CantLoadOtherPlayersUnits;
    case 67:
    case "NotEnoughRoomToLoadUnit":
      return ActionResult.NotEnoughRoomToLoadUnit;
    case 68:
    case "CantUnloadUnitsThere":
      return ActionResult.CantUnloadUnitsThere;
    case 69:
    case "CantWarpInUnitsThere":
      return ActionResult.CantWarpInUnitsThere;
    case 70:
    case "CantLoadImmobileUnits":
      return ActionResult.CantLoadImmobileUnits;
    case 71:
    case "CantRechargeImmobileUnits":
      return ActionResult.CantRechargeImmobileUnits;
    case 72:
    case "CantRechargeUnderConstructionUnits":
      return ActionResult.CantRechargeUnderConstructionUnits;
    case 73:
    case "CantLoadThatUnit":
      return ActionResult.CantLoadThatUnit;
    case 74:
    case "NoCargoToUnload":
      return ActionResult.NoCargoToUnload;
    case 75:
    case "LoadAllNoTargetsFound":
      return ActionResult.LoadAllNoTargetsFound;
    case 76:
    case "NotWhileOccupied":
      return ActionResult.NotWhileOccupied;
    case 77:
    case "CantAttackWithoutAmmo":
      return ActionResult.CantAttackWithoutAmmo;
    case 78:
    case "CantHoldAnyMoreAmmo":
      return ActionResult.CantHoldAnyMoreAmmo;
    case 79:
    case "TechRequirementsNotMet":
      return ActionResult.TechRequirementsNotMet;
    case 80:
    case "MustLockdownUnitFirst":
      return ActionResult.MustLockdownUnitFirst;
    case 81:
    case "MustTargetUnit":
      return ActionResult.MustTargetUnit;
    case 82:
    case "MustTargetInventory":
      return ActionResult.MustTargetInventory;
    case 83:
    case "MustTargetVisibleUnit":
      return ActionResult.MustTargetVisibleUnit;
    case 84:
    case "MustTargetVisibleLocation":
      return ActionResult.MustTargetVisibleLocation;
    case 85:
    case "MustTargetWalkableLocation":
      return ActionResult.MustTargetWalkableLocation;
    case 86:
    case "MustTargetPawnableUnit":
      return ActionResult.MustTargetPawnableUnit;
    case 87:
    case "YouCantControlThatUnit":
      return ActionResult.YouCantControlThatUnit;
    case 88:
    case "YouCantIssueCommandsToThatUnit":
      return ActionResult.YouCantIssueCommandsToThatUnit;
    case 89:
    case "MustTargetResources":
      return ActionResult.MustTargetResources;
    case 90:
    case "RequiresHealTarget":
      return ActionResult.RequiresHealTarget;
    case 91:
    case "RequiresRepairTarget":
      return ActionResult.RequiresRepairTarget;
    case 92:
    case "NoItemsToDrop":
      return ActionResult.NoItemsToDrop;
    case 93:
    case "CantHoldAnyMoreItems":
      return ActionResult.CantHoldAnyMoreItems;
    case 94:
    case "CantHoldThat":
      return ActionResult.CantHoldThat;
    case 95:
    case "TargetHasNoInventory":
      return ActionResult.TargetHasNoInventory;
    case 96:
    case "CantDropThisItem":
      return ActionResult.CantDropThisItem;
    case 97:
    case "CantMoveThisItem":
      return ActionResult.CantMoveThisItem;
    case 98:
    case "CantPawnThisUnit":
      return ActionResult.CantPawnThisUnit;
    case 99:
    case "MustTargetCaster":
      return ActionResult.MustTargetCaster;
    case 100:
    case "CantTargetCaster":
      return ActionResult.CantTargetCaster;
    case 101:
    case "MustTargetOuter":
      return ActionResult.MustTargetOuter;
    case 102:
    case "CantTargetOuter":
      return ActionResult.CantTargetOuter;
    case 103:
    case "MustTargetYourOwnUnits":
      return ActionResult.MustTargetYourOwnUnits;
    case 104:
    case "CantTargetYourOwnUnits":
      return ActionResult.CantTargetYourOwnUnits;
    case 105:
    case "MustTargetFriendlyUnits":
      return ActionResult.MustTargetFriendlyUnits;
    case 106:
    case "CantTargetFriendlyUnits":
      return ActionResult.CantTargetFriendlyUnits;
    case 107:
    case "MustTargetNeutralUnits":
      return ActionResult.MustTargetNeutralUnits;
    case 108:
    case "CantTargetNeutralUnits":
      return ActionResult.CantTargetNeutralUnits;
    case 109:
    case "MustTargetEnemyUnits":
      return ActionResult.MustTargetEnemyUnits;
    case 110:
    case "CantTargetEnemyUnits":
      return ActionResult.CantTargetEnemyUnits;
    case 111:
    case "MustTargetAirUnits":
      return ActionResult.MustTargetAirUnits;
    case 112:
    case "CantTargetAirUnits":
      return ActionResult.CantTargetAirUnits;
    case 113:
    case "MustTargetGroundUnits":
      return ActionResult.MustTargetGroundUnits;
    case 114:
    case "CantTargetGroundUnits":
      return ActionResult.CantTargetGroundUnits;
    case 115:
    case "MustTargetStructures":
      return ActionResult.MustTargetStructures;
    case 116:
    case "CantTargetStructures":
      return ActionResult.CantTargetStructures;
    case 117:
    case "MustTargetLightUnits":
      return ActionResult.MustTargetLightUnits;
    case 118:
    case "CantTargetLightUnits":
      return ActionResult.CantTargetLightUnits;
    case 119:
    case "MustTargetArmoredUnits":
      return ActionResult.MustTargetArmoredUnits;
    case 120:
    case "CantTargetArmoredUnits":
      return ActionResult.CantTargetArmoredUnits;
    case 121:
    case "MustTargetBiologicalUnits":
      return ActionResult.MustTargetBiologicalUnits;
    case 122:
    case "CantTargetBiologicalUnits":
      return ActionResult.CantTargetBiologicalUnits;
    case 123:
    case "MustTargetHeroicUnits":
      return ActionResult.MustTargetHeroicUnits;
    case 124:
    case "CantTargetHeroicUnits":
      return ActionResult.CantTargetHeroicUnits;
    case 125:
    case "MustTargetRoboticUnits":
      return ActionResult.MustTargetRoboticUnits;
    case 126:
    case "CantTargetRoboticUnits":
      return ActionResult.CantTargetRoboticUnits;
    case 127:
    case "MustTargetMechanicalUnits":
      return ActionResult.MustTargetMechanicalUnits;
    case 128:
    case "CantTargetMechanicalUnits":
      return ActionResult.CantTargetMechanicalUnits;
    case 129:
    case "MustTargetPsionicUnits":
      return ActionResult.MustTargetPsionicUnits;
    case 130:
    case "CantTargetPsionicUnits":
      return ActionResult.CantTargetPsionicUnits;
    case 131:
    case "MustTargetMassiveUnits":
      return ActionResult.MustTargetMassiveUnits;
    case 132:
    case "CantTargetMassiveUnits":
      return ActionResult.CantTargetMassiveUnits;
    case 133:
    case "MustTargetMissile":
      return ActionResult.MustTargetMissile;
    case 134:
    case "CantTargetMissile":
      return ActionResult.CantTargetMissile;
    case 135:
    case "MustTargetWorkerUnits":
      return ActionResult.MustTargetWorkerUnits;
    case 136:
    case "CantTargetWorkerUnits":
      return ActionResult.CantTargetWorkerUnits;
    case 137:
    case "MustTargetEnergyCapableUnits":
      return ActionResult.MustTargetEnergyCapableUnits;
    case 138:
    case "CantTargetEnergyCapableUnits":
      return ActionResult.CantTargetEnergyCapableUnits;
    case 139:
    case "MustTargetShieldCapableUnits":
      return ActionResult.MustTargetShieldCapableUnits;
    case 140:
    case "CantTargetShieldCapableUnits":
      return ActionResult.CantTargetShieldCapableUnits;
    case 141:
    case "MustTargetFlyers":
      return ActionResult.MustTargetFlyers;
    case 142:
    case "CantTargetFlyers":
      return ActionResult.CantTargetFlyers;
    case 143:
    case "MustTargetBuriedUnits":
      return ActionResult.MustTargetBuriedUnits;
    case 144:
    case "CantTargetBuriedUnits":
      return ActionResult.CantTargetBuriedUnits;
    case 145:
    case "MustTargetCloakedUnits":
      return ActionResult.MustTargetCloakedUnits;
    case 146:
    case "CantTargetCloakedUnits":
      return ActionResult.CantTargetCloakedUnits;
    case 147:
    case "MustTargetUnitsInAStasisField":
      return ActionResult.MustTargetUnitsInAStasisField;
    case 148:
    case "CantTargetUnitsInAStasisField":
      return ActionResult.CantTargetUnitsInAStasisField;
    case 149:
    case "MustTargetUnderConstructionUnits":
      return ActionResult.MustTargetUnderConstructionUnits;
    case 150:
    case "CantTargetUnderConstructionUnits":
      return ActionResult.CantTargetUnderConstructionUnits;
    case 151:
    case "MustTargetDeadUnits":
      return ActionResult.MustTargetDeadUnits;
    case 152:
    case "CantTargetDeadUnits":
      return ActionResult.CantTargetDeadUnits;
    case 153:
    case "MustTargetRevivableUnits":
      return ActionResult.MustTargetRevivableUnits;
    case 154:
    case "CantTargetRevivableUnits":
      return ActionResult.CantTargetRevivableUnits;
    case 155:
    case "MustTargetHiddenUnits":
      return ActionResult.MustTargetHiddenUnits;
    case 156:
    case "CantTargetHiddenUnits":
      return ActionResult.CantTargetHiddenUnits;
    case 157:
    case "CantRechargeOtherPlayersUnits":
      return ActionResult.CantRechargeOtherPlayersUnits;
    case 158:
    case "MustTargetHallucinations":
      return ActionResult.MustTargetHallucinations;
    case 159:
    case "CantTargetHallucinations":
      return ActionResult.CantTargetHallucinations;
    case 160:
    case "MustTargetInvulnerableUnits":
      return ActionResult.MustTargetInvulnerableUnits;
    case 161:
    case "CantTargetInvulnerableUnits":
      return ActionResult.CantTargetInvulnerableUnits;
    case 162:
    case "MustTargetDetectedUnits":
      return ActionResult.MustTargetDetectedUnits;
    case 163:
    case "CantTargetDetectedUnits":
      return ActionResult.CantTargetDetectedUnits;
    case 164:
    case "CantTargetUnitWithEnergy":
      return ActionResult.CantTargetUnitWithEnergy;
    case 165:
    case "CantTargetUnitWithShields":
      return ActionResult.CantTargetUnitWithShields;
    case 166:
    case "MustTargetUncommandableUnits":
      return ActionResult.MustTargetUncommandableUnits;
    case 167:
    case "CantTargetUncommandableUnits":
      return ActionResult.CantTargetUncommandableUnits;
    case 168:
    case "MustTargetPreventDefeatUnits":
      return ActionResult.MustTargetPreventDefeatUnits;
    case 169:
    case "CantTargetPreventDefeatUnits":
      return ActionResult.CantTargetPreventDefeatUnits;
    case 170:
    case "MustTargetPreventRevealUnits":
      return ActionResult.MustTargetPreventRevealUnits;
    case 171:
    case "CantTargetPreventRevealUnits":
      return ActionResult.CantTargetPreventRevealUnits;
    case 172:
    case "MustTargetPassiveUnits":
      return ActionResult.MustTargetPassiveUnits;
    case 173:
    case "CantTargetPassiveUnits":
      return ActionResult.CantTargetPassiveUnits;
    case 174:
    case "MustTargetStunnedUnits":
      return ActionResult.MustTargetStunnedUnits;
    case 175:
    case "CantTargetStunnedUnits":
      return ActionResult.CantTargetStunnedUnits;
    case 176:
    case "MustTargetSummonedUnits":
      return ActionResult.MustTargetSummonedUnits;
    case 177:
    case "CantTargetSummonedUnits":
      return ActionResult.CantTargetSummonedUnits;
    case 178:
    case "MustTargetUser1":
      return ActionResult.MustTargetUser1;
    case 179:
    case "CantTargetUser1":
      return ActionResult.CantTargetUser1;
    case 180:
    case "MustTargetUnstoppableUnits":
      return ActionResult.MustTargetUnstoppableUnits;
    case 181:
    case "CantTargetUnstoppableUnits":
      return ActionResult.CantTargetUnstoppableUnits;
    case 182:
    case "MustTargetResistantUnits":
      return ActionResult.MustTargetResistantUnits;
    case 183:
    case "CantTargetResistantUnits":
      return ActionResult.CantTargetResistantUnits;
    case 184:
    case "MustTargetDazedUnits":
      return ActionResult.MustTargetDazedUnits;
    case 185:
    case "CantTargetDazedUnits":
      return ActionResult.CantTargetDazedUnits;
    case 186:
    case "CantLockdown":
      return ActionResult.CantLockdown;
    case 187:
    case "CantMindControl":
      return ActionResult.CantMindControl;
    case 188:
    case "MustTargetDestructibles":
      return ActionResult.MustTargetDestructibles;
    case 189:
    case "CantTargetDestructibles":
      return ActionResult.CantTargetDestructibles;
    case 190:
    case "MustTargetItems":
      return ActionResult.MustTargetItems;
    case 191:
    case "CantTargetItems":
      return ActionResult.CantTargetItems;
    case 192:
    case "NoCalldownAvailable":
      return ActionResult.NoCalldownAvailable;
    case 193:
    case "WaypointListFull":
      return ActionResult.WaypointListFull;
    case 194:
    case "MustTargetRace":
      return ActionResult.MustTargetRace;
    case 195:
    case "CantTargetRace":
      return ActionResult.CantTargetRace;
    case 196:
    case "MustTargetSimilarUnits":
      return ActionResult.MustTargetSimilarUnits;
    case 197:
    case "CantTargetSimilarUnits":
      return ActionResult.CantTargetSimilarUnits;
    case 198:
    case "CantFindEnoughTargets":
      return ActionResult.CantFindEnoughTargets;
    case 199:
    case "AlreadySpawningLarva":
      return ActionResult.AlreadySpawningLarva;
    case 200:
    case "CantTargetExhaustedResources":
      return ActionResult.CantTargetExhaustedResources;
    case 201:
    case "CantUseMinimap":
      return ActionResult.CantUseMinimap;
    case 202:
    case "CantUseInfoPanel":
      return ActionResult.CantUseInfoPanel;
    case 203:
    case "OrderQueueIsFull":
      return ActionResult.OrderQueueIsFull;
    case 204:
    case "CantHarvestThatResource":
      return ActionResult.CantHarvestThatResource;
    case 205:
    case "HarvestersNotRequired":
      return ActionResult.HarvestersNotRequired;
    case 206:
    case "AlreadyTargeted":
      return ActionResult.AlreadyTargeted;
    case 207:
    case "CantAttackWeaponsDisabled":
      return ActionResult.CantAttackWeaponsDisabled;
    case 208:
    case "CouldntReachTarget":
      return ActionResult.CouldntReachTarget;
    case 209:
    case "TargetIsOutOfRange":
      return ActionResult.TargetIsOutOfRange;
    case 210:
    case "TargetIsTooClose":
      return ActionResult.TargetIsTooClose;
    case 211:
    case "TargetIsOutOfArc":
      return ActionResult.TargetIsOutOfArc;
    case 212:
    case "CantFindTeleportLocation":
      return ActionResult.CantFindTeleportLocation;
    case 213:
    case "InvalidItemClass":
      return ActionResult.InvalidItemClass;
    case 214:
    case "CantFindCancelOrder":
      return ActionResult.CantFindCancelOrder;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionResult.UNRECOGNIZED;
  }
}

export function actionResultToJSON(object: ActionResult): string {
  switch (object) {
    case ActionResult.Success:
      return "Success";
    case ActionResult.NotSupported:
      return "NotSupported";
    case ActionResult.Error:
      return "Error";
    case ActionResult.CantQueueThatOrder:
      return "CantQueueThatOrder";
    case ActionResult.Retry:
      return "Retry";
    case ActionResult.Cooldown:
      return "Cooldown";
    case ActionResult.QueueIsFull:
      return "QueueIsFull";
    case ActionResult.RallyQueueIsFull:
      return "RallyQueueIsFull";
    case ActionResult.NotEnoughMinerals:
      return "NotEnoughMinerals";
    case ActionResult.NotEnoughVespene:
      return "NotEnoughVespene";
    case ActionResult.NotEnoughTerrazine:
      return "NotEnoughTerrazine";
    case ActionResult.NotEnoughCustom:
      return "NotEnoughCustom";
    case ActionResult.NotEnoughFood:
      return "NotEnoughFood";
    case ActionResult.FoodUsageImpossible:
      return "FoodUsageImpossible";
    case ActionResult.NotEnoughLife:
      return "NotEnoughLife";
    case ActionResult.NotEnoughShields:
      return "NotEnoughShields";
    case ActionResult.NotEnoughEnergy:
      return "NotEnoughEnergy";
    case ActionResult.LifeSuppressed:
      return "LifeSuppressed";
    case ActionResult.ShieldsSuppressed:
      return "ShieldsSuppressed";
    case ActionResult.EnergySuppressed:
      return "EnergySuppressed";
    case ActionResult.NotEnoughCharges:
      return "NotEnoughCharges";
    case ActionResult.CantAddMoreCharges:
      return "CantAddMoreCharges";
    case ActionResult.TooMuchMinerals:
      return "TooMuchMinerals";
    case ActionResult.TooMuchVespene:
      return "TooMuchVespene";
    case ActionResult.TooMuchTerrazine:
      return "TooMuchTerrazine";
    case ActionResult.TooMuchCustom:
      return "TooMuchCustom";
    case ActionResult.TooMuchFood:
      return "TooMuchFood";
    case ActionResult.TooMuchLife:
      return "TooMuchLife";
    case ActionResult.TooMuchShields:
      return "TooMuchShields";
    case ActionResult.TooMuchEnergy:
      return "TooMuchEnergy";
    case ActionResult.MustTargetUnitWithLife:
      return "MustTargetUnitWithLife";
    case ActionResult.MustTargetUnitWithShields:
      return "MustTargetUnitWithShields";
    case ActionResult.MustTargetUnitWithEnergy:
      return "MustTargetUnitWithEnergy";
    case ActionResult.CantTrade:
      return "CantTrade";
    case ActionResult.CantSpend:
      return "CantSpend";
    case ActionResult.CantTargetThatUnit:
      return "CantTargetThatUnit";
    case ActionResult.CouldntAllocateUnit:
      return "CouldntAllocateUnit";
    case ActionResult.UnitCantMove:
      return "UnitCantMove";
    case ActionResult.TransportIsHoldingPosition:
      return "TransportIsHoldingPosition";
    case ActionResult.BuildTechRequirementsNotMet:
      return "BuildTechRequirementsNotMet";
    case ActionResult.CantFindPlacementLocation:
      return "CantFindPlacementLocation";
    case ActionResult.CantBuildOnThat:
      return "CantBuildOnThat";
    case ActionResult.CantBuildTooCloseToDropOff:
      return "CantBuildTooCloseToDropOff";
    case ActionResult.CantBuildLocationInvalid:
      return "CantBuildLocationInvalid";
    case ActionResult.CantSeeBuildLocation:
      return "CantSeeBuildLocation";
    case ActionResult.CantBuildTooCloseToCreepSource:
      return "CantBuildTooCloseToCreepSource";
    case ActionResult.CantBuildTooCloseToResources:
      return "CantBuildTooCloseToResources";
    case ActionResult.CantBuildTooFarFromWater:
      return "CantBuildTooFarFromWater";
    case ActionResult.CantBuildTooFarFromCreepSource:
      return "CantBuildTooFarFromCreepSource";
    case ActionResult.CantBuildTooFarFromBuildPowerSource:
      return "CantBuildTooFarFromBuildPowerSource";
    case ActionResult.CantBuildOnDenseTerrain:
      return "CantBuildOnDenseTerrain";
    case ActionResult.CantTrainTooFarFromTrainPowerSource:
      return "CantTrainTooFarFromTrainPowerSource";
    case ActionResult.CantLandLocationInvalid:
      return "CantLandLocationInvalid";
    case ActionResult.CantSeeLandLocation:
      return "CantSeeLandLocation";
    case ActionResult.CantLandTooCloseToCreepSource:
      return "CantLandTooCloseToCreepSource";
    case ActionResult.CantLandTooCloseToResources:
      return "CantLandTooCloseToResources";
    case ActionResult.CantLandTooFarFromWater:
      return "CantLandTooFarFromWater";
    case ActionResult.CantLandTooFarFromCreepSource:
      return "CantLandTooFarFromCreepSource";
    case ActionResult.CantLandTooFarFromBuildPowerSource:
      return "CantLandTooFarFromBuildPowerSource";
    case ActionResult.CantLandTooFarFromTrainPowerSource:
      return "CantLandTooFarFromTrainPowerSource";
    case ActionResult.CantLandOnDenseTerrain:
      return "CantLandOnDenseTerrain";
    case ActionResult.AddOnTooFarFromBuilding:
      return "AddOnTooFarFromBuilding";
    case ActionResult.MustBuildRefineryFirst:
      return "MustBuildRefineryFirst";
    case ActionResult.BuildingIsUnderConstruction:
      return "BuildingIsUnderConstruction";
    case ActionResult.CantFindDropOff:
      return "CantFindDropOff";
    case ActionResult.CantLoadOtherPlayersUnits:
      return "CantLoadOtherPlayersUnits";
    case ActionResult.NotEnoughRoomToLoadUnit:
      return "NotEnoughRoomToLoadUnit";
    case ActionResult.CantUnloadUnitsThere:
      return "CantUnloadUnitsThere";
    case ActionResult.CantWarpInUnitsThere:
      return "CantWarpInUnitsThere";
    case ActionResult.CantLoadImmobileUnits:
      return "CantLoadImmobileUnits";
    case ActionResult.CantRechargeImmobileUnits:
      return "CantRechargeImmobileUnits";
    case ActionResult.CantRechargeUnderConstructionUnits:
      return "CantRechargeUnderConstructionUnits";
    case ActionResult.CantLoadThatUnit:
      return "CantLoadThatUnit";
    case ActionResult.NoCargoToUnload:
      return "NoCargoToUnload";
    case ActionResult.LoadAllNoTargetsFound:
      return "LoadAllNoTargetsFound";
    case ActionResult.NotWhileOccupied:
      return "NotWhileOccupied";
    case ActionResult.CantAttackWithoutAmmo:
      return "CantAttackWithoutAmmo";
    case ActionResult.CantHoldAnyMoreAmmo:
      return "CantHoldAnyMoreAmmo";
    case ActionResult.TechRequirementsNotMet:
      return "TechRequirementsNotMet";
    case ActionResult.MustLockdownUnitFirst:
      return "MustLockdownUnitFirst";
    case ActionResult.MustTargetUnit:
      return "MustTargetUnit";
    case ActionResult.MustTargetInventory:
      return "MustTargetInventory";
    case ActionResult.MustTargetVisibleUnit:
      return "MustTargetVisibleUnit";
    case ActionResult.MustTargetVisibleLocation:
      return "MustTargetVisibleLocation";
    case ActionResult.MustTargetWalkableLocation:
      return "MustTargetWalkableLocation";
    case ActionResult.MustTargetPawnableUnit:
      return "MustTargetPawnableUnit";
    case ActionResult.YouCantControlThatUnit:
      return "YouCantControlThatUnit";
    case ActionResult.YouCantIssueCommandsToThatUnit:
      return "YouCantIssueCommandsToThatUnit";
    case ActionResult.MustTargetResources:
      return "MustTargetResources";
    case ActionResult.RequiresHealTarget:
      return "RequiresHealTarget";
    case ActionResult.RequiresRepairTarget:
      return "RequiresRepairTarget";
    case ActionResult.NoItemsToDrop:
      return "NoItemsToDrop";
    case ActionResult.CantHoldAnyMoreItems:
      return "CantHoldAnyMoreItems";
    case ActionResult.CantHoldThat:
      return "CantHoldThat";
    case ActionResult.TargetHasNoInventory:
      return "TargetHasNoInventory";
    case ActionResult.CantDropThisItem:
      return "CantDropThisItem";
    case ActionResult.CantMoveThisItem:
      return "CantMoveThisItem";
    case ActionResult.CantPawnThisUnit:
      return "CantPawnThisUnit";
    case ActionResult.MustTargetCaster:
      return "MustTargetCaster";
    case ActionResult.CantTargetCaster:
      return "CantTargetCaster";
    case ActionResult.MustTargetOuter:
      return "MustTargetOuter";
    case ActionResult.CantTargetOuter:
      return "CantTargetOuter";
    case ActionResult.MustTargetYourOwnUnits:
      return "MustTargetYourOwnUnits";
    case ActionResult.CantTargetYourOwnUnits:
      return "CantTargetYourOwnUnits";
    case ActionResult.MustTargetFriendlyUnits:
      return "MustTargetFriendlyUnits";
    case ActionResult.CantTargetFriendlyUnits:
      return "CantTargetFriendlyUnits";
    case ActionResult.MustTargetNeutralUnits:
      return "MustTargetNeutralUnits";
    case ActionResult.CantTargetNeutralUnits:
      return "CantTargetNeutralUnits";
    case ActionResult.MustTargetEnemyUnits:
      return "MustTargetEnemyUnits";
    case ActionResult.CantTargetEnemyUnits:
      return "CantTargetEnemyUnits";
    case ActionResult.MustTargetAirUnits:
      return "MustTargetAirUnits";
    case ActionResult.CantTargetAirUnits:
      return "CantTargetAirUnits";
    case ActionResult.MustTargetGroundUnits:
      return "MustTargetGroundUnits";
    case ActionResult.CantTargetGroundUnits:
      return "CantTargetGroundUnits";
    case ActionResult.MustTargetStructures:
      return "MustTargetStructures";
    case ActionResult.CantTargetStructures:
      return "CantTargetStructures";
    case ActionResult.MustTargetLightUnits:
      return "MustTargetLightUnits";
    case ActionResult.CantTargetLightUnits:
      return "CantTargetLightUnits";
    case ActionResult.MustTargetArmoredUnits:
      return "MustTargetArmoredUnits";
    case ActionResult.CantTargetArmoredUnits:
      return "CantTargetArmoredUnits";
    case ActionResult.MustTargetBiologicalUnits:
      return "MustTargetBiologicalUnits";
    case ActionResult.CantTargetBiologicalUnits:
      return "CantTargetBiologicalUnits";
    case ActionResult.MustTargetHeroicUnits:
      return "MustTargetHeroicUnits";
    case ActionResult.CantTargetHeroicUnits:
      return "CantTargetHeroicUnits";
    case ActionResult.MustTargetRoboticUnits:
      return "MustTargetRoboticUnits";
    case ActionResult.CantTargetRoboticUnits:
      return "CantTargetRoboticUnits";
    case ActionResult.MustTargetMechanicalUnits:
      return "MustTargetMechanicalUnits";
    case ActionResult.CantTargetMechanicalUnits:
      return "CantTargetMechanicalUnits";
    case ActionResult.MustTargetPsionicUnits:
      return "MustTargetPsionicUnits";
    case ActionResult.CantTargetPsionicUnits:
      return "CantTargetPsionicUnits";
    case ActionResult.MustTargetMassiveUnits:
      return "MustTargetMassiveUnits";
    case ActionResult.CantTargetMassiveUnits:
      return "CantTargetMassiveUnits";
    case ActionResult.MustTargetMissile:
      return "MustTargetMissile";
    case ActionResult.CantTargetMissile:
      return "CantTargetMissile";
    case ActionResult.MustTargetWorkerUnits:
      return "MustTargetWorkerUnits";
    case ActionResult.CantTargetWorkerUnits:
      return "CantTargetWorkerUnits";
    case ActionResult.MustTargetEnergyCapableUnits:
      return "MustTargetEnergyCapableUnits";
    case ActionResult.CantTargetEnergyCapableUnits:
      return "CantTargetEnergyCapableUnits";
    case ActionResult.MustTargetShieldCapableUnits:
      return "MustTargetShieldCapableUnits";
    case ActionResult.CantTargetShieldCapableUnits:
      return "CantTargetShieldCapableUnits";
    case ActionResult.MustTargetFlyers:
      return "MustTargetFlyers";
    case ActionResult.CantTargetFlyers:
      return "CantTargetFlyers";
    case ActionResult.MustTargetBuriedUnits:
      return "MustTargetBuriedUnits";
    case ActionResult.CantTargetBuriedUnits:
      return "CantTargetBuriedUnits";
    case ActionResult.MustTargetCloakedUnits:
      return "MustTargetCloakedUnits";
    case ActionResult.CantTargetCloakedUnits:
      return "CantTargetCloakedUnits";
    case ActionResult.MustTargetUnitsInAStasisField:
      return "MustTargetUnitsInAStasisField";
    case ActionResult.CantTargetUnitsInAStasisField:
      return "CantTargetUnitsInAStasisField";
    case ActionResult.MustTargetUnderConstructionUnits:
      return "MustTargetUnderConstructionUnits";
    case ActionResult.CantTargetUnderConstructionUnits:
      return "CantTargetUnderConstructionUnits";
    case ActionResult.MustTargetDeadUnits:
      return "MustTargetDeadUnits";
    case ActionResult.CantTargetDeadUnits:
      return "CantTargetDeadUnits";
    case ActionResult.MustTargetRevivableUnits:
      return "MustTargetRevivableUnits";
    case ActionResult.CantTargetRevivableUnits:
      return "CantTargetRevivableUnits";
    case ActionResult.MustTargetHiddenUnits:
      return "MustTargetHiddenUnits";
    case ActionResult.CantTargetHiddenUnits:
      return "CantTargetHiddenUnits";
    case ActionResult.CantRechargeOtherPlayersUnits:
      return "CantRechargeOtherPlayersUnits";
    case ActionResult.MustTargetHallucinations:
      return "MustTargetHallucinations";
    case ActionResult.CantTargetHallucinations:
      return "CantTargetHallucinations";
    case ActionResult.MustTargetInvulnerableUnits:
      return "MustTargetInvulnerableUnits";
    case ActionResult.CantTargetInvulnerableUnits:
      return "CantTargetInvulnerableUnits";
    case ActionResult.MustTargetDetectedUnits:
      return "MustTargetDetectedUnits";
    case ActionResult.CantTargetDetectedUnits:
      return "CantTargetDetectedUnits";
    case ActionResult.CantTargetUnitWithEnergy:
      return "CantTargetUnitWithEnergy";
    case ActionResult.CantTargetUnitWithShields:
      return "CantTargetUnitWithShields";
    case ActionResult.MustTargetUncommandableUnits:
      return "MustTargetUncommandableUnits";
    case ActionResult.CantTargetUncommandableUnits:
      return "CantTargetUncommandableUnits";
    case ActionResult.MustTargetPreventDefeatUnits:
      return "MustTargetPreventDefeatUnits";
    case ActionResult.CantTargetPreventDefeatUnits:
      return "CantTargetPreventDefeatUnits";
    case ActionResult.MustTargetPreventRevealUnits:
      return "MustTargetPreventRevealUnits";
    case ActionResult.CantTargetPreventRevealUnits:
      return "CantTargetPreventRevealUnits";
    case ActionResult.MustTargetPassiveUnits:
      return "MustTargetPassiveUnits";
    case ActionResult.CantTargetPassiveUnits:
      return "CantTargetPassiveUnits";
    case ActionResult.MustTargetStunnedUnits:
      return "MustTargetStunnedUnits";
    case ActionResult.CantTargetStunnedUnits:
      return "CantTargetStunnedUnits";
    case ActionResult.MustTargetSummonedUnits:
      return "MustTargetSummonedUnits";
    case ActionResult.CantTargetSummonedUnits:
      return "CantTargetSummonedUnits";
    case ActionResult.MustTargetUser1:
      return "MustTargetUser1";
    case ActionResult.CantTargetUser1:
      return "CantTargetUser1";
    case ActionResult.MustTargetUnstoppableUnits:
      return "MustTargetUnstoppableUnits";
    case ActionResult.CantTargetUnstoppableUnits:
      return "CantTargetUnstoppableUnits";
    case ActionResult.MustTargetResistantUnits:
      return "MustTargetResistantUnits";
    case ActionResult.CantTargetResistantUnits:
      return "CantTargetResistantUnits";
    case ActionResult.MustTargetDazedUnits:
      return "MustTargetDazedUnits";
    case ActionResult.CantTargetDazedUnits:
      return "CantTargetDazedUnits";
    case ActionResult.CantLockdown:
      return "CantLockdown";
    case ActionResult.CantMindControl:
      return "CantMindControl";
    case ActionResult.MustTargetDestructibles:
      return "MustTargetDestructibles";
    case ActionResult.CantTargetDestructibles:
      return "CantTargetDestructibles";
    case ActionResult.MustTargetItems:
      return "MustTargetItems";
    case ActionResult.CantTargetItems:
      return "CantTargetItems";
    case ActionResult.NoCalldownAvailable:
      return "NoCalldownAvailable";
    case ActionResult.WaypointListFull:
      return "WaypointListFull";
    case ActionResult.MustTargetRace:
      return "MustTargetRace";
    case ActionResult.CantTargetRace:
      return "CantTargetRace";
    case ActionResult.MustTargetSimilarUnits:
      return "MustTargetSimilarUnits";
    case ActionResult.CantTargetSimilarUnits:
      return "CantTargetSimilarUnits";
    case ActionResult.CantFindEnoughTargets:
      return "CantFindEnoughTargets";
    case ActionResult.AlreadySpawningLarva:
      return "AlreadySpawningLarva";
    case ActionResult.CantTargetExhaustedResources:
      return "CantTargetExhaustedResources";
    case ActionResult.CantUseMinimap:
      return "CantUseMinimap";
    case ActionResult.CantUseInfoPanel:
      return "CantUseInfoPanel";
    case ActionResult.OrderQueueIsFull:
      return "OrderQueueIsFull";
    case ActionResult.CantHarvestThatResource:
      return "CantHarvestThatResource";
    case ActionResult.HarvestersNotRequired:
      return "HarvestersNotRequired";
    case ActionResult.AlreadyTargeted:
      return "AlreadyTargeted";
    case ActionResult.CantAttackWeaponsDisabled:
      return "CantAttackWeaponsDisabled";
    case ActionResult.CouldntReachTarget:
      return "CouldntReachTarget";
    case ActionResult.TargetIsOutOfRange:
      return "TargetIsOutOfRange";
    case ActionResult.TargetIsTooClose:
      return "TargetIsTooClose";
    case ActionResult.TargetIsOutOfArc:
      return "TargetIsOutOfArc";
    case ActionResult.CantFindTeleportLocation:
      return "CantFindTeleportLocation";
    case ActionResult.InvalidItemClass:
      return "InvalidItemClass";
    case ActionResult.CantFindCancelOrder:
      return "CantFindCancelOrder";
    default:
      return "UNKNOWN";
  }
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
