import React from "react";
import PropTypes from "prop-types";
const Learning = (props) => {
  return (
    <>
      <h3 className="text-2xl  font-normal mt-5 mb-2 text-pink-600">
        Learning:
      </h3>
      <ul className="max-w-prose">
        {props.learning.map((i, index) => (
          <li
            className="marker:text-pink-600 list-disc ml-4 mb-1"
            key={`learning ${index}`}
          >
            {i}
          </li>
        ))}
      </ul>
    </>
  );
};

Learning.propTypes = {
  learning: PropTypes.array.isRequired,
};
export default Learning;
