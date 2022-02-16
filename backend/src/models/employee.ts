import mongoose, { Document, Schema, Model } from 'mongoose';

export interface EmployeeInterface extends Document {
    name: string
    password: string
    phoneNumber: number
    emailAddress: string
}

const EmployeeSchema: Schema = new Schema({
    name: String,
    password: String,
    phoneNumber: Number,
    emailAddress: String,
}, {timestamps: true});

EmployeeSchema.methods.toJSON = function () {
    return {
        Name: this.UserName,
        Password: this.Password,
        PhoneNumber: this.PhoneNumber,
        EmailAddress: this.EmailAddress,
    }
}

export const EmployeeModel: Model<EmployeeInterface> = mongoose.model('Customer', EmployeeSchema);
