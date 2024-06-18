const express = require("express");
const routes = express.Router();
const controller = require("../controller/books");

routes.get("/", controller.getALL);
routes.get("/add", controller.addBook);
routes.post("/", controller.saveBook);
routes.put("/:id", controller.update);
routes.get("/:id/edit", controller.edit);

module.exports = routes;
