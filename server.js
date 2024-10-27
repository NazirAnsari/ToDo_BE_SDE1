const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connection');
const todoRoutes = require('./routes/routeTodo');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Default route
app.get('/', (req, res) => {
  res.send("Welcome! The server is online and waiting for requests.");
});

connectDB();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
