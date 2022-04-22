#!/bin/bash

set -e # Exit on any errors

# Get the directory of this script
# https://stackoverflow.com/questions/59895/getting-the-source-directory-of-a-bash-script-from-within
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

REPO_ROOT="$DIR/.."
cd "$REPO_ROOT"
npx protoc --ts_out "src/proto" --proto_path "proto" "proto/sc2api.proto" "proto/s2clientprotocol/*.proto"
