import mongoose, { Schema } from 'mongoose';

const orderSchema: Schema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    },
    donuts: [{
        type: Schema.Types.ObjectId,
        ref: 'Donut'
    }],
    status: {
        type: String,
        enum: ['NEW', 'IN-DELIVERY', 'COMPLETED'],
        default: 'NEW'
    }, 
    additionalCost: Number, // Includes tax, fees, delivery charge
    totalCost: Number,
    rating: Number,
}, { timestamps: true});

orderSchema.methods.toJSON = function() {
    return {
        // customer: this.customer.toJSON(),
        // donuts: this.donuts.map()
        status: this.status,
        additionalCost: this.additionalCost,
        totalCost: this.totalCost,
        rating: this.rating,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    }
}

export default mongoose.model('Order', orderSchema);
