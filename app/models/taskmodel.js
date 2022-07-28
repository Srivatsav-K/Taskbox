const mongoose = require('mongoose')

const { Schema } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title Required']
    },
    body: {
        type: String
    },
    dueDate: {
        type: Date,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })


const Task = mongoose.model('Task', taskSchema)

module.exports = Task