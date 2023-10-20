import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//card import here wont be used since we created the "Cardlist" component to hold its value
// import Card from "./Card";
//adding a "Cardlist" component (parent for Card component) "trying to make the code more clean is the goal"
import Cardlist from "./Cardlist";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { robots } from "./robots";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // as it was before trying to write a better and clean code

  // <React.StrictMode>
  //   <div>
  //     <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />
  //     <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />
  //     <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
  //   </div>
  // </React.StrictMode>

  //Starts the process (better way)
  // Here cardlist component will hold the props of robots
  <React.StrictMode>
  
  <Cardlist robots={robots}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
