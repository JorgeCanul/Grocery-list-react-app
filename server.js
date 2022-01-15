const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const tasks = require('./routes/tasks');

const app = express();

// Body Parser
app.use(express.urlencoded());
app.use(express.json());

// DB Config
const db = keys.mongoURI;
mongoose.connect(db)
.then(() => console.log('Mongoose connected'))
.catch(() => console.log('Mongoose Error!'));

///use routes
app.use('/api/task', tasks);

const PORT = 5000;
app.listen(5000, () => console.log(`App runnig on ${PORT}`))