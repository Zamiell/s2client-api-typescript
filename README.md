# s2client-api-typescript

[![npm version](https://img.shields.io/npm/v/s2client-api-typescript.svg)](https://www.npmjs.com/package/s2client-api-typescript)

<!-- markdownlint-disable MD033 -->

This is a version of the StarCraft 2 API for [TypeScript](https://www.typescriptlang.org/). It uses [protobuf-ts](https://github.com/timostamm/protobuf-ts) to convert [the official protocol files](https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol) to TypeScript interfaces, enums, and serialization methods.

This project is similar to [@node-sc2/core](https://github.com/node-sc2/core) and [@node-sc2/proto](https://github.com/node-sc2/proto), which are written in JavaScript and use `pbjs` to convert the official proto files to JSON (instead of TypeScript).

<br>

## Usage

This library provides two main things:

### 1) The `StarCraft2Client` Class

This is an abstraction that can be used to communicate with StarCraft 2.

```ts
import { StarCraft2Client } from "s2client-api-typescript";

async function main() {
  const client = new StarCraft2Client();
  await client.connect(); // Establishes a WebSocket connection with the game.

  const pingResponse = await client.ping();
  console.log(pingResponse);
}
```

### 2) StarCraft 2 API Interfaces and Enums

The [official StarCraft 2 protocol files](https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol) contain the interfaces and enums that are used in its API. These are automatically converted to TypeScript with the [protobuf-ts](https://github.com/timostamm/protobuf-ts) tool and are exported from this library your use.

```ts
import { Race } from "s2client-api-typescript";

const MY_RACE = Race.Protoss;
```

<br>

## Docs

See the [automatically generated TypeDoc documentation](https://zamiell.github.io/s2client-api-typescript/modules.html) for every API interface/enum that this library provides.
