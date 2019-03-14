import React, { Component } from "react";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home", "Projects", "Skills", "About", "Contact"];
    const navLinks = sections.map(section => {
      return (
        <li>
          <a href={"#" + section}>{section}</a>
        </li>
      );
    });

    return (
      <div>
        <nav>
          <span className="logo">
            <a href="#home">Day Park</a>
          </span>
          <ul>{navLinks}</ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
