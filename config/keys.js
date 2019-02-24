//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  //in prod
  module.exports = require("./prod");
} else {
  //in development
  module.exports = require("./dev");
}
