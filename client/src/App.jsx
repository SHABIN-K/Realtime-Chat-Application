import Chat from "./Components/Chat/Chat";
import Join from "./Components/Join/Join";

import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </>
  );
};

export default App;
