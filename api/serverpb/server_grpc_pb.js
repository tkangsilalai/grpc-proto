// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var server_pb = require('./server_pb.js');

function serialize_server_CheckRequest(arg) {
  if (!(arg instanceof server_pb.CheckRequest)) {
    throw new Error('Expected argument of type server.CheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_CheckRequest(buffer_arg) {
  return server_pb.CheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_server_CheckResponse(arg) {
  if (!(arg instanceof server_pb.CheckResponse)) {
    throw new Error('Expected argument of type server.CheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_server_CheckResponse(buffer_arg) {
  return server_pb.CheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServerService = exports.ServerService = {
  check: {
    path: '/server.Server/Check',
    requestStream: false,
    responseStream: false,
    requestType: server_pb.CheckRequest,
    responseType: server_pb.CheckResponse,
    requestSerialize: serialize_server_CheckRequest,
    requestDeserialize: deserialize_server_CheckRequest,
    responseSerialize: serialize_server_CheckResponse,
    responseDeserialize: deserialize_server_CheckResponse,
  },
};

exports.ServerClient = grpc.makeGenericClientConstructor(ServerService);
