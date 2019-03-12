import React, { Component } from "react";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav>
          <span className="logo">
            <a href="#">Day Park</a>
          </span>
          <ul>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
