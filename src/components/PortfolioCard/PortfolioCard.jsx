import React from "react";
import PropTypes from "prop-types";
import { isBrowser } from "react-device-detect";
import LearnMore from "../LearnMore";
const PortfolioCard = (props) => {
  const handleMouse = (e) => {
    const btn = e.currentTarget.querySelector("#learnMoreBtn");
    e.currentTarget.querySelector(".aboutDiv").classList.toggle("opacity-0");
    btn.classList.toggle("hidden");
  };
  if (isBrowser) {
    return (
      <div
        className="h-fit bg-white relative"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        <img src={props.img} alt={props.alt} />
        <LearnMore title={props.title} />
      </div>
    );
  }
  return (
    <div className="h-fit bg-white relative" onClick={handleMouse}>
      <img src={props.img} alt={props.alt} />
      <LearnMore title={props.title} />
    </div>
  );
};
PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default PortfolioCard;
