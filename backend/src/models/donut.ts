import mongoose, { Schema } from 'mongoose';

const donutSchema: Schema = new Schema({
    name: String,
    price: Number,
    weight: Number,
    discount: Number,
    picture: String,
    description: String,
    availability: Boolean, 
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],

}, { timestamps: true});

donutSchema.methods.toJSON = function() {
    return {
        name: this.name,
        price: this.price,
        weight: this.weight,
        discount: this.discount,
        picture: this.picture,
        description: this.description,
        availability: this.availability, 
        // tag: this.tag.map()
    }
}

export default mongoose.model('Donut', donutSchema);
