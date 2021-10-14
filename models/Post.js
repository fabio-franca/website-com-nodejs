const db = require("./db")

const Post = db.sequelize.define('contato',{
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.TEXT
    }
})
//Post.sync({force: true})

module.exports = Post