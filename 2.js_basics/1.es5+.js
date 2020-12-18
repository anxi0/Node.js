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
//Destructuring assignment : such a beautiful Grammer
var hello = {
  hi: 'a',
  hai: 'b',
};
const { hai, hi } = hello;
console.log(hi, hai); //freaking cool
//at array
const arr = ['a', 1, {}, true];
const [string, number, , bool] = arr;
// no object

//TODO: 73p
//Class
var Human = function (type) {
  this.type = type || 'human';
};

Human.isHuman = function (human) {
  return human instanceof Human;
};

Human.prototype.breathe = function () {
  alert('haaaaam');
};
var Zero = function (type, firstName, lastName) {
  Human.apply(this, arguments);
  this.firstName = firstName;
  this.lastName = lastName;
};
Zero.prototype = Obejct.create(Human.prototype);
Zero.prototype.constructor = Zero;
Zero.prototype.sayName = function () {
  alert(this.firstName + ' ' + this.lastName);
};
var oldZero = new Zero('Human', 'Zero', 'Cho');

console.log(Human.isHuman());
//Just pass'em

//TODO: 75p
//promise
const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('success');
  } else {
    reject('fail');
  }
});
promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Unconditionally');
  });
