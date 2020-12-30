import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import HelloWorld from "./HelloWorld";
import Home from "./Home";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed violet;
`;

const items = [
  { key: "home", name: "Home", link: "/" },
  { key: "hello", name: "Hello", link: "/hello" },
];
class App extends Component {
  state = {
    activeItem: "home",
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <BrowserRouter>
        <Navbar
          items={items}
          active={activeItem}
          onClick={this.handleItemClick}
        />
        <section>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              path="/hello"
              render={() => <HelloWorld greeting="friend" />}
            />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
