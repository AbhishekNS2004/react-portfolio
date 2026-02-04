module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
"scripts": {
  "build": "postcss src/input.css -o public/output.css"
}
