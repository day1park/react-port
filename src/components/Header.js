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
      </header>
    );
  }
}

export default Header;
