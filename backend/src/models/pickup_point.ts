import mongoose, { Document, Model } from 'mongoose'

export interface PickupPointInterface extends Document {
    name: string
    latitude: number
    longitude: number
}

const pickupPointSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

pickupPointSchema.methods.toJSON = function() {
    return {
        name: this.name,
        latitude: this.latitude,
        longitude: this.longitude
    }
}

export const PickupPointModel: Model<PickupPointInterface> = mongoose.model('PickupPoint', pickupPointSchema)
