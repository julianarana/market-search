var path = require("path");
function buildConfig(env) {
  if (env === "dev" || env === "prod") {
    return require("./config/webpack/webpack." + env + ".config.js");
  } else {
    return require("./config/webpack/webpack.dev.config.js");
  }
}
module.exports = buildConfig;
