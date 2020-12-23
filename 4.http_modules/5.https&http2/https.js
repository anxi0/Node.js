const fs = require('fs');
const https = require('http2');

https
	.createServer(
		{
			cert: fs.readFileSync('Domain Certificate Directory'),
			key: fs.readFileSync('Domain Key Directory'),
			ca: [
				fs.readFileSync('상위 certification Directory'),
				fs.readFileSync('상위 certification Directory'),
			],
		},
		(req, res) => {
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.write('<h1>Hello node</h1>');
			res.end('<p>Hello Server</p>');
		},
	)
	.listen(443, () => {
		console.log('443 Listening');
	});
