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
    username: {
        type:String,
        required: true
    },

    password: {
        type:String,
        required: true,
        minLength: [8, "the password requires at least 8 characters"]
    },

    phoneNumber: {
        type:Number,
        min: 1000000000,
        max: 9999999999,
    },

    emailAddress: {
        typ:String,
        validator: function(e:string) {
            return (new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)).test(e);
        },
    },
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
