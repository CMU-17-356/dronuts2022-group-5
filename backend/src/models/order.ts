import mongoose, { Document, Schema, Model } from 'mongoose';

export interface OrderInterface extends Document {
    customer: Schema.Types.ObjectId
    donuts: Array<Schema.Types.ObjectId>
    status: string
    additionalCost: number
    totalCost: number
    rating: number
}

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
        enum: ['IN-PROGRESS', 'IN-DELIVERY', 'COMPLETED'],
        default: 'IN-PROGRESS'
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

export const OrderModel: Model<OrderInterface> = mongoose.model('Order', orderSchema);
