var friendData = require("../data/friends");

function apiRoutes(app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
        };

        for (let j = 0; j < req.body.scores.length; j++) {
            newFriend.scores.push(parseInt(req.body.scores[j]))
        }

        let totalDiffs = [];

        for (j = 0; j < friendData.length; j++) {
            let diffSum = 0;
            for (let i = 0; i < newFriend.scores.length; i++) {
                diffSum += Math.abs(friendData[j].scores[i] - newFriend.scores[i]);
            };
            totalDiffs.push(diffSum);
        }

        let friendMatchIndex = 0;
        for (let i = 1; i < totalDiffs.length; i++) {
            if (totalDiffs[i] <= totalDiffs[friendMatchIndex]) {
                friendMatchIndex = i;
            }
        }

        let friendMatch = friendData[friendMatchIndex];
        res.json(friendMatch);

        friendData.push(req.body);

    });
};

module.exports = apiRoutes;
