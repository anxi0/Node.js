//TODO: 105p : require

module.exports = 'find me!';

require('./var')

// console.log('cache', require.cache);
console.log('main', require.main === module);
console.log(require.main.filename);

//what if two module exports each other? infinite loop? nope. just make a blank object.