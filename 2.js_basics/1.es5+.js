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
Zero.prototype = Object.create(Human.prototype);
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
// Or you can type like this pass through
promise
  .then((message) => {
  return new Promise((resolve, reject) => {
    resolve(message);
  })
})
  .then((message2) => {
    return new Promise((resolve, reject) => {
      resolve(message2);
    })
  })
    .then((message3) => {
      console.log(message3);
    })
    .catch((error) => {
      console.error(error);
    })


const promise1 = Promise.resolve('suc1') //res or rej directly
const promise2 = Promise.reject('suc2')
Promise.all([promise1, promise2])
  .then(result => {
  console.log(result)
  }).catch((error) => {
  console.error("err",error)
})

// async/await
function findAndSaveUser(Users) {
  Users.findOne({}).then(user => {
    user.name = 'zero';
    return user.save();
  }).then(user => {
    return Users.findOne({ gender: 'm' });
  }).then(user => {
    
  }).catch(err => {
    console.error(err)
  })
}
//can reduce code up there like this
async function findAndSaveUser(Users) {
 try{let user = await Users.findOne({});
  user.name = 'zero'
  user = await user.save();
  user = await Users.findOne({ gender: 'm' });
 } catch (err) {
   console.error(err)
}
}
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise)
  }
})();
