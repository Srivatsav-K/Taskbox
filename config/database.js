const mongoose = require('mongoose')

const configDB = () => {
    mongoose.connect('mongodb://localhost:27017/task-box-redux')
        .then(() => {
            console.log('Connected to db')
        })
        .catch((err) => {
            console.log('Error connecting to DB', err)
        })
}

module.exports = configDB