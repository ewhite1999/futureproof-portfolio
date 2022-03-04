import React from "react";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <header>
      <h1>Edward White</h1>
      <nav>
        <NavLink to={"/"}>home</NavLink>
        <NavLink to={"about"}>about</NavLink>
        <NavLink to={"portfolio"}>portfolio</NavLink>
      </nav>
    </header>
  );
};

export default header;
