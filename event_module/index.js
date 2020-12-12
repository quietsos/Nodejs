// Event modules:
// Node.js has a bulit-in module called "Events"
// where we can create, fire, and listen for our own event. 

// Registering for the event to be fired only on time using once. 

const EventEmitter = require("events");
const { once } = require("process")

const event = new EventEmitter();

event.on('sayMyName', () =>{
    console.log("Your name is sohan");
})

event.emit('sayMyName');

// Create an event emitter instance and register a couple of callbacks 

const newEventEmitter = require('events');

const newEvent = new newEventEmitter();


newEvent.on('Country', () =>{
    console.log("Bangladesh");
})

newEvent.on('Country', () =>{
    console.log("America");
})

newEvent.on('Country', () =>{
    console.log("England");
})


newEvent.emit("Country");


// Registering for the event with callack parameters 

const emitEvent = require('events');
const eventNew = new emitEvent();

eventNew.on('check', (sc,msg) =>{
    console.log(`Status code is ${sc} and page is ${msg}`);
})
eventNew.emit('check',200,'ok');