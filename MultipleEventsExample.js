import event from "events";

const eve = new event.EventEmitter();

eve.on("greet", () =>{
    console.log("greet 1, name?");
});
eve.on("greet", ()=>{
    console.log("greet 2, age");
});

eve.emit("greet");      // emit both greet events (hello and age);
