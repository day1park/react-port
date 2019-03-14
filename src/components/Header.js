import React, { Component } from "react";
import Hero from "../icons/palace-roof.jpg";
import "./Header.css";

const profileStyles = {
  backgroundImage: `url(${Hero})`,
  height: "100vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return (
      <header style={profileStyles}>
        <h1>Hi I'm day park</h1>
        <p>a full stack web developer</p>
        <a href="#button">Read More</a>
      </header>
    );
  }
}

export default Header;
