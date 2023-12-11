require('dotenv').config()

const express = require("express")

config = process.env

// express app
const app = express()

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({message: "Welcome to WorkBuddy"})
})

// listen for requests
app.listen(config.PORT, () => {
    console.log(`Listening on port ${config.PORT}....`)
})