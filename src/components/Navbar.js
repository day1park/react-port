import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Textfield,
  HeaderRow
} from "react-mdl";

import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header waterfall>
            <HeaderRow title="Title" />
            <HeaderRow>
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </HeaderRow>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
              <a href="/">Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Navbar;
