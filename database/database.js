// script banco de dados
const Sequelize = require("sequelize");

//criar uma conecção
const connection = new Sequelize("guiapress", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  timezone: "-03:00",
});

module.exports = connection;
