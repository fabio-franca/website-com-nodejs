var mysql = require('mysql');


var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
      
    con.query("CREATE DATABASE PedraMax", 
      function (err, result) {
              if (err) throw err;
              console.log("Banco de dados criado com sucesso!");
    });
  });