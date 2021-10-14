var http = require('http');

http.createServer(function (req, res) {
      if(req.url != '/enviar_dados'){
	   	alert("Falha no envio!")
	} else {
	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.write('<h2>Mensagem enviada!</h2>');
 	return res.end();
	}
}).listen(8080); 