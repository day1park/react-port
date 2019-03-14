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
            <div className="col-md-12">
              <h2> check to see</h2>
            </div>
            <Link to="/">
              <Button className="primary">something</Button>
            </Link>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Landing;
