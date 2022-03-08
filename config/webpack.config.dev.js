const config = require("./webpack.config.js");

config.devServer = {
  historyApiFallback: true,
  port: 8081,
  liveReload: true,
  open: true,
};

config.devtool = "inline-source-map";

module.exports = config;
