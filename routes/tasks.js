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
    
})



module.exports = router;