var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "PedraMax"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");

    var sql = "CREATE TABLE contato (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(50) not null, email VARCHAR(50) not null, mensagem TEXT not null)";

    con.query(sql, function(err, resut){
      if(err) throw err;
      console.log("Tabela CONTATO foi criada!");
    });
  });