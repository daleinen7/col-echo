import mongoose from 'mongoose'
import User from './User'

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a username'],
        maxlength: [60, 'Name cannot exceed 20 Characters'],
    },
    description: {
        type: String,
        require: false
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: String,
    mediaUrl: String,
    // user: mongoose.Schem [{type: Schema.Types.ObjectId, ref: 'User'}]
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)
