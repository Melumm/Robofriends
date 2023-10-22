import React from "react";
import Cardlist from "./Cardlist";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className="tc">
      <h1>Robo Freiends</h1>
      <SearchBox />
      <Cardlist robots={robots} />
    </div>
  );
};

export default App;
