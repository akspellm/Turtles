const turtleData = require('../data/turtles.js')

module.exports = function(app) {
    app.get('/api/turtles', function(req, res) {
        res.json(turtleData);
    });

    app.post("/api/turtles", function(req, res) {
        turtleData.push(req.body);
        res.json(true)
    })
};