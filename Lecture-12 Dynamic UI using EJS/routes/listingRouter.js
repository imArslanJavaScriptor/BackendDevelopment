// Core Modules
const path = require("path")

// External Modules
const express = require("express");
const listingRouter = express.Router();

// Local Module
const { registeredHomes } = require("./hostRouter");

listingRouter.get("/my-listings", (req, res, next) => {
  console.log(registeredHomes)
  res.render("listings", {registeredHomes})
});

module.exports = listingRouter;
