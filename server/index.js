const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

const PORT = 5001;

// クライアントと通信
// io.on：クライアント => サーバー 受け取る
io.on("connection", (socket) => {
  console.log("クライアントと通信しました。");

  // クライアントから受信
  socket.on("send_name_id", (data) => {
    console.log(data);

    io.emit("recieved_name_id", data);
  });

  socket.on("disconnect", () => {
    console.log("クライアントと接続が切れました。");
  });
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
