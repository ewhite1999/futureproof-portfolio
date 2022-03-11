import React from "react";
import PropTypes from "prop-types";

const Role = (props) => {
  const roleArr = props.role;
  return roleArr.map((p, index) => (
    <p key={`role ${index}`} className="max-w-prose">
      {p}
    </p>
  ));
};

Role.propTypes = {
  role: PropTypes.array.isRequired,
};

export default Role;
