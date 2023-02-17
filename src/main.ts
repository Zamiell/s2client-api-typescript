import sourceMapSupport from "source-map-support";
import { startBot } from "./bot/bot";
import { StarCraft2Client } from "./classes/StarCraft2Client";
import { BOT_RACE, DEFAULT_MAP_NAME, GAME_NAME } from "./constants";
import { launchStarCraft2 } from "./launch";
import { getMapPath } from "./map";
import { Race } from "./proto/s2clientprotocol/common";
import { Difficulty, PlayerType, Status } from "./proto/sc2api";

type Activity = "play" | "replay";
const CURRENT_ACTIVITY: Activity = "play";

main().catch((err) => {
  console.error("Failed to run the program:", err);
});

async function main() {
  sourceMapSupport.install();

  await launchStarCraft2();

  const client = new StarCraft2Client(true);
  const status = await client.connect();

  console.log(`Starting ${GAME_NAME} client status: ${Status[status]}`);
  switch (status) {
    case Status.launched:
    case Status.ended: {
      await startActivity(client, true);
      break;
    }

    case Status.init_game: {
      await startActivity(client, false);
      break;
    }

    case Status.in_game: {
      await client.leaveGame();
      await startActivity(client, true);
      break;
    }

    default: {
      throw new Error(`Unknown status: ${Status[status]}`);
    }
  }
}

async function startActivity(client: StarCraft2Client, createGame: boolean) {
  switch (CURRENT_ACTIVITY) {
    case "play": {
      if (createGame) {
        await createNewGame(client);
      }
      await joinGame(client);
      await startBot(client);
      break;
    }

    case "replay": {
      await startReplay(client);
      break;
    }
  }
}

async function createNewGame(client: StarCraft2Client) {
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
    /// realtime: true, // We want to manually step.
  });
}

async function joinGame(client: StarCraft2Client) {
  await client.joinGame({
    participation: {
      oneofKind: "race",
      race: BOT_RACE,
    },
    clientPorts: [],
    options: {
      raw: true,
    },
  });
}

/** Does not seem to work; getting error "MissingOptions". */
async function startReplay(client: StarCraft2Client) {
  await client.startReplay({
    replay: {
      oneofKind: "replayPath",
      replayPath: REPLAY_PATH,
    },
    options: {
      raw: true,
    },
  });
}

const REPLAY_PATH =
  "C:\\Users\\james\\Documents\\StarCraft II\\Replays\\Multiplayer\\Berlingrad AIE.SC2Replay";
