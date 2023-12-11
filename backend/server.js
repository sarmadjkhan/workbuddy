require('dotenv').config()

const express = require("express")
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

// routes
app.use('/api/workouts', workoutRouter)

// listen for requests
app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}....`)
})