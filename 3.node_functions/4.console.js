const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        }
    }
};
console.time('Time Spent')
console.log('normal')
console.log(string, number, boolean);
console.error('error')

console.table([{ name: 'Junwon', birth: 2002 }, { name: 'wonjun', birth: 2015 }]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("start")
for (let i = 0; i < 10000000; i++){}
console.timeEnd('start')
function b() {
    console.trace('error catching')
}
function a() {
    b()
}
a()
console.timeEnd('Time Spent');