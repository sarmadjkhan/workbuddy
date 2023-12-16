const workouts = require("../models/workouts")
const Workout = require("../models/workouts")
const mongoose = require("mongoose")

// GET all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

// GET a single workout
const getWorkout = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({error: "No Data Found"})
    }

    return res.status(200).json(workout)
}

// CREATE a new workout
const createWorkout = async (req, res) => {
    const {title, reps, load } = req.body

    // add doc to db
    try {
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a workout


// Update a workout


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}