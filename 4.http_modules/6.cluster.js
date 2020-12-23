const cluster = require('cluster');
const { count } = require('console');
const http = require('http');
const countCores = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`You got ${countCores} cores`);
	console.log(`Master pid ${process.pid}`);

	for (let i = 0; i < countCores; i++) {
		cluster.fork();
	}
	cluster.on('exit', (worker, code, signal) => {
		console.log(`${worker.process.pid} denied`);
		console.log('code', code, 'signal', signal);
	});
} else {
	http
		.createServer((req, res) => {
			res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
			res.write('<h1>Hi Node</h1>');
			res.end('<p>Hello Cluster!</p>');
			setTimeout(() => {
				process.exit(1);
			}, 1000);
		})
		.listen(8080);

	console.log(`${process.pid} executed`);
}
