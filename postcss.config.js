const autoprefixer = require(`autoprefixer`);
const tailwindCss = require(`tailwindcss`)(`./tailwind.config.js`);

module.exports = {
  plugins: {
    autoprefixer,
    tailwindCss
  }
};
