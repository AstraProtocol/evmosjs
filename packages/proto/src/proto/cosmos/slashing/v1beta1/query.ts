// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/slashing/v1beta1/query.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../base/query/v1beta1/pagination";
import * as dependency_4 from "./slashing";
import * as pb_1 from "google-protobuf";
export namespace cosmos.slashing.v1beta1 {
    export class QueryParamsRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new QueryParamsRequest({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsRequest {
            return QueryParamsRequest.deserialize(bytes);
        }
    }
    export class QueryParamsResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            params?: dependency_4.cosmos.slashing.v1beta1.Params;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("params" in data && data.params != undefined) {
                    this.params = data.params;
                }
            }
        }
        get params() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.slashing.v1beta1.Params, 1) as dependency_4.cosmos.slashing.v1beta1.Params;
        }
        set params(value: dependency_4.cosmos.slashing.v1beta1.Params) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            params?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.Params.prototype.toObject>;
        }) {
            const message = new QueryParamsResponse({});
            if (data.params != null) {
                message.params = dependency_4.cosmos.slashing.v1beta1.Params.fromObject(data.params);
            }
            return message;
        }
        toObject() {
            const data: {
                params?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.Params.prototype.toObject>;
            } = {};
            if (this.params != null) {
                data.params = this.params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.params !== undefined)
                writer.writeMessage(1, this.params, () => this.params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QueryParamsResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QueryParamsResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.params, () => message.params = dependency_4.cosmos.slashing.v1beta1.Params.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QueryParamsResponse {
            return QueryParamsResponse.deserialize(bytes);
        }
    }
    export class QuerySigningInfoRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            cons_address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("cons_address" in data && data.cons_address != undefined) {
                    this.cons_address = data.cons_address;
                }
            }
        }
        get cons_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set cons_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            cons_address?: string;
        }) {
            const message = new QuerySigningInfoRequest({});
            if (data.cons_address != null) {
                message.cons_address = data.cons_address;
            }
            return message;
        }
        toObject() {
            const data: {
                cons_address?: string;
            } = {};
            if (this.cons_address != null) {
                data.cons_address = this.cons_address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.cons_address === "string" && this.cons_address.length)
                writer.writeString(1, this.cons_address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfoRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySigningInfoRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.cons_address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfoRequest {
            return QuerySigningInfoRequest.deserialize(bytes);
        }
    }
    export class QuerySigningInfoResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            val_signing_info?: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("val_signing_info" in data && data.val_signing_info != undefined) {
                    this.val_signing_info = data.val_signing_info;
                }
            }
        }
        get val_signing_info() {
            return pb_1.Message.getWrapperField(this, dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo, 1) as dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo;
        }
        set val_signing_info(value: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            val_signing_info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
        }) {
            const message = new QuerySigningInfoResponse({});
            if (data.val_signing_info != null) {
                message.val_signing_info = dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.fromObject(data.val_signing_info);
            }
            return message;
        }
        toObject() {
            const data: {
                val_signing_info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>;
            } = {};
            if (this.val_signing_info != null) {
                data.val_signing_info = this.val_signing_info.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.val_signing_info !== undefined)
                writer.writeMessage(1, this.val_signing_info, () => this.val_signing_info.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfoResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySigningInfoResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.val_signing_info, () => message.val_signing_info = dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfoResponse {
            return QuerySigningInfoResponse.deserialize(bytes);
        }
    }
    export class QuerySigningInfosRequest extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageRequest;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageRequest, 1) as dependency_1.cosmos.base.query.v1beta1.PageRequest;
        }
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageRequest) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        static fromObject(data: {
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
        }) {
            const message = new QuerySigningInfosRequest({});
            if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageRequest.prototype.toObject>;
            } = {};
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.pagination !== undefined)
                writer.writeMessage(1, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfosRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySigningInfosRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageRequest.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfosRequest {
            return QuerySigningInfosRequest.deserialize(bytes);
        }
    }
    export class QuerySigningInfosResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            info?: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo[];
            pagination?: dependency_1.cosmos.base.query.v1beta1.PageResponse;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("info" in data && data.info != undefined) {
                    this.info = data.info;
                }
                if ("pagination" in data && data.pagination != undefined) {
                    this.pagination = data.pagination;
                }
            }
        }
        get info() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo, 1) as dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo[];
        }
        set info(value: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get pagination() {
            return pb_1.Message.getWrapperField(this, dependency_1.cosmos.base.query.v1beta1.PageResponse, 2) as dependency_1.cosmos.base.query.v1beta1.PageResponse;
        }
        set pagination(value: dependency_1.cosmos.base.query.v1beta1.PageResponse) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        static fromObject(data: {
            info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>[];
            pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
        }) {
            const message = new QuerySigningInfosResponse({});
            if (data.info != null) {
                message.info = data.info.map(item => dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.fromObject(item));
            }
            if (data.pagination != null) {
                message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.fromObject(data.pagination);
            }
            return message;
        }
        toObject() {
            const data: {
                info?: ReturnType<typeof dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.prototype.toObject>[];
                pagination?: ReturnType<typeof dependency_1.cosmos.base.query.v1beta1.PageResponse.prototype.toObject>;
            } = {};
            if (this.info != null) {
                data.info = this.info.map((item: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo) => item.toObject());
            }
            if (this.pagination != null) {
                data.pagination = this.pagination.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.info !== undefined)
                writer.writeRepeatedMessage(1, this.info, (item: dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo) => item.serialize(writer));
            if (this.pagination !== undefined)
                writer.writeMessage(2, this.pagination, () => this.pagination.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): QuerySigningInfosResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new QuerySigningInfosResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.info, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo.deserialize(reader), dependency_4.cosmos.slashing.v1beta1.ValidatorSigningInfo));
                        break;
                    case 2:
                        reader.readMessage(message.pagination, () => message.pagination = dependency_1.cosmos.base.query.v1beta1.PageResponse.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): QuerySigningInfosResponse {
            return QuerySigningInfosResponse.deserialize(bytes);
        }
    }
}
