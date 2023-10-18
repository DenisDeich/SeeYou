const express = require("express");
const { createServer } = require("node:http");
const io = require("socket.io");

const app = express();
const server = createServer(app);

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Test");
});

io.on("connection", (socket) => {
  socket.emit("hi", socket.id);

  // socket.on("calling", ({ serverInfo }) => {
  //   io.to(user2).emit("calling", { signal: serverInfo });
  // });

  // socket.on("answer", (offer) => {
  //   io.to(offer.to).emit("p2p succeed", offer.signal);
  // });

  socket.on("disconnection", () => {
    socket.broadcast.emit("connection stopped");
  });
});

server.listen(PORT, () => console.log("Server is running..."));
