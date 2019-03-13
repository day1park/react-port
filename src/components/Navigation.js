import React, { Component } from "react";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    const sections = ["Home", "Projects", "Skills", "About", "Contact"];

    return (
      <div>
        <nav>
          <span className="logo">
            <a href="#home">Day Park</a>
          </span>
          <ul>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
