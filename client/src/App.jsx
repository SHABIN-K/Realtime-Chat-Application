import React from "react";
import { Routes, Route } from "react-router-dom";

import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Routes>
  );
};

export default App;
