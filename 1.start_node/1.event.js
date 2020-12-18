//TODO: 28p
function first() {
  second();
  console.log('first');
}
function second() {
  third();
  console.log('second');
}
function third() {
  console.log('third');
} //call stack would be like annonymous < first < second < third and LIFO
first();
//TODO: 29p
function run() {
  console.log('after 0.3 seconds');
}

console.log('start');
setTimeout(run, 300);
console.log('end'); // "call stack" woulde be like annonymous < setTimeout() and setTimeout send callback run() to "background". After timeout, "background" to "task queue". At call stack empty situation, event loop send "task queue" callbacks to "call stack" then run

//TODO: 33p
// blocking non-blocking difference
// blocking : this and next
// non-blocking this and next at a time
function task() {
  console.log('In full swing....');
}
console.log('non-blocking start');
setTimeout(task, 0); //can refactored by setImmediate
console.log('non-blocking end'); //representative non-blocking code
//Don't forget synchronous==non-blocking concurrency established when sync-available job coded with non-block style

//TODO: 35p
//process vs. thread (actuallly process > thread)
//when coding with node, you can only handle on thread in process. So people say its single thread
//So reduce time by non-blocking

