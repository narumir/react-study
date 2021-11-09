import React from "react";
import ReactDom from "react-dom";

const element = (
  <React.StrictMode>
    hello world
  </React.StrictMode>
);
const container = document.getElementById("root");

ReactDom.render(element, container);
