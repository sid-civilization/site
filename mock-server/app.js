const express = require('express');
const bodyParser = require('body-parser');
const game = require("./routes/game/game");

const app = express();

const appName = "mock-server";
const port = 8080;

const jsonBodyParser = bodyParser.json();

app.use(jsonBodyParser);
app.use("/game", game);

app.listen(port, () => {
    console.log(`${appName} listening by express on port ${port}!`)
});