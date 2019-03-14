import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import About from "./components/About";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      // <Router>
      <div>
        {/* <Navbar /> */}
        <Navigation />
        <Header />
        <Skills />
        {/* <div className="content"> */}
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        {/* </div> */}
        <Footer />

        {/* </Router> */}
      </div>
    );
  }
}

export default App;
