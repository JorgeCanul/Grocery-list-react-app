const express = require('express');
const router = express.Router();
const Task = require('../models/Tasks');



router.post('/tasks', (req, res) => {
    const newTask = new Task({
        text: req.body.text,
        day: req.body.day,
        reminder: req.body.reminder
    });
    newTask.save().then(task => res.json(task))
    .catch((err) => console.log(err));
});

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



module.exports = router;