import React, { Component } from "react";
import PropTypes from "prop-types";

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Greeting: {this.props.greeting}</h1>
        <p>React Component is showing!</p>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

export default HelloWorld;
