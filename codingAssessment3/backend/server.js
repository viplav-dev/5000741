require("dotenv").config('./env');
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const todoRouter = require("./app/routes/todo.routes");
const app = express();
const port = process.env.BACKEND_PORT || 4200;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection established");
  });

app.use("/api/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Todo App");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
