import mongoose, {Schema} from 'mongoose';

const customerSchema: Schema = new Schema({
    UserName: String,
    Password: String,
    PhoneNumber: Number,
    EmailAddress: String,
    PaymentMethod: [{
        type: Schema.Types.ObjectId,
        ref: 'PaymentMethod'
    }],
    SavedPickupPoint: [{
        type: Schema.Types.ObjectId,
        ref: 'PickupPoint'
    }],
    PastOrders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }],

}, {timestamps: true});

customerSchema.methods.toJSON = function () {
    return {
        UserName: this.UserName,
        Password: this.Password,
        PhoneNumber: this.PhoneNumber,
        EmailAddress: this.EmailAddress,
    }
}

export default mongoose.model('Customer', customerSchema);