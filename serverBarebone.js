var http = require("http");

http
	.createServer(servercek)
	.listen(1338, "127.0.0.1");

function servercek(req, res) {
	res.writeHead(200, {"Content-Type" : "text/plain"});
	var shitstorm = "Hello world\nNew line was created.\nAnd another one";
	shitstorm += "\nand another one bites the dust.";
	res.end(shitstorm);
}

console.log("Server running at http://127.0.0.1:1338 - fight the powah");