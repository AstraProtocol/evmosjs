// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/gov/v1beta1/tx.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../base/v1beta1/coin";
import * as dependency_2 from "./gov";
import * as dependency_5 from "./../../../google/protobuf/any";
import * as pb_1 from "google-protobuf";
export namespace cosmos.gov.v1beta1 {
    export class MsgSubmitProposal extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            content?: dependency_5.google.protobuf.Any;
            initial_deposit?: dependency_1.cosmos.base.v1beta1.Coin[];
            proposer?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("content" in data && data.content != undefined) {
                    this.content = data.content;
                }
                if ("initial_deposit" in data && data.initial_deposit != undefined) {
                    this.initial_deposit = data.initial_deposit;
                }
                if ("proposer" in data && data.proposer != undefined) {
                    this.proposer = data.proposer;
                }
            }
        }
        get content() {
            return pb_1.Message.getWrapperField(this, dependency_5.google.protobuf.Any, 1) as dependency_5.google.protobuf.Any;
        }
        set content(value: dependency_5.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get initial_deposit() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 2) as dependency_1.cosmos.base.v1beta1.Coin[];
        }
        set initial_deposit(value: dependency_1.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get proposer() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set proposer(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            content?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
            initial_deposit?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            proposer?: string;
        }) {
            const message = new MsgSubmitProposal({});
            if (data.content != null) {
                message.content = dependency_5.google.protobuf.Any.fromObject(data.content);
            }
            if (data.initial_deposit != null) {
                message.initial_deposit = data.initial_deposit.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            if (data.proposer != null) {
                message.proposer = data.proposer;
            }
            return message;
        }
        toObject() {
            const data: {
                content?: ReturnType<typeof dependency_5.google.protobuf.Any.prototype.toObject>;
                initial_deposit?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
                proposer?: string;
            } = {};
            if (this.content != null) {
                data.content = this.content.toObject();
            }
            if (this.initial_deposit != null) {
                data.initial_deposit = this.initial_deposit.map((item: dependency_1.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            if (this.proposer != null) {
                data.proposer = this.proposer;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.content !== undefined)
                writer.writeMessage(1, this.content, () => this.content.serialize(writer));
            if (this.initial_deposit !== undefined)
                writer.writeRepeatedMessage(2, this.initial_deposit, (item: dependency_1.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (typeof this.proposer === "string" && this.proposer.length)
                writer.writeString(3, this.proposer);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.content, () => message.content = dependency_5.google.protobuf.Any.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.initial_deposit, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                        break;
                    case 3:
                        message.proposer = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSubmitProposal {
            return MsgSubmitProposal.deserialize(bytes);
        }
    }
    export class MsgSubmitProposalResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            proposal_id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("proposal_id" in data && data.proposal_id != undefined) {
                    this.proposal_id = data.proposal_id;
                }
            }
        }
        get proposal_id() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set proposal_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            proposal_id?: number;
        }) {
            const message = new MsgSubmitProposalResponse({});
            if (data.proposal_id != null) {
                message.proposal_id = data.proposal_id;
            }
            return message;
        }
        toObject() {
            const data: {
                proposal_id?: number;
            } = {};
            if (this.proposal_id != null) {
                data.proposal_id = this.proposal_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined)
                writer.writeUint64(1, this.proposal_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgSubmitProposalResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgSubmitProposalResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.proposal_id = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgSubmitProposalResponse {
            return MsgSubmitProposalResponse.deserialize(bytes);
        }
    }
    export class MsgVote extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            proposal_id?: number;
            voter?: string;
            option?: dependency_2.cosmos.gov.v1beta1.VoteOption;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("proposal_id" in data && data.proposal_id != undefined) {
                    this.proposal_id = data.proposal_id;
                }
                if ("voter" in data && data.voter != undefined) {
                    this.voter = data.voter;
                }
                if ("option" in data && data.option != undefined) {
                    this.option = data.option;
                }
            }
        }
        get proposal_id() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set proposal_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get voter() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set voter(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get option() {
            return pb_1.Message.getField(this, 3) as dependency_2.cosmos.gov.v1beta1.VoteOption;
        }
        set option(value: dependency_2.cosmos.gov.v1beta1.VoteOption) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            proposal_id?: number;
            voter?: string;
            option?: dependency_2.cosmos.gov.v1beta1.VoteOption;
        }) {
            const message = new MsgVote({});
            if (data.proposal_id != null) {
                message.proposal_id = data.proposal_id;
            }
            if (data.voter != null) {
                message.voter = data.voter;
            }
            if (data.option != null) {
                message.option = data.option;
            }
            return message;
        }
        toObject() {
            const data: {
                proposal_id?: number;
                voter?: string;
                option?: dependency_2.cosmos.gov.v1beta1.VoteOption;
            } = {};
            if (this.proposal_id != null) {
                data.proposal_id = this.proposal_id;
            }
            if (this.voter != null) {
                data.voter = this.voter;
            }
            if (this.option != null) {
                data.option = this.option;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined)
                writer.writeUint64(1, this.proposal_id);
            if (typeof this.voter === "string" && this.voter.length)
                writer.writeString(2, this.voter);
            if (this.option !== undefined)
                writer.writeEnum(3, this.option);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVote {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVote();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.proposal_id = reader.readUint64();
                        break;
                    case 2:
                        message.voter = reader.readString();
                        break;
                    case 3:
                        message.option = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgVote {
            return MsgVote.deserialize(bytes);
        }
    }
    export class MsgVoteResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgVoteResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVoteResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVoteResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgVoteResponse {
            return MsgVoteResponse.deserialize(bytes);
        }
    }
    export class MsgVoteWeighted extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            proposal_id?: number;
            voter?: string;
            options?: dependency_2.cosmos.gov.v1beta1.WeightedVoteOption[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("proposal_id" in data && data.proposal_id != undefined) {
                    this.proposal_id = data.proposal_id;
                }
                if ("voter" in data && data.voter != undefined) {
                    this.voter = data.voter;
                }
                if ("options" in data && data.options != undefined) {
                    this.options = data.options;
                }
            }
        }
        get proposal_id() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set proposal_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get voter() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set voter(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get options() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.WeightedVoteOption, 3) as dependency_2.cosmos.gov.v1beta1.WeightedVoteOption[];
        }
        set options(value: dependency_2.cosmos.gov.v1beta1.WeightedVoteOption[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            proposal_id?: number;
            voter?: string;
            options?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.prototype.toObject>[];
        }) {
            const message = new MsgVoteWeighted({});
            if (data.proposal_id != null) {
                message.proposal_id = data.proposal_id;
            }
            if (data.voter != null) {
                message.voter = data.voter;
            }
            if (data.options != null) {
                message.options = data.options.map(item => dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                proposal_id?: number;
                voter?: string;
                options?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.prototype.toObject>[];
            } = {};
            if (this.proposal_id != null) {
                data.proposal_id = this.proposal_id;
            }
            if (this.voter != null) {
                data.voter = this.voter;
            }
            if (this.options != null) {
                data.options = this.options.map((item: dependency_2.cosmos.gov.v1beta1.WeightedVoteOption) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined)
                writer.writeUint64(1, this.proposal_id);
            if (typeof this.voter === "string" && this.voter.length)
                writer.writeString(2, this.voter);
            if (this.options !== undefined)
                writer.writeRepeatedMessage(3, this.options, (item: dependency_2.cosmos.gov.v1beta1.WeightedVoteOption) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVoteWeighted {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVoteWeighted();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.proposal_id = reader.readUint64();
                        break;
                    case 2:
                        message.voter = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.options, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.gov.v1beta1.WeightedVoteOption.deserialize(reader), dependency_2.cosmos.gov.v1beta1.WeightedVoteOption));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgVoteWeighted {
            return MsgVoteWeighted.deserialize(bytes);
        }
    }
    export class MsgVoteWeightedResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgVoteWeightedResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgVoteWeightedResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgVoteWeightedResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgVoteWeightedResponse {
            return MsgVoteWeightedResponse.deserialize(bytes);
        }
    }
    export class MsgDeposit extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            proposal_id?: number;
            depositor?: string;
            amount?: dependency_1.cosmos.base.v1beta1.Coin[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("proposal_id" in data && data.proposal_id != undefined) {
                    this.proposal_id = data.proposal_id;
                }
                if ("depositor" in data && data.depositor != undefined) {
                    this.depositor = data.depositor;
                }
                if ("amount" in data && data.amount != undefined) {
                    this.amount = data.amount;
                }
            }
        }
        get proposal_id() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set proposal_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get depositor() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set depositor(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get amount() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.cosmos.base.v1beta1.Coin, 3) as dependency_1.cosmos.base.v1beta1.Coin[];
        }
        set amount(value: dependency_1.cosmos.base.v1beta1.Coin[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            proposal_id?: number;
            depositor?: string;
            amount?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
        }) {
            const message = new MsgDeposit({});
            if (data.proposal_id != null) {
                message.proposal_id = data.proposal_id;
            }
            if (data.depositor != null) {
                message.depositor = data.depositor;
            }
            if (data.amount != null) {
                message.amount = data.amount.map(item => dependency_1.cosmos.base.v1beta1.Coin.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                proposal_id?: number;
                depositor?: string;
                amount?: ReturnType<typeof dependency_1.cosmos.base.v1beta1.Coin.prototype.toObject>[];
            } = {};
            if (this.proposal_id != null) {
                data.proposal_id = this.proposal_id;
            }
            if (this.depositor != null) {
                data.depositor = this.depositor;
            }
            if (this.amount != null) {
                data.amount = this.amount.map((item: dependency_1.cosmos.base.v1beta1.Coin) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.proposal_id !== undefined)
                writer.writeUint64(1, this.proposal_id);
            if (typeof this.depositor === "string" && this.depositor.length)
                writer.writeString(2, this.depositor);
            if (this.amount !== undefined)
                writer.writeRepeatedMessage(3, this.amount, (item: dependency_1.cosmos.base.v1beta1.Coin) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDeposit {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDeposit();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.proposal_id = reader.readUint64();
                        break;
                    case 2:
                        message.depositor = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.amount, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.cosmos.base.v1beta1.Coin.deserialize(reader), dependency_1.cosmos.base.v1beta1.Coin));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): MsgDeposit {
            return MsgDeposit.deserialize(bytes);
        }
    }
    export class MsgDepositResponse extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}) {
            const message = new MsgDepositResponse({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): MsgDepositResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new MsgDepositResponse();
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
        static deserializeBinary(bytes: Uint8Array): MsgDepositResponse {
            return MsgDepositResponse.deserialize(bytes);
        }
    }
}
