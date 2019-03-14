import React, { Component } from "react";
import { ReactComponent as CSS } from "../icons/css3-plain.svg";
import html5 from "../icons/html5-plain.svg";
import { ReactComponent as JSIcon } from "../icons/javascript-plain.svg";
import { ReactComponent as RubyIcon } from "../icons/ruby-plain.svg";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="Skills">
        <h3>Skills</h3>
        <h2>Languages</h2>
        <div>
          <div>
            <span>
              <CSS className="icon" />
            </span>
          </div>
          <div>
            <span>
              <img className="icon" src={html5} alt="html5" />
            </span>
          </div>
          <div>
            <span>
              <JSIcon className="icon" />
            </span>
          </div>
          <div>
            <span>
              <RubyIcon className="icon" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
