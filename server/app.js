const express = require('express')
const app = express()
const router = require('./routes/index')
const mongoose = require('mongoose');
const cors = require('cors')
const port = 3001

mongoose.connect('mongodb://localhost:27017/DFlow', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(router)

app.listen(port, () => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log('connecting')
    });
    console.log(`Example app listening at http://localhost:${port}`)
})