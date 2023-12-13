require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const workoutRouter = require("./routes/workouts")

config = process.env

// express app
const app = express()

// Middleware

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Connect to DB
mongoose.connect(config.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(config.PORT, () => {
            console.log(`Connected to DB & Listening on port ${config.PORT}....`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

// routes
app.use('/api/workouts', workoutRouter)

