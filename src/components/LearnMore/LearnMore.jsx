import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const LearnMore = (props) => {
  return (
    <div className="opacity-0 aboutDiv absolute h-full bg-slate-900 text-gray-200 w-full top-0 transition-opacity duration-500 flex flex-col items-center justify-center space-y-5">
      <h3 className=" text-2xl font-medium xsm:text-3xl md:text-2xl lg:text-3xl">
        {props.title}
      </h3>
      <NavLink
        onClick={() => {
          const div = document.querySelector("#darkCover");
          div.classList.remove("opacity-0", "invisible");
          div.classList.add("opacity-70");
        }}
        to={props.title.replace(/\W+/g, "-").toLowerCase()}
        className="hidden border-2 cursor-pointer px-4 py-2 font-extralight border-pink-600  hover:bg-transparent hover:bg-pink-600 hover:text-zinc-50 hover:transition-colors hover:duration-500 xsm:text-xl md:text-base lg:text-xl"
        id="learnMoreBtn"
      >
        Learn more
      </NavLink>
    </div>
  );
};

LearnMore.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LearnMore;
