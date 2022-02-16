import mongoose, { Document, Schema, Model } from 'mongoose';

export interface OrderInterface extends Document {
    customer: Schema.Types.ObjectId
    donuts: Array<Schema.Types.ObjectId>
    status: string
    tax: number
    serviceFee: number
    deliveryFee: number
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
    tax: Number,
    serviceFee: Number,
    deliveryFee: Number, 
    totalCost: Number,
    rating: Number,
}, { timestamps: true});

orderSchema.methods.toJSON = function() {
    return {
        // customer: this.customer.toJSON(),
        // donuts: this.donuts.map()
        status: this.status,
        tax: this.tax,
        serviceFee: this.serviceFee,
        deliveryFee: this.deliveryFee,
        totalCost: this.totalCost,
        rating: this.rating,
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    }
}

export const OrderModel: Model<OrderInterface> = mongoose.model('Order', orderSchema);