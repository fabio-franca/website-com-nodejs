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
  var sql = "INSERT INTO contato (nome, email,mensagem) VALUES ?";

  let nome_contato = document.getElementById("nome_contato").val;
  let email_contato = document.getElementById("email_contato").val;
  let mensagem_contato = document.getElementById("mensagem_contato").val;

  var values = [
      [nome_contato,email_contato,mensagem_contato]
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Número de registros inseridos: " + result.affectedRows);
    console.log(nome_contato);
    console.log(email_contato);
    console.log(mensagem_contato);
  });
});