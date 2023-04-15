import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [error, setError] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Room (number only)"
            className="joinInput mt-20"
            type="number"
            onChange={(event) => setRoom(event.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <Link
          onClick={(e) => {
            if (!name || !room) {
              e.preventDefault();
              setError("Both fields are required.");
            }
          }}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
        <div className="vtag mt-20">version 2.3</div>
        <div className="vtag ">Created by shabin k 😎</div>
      </div>
    </div>
  );
};

export default Join;
