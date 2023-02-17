import { StarCraft2Client } from "../classes/StarCraft2Client";
import { TSUnit } from "../classes/TSUnit";
import { Observation } from "../index";

const unitsMap = new Map<bigint, TSUnit>();

export async function startBot(client: StarCraft2Client): Promise<void> {
  // We will only receive this once the map is loaded and the countdown begins.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const gameInfo = await client.gameInfo();
  // TODO: Record any relevant game info.

  await mainLoop(client);
}

async function mainLoop(client: StarCraft2Client) {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, no-constant-condition
  while (true) {
    const observation = await client.observation();
    recordObservation(observation.observation);

    giveOrdersToUnits();

    await client.step();
  }
}

function recordObservation(observation: Observation | undefined) {
  if (observation === undefined) {
    return;
  }

  const { rawData } = observation;
  if (rawData === undefined) {
    return;
  }

  const { units } = rawData;
  for (const unit of units) {
    const { tag } = unit;
    if (tag === undefined) {
      throw new Error('Failed to get the "tag" property of a unit.');
    }

    const { alliance } = unit;
    if (alliance === undefined) {
      throw new Error('Failed to get the "alliance" property of a unit.');
    }

    const { pos } = unit;
    if (pos === undefined) {
      throw new Error('Failed to get the "pos" property of a unit.');
    }

    const { unitType } = unit;
    if (unitType === undefined) {
      throw new Error('Failed to get the "unitType" property of a unit.');
    }

    const tsUnit = {
      alliance,
      pos,
      unitType,
    } as const satisfies TSUnit;
    unitsMap.set(tag, tsUnit);
  }
}

function giveOrdersToUnits() {
  giveOrdersToWorkers();
}

function giveOrdersToWorkers() {
  const workers = getWorkers();
  console.log(workers);
}

function getWorkers() {}
