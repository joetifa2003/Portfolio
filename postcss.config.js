const autoprefixer = require("autoprefixer")({ grid: true });
const tailwindcss = require("tailwindcss")("./tailwind.config.js");

module.exports = {
  plugins: [tailwindcss, autoprefixer],
};
