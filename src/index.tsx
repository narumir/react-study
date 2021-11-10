import React from "react";
import ReactDom from "react-dom";
import {
  App,
} from "./app";

const element = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const container = document.getElementById("root");

ReactDom.render(element, container);
