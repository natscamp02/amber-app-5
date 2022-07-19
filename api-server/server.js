const mongoose = require("mongoose");

const app = require("./app");
const PORT = process.env.PORT || 3000;

mongoose
    .connect("mongodb://localhost:27017/amberapp5")
    .then(() => console.log("Connected to database..."));

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
