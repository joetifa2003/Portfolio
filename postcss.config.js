const autoprefixer = require("autoprefixer")({ grid: true });
const tailwindcss = require("tailwindcss")("./tailwind.config.js");
const postcssCustomProperties = require("postcss-custom-properties")({
  preserve: false,
});

module.exports = {
  plugins: [tailwindcss, autoprefixer, postcssCustomProperties],
};
