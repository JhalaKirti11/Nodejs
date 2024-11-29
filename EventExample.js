import event from "events";

const eve = new event.EventEmitter();

eve.on("done", () => {
    console.log("event done");
});

eve.emit("done");
eve.emit("done");

eve.once("hello", ()=>{
    console.log("emit only once!");
});

eve.emit("hello");
eve.emit("hello");     // it will not emitted;

