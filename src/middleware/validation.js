const validationConfig = require("./validationConfig");

const validation = (request, response, next) => {
  const { body } = request;
  let error = false;
  /**
   * Goes through each validationConfig objects to check the request body against
   */
  validationConfig.forEach((config) => {
    //first check has required properties
    if (config.required) {
      if (!body.hasOwnProperty(config.name)) {
        error = true;
        return response
          .status(400)
          .send({ error: `missing required property ${config.name}` });
      }
    }
    //check if has property before going through next checks (for those properties that weren't required.)
    if (body.hasOwnProperty(config.name)) {
      //if date type check date is valid
      if (config.type === "date") {
        let testDate = new Date(body[config.name]);
        if (!(testDate instanceof Date) || isNaN(testDate)) {
          error = true;
          return response.status(400).send({
            error: `property ${config.name} should be a valid ${config.type}`,
          });
        }
      } else {
        // check correct type for other data types
        if (typeof body[config.name] !== config.type) {
          error = true;
          return response.status(400).send({
            error: `property ${config.name} should be a ${config.type}`,
          });
        }
        //if there is a min value check if string is min length or number is
        if (config.hasOwnProperty("min")) {
          if (
            config.type === "string" &&
            body[config.name].length < config.min
          ) {
            error = true;
            return response.status(400).send({
              error: `property ${config.name} length too short, needs to be greater than ${config.min}`,
            });
          }
          if (config.type === "number" && body[config.name] < config.min) {
            error = true;
            return response.status(400).send({
              error: `property ${config.name} should be greater than ${config.min}`,
            });
          }
        }
        //if there is a max value check if string isn't over max length or number is
        if (config.hasOwnProperty("max")) {
          if (
            config.type === "string" &&
            body[config.name].length >= config.max
          ) {
            error = true;
            return response.status(400).send({
              error: `property ${config.name} length too long, needs to be less than ${config.max}`,
            });
          }
          if (config.type === "number" && body[config.name] >= config.max) {
            error = true;
            return response.status(400).send({
              error: `property ${config.name} needs to be less than ${config.max}`,
            });
          }
        }
      }
    }
  });

  //if no errors go next
  if (!error) {
    next();
  }
};

module.exports = validation;
