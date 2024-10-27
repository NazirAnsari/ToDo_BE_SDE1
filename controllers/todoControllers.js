const { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo, thisWeekTaskCompletion } = require('../services/todoServices.js');

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const { searchTask } = req?.query;
    const filterData = { searchTask };
    const todos = await getAllTodos(filterData);
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get a single todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  try {
    const todo = await createTodo(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await updateTodo(req.params.id, req.body);
    if (!updatedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a todo by 
exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await deleteTodo(req.params.id);
    if (!deletedTodo) return res.status(404).json({ message: 'Todo not found' });
    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//this week task Completion

exports.thisWeekTaskCompletion = async (req, res) => {
  try {
    const taskCounts = await thisWeekTaskCompletion();
    res.status(200).json({
      message: 'Task completion counts retrieved successfully',
      data: taskCounts,
    });
  } catch (error) {
    console.error("Error fetching task completion:", error.message);
    res.status(500).json({ message: error.message });
  }
};
