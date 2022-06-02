//iniciar o servidor
const express = require("express");
const app = express();

//importar o body-parser
const bodyParser = require("body-parser");
// importar o express sessions
const session = require("express-session");

// carregar a conecção banco de dados
const connection = require("./database/database");

//importar categories
const categoriesController = require("./categories/CategoriesController");
//importar articles
const articlesController = require("./articles/ArticlesController");
// importar users
const usersController = require("./users/UsersController");

//importar os models
const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./users/User");

//carregar a View engine
app.set("view engine", "ejs");

//configurar sessões
//Redis - banco de dados para salvamento de sessões e caches
app.use(
  session({
    secret: "qualquercoisa",
    cookie: { maxAge: 300000 },
  })
);

//carregar arquivos estáticos
app.use(express.static("public"));

// configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//conectar ao banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com sucesso!");
  })
  .catch((erro) => {
    console.log(erro);
  });

//rota categories
app.use("/", categoriesController);
//rota articles
app.use("/", articlesController);
app.use("/", usersController);

app.get("/session", (req, res) => {});
app.get("/leitura", (req, res) => {});

//rota principal
app.get("/", (req, res) => {
  Article.findAll({ order: [["id", "DESC"]], limit: 4 }).then((articles) => {
    Category.findAll().then((categories) => {
      res.render("index", { articles: articles, categories: categories });
    });
  });
});
app.get("/:slug", (req, res) => {
  var slug = req.params.slug;
  Article.findOne({
    where: {
      slug: slug,
    },
  })
    .then((article) => {
      if (article != undefined) {
        Category.findAll().then((categories) => {
          res.render("article", { article: article, categories: categories });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((errp) => {
      res.redirect("/");
    });
});

app.get("/category/:slug", (req, res) => {
  var slug = req.params.slug;
  Category.findOne({ where: { slug: slug }, include: [{ model: Article }] })
    .then((category) => {
      if (category != undefined) {
        Category.findAll().then((categories) => {
          res.render("index", {
            articles: category.articles,
            categories: categories,
          });
        });
      } else {
        res.redirect("/");
      }
    })
    .catch((erro) => {
      res.redirect("/");
    });
});

//iniciar a aplicação
app.listen(8080, () => {
  console.log("O servidor está rodando!");
});
