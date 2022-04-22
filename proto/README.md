This directory contains the [official StarCraft 2 protocol files](https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol).

The "sc2api.proto" file had to be moved to the parent directory in order for import path resolution to work properly.

e.g.

```proto
import "s2clientprotocol/common.proto";
```

The [protobuf-ts](https://github.com/timostamm/protobuf-ts) tool was used to compile the official SC2 API protocol (i.e. the ".proto" files) into TypeScript. (Before this, I tried using [ts-proto](https://github.com/stephenh/ts-proto) and [ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen), but neither produced working code, which seemed to have something to do with confusion about the "optional" keyword.)

See "compile_proto.sh" for the specific invocation used.
