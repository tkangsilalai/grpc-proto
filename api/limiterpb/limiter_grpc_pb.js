// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var limiter_pb = require('./limiter_pb.js');

function serialize_limiter_LimitRequest(arg) {
  if (!(arg instanceof limiter_pb.LimitRequest)) {
    throw new Error('Expected argument of type limiter.LimitRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_limiter_LimitRequest(buffer_arg) {
  return limiter_pb.LimitRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_limiter_LimitResponse(arg) {
  if (!(arg instanceof limiter_pb.LimitResponse)) {
    throw new Error('Expected argument of type limiter.LimitResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_limiter_LimitResponse(buffer_arg) {
  return limiter_pb.LimitResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_limiter_LimitStatusRequest(arg) {
  if (!(arg instanceof limiter_pb.LimitStatusRequest)) {
    throw new Error('Expected argument of type limiter.LimitStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_limiter_LimitStatusRequest(buffer_arg) {
  return limiter_pb.LimitStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_limiter_LimitStatusResponse(arg) {
  if (!(arg instanceof limiter_pb.LimitStatusResponse)) {
    throw new Error('Expected argument of type limiter.LimitStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_limiter_LimitStatusResponse(buffer_arg) {
  return limiter_pb.LimitStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var LimiterService = exports.LimiterService = {
  limit: {
    path: '/limiter.Limiter/Limit',
    requestStream: false,
    responseStream: false,
    requestType: limiter_pb.LimitRequest,
    responseType: limiter_pb.LimitResponse,
    requestSerialize: serialize_limiter_LimitRequest,
    requestDeserialize: deserialize_limiter_LimitRequest,
    responseSerialize: serialize_limiter_LimitResponse,
    responseDeserialize: deserialize_limiter_LimitResponse,
  },
  limitStatus: {
    path: '/limiter.Limiter/LimitStatus',
    requestStream: false,
    responseStream: false,
    requestType: limiter_pb.LimitStatusRequest,
    responseType: limiter_pb.LimitStatusResponse,
    requestSerialize: serialize_limiter_LimitStatusRequest,
    requestDeserialize: deserialize_limiter_LimitStatusRequest,
    responseSerialize: serialize_limiter_LimitStatusResponse,
    responseDeserialize: deserialize_limiter_LimitStatusResponse,
  },
};

exports.LimiterClient = grpc.makeGenericClientConstructor(LimiterService);
