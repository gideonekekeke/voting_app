const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const url = "mongodb://localhost/voteDB";
const cors = require("cors");
const port = 4000;

const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(url).then(() => {
	console.log("database is connected successfully");
});

app.use("/api", require("./Router"));

app.listen(port, () => {
	console.log("listening on port ");
});
