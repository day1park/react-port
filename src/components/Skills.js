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
        <h1>Skills</h1>
        <div className="skills-container">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div class="skills-container">
                <h3>Languages</h3>
                <div className="row">
                  <div className="col-12">
                    <div className="skills-icon">
                      <JSIcon className="icon" />
                      <span>JavaScript</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skills-icon">
                      <RubyIcon className="icon" />
                      <span>Ruby</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skills-icon">
                      <img className="icon" src={html5} alt="html5" />
                      <span>HTML5</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="skills-icon">
                      <CSS className="icon" />
                      <span>CSS3</span>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-lg-4">
                  <div className="skills-container">
                    <h3>Frameworks/Libraries</h3>
                    <div className="row">
                      <div className="col-12">
                        <div className="skills-icon">
                          <CSS className="icon" />
                          <span>CSS3</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="skills-icon">
                          <CSS className="icon" />
                          <span>CSS3</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="skills-icon">
                          <CSS className="icon" />
                          <span>CSS3</span>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="skills-icon">
                          <CSS className="icon" />
                          <span>CSS3</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
