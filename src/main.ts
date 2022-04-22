import sourceMapSupport from "source-map-support";
import { SC2ProtocolClient } from "./classes/SC2ProtocolClient";
import { DEFAULT_MAP_NAME } from "./constants";
import { launchStarCraft2 } from "./launch";
import { getMapPath } from "./map";
import { Race } from "./proto/s2clientprotocol/common";
import { AIBuild, Difficulty, PlayerType } from "./proto/sc2api";

main().catch((err) => {
  console.error("Failed to run the program:", err);
});

async function main() {
  sourceMapSupport.install();

  await launchStarCraft2();

  const client = new SC2ProtocolClient();
  await client.connect();

  const response = await client.createGame({
    map: {
      oneofKind: "localMap",
      localMap: {
        mapPath: getMapPath(DEFAULT_MAP_NAME),
      },
    },
    playerSetup: [
      {
        type: PlayerType.Participant,
        race: Race.Protoss,
        playerName: "Zamiel",
      },
      {
        type: PlayerType.Computer,
        race: Race.Random,
        difficulty: Difficulty.Medium,
        playerName: "Computer",
        aiBuild: AIBuild.RandomBuild,
      },
    ],
    disableFog: false,
    randomSeed: 0,
    realtime: false,
  });
  console.log(response);
}
