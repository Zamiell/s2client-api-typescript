This directory contains the files from: https://github.com/Blizzard/s2client-proto/tree/master/s2clientprotocol

The "sc2api.proto" file had to be moved to the parent directory in order for import path resolution to work properly.

e.g.

```proto
import "s2clientprotocol/common.proto";
```

We use the [ts-proto](https://github.com/stephenh/ts-proto) tool to compile the official SC2 API protocol (i.e. the ".proto" files) into TypeScript. See "generate.bat" for documentation on how this was done.
