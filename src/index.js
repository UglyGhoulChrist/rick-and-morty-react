import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Header from "./components/Header";
import Main from "./components/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Main />
  </>
);
