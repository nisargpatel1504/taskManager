const express = require('express');
const router = express.Router();
const {getAllTasks,getSingleTask,createTask,deleteTask,editTask} = require('../Controller/getTasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getSingleTask).patch(editTask).delete(deleteTask);



router.route('/edit').get((req,res) => {
    res.send("edit itmes");
    });

module.exports = router;