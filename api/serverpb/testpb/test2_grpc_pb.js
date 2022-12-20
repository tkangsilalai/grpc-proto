// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var test2_pb = require('./test2_pb.js');

function serialize_test_TestRequest(arg) {
  if (!(arg instanceof test2_pb.TestRequest)) {
    throw new Error('Expected argument of type test.TestRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_TestRequest(buffer_arg) {
  return test2_pb.TestRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_test_TestResponse(arg) {
  if (!(arg instanceof test2_pb.TestResponse)) {
    throw new Error('Expected argument of type test.TestResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_test_TestResponse(buffer_arg) {
  return test2_pb.TestResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TestService = exports.TestService = {
  test: {
    path: '/test.Test/Test',
    requestStream: false,
    responseStream: false,
    requestType: test2_pb.TestRequest,
    responseType: test2_pb.TestResponse,
    requestSerialize: serialize_test_TestRequest,
    requestDeserialize: deserialize_test_TestRequest,
    responseSerialize: serialize_test_TestResponse,
    responseDeserialize: deserialize_test_TestResponse,
  },
};

exports.TestClient = grpc.makeGenericClientConstructor(TestService);
