const checkRequiredProperty = (body, config) => {
  let error = null;
  if (config.required) {
    if (!body.hasOwnProperty(config.name)) {
      error = { error: `missing required property ${config.name}` };
    }
  }

  return error;
};

module.exports = checkRequiredProperty;
