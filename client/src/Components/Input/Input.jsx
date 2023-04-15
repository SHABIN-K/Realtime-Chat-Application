import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message, error}) => {
  const navigate = useNavigate();

  const { name, room } = queryString.parse(location.search);

  const [exitName, setExitName] = useState(() => name);
  const [exitRoom, setExitRoom] = useState(() => room);

  const errorReload = () => {    
    navigate(`/chat?name=${exitName}&room=${exitRoom}`, { replace: true });
  }

  return (
    <form className="form">
      {error ? (
        <div className="errorButton" onClick={() => errorReload()}>
          <p className="errorText">Reload</p>
        </div>
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
