import mongoose, {Schema} from 'mongoose';

const EmployeeSchema: Schema = new Schema({
    Name: {
        type: String,
        required: [true, 'EmplyeeName is required']
    },

    Password: {
        type: String,
        minLength: [8, 'Password is too short, less than 8'],
        maxLength: [256, 'Password is too long'],
        required: [true, 'Password is required']
    },
    PhoneNumber: {
        type: Number,
        min: 1000000000,
        max: 9999999999,
    },

    EmailAddress: {
        type: String,
        validator: function(e:string) {
            return (new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)).test(e);
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

export default mongoose.model('Customer', EmployeeSchema);
