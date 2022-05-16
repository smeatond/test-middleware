const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("./middleware/logger");
const validation = require("./middleware/validation");

app.use(cors());
app.use(express.json());

app.get("/test", logger, (request, response) => {
  response.send("hello world " + request.test);
});

app.post("/test", validation, (request, response) => {
  return response.send(request.body);
});

module.exports = app;
