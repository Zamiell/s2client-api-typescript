rem First, download protoc:
rem https://github.com/protocolbuffers/protobuf/releases
rem (i.e. "protoc-#.#.#-win64.zip")

rem We use "esModuleInterop=true" since we get a compiler error otherwise.
rem We do not use the "oneof=unions" option. Even though it is recommended by the authors of ts-proto, it messes up the interface. (TypeScript complains that the "$case" property is missing.)
set PROTOC_PATH="D:\Apps\Misc\protoc-3.20.0-win64\bin\protoc.exe"
"%PROTOC_PATH%" --plugin="..\node_modules\.bin\protoc-gen-ts_proto" --ts_proto_opt="esModuleInterop=true" --ts_proto_out="..\src\proto" "sc2api.proto"
