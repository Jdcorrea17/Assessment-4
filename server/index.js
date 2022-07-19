const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const {getCompliment, getFortune, getGame, deleteGame, createGame, updateGame} = require('./controller.js')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/games", getGame)
app.delete("/api/games/:id", deleteGame)
app.post("/api/games", createGame)
app.put("/api/games/:id", updateGame)

app.listen(4000, () => console.log("Server running on 4000"));
