const express = require("express");
const socket = require("socket.io");

const app = express();
const chatSignal = "chat";

app.get("/",function(req,res){
    res.sendFile("index.html");
})

const server = app.listen(4000, function(){
    console.log("initiated server");
})

const io = socket(server);

io.on("connection", function(socket){
    console.log("connection established with "+socket.id);

    socket.on(chatSignal, function(data){
        // io.sockets.emit(chatSignal, data);
        socket.broadcast.emit(chatSignal,data);
        console.log(data.id+"  "+data.text);
    });
})