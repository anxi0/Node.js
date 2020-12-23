const http = require('http');
const fs = require('fs').promises;

http
	.createServer(async (req, res) => {
		try {
			const data = await fs.readFile('./2.server.html');
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.end(data);
		} catch (e) {
			console.error(e);
			res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
			res.end(e.message);
		}
	})
	.listen(8080, () => {
		console.log('Listening on 8080');
	});
