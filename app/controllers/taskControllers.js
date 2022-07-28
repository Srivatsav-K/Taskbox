const Task = require('../models/taskmodel')

const taskControllers = {}

taskControllers.list = (req, res) => {
    Task.find()
        .then((tasks) => res.json(tasks))
        .catch((err) => res.json({ errors: err }))
}

taskControllers.show = (req, res) => {
    const id = req.params.id
    Task.findById(id)
        .then((task) => res.json(task))
        .catch((err) => res.json({ errors: err }))
}

taskControllers.create = (req, res) => {
    const body = req.body
    const task = new Task(body)
    task.save()
        .then((task) => res.json(task))
        .catch((err) => res.json({ errors: err }))
}

taskControllers.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Task.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        .then((task) => res.json(task))
        .catch((err) => res.json({ errors: err }))
}

taskControllers.delete = (req, res) => {
    const id = req.params.id
    const body = req.body
    Task.findByIdAndDelete(id)
        .then((task) => res.json(task))
        .catch((err) => res.json({ errors: err }))
}

module.exports = taskControllers