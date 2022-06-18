import React from "react";
import { Component1 } from "./components/component1";
import { Component2 } from "./components/component2";
import ReactDOM from "react-dom";

const App = () => (
  <div>
    <h3>Hello world!</h3>
    <Component1 name='Hendawy'/>
    <Component2 name='Bakr'/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
