import mongoose, { Schema } from 'mongoose';

const donutSchema: Schema = new Schema({
    id: Number,
    name: String,
    price: Number,
    weight: Number,
    discount: Number,
    picture: String,
    discription: String,
    availability: Boolean, 
    tags: [{
        type: Schema.Types.TagId,
        ref: 'Customer'
    }],

}, { timestamps: true});

donutSchema.methods.toJSON = function() {
    return {
        id: this.id,
        name: this.name,
        price: this.price,
        weight: this.weight,
        discount: this.discount,
        picture: this.picture,
        discription: this.discription,
        availability: this.availability, 
        // tag: this.tag.map()
    }
}

export default mongoose.model('Order', orderSchema);
