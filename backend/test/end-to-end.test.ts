import * as testDB from './utility';

import { CustomerInterface, CustomerModel } from '../src/models/customer';
import { OrderInterface, OrderModel } from "../src/models/order";
import { DonutInterface, DonutModel } from "../src/models/donut";

// This test only could run when the database is connected. 
describe('end-to-end tests', function () {
    // TODO: modify the test variables 
    const USERNAME = 'Test User';
    const PHONE_NUMBER = 9998887777;
    const EMAIL_ADDRESS = 'test@test.com';

    // Customer tests: check the customer info is consist with database
    it('customer db', async () => {
        const mDb: CustomerInterface | null = await CustomerModel.findOne({
            username: USERNAME
        }).exec();
        expect(mDb).toBeDefined();
        if (mDb) {
            expect(mDb.phoneNumber).toEqual(PHONE_NUMBER);
            expect(mDb.emailAddress).toEqual(EMAIL_ADDRESS);
        }
    });

    // Customer tests: check the order info is consist with database
    it('order db', async () => {
        const m = new OrderModel();
        // TODO: modify the test variables 
        m.donuts = [];
        m.amounts = [];
        m.tax = 1.2;
        m.serviceFee = 1.0;
        m.deliveryFee = 3.0;
        m.totalCost = 24;

        const mDb: OrderInterface | null = await OrderModel.findOne({
            name: USERNAME
        }).exec();
        expect(mDb).toBeDefined();

        if (mDb) {
            expect(mDb.donuts).toEqual(m.donuts);
            expect(mDb.amounts).toEqual(m.amounts);
            expect(mDb.tax).toEqual(m.tax);
            expect(mDb.serviceFee).toEqual(m.serviceFee);
            expect(mDb.deliveryFee).toEqual(m.deliveryFee);
            expect(mDb.totalCost).toEqual(m.totalCost);
        }
    });

    // Store tests: check the donuts info consist with database
    it('order db', async () => {
        const m = new DonutModel();
        // TODO: modify the test variables 
        m.name = "test";
        m.price = 0;
        m.description = "Good";
        m.picture = "sample_url"; 

        const mDb: DonutInterface | null = await DonutModel.findOne({
            name: m.name
        }).exec();
        expect(mDb).toBeDefined();

        if (mDb) {
            expect(mDb.name).toEqual(m.name);
            expect(mDb.price).toEqual(m.price);
            expect(mDb.description).toEqual(m.description);
            expect(mDb.picture).toEqual(m.picture);
        }
    });
});
