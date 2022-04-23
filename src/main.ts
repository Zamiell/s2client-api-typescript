import sourceMapSupport from "source-map-support";
import { SC2Client } from "./classes/SC2Client";
import { BOT_RACE, DEFAULT_MAP_NAME } from "./constants";
import { launchStarCraft2 } from "./launch";
import { getMapPath } from "./map";
import { Race } from "./proto/s2clientprotocol/common";
import { Difficulty, PlayerType, Status } from "./proto/sc2api";

main().catch((err) => {
  console.error("Failed to run the program:", err);
});

async function main() {
  sourceMapSupport.install();

  await launchStarCraft2();

  const client = new SC2Client();
  const status = await client.connect();

  console.log(`Starting status: ${Status[status]}`);
  if (status === Status.launched) {
    await createNewGame(client);
    await joinGame(client);
  } else if (status === Status.init_game) {
    await joinGame(client);
  }
}

async function createNewGame(client: SC2Client) {
  await client.createGame({
    map: {
      oneofKind: "localMap",
      localMap: {
        mapPath: getMapPath(DEFAULT_MAP_NAME),
      },
    },
    playerSetup: [
      {
        type: PlayerType.Participant,
        race: BOT_RACE,
        playerName: "Zamiel",
      },
      {
        type: PlayerType.Computer,
        race: Race.Random,
        difficulty: Difficulty.Medium,
        playerName: "Computer",
      },
    ],
  });
}

async function joinGame(client: SC2Client) {
  await client.joinGame({
    participation: {
      oneofKind: "race",
      race: BOT_RACE,
    },
    clientPorts: [],
  });
}
