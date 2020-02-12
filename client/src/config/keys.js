//keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
  // we are in production - return the prod set of keys
  const domainApiKey = process.env.REACT_APP_CLIENT_API_KEY;
  module.exports = domainApiKey;
} else {
  // we are in development -return the dev keys
  module.exports = require("./dev");
}
