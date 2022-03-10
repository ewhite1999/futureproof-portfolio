import React from "react";
import PropTypes from "prop-types";

const LearnMore = (props) => {
  return (
    // Remember to add opacity back in
    <div className="opacity-0 aboutDiv absolute h-full bg-slate-900 text-gray-200 w-full top-0 transition-opacity duration-500 flex flex-col items-center justify-center space-y-5">
      <h3 className=" text-2xl font-medium xsm:text-3xl sm:text-2xl lg:text-3xl">
        {props.title}
      </h3>
      <button className="border-2 cursor-pointer px-4 py-2 font-extralight border-pink-600  hover:bg-transparent hover:bg-pink-600 hover:text-zinc-50 hover:transition-colors hover:duration-500 xsm:text-xl sm:text-base lg:text-xl">
        Learn more
      </button>
    </div>
  );
};

LearnMore.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LearnMore;
