import React from "react";
import PropTypes from "prop-types";

const Role = (props) => {
  const roleArr = props.role;
  return (
    <>
      <h3 className="text-2xl font-normal mt-5 mb-2 text-pink-600">Role:</h3>
      {roleArr.map((p, index) => (
        <p key={`role ${index}`} className="max-w-prose mb-4">
          {p}
        </p>
      ))}
    </>
  );
};

Role.propTypes = {
  role: PropTypes.array.isRequired,
};

export default Role;
