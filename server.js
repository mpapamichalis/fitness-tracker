const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 3000;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness",
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

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/powerful-retreat-39538",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

require("./routes/index")(app); 
require("./routes/api")(app); 


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});