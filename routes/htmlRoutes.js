const path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
      });

      
  // Called when "Countinue Workout" or "new Workout" is clicked in index.html
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
  });
  //load dashboard
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
  });
};