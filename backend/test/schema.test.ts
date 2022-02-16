import * as testDB from './utility';

import { CustomerInterface, CustomerModel } from '../src/models/customer';
import { DroneInterface, DroneModel } from '../src/models/drone';
import { EmployeeInterface, EmployeeModel } from '../src/models/employee';
import { TagInterface, TagModel } from '../src/models/tag';
import {OrderInterface, OrderModel} from "../src/models/order";


beforeAll(async () => {
    await testDB.connect();
});

afterEach(async () => {
    await testDB.clearDatabase();
});

afterAll(async () => {
    await testDB.closeDatabase();
});

describe('schema tests', function () {
    const USERNAME = 'Test User';
    const PASSWORD = 'Test Password';
    const PHONE_NUMBER = 9998887777;
    const EMAIL_ADDRESS = 'test@test.com';

    // Customer tests
    it('customer schema', () => {
        const m = new CustomerModel();
        m.username = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        expect(m.username).toEqual(USERNAME);
        expect(m.password).toEqual(PASSWORD);
        expect(m.phoneNumber).toEqual(PHONE_NUMBER);
        expect(m.emailAddress).toEqual(EMAIL_ADDRESS);
    });

    it('customer db', async () => {
        const m: CustomerInterface = new CustomerModel();
        m.username = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        await m.save();
        const mDb: CustomerInterface | null = await CustomerModel.findOne({
            username: USERNAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(mDb.username).toEqual(USERNAME);
            expect(mDb.password).toEqual(PASSWORD);
            expect(mDb.phoneNumber).toEqual(PHONE_NUMBER);
            expect(mDb.emailAddress).toEqual(EMAIL_ADDRESS);
        }
    });

    // Employee tests
    it('employee schema', () => {
        const m = new EmployeeModel();
        m.name = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        expect(m.name).toEqual(USERNAME);
        expect(m.password).toEqual(PASSWORD);
        expect(m.phoneNumber).toEqual(PHONE_NUMBER);
        expect(m.emailAddress).toEqual(EMAIL_ADDRESS);
    });

    it('employee db', async () => {
        const m: EmployeeInterface = new EmployeeModel();
        m.name = USERNAME;
        m.password = PASSWORD;
        m.phoneNumber = PHONE_NUMBER;
        m.emailAddress = EMAIL_ADDRESS;
        await m.save();
        const mDb: EmployeeInterface | null = await EmployeeModel.findOne({
            name: USERNAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(mDb.name).toEqual(USERNAME);
            expect(mDb.password).toEqual(PASSWORD);
            expect(mDb.phoneNumber).toEqual(PHONE_NUMBER);
            expect(mDb.emailAddress).toEqual(EMAIL_ADDRESS);
        }
    });

    // Drone tests
    it('drone schema', () => {
        const m: DroneInterface = new DroneModel();
        m.availability = true;
        expect(m.availability).toEqual(true);
    })

    // Order tests
    it('order schema', () => {
        const c = new CustomerModel();
        c.username = USERNAME;
        c.password = PASSWORD;
        c.phoneNumber = PHONE_NUMBER;
        c.emailAddress = EMAIL_ADDRESS;
        const m = new OrderModel();
        m.customer = c._id;
        m.donuts = [];
        m.status = 'NEW';
        m.totalCost = 24;
        m.rating = 0.5;

        expect(m.customer).toEqual(c._id);
        expect(m.donuts).toEqual([]);
        expect(m.status).toEqual('NEW');
        expect(m.totalCost).toEqual(24);
        expect(m.rating).toEqual(0.5);
    });

    it('order db', async () => {
        const c = new CustomerModel();
        c.username = USERNAME;
        c.password = PASSWORD;
        c.phoneNumber = PHONE_NUMBER;
        c.emailAddress = EMAIL_ADDRESS;
        const m: OrderInterface = new OrderModel();
        m.customer = c._id;
        m.donuts = [];
        m.status = 'IN-PROGRESS';
        m.totalCost = 24;
        m.rating = 0.5;
        await m.save();
        const mDb: OrderInterface | null = await OrderModel.findOne({
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
    });
    // Pickup Point tests

    const TAGNAME = "Gluten Free";
    // Tag tests
    it('tag schema', () => {
        const m: TagInterface = new TagModel();
        m.name = TAGNAME;
        expect(m.name).toEqual(TAGNAME);
    })
});
