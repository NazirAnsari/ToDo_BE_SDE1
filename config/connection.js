require('dotenv').config(); // Load environment variables from .env
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URL 

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
   
  }
};

module.exports = connectDB;
