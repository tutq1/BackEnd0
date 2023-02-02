const express = require("express");

const routesAPI = express.Router();

const {
  getUsersAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
} = require("../controllers/apiController");

routesAPI.get("/", (req, res) => {
  res.send("hello word");
});

routesAPI.get("/users", getUsersAPI);

routesAPI.post("/users", postCreateUserAPI);

routesAPI.patch("/users", putUpdateUserAPI);

routesAPI.delete("/users", deleteUserAPI);

module.exports = routesAPI;
