import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const ENDPOINT = import.meta.env.VITE_ENDPOINT_URL;
  console.log(ENDPOINT);

  useEffect(() => {
    const data = queryString.parse(location.search);

    //socket = io(ENDPOINT);

    setName(data.name);
    setRoom(data.room);
  });

  return <div>Chat</div>;
};

export default Chat;
