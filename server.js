const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorhandlers')
const connectDB = require('./config/db')
const PORT = process.env.PORT

connectDB()
const app = express() 

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes') )
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`)
})