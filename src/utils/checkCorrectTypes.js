const checkCorrectType = (body, config) => {
  let error = null;
  if (body.hasOwnProperty(config.name)) {
    if (config.type === "date") {
      let testDate = new Date(body[config.name]);
      if (!(testDate instanceof Date) || isNaN(testDate)) {
        error = {
          error: `property ${config.name} should be a valid ${config.type}`,
        };
      }
    } else {
      // check correct type for other data types
      if (typeof body[config.name] !== config.type) {
        error = {
          error: `property ${config.name} should be a valid ${config.type}`,
        };
      }
    }
  }

  return error;
};

module.exports = checkCorrectType;
