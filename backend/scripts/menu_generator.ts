import mongoose from 'mongoose';
import menuJson from './menu.json';
import { DonutModel } from '../src/models/donut';

(async () => {
    console.log('connecting to db');
    await mongoose.connect('mongodb://127.0.0.1/db');
    const db = mongoose.connection;
    console.log('connected to db');

    await db.dropCollection('donuts');
    console.log('cleared existing menu');
    for (const donutJson of menuJson['Menu']) {
        const donut = new DonutModel(donutJson);
        await donut.save();
    }
    console.log(`successfully added new menu`);
    await db.close();
})();
