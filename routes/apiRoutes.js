const db = require("../models")
const { response } = require("express")
const Workout = require("../models/wkmodel")
const { update } = require("../models/wkmodel")

module.exports = function(app){
    //check if there was a workout
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({})
            .then(workout => {
                res.json(workout)
            })
            .catch(err => {
                res.json(err)
            })
        
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    }); 

    //create new workout
    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
        .then((response) =>{
            res.json(response)
        })
        .catch(err =>{
            res.json(err)
        })
        
    })
    
    // //create new workout
    // app.post("/api/workouts", ({ body }, res) => {
    //     Workout.create(body)
    //     .then(response => {
    //         res.json(response)
    //     })
    //     .catch(err => {
    //         res.json(err)
    //     })
    // })

    // app.put("/api/workouts/:id", ({body, params}, res) => {
    //     const id = params.id;
    //     let currentExercise = []

    //     db.Workout.find({_id: id})
    //         .then(dbWorkout => {
    //             currentExercise = dbWorkout[0].exercises;
    //             res.json(currentExercise)
    //             let newEx = [...currentExercise, body]
    //             updateWorkout(newEx)
    //         })
    //         .catch (err => {
    //             res.json(err)
    //         })
    //     })

    //         function updateWorkout(exercises){
    //             db.Workout.findByIdAndUpdate(id, {exercises: exercises}, function(err, doc){
    //             if(err){
    //                 console.log(err)
    //             }
    // })


    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
}

