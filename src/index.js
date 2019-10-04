import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";

import "./styles.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
