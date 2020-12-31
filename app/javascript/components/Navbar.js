import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Container } from "semantic-ui-react";

const Navbar = ({ items }) => {
  let menuItems = items.map((item) => {
    const { name, route, key } = item;
    return <Menu.Item key={key} name={name} as={NavLink} exact to={route} />;
  });

  return (
    <Menu>
      <Container>{menuItems}</Container>
    </Menu>
  );
};

Navbar.propTypes = {};

export default Navbar;
