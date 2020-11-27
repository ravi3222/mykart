import React from "react";
import Header from "./components/Header";
import "./default.scss";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
