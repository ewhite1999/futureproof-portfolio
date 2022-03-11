import React from "react";
import PropTypes from "prop-types";

const Intro = (props) => {
  return <p className="max-w-prose">{props.intro}</p>;
};

Intro.propTypes = {
  intro: PropTypes.string.isRequired,
};

export default Intro;
