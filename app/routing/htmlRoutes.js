var path = require("path");

function htmlRoutes(app) {
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/", function(req, res) {
        res.json(path.join(__dirname, "public/home.html"));
      });      

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

module.exports = htmlRoutes;