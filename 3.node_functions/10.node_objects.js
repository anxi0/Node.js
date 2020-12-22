/*
//TODO: 113p : os object
const os = require('os')
console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());
console.log('경로---------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());
console.log('cpu 정보---------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);
console.log('메모리 정보---------------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());
*/
/*
//TODO: 115p : path object
const path = require('path');
const string = __filename;
console.log('path.sep:', path.sep); //windwows \ POSIX /
console.log('path.delimiter:', path.delimiter); // windows ; POSIX :
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
dir:'C:\\users\\zerocho',
name:'path',
ext:'.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'))
;
console.log('------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js','C:\\')); // prints path a to b
console.log('path.join():', path.join(__dirname,'..','..','/users','.','/zerocho')); // union paths into a path
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho')); // being absolute, so ignores first one
// js array you should use \\ but normally use \
// When you use windows style on POSIX, just exchange them by using path.win32.join or sep. Opposite also make sense.
*/
/*
//TODO: 119p : url Object
const url = require('url');
const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'); //WHATWG style
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));
console.log('------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor'); // Node style
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));
*/
/*
//TODO: 121p : SearchParams Object
const { URL } = require('url');
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));
console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());
myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('filter'));
myURL.searchParams.set('filter','es6');
console.log(myURL.searchParams.getAll('filter'));
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));
console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();
*/
/*
//TODO: 123p : querystring 
//make Node style url search part easier
const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));
*/
/*
//TODO: 124p : crypto
const crypto = require('crypto');

//hash algorithm
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));

//pbkdf2
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log("hashed key:",key.toString('base64'));
    })
})
//block algorithm

const cipher = crypto.createCipher('aes-256-cbc','열쇠');
let result = cipher.update('암호화할 문장','utf8','base64');
result += cipher.final('base64');
console.log('암호화:', result);
const decipher = crypto.createDecipher('aes-256-cbc','열쇠');
let result2 = decipher.update(result,'base64','utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);
*/
/*
//TODO: 129p : util
const util = require('util');
const crypto = require('crypto');
const dontUseMe = util.deprecate((x, y) => {
console.log(x + y);
},'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf) => {
console.log(buf.toString('base64'));
})
.catch((error) => {
console.error(error);
});
*/
/*
//TODO: 130p : mutlithreading TODO: passed
const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
} else {
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}
*/

//TODO: 135p : child_process
//Can run shell commander or other program
const exec = require('child_process').exec;
var process = exec('dir');

process.stdout.on('data', function (data) {
    console.log(data.toString())
})
process.stderr.on('data', function (data) {
    console.error(data.toString())
})
//run other program
const spawn = require('child_process').spawn;

var process = spawn('python', ['test.py']);

process.stdout.on('data', function (data) {
    console.log(data.toString())
})
process.stderr.on('data', function (data) {
    console.error(data.toString())
})
// decode with iconv