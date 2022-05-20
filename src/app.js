const express = require("express");
const cors = require("cors");
const app = express();
const logger = require("./middleware/logger");
const validation = require("./middleware/validation");

app.use(cors());
app.use(express.json());

/**
 * GET added middleware that will console.log "hello" and added a property "test" to the request object
 */
app.get("/test", logger, (request, response) => {
  response.send("hello world " + request.test);
});

/**
 * POST added middleware that will validate the following:
 * - the request body has the following fields: name & age
 * - that name is of type string and has at least one character i.e. not empty
 * - that age is of type number and is between 1 and 99
 * - if date is in the request body it is a valid date
 *
 * If any of the above is missing it returns a 400 with an error message.
 */
app.post(
  "/test",
  validation([
    {
      name: "name",
      type: "string",
      min: 1,
      required: true,
    },
    {
      name: "age",
      type: "number",
      min: 1,
      max: 99,
      required: true,
    },
    {
      name: "date",
      type: "date",
      required: false,
    },
  ]),
  (request, response) => {
    return response.send(request.body);
  }
);

module.exports = app;
