const constant = require("../utils/constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        title: "Validation Faield",
        message: err.message,
      });
      break;
    case constant.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
      });
      break;
    case constant.FORBIDDEN:
      res.json({
        title: "For bidden",
        message: err.message,
      });
      break;
    case constant.UNUTHORIZED:
      res.json({
        title: "Not authorized",
        message: err.message,
      });
      break;
    default:
      console.log("Error");
      break;
  }
};

module.exports = errorHandler;
