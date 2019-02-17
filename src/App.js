import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="content">
            <Navbar />
            <Route exact path="/" component={Landing} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
