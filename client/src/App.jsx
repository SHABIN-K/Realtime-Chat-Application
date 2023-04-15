import React from "react";
import { Routes, Route } from "react-router-dom";

import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";
import ReloadChat from "./Components/Join/ReloadChat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/reload-chat" element={<ReloadChat />} />
    </Routes>
  );
};

export default App;
