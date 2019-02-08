import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Textfield
} from "react-mdl";

import React, { Component } from "react";

class MainNavbar extends Component {
  render() {
    return (
      <div style={{ height: "300px", position: "relative" }}>
        <Layout fixedHeader fixedDrawer>
          <Header title="Title">
            <Textfield
              value=""
              onChange={() => {}}
              label="Search"
              expandable
              expandableIcon="search"
            />
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
              <a href="#">Link</a>
            </Navigation>
          </Drawer>
          <Content />
        </Layout>
      </div>
    );
  }
}

export default MainNavbar;
