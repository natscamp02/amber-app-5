const path = require("path");
const express = require("express");
const cors = require("cors");

const studentRouter = require("./routes/student");

const app = express();

app.use(cors("*"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/students", studentRouter);

app.all("*", (req, res, next) =>
    next(new Error(`Cannot find ${req.originalUrl}`))
);
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ status: "error", message: error.message });
});

module.exports = app;
