import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a username'],
        maxlength: [20, 'Name cannot exceed 20 Characters'],
    },
    email: {
        type: String,
        require: [true, 'Please provide an e-mail']
    }
    
})

export default mongoose.models.User || mongoose.model('User', UserSchema)