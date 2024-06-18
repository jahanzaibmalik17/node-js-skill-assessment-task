const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  return mongoose.connect(
    process.env.MONGO_DB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        return console.log("Database connected");
      }
      return console.log(err);
    },
  );
};

module.exports = connectDB;
