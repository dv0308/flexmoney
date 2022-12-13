const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./DB')
const yogaRouter = require('./routes/yoga-router')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', yogaRouter)

app.listen(3000, () => console.log('Server running on port 123'))