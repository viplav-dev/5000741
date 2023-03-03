const express = require("express");
const routing = express.Router();
const todoControllers = require("../controllers/todo.controller");

routing.get("/", async (req, res) => {
  try {
    const todos = await todoControllers.getTodos();
    console.log(todos);
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error fetching todos",
        err,
      },
    });
  }
});

routing.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const todo = await todoControllers.addTodo(req.body);
    console.log(todo);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error adding todos",
        err,
      },
    });
  }
});

routing.get("/:id", async (req, res) => {
  try {
    const todo = await todoControllers.getTodoById(req.params.id);
    res.status(200).json(
      todo,
    );
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error fetching todo with id: " + req.params.id,
        err,
      },
    });
  }
});

routing.patch("/:id", async (req, res) => {
  try {
    req.body.updated_at = new Date();
    await todoControllers.updateTodo(req.params.id, req.body);
    res.status(200).json({
      result: "success",
      data: {
        message: "Todo updated successfully",
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error updating todo with id: " + req.params.id,
        err,
      },
    });
  }
});

routing.delete("/:id", async (req, res) => {
  try {
    await todoControllers.deleteTodo(req.params.id);
    res.status(200).json({
      result: "success",
      data: {
        message: "Todo deleted successfully",
      },
    });
  } catch (err) {
    res.status(500).json({
      result: "failed",
      data: {
        message: "Error deleting todo with id: " + req.params.id,
        err,
      },
    });
  }
});

module.exports = routing;
