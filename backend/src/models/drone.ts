import mongoose, { Document, Model } from 'mongoose'

export interface DroneInterface extends Document {
    availability: boolean
}

const droneSchema = new mongoose.Schema({
    availability: {
        type: Boolean,
        required: true

    }
})

droneSchema.methods.toJSON = function() {
    return {
        availability: this.availabilty
    }
}

export const DroneModel: Model<DroneInterface> = mongoose.model('Drone', droneSchema)
