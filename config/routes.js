const express = require('express')
const router = express.Router()
const taskControllers = require('../app/controllers/taskControllers')

router.route('/tasks').get(taskControllers.list).post(taskControllers.create)
router.route('/tasks/:id').get(taskControllers.show).put(taskControllers.update).delete(taskControllers.delete)

module.exports = router