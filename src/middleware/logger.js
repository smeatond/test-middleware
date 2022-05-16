/**
 * Logger middelware that logs "hello" and adds test property equal to "testing" to request.
 */
const logger = (req, res, next) => {
  console.log("hello");
  req.test = "testing";
  next();
};

module.exports = logger;
