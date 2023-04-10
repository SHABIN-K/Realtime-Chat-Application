import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setRoom(room);
    setName(name);

    socket = io(ENDPOINT);

    socket.emit("join", { name, room }, () => {});

    // return () => {
    //   socket.emit("dsisconnect");
    //   socket.off();
    // };
  }, [ENDPOINT, location.search]);
  return <div>Chat</div>;
};

export default Chat;
