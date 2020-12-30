import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HelloWorld = (props) => {
  return (
    <div>
      <h1>Hello Page</h1>
      <p>Greetings, {props.greeting}</p>
    </div>
  );
};

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

export default HelloWorld;
