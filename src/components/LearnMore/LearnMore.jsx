import React from "react";
import PropTypes from "prop-types";

const LearnMore = (props) => {
  return (
    <div className=" opacity-0 aboutDiv absolute h-full w-full bg-white top-0 transition-opacity duration-500">
      <h3>{props.title}</h3>
      <button className="border-2 cursor-pointer px-4 py-2 font-extralight border-pink-600  hover:bg-transparent hover:bg-pink-600 hover:text-zinc-50 hover:transition-colors hover:duration-500 sm:text-xl 2xl:text-2xl">
        Learn more.
      </button>
    </div>
  );
};

LearnMore.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LearnMore;
