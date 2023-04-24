const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorhandlers')
const PORT = process.env.PORT

const app = express() 

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes') )
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server is started on port ${PORT}`)
})