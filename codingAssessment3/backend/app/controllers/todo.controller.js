const Todo = require("../model/todo.model");
const getTodos = async () => {
  try {
    const todos = await Todo.find();
    return todos;
  } catch (err) {
    throw new Error("Cannot get todos: " + err);
  }
};

const getTodoById = async (id) => {
  try {
    const todo = await Todo.findById(id);
    return todo;
  } catch (err) {
    throw new Error("Cannot get todos: " + err);
  }
};

const addTodo = async (todo) => {
  //   console.log(todo);
  try {
    return await Todo.create(todo);
  } catch (err) {
    throw new Error("Cannot add todo: " + err);
  }
};

const updateTodo = async (id, todo) => {
  try {
    await Todo.findByIdAndUpdate(id, { $set: todo }, { new: true });
  } catch (err) {
    throw new Error("Cannot update todo: " + err);
  }
};

const deleteTodo = async (id) => {
  try {
    await Todo.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("Cannot delete todo: " + err);
  }
};

module.exports = { getTodos, getTodoById, addTodo, updateTodo, deleteTodo };
