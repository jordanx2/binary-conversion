let http = require('http');
let port = 3000;
let fs = require('fs');
let server = http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type':'text/html' });
	fs.readFile('index.html', function(error, data){
		if(error){
			res.readHead(404);
			res.write('File Not Found: 404');
		}else{
			res.write(data);
		}
		res.end();
	});
});

server.listen(port, function(error){
	if(error){
		console.log('an error occurred, ' + error);
	}else{
		console.log('now listening on port ' + port);
	}
})