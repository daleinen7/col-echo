import mongoose from 'mongoose'

const EchoSchema = new mongoose.Schema({
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
    user: mongoose.Schema.Types.ObjectId
})

export default mongoose.models.Echo || mongoose.model('Echo', EchoSchema)
