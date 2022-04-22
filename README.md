# s2client-proto-typescript

This is a version of the StarCraft 2 API for [TypeScript](https://www.typescriptlang.org/). It uses [protobuf-ts](https://github.com/timostamm/protobuf-ts) to convert [the official proto files](https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol) to TypeScript interfaces, enums, and serialization methods.

TODO: explain the difference between `s2client-proto-typescript` and `s2client-api-typescript`.

This project is similar to [@node-sc2/proto](https://github.com/node-sc2/proto), which is written in JavaScript and uses `pbjs` to convert the official proto files to JSON (instead of TypeScript).

<br>

## Usage

This library provides two main things:

### 1) The `SC2ProtocolClient` Class

This is an abstraction that can be used to communicate with StarCraft 2.

```ts
import { SC2ProtocolClient } from "s2client-proto-typescript";

async function main() {
  const client = new SC2ProtocolClient();
  await client.connect(); // Establishes a WebSocket connection with the game

  const pingResponse = await client.ping();
  console.log(pingResponse);
}
```

### 2) StarCraft 2 API Interfaces and Enums

The [official StarCraft 2 protocol files](https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol) contain the interfaces and enums that are used in its API. These are automatically converted to TypeScript with the [protobuf-ts](https://github.com/timostamm/protobuf-ts) tool and are exported from this library your use.

```ts
import { Race } from "s2client-proto-typescript";

const MY_RACE = Race.Protoss;
```
