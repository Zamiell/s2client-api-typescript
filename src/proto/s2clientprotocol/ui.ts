/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "SC2APIProtocol";

export interface ObservationUI {
  groups: ControlGroup[];
  single: SinglePanel | undefined;
  multi: MultiPanel | undefined;
  cargo: CargoPanel | undefined;
  production: ProductionPanel | undefined;
}

export interface ControlGroup {
  controlGroupIndex: number;
  leaderUnitType: number;
  count: number;
}

export interface UnitInfo {
  unitType: number;
  playerRelative: number;
  health: number;
  shields: number;
  energy: number;
  transportSlotsTaken: number;
  /** Range: [0.0, 1.0] */
  buildProgress: number;
  addOn: UnitInfo | undefined;
  maxHealth: number;
  maxShields: number;
  maxEnergy: number;
}

export interface SinglePanel {
  unit: UnitInfo | undefined;
  attackUpgradeLevel: number;
  armorUpgradeLevel: number;
  shieldUpgradeLevel: number;
  buffs: number[];
}

export interface MultiPanel {
  units: UnitInfo[];
}

export interface CargoPanel {
  unit: UnitInfo | undefined;
  passengers: UnitInfo[];
  /** TODO: Change to cargo size */
  slotsAvailable: number;
}

export interface BuildItem {
  abilityId: number;
  /** Range: [0.0, 1.0] */
  buildProgress: number;
}

export interface ProductionPanel {
  unit: UnitInfo | undefined;
  /**
   * build_queue ONLY gives information about units that are being produced.
   * Use production_queue instead to see both units being trained as well as research in the queue.
   */
  buildQueue: UnitInfo[];
  productionQueue: BuildItem[];
}

export interface ActionUI {
  controlGroup: ActionControlGroup | undefined;
  selectArmy: ActionSelectArmy | undefined;
  selectWarpGates: ActionSelectWarpGates | undefined;
  selectLarva: ActionSelectLarva | undefined;
  selectIdleWorker: ActionSelectIdleWorker | undefined;
  multiPanel: ActionMultiPanel | undefined;
  cargoPanel: ActionCargoPanelUnload | undefined;
  productionPanel: ActionProductionPanelRemoveFromQueue | undefined;
  toggleAutocast: ActionToggleAutocast | undefined;
}

export interface ActionControlGroup {
  action: ActionControlGroup_ControlGroupAction;
  controlGroupIndex: number;
}

export enum ActionControlGroup_ControlGroupAction {
  /** Recall - Equivalent to number hotkey. Replaces current selection with control group. */
  Recall = 1,
  /** Set - Equivalent to Control + number hotkey. Sets control group to current selection. */
  Set = 2,
  /** Append - Equivalent to Shift + number hotkey. Adds current selection into control group. */
  Append = 3,
  /** SetAndSteal - Equivalent to Control + Alt + number hotkey. Sets control group to current selection. Units are removed from other control groups. */
  SetAndSteal = 4,
  /** AppendAndSteal - Equivalent to Shift + Alt + number hotkey. Adds current selection into control group. Units are removed from other control groups. */
  AppendAndSteal = 5,
  UNRECOGNIZED = -1,
}

export function actionControlGroup_ControlGroupActionFromJSON(
  object: any,
): ActionControlGroup_ControlGroupAction {
  switch (object) {
    case 1:
    case "Recall":
      return ActionControlGroup_ControlGroupAction.Recall;
    case 2:
    case "Set":
      return ActionControlGroup_ControlGroupAction.Set;
    case 3:
    case "Append":
      return ActionControlGroup_ControlGroupAction.Append;
    case 4:
    case "SetAndSteal":
      return ActionControlGroup_ControlGroupAction.SetAndSteal;
    case 5:
    case "AppendAndSteal":
      return ActionControlGroup_ControlGroupAction.AppendAndSteal;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionControlGroup_ControlGroupAction.UNRECOGNIZED;
  }
}

export function actionControlGroup_ControlGroupActionToJSON(
  object: ActionControlGroup_ControlGroupAction,
): string {
  switch (object) {
    case ActionControlGroup_ControlGroupAction.Recall:
      return "Recall";
    case ActionControlGroup_ControlGroupAction.Set:
      return "Set";
    case ActionControlGroup_ControlGroupAction.Append:
      return "Append";
    case ActionControlGroup_ControlGroupAction.SetAndSteal:
      return "SetAndSteal";
    case ActionControlGroup_ControlGroupAction.AppendAndSteal:
      return "AppendAndSteal";
    default:
      return "UNKNOWN";
  }
}

export interface ActionSelectArmy {
  selectionAdd: boolean;
}

export interface ActionSelectWarpGates {
  selectionAdd: boolean;
}

export interface ActionSelectLarva {}

export interface ActionSelectIdleWorker {
  type: ActionSelectIdleWorker_Type;
}

export enum ActionSelectIdleWorker_Type {
  /** Set - Equivalent to click with no modifiers. Replaces selection with single idle worker. */
  Set = 1,
  /** Add - Equivalent to shift+click. Adds single idle worker to current selection. */
  Add = 2,
  /** All - Equivalent to control+click. Selects all idle workers. */
  All = 3,
  /** AddAll - Equivalent to shift+control+click. Adds all idle workers to current selection. */
  AddAll = 4,
  UNRECOGNIZED = -1,
}

