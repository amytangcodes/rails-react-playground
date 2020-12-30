import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    const { items, onClick } = this.props;

    return (
      <Menu>
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            href={item.link}
            name={item.name}
            onClick={onClick}
          />
        ))}
      </Menu>
    );
  }
}

export default Navbar;
