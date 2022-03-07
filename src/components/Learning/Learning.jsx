import React from "react";

const Learning = (props) => {
  return (
    <>
      <h3>Learning:</h3>
      <ul>
        {props.learning.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </>
  );
};
export default Learning;
