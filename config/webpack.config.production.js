const config = require("./webpack.config.js");

config.mode = "production";
config.output.publicPath = "./";
module.exports = config;
