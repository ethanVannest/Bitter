const express = require('express')
const app = express()
const router = express.Router()
const connectDB = require('./config/db.connection')

connectDB();

const PORT = 3000 
app.listen(PORT, ()=> {
    console.log(`Listening on ${PORT}`)
})