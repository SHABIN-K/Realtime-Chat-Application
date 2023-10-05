import { io } from "socket.io-client";

const ENDPOINT_SERVER = import.meta.env.VITE_ENDPOINT_URL;
let isConnected = false;

export const runServer = () => {
  const socket = io(ENDPOINT_SERVER);

  if (isConnected) {
    console.log("backend is already run");
    return;
  }

  try {
    socket.emit("userconnection", "hello world!", (res) => {
        console.log(res);
    });
    isConnected = true;
    console.log("server is running");
  } catch (error) {
    console.log(error);
  }
};
