import mongoose, { Document, Schema, Model } from 'mongoose';

export interface EmployeeInterface extends Document {
    name: string
    password: string
    phoneNumber: number
    emailAddress: string
}

const EmployeeSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'EmplyeeName is required']
    },
    password: {
        type: String,
        minLength: [8, 'Password is too short, less than 8'],
        maxLength: [256, 'Password is too long'],
        required: [true, 'Password is required']
    },
    phoneNumber: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
    },
    emailAddress: {
        type: String,
        validator: function(e:string) {
            return (new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)).test(e);
        },
    }

}, {timestamps: true});

EmployeeSchema.methods.toJSON = function () {
    return {
        Name: this.UserName,
        Password: this.Password,
        PhoneNumber: this.PhoneNumber,
        EmailAddress: this.EmailAddress,
    }
}

export const EmployeeModel: Model<EmployeeInterface> = mongoose.model('Employee', EmployeeSchema);
