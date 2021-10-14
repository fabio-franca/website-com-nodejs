const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const Post = require("./models/Post")

//-----------------------TODO
//Config template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Config Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//Rotas
app.get("/principal",(req,res)=>{
    res.render('formulario')
});

app.post("/add", (req,res)=>{
    Post.create({
        nome: req.body.nome,
        email: req.body.email,
        mensagem: req.body.mensagem
    }).then(()=>{
        res.redirect("/")
    }).catch((erro)=>{
        res.send("Houve um erro: "+erro)
    })
});

app.get("/", (req,res)=>{
    res.send("Contato enviado com sucesso!")
})

//-----------------------TODO
app.listen(8081, ()=>{
console.log("Servidor conectado na porta: 8081");
})