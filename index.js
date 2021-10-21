const express = require("express");
const blogs = require("./db");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home", { blogs });
});

app.get("/articulo/:id", (req, res) => {
  let key = req.params.id;
  let singleBlog = { error: "No se encuentra el item" };

  for (let indice = 0; indice < blogs.length; indice++) {
    if (blogs[indice].id === parseInt(key)) {
      singleBlog = blogs[indice];
    }
  }
  res.render("article", { singleBlog });
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
