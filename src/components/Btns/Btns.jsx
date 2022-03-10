import React from "react";
import PropTypes from "prop-types";

const Btns = (props) => {
  return (
    <div className="flex flex-col mt-6 max-w-prose space-y-2 xsm:flex-row xsm:space-y-0 xsm:mx-auto  xsm:justify-around">
      <a
        href={props.git[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 text-pink-600 text-center font-normal cursor-pointer px-4 py-2 border-pink-600  hover:bg-transparent hover:text-slate-50 hover:bg-pink-600 hover:transition-colors hover:duration-500 xsm:w-32"
      >
        GitHub Repo
      </a>
      <a
        href={props.site[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 text-pink-600 text-center font-normal cursor-pointer px-4 py-2 border-pink-600  hover:bg-transparent hover:text-slate-50 hover:bg-pink-600 hover:transition-colors hover:duration-500 xsm:w-32"
      >
        Live Site
      </a>
      <button className="border-2 text-pink-600 text-center font-normal cursor-pointer px-4 py-2 border-pink-600  hover:bg-transparent hover:text-slate-50 hover:bg-pink-600 hover:transition-colors hover:duration-500 xsm:w-32">
        Close
      </button>
    </div>
  );
};

Btns.propTypes = {
  git: PropTypes.array.isRequired,
  site: PropTypes.array.isRequired,
};

export default Btns;
