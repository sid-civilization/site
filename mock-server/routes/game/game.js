const express = require('express');
let data = require("./games.json");
const router = express.Router();
const generateId = require("../../util/id-generator");

router.get("/", (request, response) => {
    response.json(data);
});

router.get("/:id", (request, response) => {
    const {id} = request.params;
    const game = data.find(game => game.id = id);
    response.json(game);
});

router.post("/create", (request, response) => {
    const gameCreation = request.body;
    const id = generateId();

    const game = {
        id,
        name: gameCreation.name,
        owner: gameCreation.owner
    };

    data.push(game);
    response.json(game);
});

module.exports = router;