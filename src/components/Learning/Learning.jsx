import React from "react";
import PropTypes from "prop-types";
const Learning = (props) => {
  return (
    <>
      <h3>Learning:</h3>
      <ul>
        {props.learning.map((i, index) => (
          <li key={`learning ${index}`}>{i}</li>
        ))}
      </ul>
    </>
  );
};

Learning.propTypes = {
  learning: PropTypes.array.isRequired,
};
export default Learning;
