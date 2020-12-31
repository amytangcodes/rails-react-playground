import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Navbar from "./Navbar";
import HelloWorld from "./HelloWorld";
import Home from "./Home";

const items = [
  { key: "home", name: "Home", route: "/" },
  { key: "hello", name: "Hello", route: "/hello" },
];

const App = () => {
  return (
    <BrowserRouter>
      <Navbar items={items} />
      <Container>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/hello"
            render={() => <HelloWorld greeting="friend" />}
          />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
