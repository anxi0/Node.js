const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCoookies = (cookie = '') =>
	cookie
		.split(';')
		.map((v) => v.split('='))
		.reduce((acc, [k, v]) => {
			acc[k.trim()] = decodeURIComponent(v);
			return acc;
		}, {});

http
	.createServer(async (req, res) => {
		const cookies = parseCoookies(req.headers.cookie);
		if (req.url.startsWith('/login')) {
			const { query } = url.parse(req.url);
			console.log(query);
			const { name } = qs.parse(query);
			const expires = new Date();

			expires.setMinutes(expires.getMinutes() + 5);
			res.writeHead(302, {
				Location: '/',
				'Set-Cookie': `name=${encodeURIComponent(
					name,
				)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
				//Expires=Date : literally
				//Max-age=seconds : Expire Seconds. High Priority than Expires
				//Domain=DomainName : Can Specify Domain
				//Path=URL : Can Specify cookie send domain
				//Secure : send cookie when https
				//HttpOnly : js Can't access to cookies
			});
			res.end();
		} else if (cookies.name) {
			res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
			res.end(`${cookies.name} HI`);
		} else {
			try {
				const data = await fs.readFile('./cookie.html');
				res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
				res.end(data);
			} catch (e) {
				res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
				res.end(e.message);
			}
		}
	})
	.listen(8080, () => {
		console.log('8080 Listening');
	});
