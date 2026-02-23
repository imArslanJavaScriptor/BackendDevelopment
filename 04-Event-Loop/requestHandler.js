const sumReqHandler = require("./routeHandlers/sum.route");
const calculatorReqHandler = require("./routeHandlers/calculator.route");
const homeReqHandler = require("./routeHandlers/home.route");
const pageNotFoundHandler = require("./routeHandlers/notFound.route");

const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    homeReqHandler(res);
  } else if (req.url === "/calculator") {
    calculatorReqHandler(res);
  } else if (req.url === "/calculate-result" && req.method === "POST") {
    sumReqHandler(req, res);
  } else {
    pageNotFoundHandler(res)
  }
}; 

module.exports = requestHandler;
