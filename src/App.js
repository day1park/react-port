import React, { Component } from "react";
import "./App.css";
import MainNavbar from "./components/layout/MainNavbar";

class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <h1>hello universe</h1>
      </div>
    );
  }
}

export default App;
