const express = require("express");
const mongoose = require("mongoose");
//require('dotenv').config();
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv:thatsnotart:2N@LA4oreo@cluster0.dxula.mongodb.net/fitness?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

