/*
//TODO: 138p : fs
const fs = require('fs').promises;

fs.writeFile('./writeme.txt', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('./writeme.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((error) => {
        console.error(error);
    })
*/

//TODO: 140p : Sync and Async
//async&non-blocking sync&blocking blocking is the bigger diagram boundary.
//asynchronous way
var fs = require('fs')
/*
console.log('start')
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('1.', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('2.', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log('3.', data.toString());
})
console.log('end')
//Print in order, you can write it in call-back hell form, however it sucksPropTypes.
//Hb using sync functions
console.log('start')
let data = fs.readFileSync('./readme.txt');
console.log('1.',data.toString())
data = fs.readFileSync('./readme.txt');
console.log('2.', data.toString())
data = fs.readFileSync('./readme.txt');
console.log('3.', data.toString())
console.log("end"); //this code can't handle lots of requests. Then, use Promise or Async/Await
*/

//TODO: 145p : buffer and stream TODO: passed

//TODO: 152p : Other fs methods
// When check file or dir exist
fs = require('fs').promises;
const constants = require('fs').constants;
/*
fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK) //File ok, write ok, read ok
    .then(() => {
        return Promise.reject('Folder already exists');
    })
    .catch((e) => {
        if (e.code === 'ENOENT') { //Error NO ENTry
            console.log('No folder')
            return fs.mkdir('./folder');
        }
        return Promise.reject(e);
    })
    .then(() => {
        console.log('Folder now exists')
        return fs.open('./folder/file.js', 'w');
    })
    .then((fd) => {
        console.log('Empty file now exists', fd);
        return fs.rename('./folder/file.js', './folder/newfile.js');
    })
    .then(() => {
        console.log('Renaming completed');
    })
    .catch((e) => {
        console.error(e);
    })*/
//When delete file or dir
fs = require('fs')
/*
fs.readdir('./folder', (err, dir)=>{
    if (err) {
        throw err;
    }
    console.log('now')
    console.log('Folder index', dir);
    fs.unlink('./folder/newfile.js', (e) => {
        if (e) {
            throw e;
        }
        console.log('File deleted', dir[0]);
        fs.rmdir('./folder', (e) => {
            if (e) throw e;
            console.log('Folder deleted')
        })
    })
})*/
fs.copyFile('readme.txt', 'writeme.txt', (e) => {
    if (e) throw e;
    console.log('readme.txt was copied to writeme.txt')
})