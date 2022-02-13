import mongoose, {Schema} from 'mongoose';

const EmployeeSchema: Schema = new Schema({
    Name: String,
    Password: String,
    PhoneNumber: Number,
    EmailAddress: String,

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