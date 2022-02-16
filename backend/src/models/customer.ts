import mongoose, { Document, Schema, Model } from 'mongoose';

export interface CustomerInterface extends Document {
    username: string
    password: string
    phoneNumber: number
    emailAddress: string
    paymentMethod: Schema.Types.ObjectId
    savedPickupPoints: Array<Schema.Types.ObjectId>
    pastOrders: Array<Schema.Types.ObjectId>
}

const customerSchema: Schema = new Schema({
    username: String,
    password: String,
    phoneNumber: Number,
    emailAddress: String,
    paymentMethod: {
        type: Schema.Types.ObjectId,
        ref: 'PaymentMethod'
    },
    savedPickupPoint: [{
        type: Schema.Types.ObjectId,
        ref: 'PickupPoint'
    }],
    pastOrders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],

}, {timestamps: true});

customerSchema.methods.toJSON = function () {
    return {
        userName: this.userName,
        password: this.password,
        phoneNumber: this.phoneNumber,
        emailAddress: this.emailAddress,
    }
}

export const CustomerModel: Model<CustomerInterface> = mongoose.model('Customer', customerSchema);
