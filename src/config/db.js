const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(
    "mongodb+srv://devmalik17396:egi81Mn54JHHnfDV@cluster0.htolseg.mongodb.net/BookDB?retryWrites=true&w=majority",
    (err) => {
      if (!err) {
        return console.log("Database connected");
      }
      return console.log(err);
    }
  );
};

module.exports = connectDB;
