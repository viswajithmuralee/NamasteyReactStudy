import React from "react";
import ReactDOM from "react-dom/client";        
const Title =()=> <h1 className="head">Hello World from React 🚀</h1>;
const Comp =()=>  <h2>This is a React Component🐯</h2>;
const parent = (
  <div id="parent">
    <Title></Title>
    <Comp />
  </div>
);
const rootEl = document.getElementById("root");
const root = ReactDOM.createRoot(rootEl);
root.render(parent);