export function actionSelectIdleWorker_TypeFromJSON(
  object: any,
): ActionSelectIdleWorker_Type {
  switch (object) {
    case 1:
    case "Set":
      return ActionSelectIdleWorker_Type.Set;
    case 2:
    case "Add":
      return ActionSelectIdleWorker_Type.Add;
    case 3:
    case "All":
      return ActionSelectIdleWorker_Type.All;
    case 4:
    case "AddAll":
      return ActionSelectIdleWorker_Type.AddAll;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionSelectIdleWorker_Type.UNRECOGNIZED;
  }
}

export function actionSelectIdleWorker_TypeToJSON(
  object: ActionSelectIdleWorker_Type,
): string {
  switch (object) {
    case ActionSelectIdleWorker_Type.Set:
      return "Set";
    case ActionSelectIdleWorker_Type.Add:
      return "Add";
    case ActionSelectIdleWorker_Type.All:
      return "All";
    case ActionSelectIdleWorker_Type.AddAll:
      return "AddAll";
    default:
      return "UNKNOWN";
  }
}

export interface ActionMultiPanel {
  type: ActionMultiPanel_Type;
  unitIndex: number;
}

export enum ActionMultiPanel_Type {
  /** SingleSelect - Click on icon */
  SingleSelect = 1,
  /** DeselectUnit - Shift Click on icon */
  DeselectUnit = 2,
  /** SelectAllOfType - Control Click on icon. */
  SelectAllOfType = 3,
  /** DeselectAllOfType - Control+Shift Click on icon. */
  DeselectAllOfType = 4,
  UNRECOGNIZED = -1,
}

export function actionMultiPanel_TypeFromJSON(
  object: any,
): ActionMultiPanel_Type {
  switch (object) {
    case 1:
    case "SingleSelect":
      return ActionMultiPanel_Type.SingleSelect;
    case 2:
    case "DeselectUnit":
      return ActionMultiPanel_Type.DeselectUnit;
    case 3:
    case "SelectAllOfType":
      return ActionMultiPanel_Type.SelectAllOfType;
    case 4:
    case "DeselectAllOfType":
      return ActionMultiPanel_Type.DeselectAllOfType;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ActionMultiPanel_Type.UNRECOGNIZED;
  }
}

export function actionMultiPanel_TypeToJSON(
  object: ActionMultiPanel_Type,
): string {
  switch (object) {
    case ActionMultiPanel_Type.SingleSelect:
      return "SingleSelect";
    case ActionMultiPanel_Type.DeselectUnit:
      return "DeselectUnit";
    case ActionMultiPanel_Type.SelectAllOfType:
      return "SelectAllOfType";
    case ActionMultiPanel_Type.DeselectAllOfType:
      return "DeselectAllOfType";
    default:
      return "UNKNOWN";
  }
}

export interface ActionCargoPanelUnload {
  unitIndex: number;
}

export interface ActionProductionPanelRemoveFromQueue {
  unitIndex: number;
}

export interface ActionToggleAutocast {
  abilityId: number;
}

function createBaseObservationUI(): ObservationUI {
  return {
    groups: [],
    single: undefined,
    multi: undefined,
    cargo: undefined,
    production: undefined,
  };
}

