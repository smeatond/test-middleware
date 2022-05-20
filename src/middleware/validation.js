const checkCorrectType = require("../utils/checkCorrectTypes");
const { checkMin, checkMax } = require("../utils/checkMinAndMax");
const checkRequiredProperty = require("../utils/checkRequiredProperty");
const validationConfig = require("../utils/validationConfig");

const validation = (validation) => {
  return (request, response, next) => {
    const { body } = request;
    let error = false;
    /**
     * Goes through each validationConfig objects to check the request body against
     */
    validation.forEach((config) => {
      const requiredFieldCheck = checkRequiredProperty(body, config);
      if (requiredFieldCheck) {
        error = true;
        return response.status(400).send(requiredFieldCheck);
      }
      const correctTypeCheck = checkCorrectType(body, config);
      if (correctTypeCheck) {
        error = true;
        return response.status(400).send(correctTypeCheck);
      }
      const minCheck = checkMin(body, config);
      if (minCheck) {
        error = true;
        return response.status(400).send(minCheck);
      }

      const maxCheck = checkMax(body, config);
      if (maxCheck) {
        error = true;
        return response.status(400).send(maxCheck);
      }
    });

    //if no errors go next
    if (!error) {
      next();
    }
  };
};

module.exports = validation;
