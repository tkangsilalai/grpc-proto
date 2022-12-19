# syntax=docker/dockerfile:1

FROM golang:1.19.3

WORKDIR /go/app

RUN apt-get update
RUN apt install -y protobuf-compiler

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest