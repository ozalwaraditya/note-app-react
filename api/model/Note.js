import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    isPinned: {
        type: Boolean,
        default: false,
    },
    createdOn: {
        type: Date,
        default: Date.now(), 
    },
    userId: {
        type: String,
    },
    tags: {
        type: [String], 
        default: [],
    },
}, { timestamps: true }); 

const Note = mongoose.model('Note', noteSchema);

export default Note;