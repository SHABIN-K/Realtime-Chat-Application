import React, { useState } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message, error }) => {
  const { name, room } = queryString.parse(location.search);

  const [exitName, setExitName] = useState(() => name);
  const [exitRoom, setExitRoom] = useState(() => room);

  return (
    <form className="form">
      {error ? (
        <Link to={`/reload-chat?exitName=${exitName}&exitRoom=${exitRoom}`}>
          <div className="errorButton">
            <h3 className="errorText">Try again</h3>
          </div>
        </Link>
      ) : (
        <>
          <input
            className="input"
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
            onKeyDown={(event) =>
              event.key === "Enter" ? sendMessage(event) : null
            }
          />
          <button className="sendButton" onClick={(e) => sendMessage(e)}>
            Send
          </button>
        </>
      )}
    </form>
  );
};

export default Input;
