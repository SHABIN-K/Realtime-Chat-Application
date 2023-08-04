import React from "react";
import "./Message.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("🦄 Link copied !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });
  };

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <ToastContainer />
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite" onClick={() => handleCopy(text)}>
          {text}
        </p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark" onClick={() => handleCopy(text)}>
          {ReactEmoji.emojify(text)}
        </p>
      </div>
      <p className="sentText pl-10 ">{user}</p>
    </div>
  );
};

export default Message;
