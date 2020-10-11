const autoprefixer = require("autoprefixer")();
const tailwindcss = require("tailwindcss")("./tailwind.config.js");
const flexGapPolyfill = require("flex-gap-polyfill");

module.exports = {
  plugins: [tailwindcss, autoprefixer, flexGapPolyfill],
};
