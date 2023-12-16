#!/bin/bash

set -euo pipefail # Exit on errors and undefined variables.

# Get the directory of this script:
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

REPO_ROOT="$DIR/.."
cd "$REPO_ROOT"

# "ts_nocheck" adds a "// @ts-nocheck" line to the top of the file, which is necessary to prevent
# errors with "override".
# "eslint_disable" adds a "/* eslint-disable */" line to the top of the file.
npx protoc --ts_opt "ts_nocheck" --ts_opt "eslint_disable" --ts_out "src/proto" --proto_path "proto" "proto/sc2api.proto" "proto/s2clientprotocol/*.proto"
npx prettier --write "src/proto"
