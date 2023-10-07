const express = require("express");
const { createServer } = require("http");
const cors = require("cors");
require("dotenv").config();

const { Server } = require("socket.io");
const { instrument } = require("@socket.io/admin-ui");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./Users/users");

const app = express();
const server = createServer(app);
app.use(cors());

var origins = [
  "http://localhost:3001",
  "https://admin.socket.io",
  "https://chatopiaa.netlify.app/",
];

const io = new Server(server, {
  cors: {
    origin: origins,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

//app.use(express.static("../server/node_modules/@socket.io/admin-ui/ui/dist"));

io.on("connect", (socket) => {
  console.log("user connected");
  socket.on("userconnection", (msg, callback) => {
    console.log("user connection msg received :" + msg);
    callback("got it");
  });

  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    // Handle error when user is not found
    if (!user) return callback("error");

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    console.log("user left");
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "Admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server has started`));

instrument(io, {
  auth: false,
});
