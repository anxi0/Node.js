//TODO: 67p
//const let
//template stinrg using ``(bakcticks)
//TODO: 69p
//Object Literal
var sayNode = function () {
  console.log('Node');
};

var es = 'ES';
//before
var oldObject = {
  sayJS: function () {
    console.log('JS');
  },
  sayNode: sayNode,
};
oldObject[es + 6] = 'Fantatstic';
oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

//ES5+ versions
var newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode,
  [es + 6]: 'Fantastic',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);

//TODO: 70p
//arrow function
//ex1
function add1(x, y) {
  return x + y;
}
const add2 = (x, y) => {
  return x + y;
};
const add3 = (x, y) => x + y;
const add4 = (x, y) => x + y;
//ex 2
function not1(x) {
  return !x;
}
const not2 = (x) => !x;

//this binding
//if you use arrow function in forEach or something, you can use .this directly. But just function(){}... should bind this to other variables


//TODO:72p
const {a,b} = 