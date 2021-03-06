import mongoose, { Document, Schema, Model } from 'mongoose'

export interface TagInterface extends Document {
    name: string
    donuts: Array<Schema.Types.ObjectId>
}

const tagSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    donuts: [{
        type: Schema.Types.ObjectId,
        ref: 'Donut'
    }]
})

tagSchema.methods.toJSON = function() {
    return {
        name: this.name
    }
}

export const TagModel: Model<TagInterface> = mongoose.model('Tag', tagSchema)
