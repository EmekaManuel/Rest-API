const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorhandlers')
const connectDB = require('./config/db')
const PORT = process.env.PORT

const app = express() 
connectDB()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes') )
app.use('/api/users',require('./routes/userRoutes') )
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`)
})