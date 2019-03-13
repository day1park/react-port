import React, { Component } from "react";
import Hero from "../icons/palace-roof.jpg";

const profileStyles = {
  backgroundImage: `url(${Hero})`,
  height: "100vh",
  backgroundSize: "cover"
};

class Header extends Component {
  render() {
    return <header style={profileStyles} />;
  }
}

export default Header;
