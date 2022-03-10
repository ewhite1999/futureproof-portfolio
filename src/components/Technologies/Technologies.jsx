import React from "react";
import PropTypes from "prop-types";
const Technologies = (props) => {
  return (
    <>
      <h3 className="text-2xl font-normal mt-5 mb-2 text-pink-600">
        Technologies:
      </h3>
      <ul className="max-w-prose">
        {props.tech.map((i, index) => (
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

Technologies.propTypes = {
  tech: PropTypes.array.isRequired,
};
export default Technologies;
