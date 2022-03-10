import React from "react";
import PropTypes from "prop-types";

const Intro = (props) => {
  return <p>{props.intro}</p>;
};

Intro.propTypes = {
  intro: PropTypes.string.isRequired,
};

export default Intro;
