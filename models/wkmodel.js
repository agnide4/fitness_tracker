const mongoose = require("mongoose");


const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }],

  },opts);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;