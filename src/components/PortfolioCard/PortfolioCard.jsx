import React from "react";
import PropTypes from "prop-types";
import { isBrowser, isMobile } from "react-device-detect";
import LearnMore from "../LearnMore";
const PortfolioCard = (props) => {
  const handleMouse = (e) => {
    e.currentTarget.querySelector(".aboutDiv").classList.toggle("opacity-0");
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
