const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: true,
    unique: true,
  },
  taskTitle: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  startDate: { // Ensure this is consistent with your form
    type: Date,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
  isTaskCompleted: {
    type: Boolean,
    default: false,
  },
});

todoSchema.pre('save', function (next) {
  if (this.endTime <= this.startTime) {
    return next(new Error("End time must be after start time."));
  }
  next();
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
