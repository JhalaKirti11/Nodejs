import event from "events";

const eve = new event.EventEmitter();

eve.on("error", (err)=>{
    console.log("error event : ", err.message);
});

eve.emit("error", new Error("Error occured here!"));
