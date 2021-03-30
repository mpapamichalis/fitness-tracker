const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;


require("./routes/index")(app); 
require("./routes/api")(app); 


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});