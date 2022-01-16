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


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html' ))
    })
}


const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`App runnig on ${PORT}`))