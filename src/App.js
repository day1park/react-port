import React, { Component } from "react";
import "./App.css";
import MainNavbar from "./components/layout/MainNavbar";
import Footer from "./components/layout/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <MainNavbar />
        <Footer />
      </div>
    );
  }
}

export default App;