export const ObservationUI = {
  encode(
    message: ObservationUI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.groups) {
      ControlGroup.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.single !== undefined) {
      SinglePanel.encode(message.single, writer.uint32(18).fork()).ldelim();
    }
    if (message.multi !== undefined) {
      MultiPanel.encode(message.multi, writer.uint32(26).fork()).ldelim();
    }
    if (message.cargo !== undefined) {
      CargoPanel.encode(message.cargo, writer.uint32(34).fork()).ldelim();
    }
    if (message.production !== undefined) {
      ProductionPanel.encode(
        message.production,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ObservationUI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseObservationUI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groups.push(ControlGroup.decode(reader, reader.uint32()));
          break;
        case 2:
          message.single = SinglePanel.decode(reader, reader.uint32());
          break;
        case 3:
          message.multi = MultiPanel.decode(reader, reader.uint32());
          break;
        case 4:
          message.cargo = CargoPanel.decode(reader, reader.uint32());
          break;
        case 5:
          message.production = ProductionPanel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ObservationUI {
    return {
      groups: Array.isArray(object?.groups)
        ? object.groups.map((e: any) => ControlGroup.fromJSON(e))
        : [],
      single: isSet(object.single)
        ? SinglePanel.fromJSON(object.single)
        : undefined,
      multi: isSet(object.multi)
        ? MultiPanel.fromJSON(object.multi)
        : undefined,
      cargo: isSet(object.cargo)
        ? CargoPanel.fromJSON(object.cargo)
        : undefined,
      production: isSet(object.production)
        ? ProductionPanel.fromJSON(object.production)
        : undefined,
    };
  },

  toJSON(message: ObservationUI): unknown {
    const obj: any = {};
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? ControlGroup.toJSON(e) : undefined,
      );
    } else {
      obj.groups = [];
    }
    message.single !== undefined &&
      (obj.single = message.single
        ? SinglePanel.toJSON(message.single)
        : undefined);
    message.multi !== undefined &&
      (obj.multi = message.multi
        ? MultiPanel.toJSON(message.multi)
        : undefined);
    message.cargo !== undefined &&
      (obj.cargo = message.cargo
        ? CargoPanel.toJSON(message.cargo)
        : undefined);
    message.production !== undefined &&
      (obj.production = message.production
        ? ProductionPanel.toJSON(message.production)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ObservationUI>, I>>(
    object: I,
  ): ObservationUI {
    const message = createBaseObservationUI();
    message.groups =
      object.groups?.map((e) => ControlGroup.fromPartial(e)) || [];
    message.single =
      object.single !== undefined && object.single !== null
        ? SinglePanel.fromPartial(object.single)
        : undefined;
    message.multi =
      object.multi !== undefined && object.multi !== null
        ? MultiPanel.fromPartial(object.multi)
        : undefined;
    message.cargo =
      object.cargo !== undefined && object.cargo !== null
        ? CargoPanel.fromPartial(object.cargo)
        : undefined;
    message.production =
      object.production !== undefined && object.production !== null
        ? ProductionPanel.fromPartial(object.production)
        : undefined;
    return message;
  },
};

function createBaseControlGroup(): ControlGroup {
  return { controlGroupIndex: 0, leaderUnitType: 0, count: 0 };
}

export const ControlGroup = {
  encode(
    message: ControlGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlGroupIndex !== 0) {
      writer.uint32(8).uint32(message.controlGroupIndex);
    }
    if (message.leaderUnitType !== 0) {
      writer.uint32(16).uint32(message.leaderUnitType);
    }
    if (message.count !== 0) {
      writer.uint32(24).uint32(message.count);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ControlGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseControlGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controlGroupIndex = reader.uint32();
          break;
        case 2:
          message.leaderUnitType = reader.uint32();
          break;
        case 3:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ControlGroup {
    return {
      controlGroupIndex: isSet(object.controlGroupIndex)
        ? Number(object.controlGroupIndex)
        : 0,
      leaderUnitType: isSet(object.leaderUnitType)
        ? Number(object.leaderUnitType)
        : 0,
      count: isSet(object.count) ? Number(object.count) : 0,
    };
  },

  toJSON(message: ControlGroup): unknown {
    const obj: any = {};
    message.controlGroupIndex !== undefined &&
      (obj.controlGroupIndex = Math.round(message.controlGroupIndex));
    message.leaderUnitType !== undefined &&
      (obj.leaderUnitType = Math.round(message.leaderUnitType));
    message.count !== undefined && (obj.count = Math.round(message.count));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ControlGroup>, I>>(
    object: I,
  ): ControlGroup {
    const message = createBaseControlGroup();
    message.controlGroupIndex = object.controlGroupIndex ?? 0;
    message.leaderUnitType = object.leaderUnitType ?? 0;
    message.count = object.count ?? 0;
    return message;
  },
};

function createBaseUnitInfo(): UnitInfo {
  return {
    unitType: 0,
    playerRelative: 0,
    health: 0,
    shields: 0,
    energy: 0,
    transportSlotsTaken: 0,
    buildProgress: 0,
    addOn: undefined,
    maxHealth: 0,
    maxShields: 0,
    maxEnergy: 0,
  };
}

export const UnitInfo = {
  encode(
    message: UnitInfo,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitType !== 0) {
      writer.uint32(8).uint32(message.unitType);
    }
    if (message.playerRelative !== 0) {
      writer.uint32(16).uint32(message.playerRelative);
    }
    if (message.health !== 0) {
      writer.uint32(24).int32(message.health);
    }
    if (message.shields !== 0) {
      writer.uint32(32).int32(message.shields);
    }
    if (message.energy !== 0) {
      writer.uint32(40).int32(message.energy);
    }
    if (message.transportSlotsTaken !== 0) {
      writer.uint32(48).int32(message.transportSlotsTaken);
    }
    if (message.buildProgress !== 0) {
      writer.uint32(61).float(message.buildProgress);
    }
    if (message.addOn !== undefined) {
      UnitInfo.encode(message.addOn, writer.uint32(66).fork()).ldelim();
    }
    if (message.maxHealth !== 0) {
      writer.uint32(72).int32(message.maxHealth);
    }
    if (message.maxShields !== 0) {
      writer.uint32(80).int32(message.maxShields);
    }
    if (message.maxEnergy !== 0) {
      writer.uint32(88).int32(message.maxEnergy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnitInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnitInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitType = reader.uint32();
          break;
        case 2:
          message.playerRelative = reader.uint32();
          break;
        case 3:
          message.health = reader.int32();
          break;
        case 4:
          message.shields = reader.int32();
          break;
        case 5:
          message.energy = reader.int32();
          break;
        case 6:
          message.transportSlotsTaken = reader.int32();
          break;
        case 7:
          message.buildProgress = reader.float();
          break;
        case 8:
          message.addOn = UnitInfo.decode(reader, reader.uint32());
          break;
        case 9:
          message.maxHealth = reader.int32();
          break;
        case 10:
          message.maxShields = reader.int32();
          break;
        case 11:
          message.maxEnergy = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnitInfo {
    return {
      unitType: isSet(object.unitType) ? Number(object.unitType) : 0,
      playerRelative: isSet(object.playerRelative)
        ? Number(object.playerRelative)
        : 0,
      health: isSet(object.health) ? Number(object.health) : 0,
      shields: isSet(object.shields) ? Number(object.shields) : 0,
      energy: isSet(object.energy) ? Number(object.energy) : 0,
      transportSlotsTaken: isSet(object.transportSlotsTaken)
        ? Number(object.transportSlotsTaken)
        : 0,
      buildProgress: isSet(object.buildProgress)
        ? Number(object.buildProgress)
        : 0,
      addOn: isSet(object.addOn) ? UnitInfo.fromJSON(object.addOn) : undefined,
      maxHealth: isSet(object.maxHealth) ? Number(object.maxHealth) : 0,
      maxShields: isSet(object.maxShields) ? Number(object.maxShields) : 0,
      maxEnergy: isSet(object.maxEnergy) ? Number(object.maxEnergy) : 0,
    };
  },

  toJSON(message: UnitInfo): unknown {
    const obj: any = {};
    message.unitType !== undefined &&
      (obj.unitType = Math.round(message.unitType));
    message.playerRelative !== undefined &&
      (obj.playerRelative = Math.round(message.playerRelative));
    message.health !== undefined && (obj.health = Math.round(message.health));
    message.shields !== undefined &&
      (obj.shields = Math.round(message.shields));
    message.energy !== undefined && (obj.energy = Math.round(message.energy));
    message.transportSlotsTaken !== undefined &&
      (obj.transportSlotsTaken = Math.round(message.transportSlotsTaken));
    message.buildProgress !== undefined &&
      (obj.buildProgress = message.buildProgress);
    message.addOn !== undefined &&
      (obj.addOn = message.addOn ? UnitInfo.toJSON(message.addOn) : undefined);
    message.maxHealth !== undefined &&
      (obj.maxHealth = Math.round(message.maxHealth));
    message.maxShields !== undefined &&
      (obj.maxShields = Math.round(message.maxShields));
    message.maxEnergy !== undefined &&
      (obj.maxEnergy = Math.round(message.maxEnergy));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnitInfo>, I>>(object: I): UnitInfo {
    const message = createBaseUnitInfo();
    message.unitType = object.unitType ?? 0;
    message.playerRelative = object.playerRelative ?? 0;
    message.health = object.health ?? 0;
    message.shields = object.shields ?? 0;
    message.energy = object.energy ?? 0;
    message.transportSlotsTaken = object.transportSlotsTaken ?? 0;
    message.buildProgress = object.buildProgress ?? 0;
    message.addOn =
      object.addOn !== undefined && object.addOn !== null
        ? UnitInfo.fromPartial(object.addOn)
        : undefined;
    message.maxHealth = object.maxHealth ?? 0;
    message.maxShields = object.maxShields ?? 0;
    message.maxEnergy = object.maxEnergy ?? 0;
    return message;
  },
};

function createBaseSinglePanel(): SinglePanel {
  return {
    unit: undefined,
    attackUpgradeLevel: 0,
    armorUpgradeLevel: 0,
    shieldUpgradeLevel: 0,
    buffs: [],
  };
}

export const SinglePanel = {
  encode(
    message: SinglePanel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unit !== undefined) {
      UnitInfo.encode(message.unit, writer.uint32(10).fork()).ldelim();
    }
    if (message.attackUpgradeLevel !== 0) {
      writer.uint32(16).int32(message.attackUpgradeLevel);
    }
    if (message.armorUpgradeLevel !== 0) {
      writer.uint32(24).int32(message.armorUpgradeLevel);
    }
    if (message.shieldUpgradeLevel !== 0) {
      writer.uint32(32).int32(message.shieldUpgradeLevel);
    }
    writer.uint32(42).fork();
    for (const v of message.buffs) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SinglePanel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSinglePanel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unit = UnitInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.attackUpgradeLevel = reader.int32();
          break;
        case 3:
          message.armorUpgradeLevel = reader.int32();
          break;
        case 4:
          message.shieldUpgradeLevel = reader.int32();
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.buffs.push(reader.int32());
            }
          } else {
            message.buffs.push(reader.int32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SinglePanel {
    return {
      unit: isSet(object.unit) ? UnitInfo.fromJSON(object.unit) : undefined,
      attackUpgradeLevel: isSet(object.attackUpgradeLevel)
        ? Number(object.attackUpgradeLevel)
        : 0,
      armorUpgradeLevel: isSet(object.armorUpgradeLevel)
        ? Number(object.armorUpgradeLevel)
        : 0,
      shieldUpgradeLevel: isSet(object.shieldUpgradeLevel)
        ? Number(object.shieldUpgradeLevel)
        : 0,
      buffs: Array.isArray(object?.buffs)
        ? object.buffs.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SinglePanel): unknown {
    const obj: any = {};
    message.unit !== undefined &&
      (obj.unit = message.unit ? UnitInfo.toJSON(message.unit) : undefined);
    message.attackUpgradeLevel !== undefined &&
      (obj.attackUpgradeLevel = Math.round(message.attackUpgradeLevel));
    message.armorUpgradeLevel !== undefined &&
      (obj.armorUpgradeLevel = Math.round(message.armorUpgradeLevel));
    message.shieldUpgradeLevel !== undefined &&
      (obj.shieldUpgradeLevel = Math.round(message.shieldUpgradeLevel));
    if (message.buffs) {
      obj.buffs = message.buffs.map((e) => Math.round(e));
    } else {
      obj.buffs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SinglePanel>, I>>(
    object: I,
  ): SinglePanel {
    const message = createBaseSinglePanel();
    message.unit =
      object.unit !== undefined && object.unit !== null
        ? UnitInfo.fromPartial(object.unit)
        : undefined;
    message.attackUpgradeLevel = object.attackUpgradeLevel ?? 0;
    message.armorUpgradeLevel = object.armorUpgradeLevel ?? 0;
    message.shieldUpgradeLevel = object.shieldUpgradeLevel ?? 0;
    message.buffs = object.buffs?.map((e) => e) || [];
    return message;
  },
};

function createBaseMultiPanel(): MultiPanel {
  return { units: [] };
}

export const MultiPanel = {
  encode(
    message: MultiPanel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.units) {
      UnitInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiPanel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiPanel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units.push(UnitInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiPanel {
    return {
      units: Array.isArray(object?.units)
        ? object.units.map((e: any) => UnitInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MultiPanel): unknown {
    const obj: any = {};
    if (message.units) {
      obj.units = message.units.map((e) =>
        e ? UnitInfo.toJSON(e) : undefined,
      );
    } else {
      obj.units = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiPanel>, I>>(
    object: I,
  ): MultiPanel {
    const message = createBaseMultiPanel();
    message.units = object.units?.map((e) => UnitInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCargoPanel(): CargoPanel {
  return { unit: undefined, passengers: [], slotsAvailable: 0 };
}

export const CargoPanel = {
  encode(
    message: CargoPanel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unit !== undefined) {
      UnitInfo.encode(message.unit, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.passengers) {
      UnitInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.slotsAvailable !== 0) {
      writer.uint32(24).int32(message.slotsAvailable);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CargoPanel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCargoPanel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unit = UnitInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.passengers.push(UnitInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.slotsAvailable = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CargoPanel {
    return {
      unit: isSet(object.unit) ? UnitInfo.fromJSON(object.unit) : undefined,
      passengers: Array.isArray(object?.passengers)
        ? object.passengers.map((e: any) => UnitInfo.fromJSON(e))
        : [],
      slotsAvailable: isSet(object.slotsAvailable)
        ? Number(object.slotsAvailable)
        : 0,
    };
  },

  toJSON(message: CargoPanel): unknown {
    const obj: any = {};
    message.unit !== undefined &&
      (obj.unit = message.unit ? UnitInfo.toJSON(message.unit) : undefined);
    if (message.passengers) {
      obj.passengers = message.passengers.map((e) =>
        e ? UnitInfo.toJSON(e) : undefined,
      );
    } else {
      obj.passengers = [];
    }
    message.slotsAvailable !== undefined &&
      (obj.slotsAvailable = Math.round(message.slotsAvailable));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CargoPanel>, I>>(
    object: I,
  ): CargoPanel {
    const message = createBaseCargoPanel();
    message.unit =
      object.unit !== undefined && object.unit !== null
        ? UnitInfo.fromPartial(object.unit)
        : undefined;
    message.passengers =
      object.passengers?.map((e) => UnitInfo.fromPartial(e)) || [];
    message.slotsAvailable = object.slotsAvailable ?? 0;
    return message;
  },
};

function createBaseBuildItem(): BuildItem {
  return { abilityId: 0, buildProgress: 0 };
}

export const BuildItem = {
  encode(
    message: BuildItem,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).uint32(message.abilityId);
    }
    if (message.buildProgress !== 0) {
      writer.uint32(21).float(message.buildProgress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BuildItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBuildItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.uint32();
          break;
        case 2:
          message.buildProgress = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BuildItem {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
      buildProgress: isSet(object.buildProgress)
        ? Number(object.buildProgress)
        : 0,
    };
  },

  toJSON(message: BuildItem): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    message.buildProgress !== undefined &&
      (obj.buildProgress = message.buildProgress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BuildItem>, I>>(
    object: I,
  ): BuildItem {
    const message = createBaseBuildItem();
    message.abilityId = object.abilityId ?? 0;
    message.buildProgress = object.buildProgress ?? 0;
    return message;
  },
};

function createBaseProductionPanel(): ProductionPanel {
  return { unit: undefined, buildQueue: [], productionQueue: [] };
}

export const ProductionPanel = {
  encode(
    message: ProductionPanel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unit !== undefined) {
      UnitInfo.encode(message.unit, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.buildQueue) {
      UnitInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.productionQueue) {
      BuildItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ProductionPanel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProductionPanel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unit = UnitInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.buildQueue.push(UnitInfo.decode(reader, reader.uint32()));
          break;
        case 3:
          message.productionQueue.push(
            BuildItem.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ProductionPanel {
    return {
      unit: isSet(object.unit) ? UnitInfo.fromJSON(object.unit) : undefined,
      buildQueue: Array.isArray(object?.buildQueue)
        ? object.buildQueue.map((e: any) => UnitInfo.fromJSON(e))
        : [],
      productionQueue: Array.isArray(object?.productionQueue)
        ? object.productionQueue.map((e: any) => BuildItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ProductionPanel): unknown {
    const obj: any = {};
    message.unit !== undefined &&
      (obj.unit = message.unit ? UnitInfo.toJSON(message.unit) : undefined);
    if (message.buildQueue) {
      obj.buildQueue = message.buildQueue.map((e) =>
        e ? UnitInfo.toJSON(e) : undefined,
      );
    } else {
      obj.buildQueue = [];
    }
    if (message.productionQueue) {
      obj.productionQueue = message.productionQueue.map((e) =>
        e ? BuildItem.toJSON(e) : undefined,
      );
    } else {
      obj.productionQueue = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ProductionPanel>, I>>(
    object: I,
  ): ProductionPanel {
    const message = createBaseProductionPanel();
    message.unit =
      object.unit !== undefined && object.unit !== null
        ? UnitInfo.fromPartial(object.unit)
        : undefined;
    message.buildQueue =
      object.buildQueue?.map((e) => UnitInfo.fromPartial(e)) || [];
    message.productionQueue =
      object.productionQueue?.map((e) => BuildItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseActionUI(): ActionUI {
  return {
    controlGroup: undefined,
    selectArmy: undefined,
    selectWarpGates: undefined,
    selectLarva: undefined,
    selectIdleWorker: undefined,
    multiPanel: undefined,
    cargoPanel: undefined,
    productionPanel: undefined,
    toggleAutocast: undefined,
  };
}

export const ActionUI = {
  encode(
    message: ActionUI,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.controlGroup !== undefined) {
      ActionControlGroup.encode(
        message.controlGroup,
        writer.uint32(10).fork(),
      ).ldelim();
    }
    if (message.selectArmy !== undefined) {
      ActionSelectArmy.encode(
        message.selectArmy,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.selectWarpGates !== undefined) {
      ActionSelectWarpGates.encode(
        message.selectWarpGates,
        writer.uint32(26).fork(),
      ).ldelim();
    }
    if (message.selectLarva !== undefined) {
      ActionSelectLarva.encode(
        message.selectLarva,
        writer.uint32(34).fork(),
      ).ldelim();
    }
    if (message.selectIdleWorker !== undefined) {
      ActionSelectIdleWorker.encode(
        message.selectIdleWorker,
        writer.uint32(42).fork(),
      ).ldelim();
    }
    if (message.multiPanel !== undefined) {
      ActionMultiPanel.encode(
        message.multiPanel,
        writer.uint32(50).fork(),
      ).ldelim();
    }
    if (message.cargoPanel !== undefined) {
      ActionCargoPanelUnload.encode(
        message.cargoPanel,
        writer.uint32(58).fork(),
      ).ldelim();
    }
    if (message.productionPanel !== undefined) {
      ActionProductionPanelRemoveFromQueue.encode(
        message.productionPanel,
        writer.uint32(66).fork(),
      ).ldelim();
    }
    if (message.toggleAutocast !== undefined) {
      ActionToggleAutocast.encode(
        message.toggleAutocast,
        writer.uint32(74).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionUI {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionUI();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.controlGroup = ActionControlGroup.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 2:
          message.selectArmy = ActionSelectArmy.decode(reader, reader.uint32());
          break;
        case 3:
          message.selectWarpGates = ActionSelectWarpGates.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 4:
          message.selectLarva = ActionSelectLarva.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 5:
          message.selectIdleWorker = ActionSelectIdleWorker.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 6:
          message.multiPanel = ActionMultiPanel.decode(reader, reader.uint32());
          break;
        case 7:
          message.cargoPanel = ActionCargoPanelUnload.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 8:
          message.productionPanel = ActionProductionPanelRemoveFromQueue.decode(
            reader,
            reader.uint32(),
          );
          break;
        case 9:
          message.toggleAutocast = ActionToggleAutocast.decode(
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

  fromJSON(object: any): ActionUI {
    return {
      controlGroup: isSet(object.controlGroup)
        ? ActionControlGroup.fromJSON(object.controlGroup)
        : undefined,
      selectArmy: isSet(object.selectArmy)
        ? ActionSelectArmy.fromJSON(object.selectArmy)
        : undefined,
      selectWarpGates: isSet(object.selectWarpGates)
        ? ActionSelectWarpGates.fromJSON(object.selectWarpGates)
        : undefined,
      selectLarva: isSet(object.selectLarva)
        ? ActionSelectLarva.fromJSON(object.selectLarva)
        : undefined,
      selectIdleWorker: isSet(object.selectIdleWorker)
        ? ActionSelectIdleWorker.fromJSON(object.selectIdleWorker)
        : undefined,
      multiPanel: isSet(object.multiPanel)
        ? ActionMultiPanel.fromJSON(object.multiPanel)
        : undefined,
      cargoPanel: isSet(object.cargoPanel)
        ? ActionCargoPanelUnload.fromJSON(object.cargoPanel)
        : undefined,
      productionPanel: isSet(object.productionPanel)
        ? ActionProductionPanelRemoveFromQueue.fromJSON(object.productionPanel)
        : undefined,
      toggleAutocast: isSet(object.toggleAutocast)
        ? ActionToggleAutocast.fromJSON(object.toggleAutocast)
        : undefined,
    };
  },

  toJSON(message: ActionUI): unknown {
    const obj: any = {};
    message.controlGroup !== undefined &&
      (obj.controlGroup = message.controlGroup
        ? ActionControlGroup.toJSON(message.controlGroup)
        : undefined);
    message.selectArmy !== undefined &&
      (obj.selectArmy = message.selectArmy
        ? ActionSelectArmy.toJSON(message.selectArmy)
        : undefined);
    message.selectWarpGates !== undefined &&
      (obj.selectWarpGates = message.selectWarpGates
        ? ActionSelectWarpGates.toJSON(message.selectWarpGates)
        : undefined);
    message.selectLarva !== undefined &&
      (obj.selectLarva = message.selectLarva
        ? ActionSelectLarva.toJSON(message.selectLarva)
        : undefined);
    message.selectIdleWorker !== undefined &&
      (obj.selectIdleWorker = message.selectIdleWorker
        ? ActionSelectIdleWorker.toJSON(message.selectIdleWorker)
        : undefined);
    message.multiPanel !== undefined &&
      (obj.multiPanel = message.multiPanel
        ? ActionMultiPanel.toJSON(message.multiPanel)
        : undefined);
    message.cargoPanel !== undefined &&
      (obj.cargoPanel = message.cargoPanel
        ? ActionCargoPanelUnload.toJSON(message.cargoPanel)
        : undefined);
    message.productionPanel !== undefined &&
      (obj.productionPanel = message.productionPanel
        ? ActionProductionPanelRemoveFromQueue.toJSON(message.productionPanel)
        : undefined);
    message.toggleAutocast !== undefined &&
      (obj.toggleAutocast = message.toggleAutocast
        ? ActionToggleAutocast.toJSON(message.toggleAutocast)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionUI>, I>>(object: I): ActionUI {
    const message = createBaseActionUI();
    message.controlGroup =
      object.controlGroup !== undefined && object.controlGroup !== null
        ? ActionControlGroup.fromPartial(object.controlGroup)
        : undefined;
    message.selectArmy =
      object.selectArmy !== undefined && object.selectArmy !== null
        ? ActionSelectArmy.fromPartial(object.selectArmy)
        : undefined;
    message.selectWarpGates =
      object.selectWarpGates !== undefined && object.selectWarpGates !== null
        ? ActionSelectWarpGates.fromPartial(object.selectWarpGates)
        : undefined;
    message.selectLarva =
      object.selectLarva !== undefined && object.selectLarva !== null
        ? ActionSelectLarva.fromPartial(object.selectLarva)
        : undefined;
    message.selectIdleWorker =
      object.selectIdleWorker !== undefined && object.selectIdleWorker !== null
        ? ActionSelectIdleWorker.fromPartial(object.selectIdleWorker)
        : undefined;
    message.multiPanel =
      object.multiPanel !== undefined && object.multiPanel !== null
        ? ActionMultiPanel.fromPartial(object.multiPanel)
        : undefined;
    message.cargoPanel =
      object.cargoPanel !== undefined && object.cargoPanel !== null
        ? ActionCargoPanelUnload.fromPartial(object.cargoPanel)
        : undefined;
    message.productionPanel =
      object.productionPanel !== undefined && object.productionPanel !== null
        ? ActionProductionPanelRemoveFromQueue.fromPartial(
            object.productionPanel,
          )
        : undefined;
    message.toggleAutocast =
      object.toggleAutocast !== undefined && object.toggleAutocast !== null
        ? ActionToggleAutocast.fromPartial(object.toggleAutocast)
        : undefined;
    return message;
  },
};

function createBaseActionControlGroup(): ActionControlGroup {
  return { action: 1, controlGroupIndex: 0 };
}

export const ActionControlGroup = {
  encode(
    message: ActionControlGroup,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.action !== 1) {
      writer.uint32(8).int32(message.action);
    }
    if (message.controlGroupIndex !== 0) {
      writer.uint32(16).uint32(message.controlGroupIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionControlGroup {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionControlGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.action = reader.int32() as any;
          break;
        case 2:
          message.controlGroupIndex = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionControlGroup {
    return {
      action: isSet(object.action)
        ? actionControlGroup_ControlGroupActionFromJSON(object.action)
        : 1,
      controlGroupIndex: isSet(object.controlGroupIndex)
        ? Number(object.controlGroupIndex)
        : 0,
    };
  },

  toJSON(message: ActionControlGroup): unknown {
    const obj: any = {};
    message.action !== undefined &&
      (obj.action = actionControlGroup_ControlGroupActionToJSON(
        message.action,
      ));
    message.controlGroupIndex !== undefined &&
      (obj.controlGroupIndex = Math.round(message.controlGroupIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionControlGroup>, I>>(
    object: I,
  ): ActionControlGroup {
    const message = createBaseActionControlGroup();
    message.action = object.action ?? 1;
    message.controlGroupIndex = object.controlGroupIndex ?? 0;
    return message;
  },
};

function createBaseActionSelectArmy(): ActionSelectArmy {
  return { selectionAdd: false };
}

export const ActionSelectArmy = {
  encode(
    message: ActionSelectArmy,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selectionAdd === true) {
      writer.uint32(8).bool(message.selectionAdd);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionSelectArmy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSelectArmy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectionAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSelectArmy {
    return {
      selectionAdd: isSet(object.selectionAdd)
        ? Boolean(object.selectionAdd)
        : false,
    };
  },

  toJSON(message: ActionSelectArmy): unknown {
    const obj: any = {};
    message.selectionAdd !== undefined &&
      (obj.selectionAdd = message.selectionAdd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSelectArmy>, I>>(
    object: I,
  ): ActionSelectArmy {
    const message = createBaseActionSelectArmy();
    message.selectionAdd = object.selectionAdd ?? false;
    return message;
  },
};

function createBaseActionSelectWarpGates(): ActionSelectWarpGates {
  return { selectionAdd: false };
}

export const ActionSelectWarpGates = {
  encode(
    message: ActionSelectWarpGates,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.selectionAdd === true) {
      writer.uint32(8).bool(message.selectionAdd);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionSelectWarpGates {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSelectWarpGates();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.selectionAdd = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSelectWarpGates {
    return {
      selectionAdd: isSet(object.selectionAdd)
        ? Boolean(object.selectionAdd)
        : false,
    };
  },

  toJSON(message: ActionSelectWarpGates): unknown {
    const obj: any = {};
    message.selectionAdd !== undefined &&
      (obj.selectionAdd = message.selectionAdd);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSelectWarpGates>, I>>(
    object: I,
  ): ActionSelectWarpGates {
    const message = createBaseActionSelectWarpGates();
    message.selectionAdd = object.selectionAdd ?? false;
    return message;
  },
};

function createBaseActionSelectLarva(): ActionSelectLarva {
  return {};
}

export const ActionSelectLarva = {
  encode(
    _: ActionSelectLarva,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionSelectLarva {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSelectLarva();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): ActionSelectLarva {
    return {};
  },

  toJSON(_: ActionSelectLarva): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSelectLarva>, I>>(
    _: I,
  ): ActionSelectLarva {
    const message = createBaseActionSelectLarva();
    return message;
  },
};

function createBaseActionSelectIdleWorker(): ActionSelectIdleWorker {
  return { type: 1 };
}

export const ActionSelectIdleWorker = {
  encode(
    message: ActionSelectIdleWorker,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionSelectIdleWorker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionSelectIdleWorker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionSelectIdleWorker {
    return {
      type: isSet(object.type)
        ? actionSelectIdleWorker_TypeFromJSON(object.type)
        : 1,
    };
  },

  toJSON(message: ActionSelectIdleWorker): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = actionSelectIdleWorker_TypeToJSON(message.type));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionSelectIdleWorker>, I>>(
    object: I,
  ): ActionSelectIdleWorker {
    const message = createBaseActionSelectIdleWorker();
    message.type = object.type ?? 1;
    return message;
  },
};

function createBaseActionMultiPanel(): ActionMultiPanel {
  return { type: 1, unitIndex: 0 };
}

export const ActionMultiPanel = {
  encode(
    message: ActionMultiPanel,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.type !== 1) {
      writer.uint32(8).int32(message.type);
    }
    if (message.unitIndex !== 0) {
      writer.uint32(16).int32(message.unitIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ActionMultiPanel {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionMultiPanel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.unitIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionMultiPanel {
    return {
      type: isSet(object.type) ? actionMultiPanel_TypeFromJSON(object.type) : 1,
      unitIndex: isSet(object.unitIndex) ? Number(object.unitIndex) : 0,
    };
  },

  toJSON(message: ActionMultiPanel): unknown {
    const obj: any = {};
    message.type !== undefined &&
      (obj.type = actionMultiPanel_TypeToJSON(message.type));
    message.unitIndex !== undefined &&
      (obj.unitIndex = Math.round(message.unitIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionMultiPanel>, I>>(
    object: I,
  ): ActionMultiPanel {
    const message = createBaseActionMultiPanel();
    message.type = object.type ?? 1;
    message.unitIndex = object.unitIndex ?? 0;
    return message;
  },
};

function createBaseActionCargoPanelUnload(): ActionCargoPanelUnload {
  return { unitIndex: 0 };
}

export const ActionCargoPanelUnload = {
  encode(
    message: ActionCargoPanelUnload,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitIndex !== 0) {
      writer.uint32(8).int32(message.unitIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionCargoPanelUnload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionCargoPanelUnload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionCargoPanelUnload {
    return {
      unitIndex: isSet(object.unitIndex) ? Number(object.unitIndex) : 0,
    };
  },

  toJSON(message: ActionCargoPanelUnload): unknown {
    const obj: any = {};
    message.unitIndex !== undefined &&
      (obj.unitIndex = Math.round(message.unitIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionCargoPanelUnload>, I>>(
    object: I,
  ): ActionCargoPanelUnload {
    const message = createBaseActionCargoPanelUnload();
    message.unitIndex = object.unitIndex ?? 0;
    return message;
  },
};

function createBaseActionProductionPanelRemoveFromQueue(): ActionProductionPanelRemoveFromQueue {
  return { unitIndex: 0 };
}

export const ActionProductionPanelRemoveFromQueue = {
  encode(
    message: ActionProductionPanelRemoveFromQueue,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.unitIndex !== 0) {
      writer.uint32(8).int32(message.unitIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionProductionPanelRemoveFromQueue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionProductionPanelRemoveFromQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unitIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionProductionPanelRemoveFromQueue {
    return {
      unitIndex: isSet(object.unitIndex) ? Number(object.unitIndex) : 0,
    };
  },

  toJSON(message: ActionProductionPanelRemoveFromQueue): unknown {
    const obj: any = {};
    message.unitIndex !== undefined &&
      (obj.unitIndex = Math.round(message.unitIndex));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ActionProductionPanelRemoveFromQueue>, I>,
  >(object: I): ActionProductionPanelRemoveFromQueue {
    const message = createBaseActionProductionPanelRemoveFromQueue();
    message.unitIndex = object.unitIndex ?? 0;
    return message;
  },
};

function createBaseActionToggleAutocast(): ActionToggleAutocast {
  return { abilityId: 0 };
}

export const ActionToggleAutocast = {
  encode(
    message: ActionToggleAutocast,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.abilityId !== 0) {
      writer.uint32(8).int32(message.abilityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): ActionToggleAutocast {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActionToggleAutocast();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityId = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActionToggleAutocast {
    return {
      abilityId: isSet(object.abilityId) ? Number(object.abilityId) : 0,
    };
  },

  toJSON(message: ActionToggleAutocast): unknown {
    const obj: any = {};
    message.abilityId !== undefined &&
      (obj.abilityId = Math.round(message.abilityId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActionToggleAutocast>, I>>(
    object: I,
  ): ActionToggleAutocast {
    const message = createBaseActionToggleAutocast();
    message.abilityId = object.abilityId ?? 0;
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
