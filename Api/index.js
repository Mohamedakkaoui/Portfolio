const express = require("express");
const server = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require('dotenv').config();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

// Keys
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB database
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Database is connected successfully');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

// Schema for the comments
const CommentSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Subject: { type: String, required: true },
  Message: { type: String, required: true }
});

const CommentModel = mongoose.model('Comments', CommentSchema);

server.post('/Add', async (req, res) => {
  try {
    const data = req.body;
    const comment = new CommentModel(data);
    await comment.save();
    res.status(201).json({Comment : comment , Message: 'Comment added successfully' });
  } catch (error) {
    res.status(500).json({ Message: 'Failed to add comment', Error : error });
  }
});

// Listening on the chosen port
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
