const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks');

// @route   POST api/task/tasks
// @desc    Create new task
// @access  Public
router.post('/tasks', (req, res) => {
    const newTask = new Task({
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder
    });
    newTask.save().then(task => res.json(task))
    .catch((err) => console.log(err));
});

// @route   GET api/task/tasks
// @desc    Get all tasks
// @access  Public
router.get('/tasks', (req, res) => {
    const errors = {}
    Task.find()
    .sort({ date: -1})
    .then(tasks => {
        if(!tasks) {
            errors.notasks = 'No Tasks';
            return  res.status(404).json(errors);
        } else {
          return res.json(tasks)
        }
    })
});

// @route   DELETE api/task/tasks
// @desc    delete task
// @access  Public
router.delete('/tasks/:id', (req, res) => {
    const errors = {};
    Task.findById(req.params.id)
    .then(task => {
        ///Delete
        task.remove().then(() => res.json({ success: true}))
    })
    .catch(err => res.status(404).json({tasknotfound: 'No task found'}));
});


module.exports = router;