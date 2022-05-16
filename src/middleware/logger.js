const logger = (req, res, next) => {
  console.log("hello");
  req.test = "testing";
  next();
};

module.exports = logger;
