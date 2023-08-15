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

// io.on：クライアントからサーバーへの通信をつなげる
io.on("connection", (socket) => {
  /**
   * クライアントからのデータを受信する
   * 「send_name_id」は、
   */
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
