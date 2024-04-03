require("babel-register");

const router = require("./src/router").default;
const Sitemap = require("react-router-sitemap").default;

new Sitemap(router)
  .build("http://localhost:5173/")
  .save("./public/sitemap.xml");
