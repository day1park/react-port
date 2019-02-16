import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Button } from "react-bootstrap";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="container">
          <Jumbotron>
            <h2> wafadskdfj</h2>
          </Jumbotron>
          <Link to="/">
            <Button className="primary">something</Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
