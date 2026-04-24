// Core Modules
const path = require("path");

// External Modules
const express = require("express");
const contactRouter = express.Router();
const rootDir = require("../utils/pathUtil");

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("3rd Middleware", req.path, req.method);
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Body:", req.body);
  res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

module.exports = contactRouter;
