import mongoose, { Document, Schema, Model } from 'mongoose';

export interface DonutInterface extends Document {
    name: string
    price: number
    weight: number
    discount: number
    picture: string
    description: string
    availability: boolean
    tags: Array<Schema.Types.ObjectId>
}

const donutSchema: Schema = new Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type:Number,
        min: 0.01,
        max: 50
    },
    weight: {
        type:Number,
        min: 0,
        max: 1000
    },
    discount: {
        type: Number,
        min: 0,
        max: 1.0
    },
    picture: {
        type: String
    },
    description: {
        type: String,
        required: false
    },
    availability: {
        type: Boolean,
        required: false
    },
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tag'
    }],

}, { timestamps: true});

donutSchema.methods.toJSON = function() {
    return {
        id: this._id,
        name: this.name,
        price: this.price,
        weight: this.weight,
        discount: this.discount,
        picture: this.picture,
        description: this.description,
        availability: this.availability, 
        tags: this.tags
    }
}

export const DonutModel: Model<DonutInterface> = mongoose.model('Donut', donutSchema)
