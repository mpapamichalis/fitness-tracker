const db = require("../models/workout");

module.exports = (app) => {



app.get("/api/workout", (req, res) => {
        db.workout.aggregate([
           {
            $addFields: {
                totalDuration: { $sum: "$exercises.duration" }
            }
        }
        ]).then(workout => {
            res.json(workout)
        }).catch(err => {
            res.json(err);
        })
});

app.post("/api/workout", (req, res) => {
    db.Workout.create(req.body)
    .then(workout => {
        res.json(workout); 
    })
    .catch((err) => {
        res.json(err);
    })
});

};