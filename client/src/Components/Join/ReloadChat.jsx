import React from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import "./ReloadChat.css";
import Wtf from "../contact/Wtf";

const ReloadChat = () => {
  const { exitName, exitRoom } = queryString.parse(location.search);
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Hey {exitName}</h1>
        <div>
          <input defaultValue={exitRoom} className="joinInput" type="number" />
        </div>
        <Link to={`/chat?name=${exitName}&room=${exitRoom}`}>
          <button className={"button mt-20"} type="submit">
            Reload
          </button>
        </Link>
        <div className="vtag mt-20">version 0.2.6</div>
        <div className="vtag ">
          Created by{" "}
          <a href="https://github.com/SHABIN-K" className="ctag">
            shabin k 😎
          </a>
        </div>
        <Wtf />
      </div>
    </div>
  );
};

export default ReloadChat;
