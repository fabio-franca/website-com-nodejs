const Sequelize = require("sequelize");

//Conexão com Mysql
const sequelize = new Sequelize("pedramax","root","root", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}