const path = require("path");
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === "object" && "_method" in req.body) {
      var method = req.body._method;
      console.log(method, req.body._method);
      delete req.body._method;
      return method;
    }
  }),
);
app.use(express.static("public"));

const dirname = __dirname;
require("app-module-path").addPath(dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const bookRoutes = require("./routes/book");

app.use("/", bookRoutes);

app.listen(5000, () => console.log("Server is running on 5000"));
