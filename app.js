const EventEmitter = require("./events");
class Emitter extends EventEmitter {}
const myE = new Emitter();
myE.on("foo", () => {
  console.log("Event Occured");
});
myE.on("foo", () => {
  console.log("foo two an event occured");
});

myE.once("bar", () => {
  console.log("bar event occured");
});
myE.on("foo", (x) => {
  console.log(x);
});
myE.emit("foo");
myE.emit("foo", "i love you");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
myE.emit("bar");
