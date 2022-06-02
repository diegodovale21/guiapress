# Guiapress
Blog Guia do progamador para postagem de artigos, desenvolvido com Node.js

## Tecnologias usadas

* Node.js;
* MySQL;
* Express;
* Express Sessions;
* Body-parser;
* Nodemon;
* Sequelize;
* EJS;
* Slugfy;
* Bcryptjs;
* TinyMCE;
* Bootstrap

## Para execução do projeto

1 - Instale todas as bibliotecas usadas no projeto

> npm init  (iniciar projeto node);

> npm install --save express (instalar o express);

> npm install --save sequelize (instalar o sequelize);

> npm install --save mysql2 (instalar o mysql2 - dependência que o sequelize tem para se conectar com o mysql);

> npm install --save body-parser (instalar o body parser - biblioteca expecifica do express que usamos para trabalhar com formulários );
 
> npm install --save ejs (template engine -  para redenrizar HTML);

> npm install --save slugify (biblioteca que conseguimos transformar uma string em um slug);

> npm install --save bcryptjs (senha em modo hash);

> npm install express-sesion --save(sessões express);

> npm run dev (para rodar o projeto no servidor);

Entre na rota 8080 pelo navegador (https://localhost:8080)

## O que aprendi no projeto

* Trabalhar com middleware;
* Autenticação de login;
* Criação de artigos com TinyMCE;
* Introdução a sessions e cookies com Express Sessions;
* Páginação e rotas;
* Introdução à relações (1-P-N e 1-P-1);
* Trabalhar com listagem usando relação 1-P-N;
* Timezone com sequelize;
* Utilizar banco de dados para salvar os artigos, categorias e cadastro de usuários.

Projeto desenvolvido durante o curso de [Node.js](https://www.udemy.com/course/formacao-nodejs/)

