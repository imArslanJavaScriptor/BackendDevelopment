// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

// File Path
const favouriteDataPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite {
  static addToFavourites(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        console.log("Home already in marked as favourite");
        return callback();
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), (error) => {
          console.log("File Writing Concluded", error);
          callback();
        });
      }
    });
  }
  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
