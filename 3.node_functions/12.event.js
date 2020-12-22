const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('event1 called');
})
myEvent.on('event2', () => {
    console.log('event2 called')
})

myEvent.emit('event1')
myEvent.once('event3', () => {
    console.log('event 3 called');
    });
    myEvent.emit('event3');
myEvent.emit('event3'); //just ignored cuz it's once
myEvent.removeAllListeners('event1')
myEvent.emit('event1')
const listener = () => {
    console.log('event4');
    };
    myEvent.on('event4', listener);
    myEvent.removeListener('event4', listener);
myEvent.emit('event4');
myEvent.on('event2', () => {
    console.log('event2 2 called')
})
console.log(myEvent.listenerCount('event2'));
//TODO: try-catch TODO: passed
process.on('uncaughtException', (err) => { //FIXME: As a last option, Don't use it! just process.exit() to 
    console.error('Uncaught Error', err);
    });
    setInterval(() => {
    throw new Error('Fuck your server');
    }, 1000);
    setTimeout(() => {
    console.log('Executed');
    }, 2000);
