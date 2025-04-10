const express = require("express")
const router = express.Router();
const {
    allTasks,
    createTask,
    destroyTask,
    updateTask,
    getTaskRequest


} = require("../controllers/tasks.js")


router.route('/').get(allTasks).post(createTask)
router.route('/:id').put(updateTask).delete(destroyTask).get(getTaskRequest)

module.exports = router