"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testDB = __importStar(require("./utility"));
const customer_1 = require("../src/models/customer");
const drone_1 = require("../src/models/drone");
const employee_1 = require("../src/models/employee");
const tag_1 = require("../src/models/tag");
const order_1 = require("../src/models/order");
const pickup_point_1 = require("../src/models/pickup_point");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDB.connect();
}));
afterEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDB.clearDatabase();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield testDB.closeDatabase();
}));
describe('schema tests', function () {
    const USERNAME = 'Test User';
    const PASSWORD = 'Test Password';
    const PHONE_NUMBER = 9998887777;
    const EMAIL_ADDRESS = 'test@test.com';
    // Customer tests
    it('customer schema', () => {
        const m = new customer_1.CustomerModel();
        m.username = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        expect(m.username).toEqual(USERNAME);
        expect(m.password).toEqual(PASSWORD);
        expect(m.phoneNumber).toEqual(PHONE_NUMBER);
        expect(m.emailAddress).toEqual(EMAIL_ADDRESS);
    });
    it('customer db', () => __awaiter(this, void 0, void 0, function* () {
        const m = new customer_1.CustomerModel();
        m.username = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        yield m.save();
        const mDb = yield customer_1.CustomerModel.findOne({
            username: USERNAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(mDb.username).toEqual(USERNAME);
            expect(mDb.password).toEqual(PASSWORD);
            expect(mDb.phoneNumber).toEqual(PHONE_NUMBER);
            expect(mDb.emailAddress).toEqual(EMAIL_ADDRESS);
        }
    }));
    // Employee tests
    it('employee schema', () => {
        const m = new employee_1.EmployeeModel();
        m.name = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        expect(m.name).toEqual(USERNAME);
        expect(m.password).toEqual(PASSWORD);
        expect(m.phoneNumber).toEqual(PHONE_NUMBER);
        expect(m.emailAddress).toEqual(EMAIL_ADDRESS);
    });
    it('employee db', () => __awaiter(this, void 0, void 0, function* () {
        const m = new employee_1.EmployeeModel();
        m.name = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        yield m.save();
        const mDb = yield employee_1.EmployeeModel.findOne({
            name: USERNAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(mDb.name).toEqual(USERNAME);
            expect(mDb.password).toEqual(PASSWORD);
            expect(mDb.phoneNumber).toEqual(PHONE_NUMBER);
            expect(mDb.emailAddress).toEqual(EMAIL_ADDRESS);
        }
    }));
    // Drone tests
    it('drone schema', () => {
        const m = new drone_1.DroneModel();
        m.availability = true;
        expect(m.availability).toEqual(true);
    });
    // Order tests
    it('order schema', () => {
        const c = new customer_1.CustomerModel();
        c.username = USERNAME;
        c.password = PASSWORD;
        c.phoneNumber = PHONE_NUMBER;
        c.emailAddress = EMAIL_ADDRESS;
        const m = new order_1.OrderModel();
        m.customer = c._id;
        m.donuts = [];
        m.amounts = [];
        m.status = 'NEW';
        m.totalCost = 24;
        m.rating = 0.5;
        expect(m.customer).toEqual(c._id);
        expect(m.donuts).toEqual([]);
        expect(m.amounts).toEqual([]);
        expect(m.status).toEqual('NEW');
        expect(m.totalCost).toEqual(24);
        expect(m.rating).toEqual(0.5);
    });
    it('order db', () => __awaiter(this, void 0, void 0, function* () {
        const c = new customer_1.CustomerModel();
        c.username = USERNAME;
        c.password = PASSWORD;
        c.phoneNumber = PHONE_NUMBER;
        c.emailAddress = EMAIL_ADDRESS;
        const m = new order_1.OrderModel();
        m.customer = c._id;
        m.donuts = [];
        m.status = 'IN-PROGRESS';
        m.totalCost = 24;
        m.rating = 0.5;
        yield m.save();
        const mDb = yield order_1.OrderModel.findOne({
            name: USERNAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(mDb.customer).toEqual(c._id);
            expect(mDb.donuts).toEqual([]);
            expect(mDb.status).toEqual('IN-PROGRESS');
            expect(mDb.totalCost).toEqual(24);
            expect(mDb.rating).toEqual(0.5);
        }
    }));
    const PICKUP_NAME = "Test Location";
    const LATITUDE = 77.443483;
    const LONGITUDE = -79.944549;
    // Pickup Point tests
    it('pickup point schema', () => {
        const m = new pickup_point_1.PickupPointModel();
        m.name = PICKUP_NAME;
        m.latitude = LATITUDE;
        m.longitude = LONGITUDE;
        expect(m.name).toEqual(PICKUP_NAME);
        expect(m.latitude).toEqual(LATITUDE);
        expect(m.longitude).toEqual(LONGITUDE);
    });
    it('pickup point db', () => __awaiter(this, void 0, void 0, function* () {
        const m = new pickup_point_1.PickupPointModel();
        m.name = PICKUP_NAME;
        m.latitude = LATITUDE;
        m.longitude = LONGITUDE;
        yield m.save();
        const mDb = yield pickup_point_1.PickupPointModel.findOne({
            name: PICKUP_NAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(m.name).toEqual(PICKUP_NAME);
            expect(m.latitude).toEqual(LATITUDE);
            expect(m.longitude).toEqual(LONGITUDE);
        }
    }));
    const TAGNAME = "Gluten Free";
    // Tag tests
    it('tag schema', () => {
        const m = new tag_1.TagModel();
        m.name = TAGNAME;
        expect(m.name).toEqual(TAGNAME);
    });
});
