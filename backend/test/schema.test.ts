import * as testDB from "./utility";

import { CustomerInterface, CustomerModel } from "../src/models/customer";

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
    const USERNAME = "Test User";
    const PASSWORD = "Test Password";
    const PHONE_NUMBER = 9998887777;
    const EMAIL_ADDRESS = "test@test.com";

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
    })
});
