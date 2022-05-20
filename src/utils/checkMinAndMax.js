const checkMin = (body, config) => {
  let error = null;
  if (body.hasOwnProperty(config.name)) {
    switch (config.type) {
      case "string":
        if (
          config.hasOwnProperty("min") &&
          body[config.name].length < config.min
        ) {
          error = {
            error: `property ${config.name} length too short, needs to be greater than ${config.min}`,
          };
        }
        break;
      case "number":
        if (config.hasOwnProperty("min") && body[config.name] < config.min) {
          error = {
            error: `property ${config.name} should be greater than ${config.min}`,
          };
        }
        break;
    }
  }
  return error;
};

const checkMax = (body, config) => {
  let error = null;
  if (body.hasOwnProperty(config.name) && config.hasOwnProperty("max")) {
    switch (config.type) {
      case "string":
        if (body[config.name].length > config.max) {
          error = {
            error: `property ${config.name} length too long, needs to be less than ${config.max}`,
          };
        }
        break;
      case "number":
        if (body[config.name] > config.max) {
          error = {
            error: `property ${config.name} needs to be less than ${config.max}`,
          };
        }
        break;

      default:
        break;
    }
  }
  return error;
};
module.exports = { checkMin, checkMax };
