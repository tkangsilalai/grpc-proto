# grpc-proto

    protoc ./schema/*.proto --go_out=./api/ --go-grpc_out=./api/

    cd schema
    grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../api/limiterpb/ --grpc_out=grpc_js:../api/limiterpb/ limiter.proto
    grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../api/serverpb/ --grpc_out=grpc_js:../api/serverpb/ server.proto
    