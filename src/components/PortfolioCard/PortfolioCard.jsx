import React from "react";
import PropTypes from "prop-types";
import { isBrowser } from "react-device-detect";
import LearnMore from "../LearnMore";
const PortfolioCard = (props) => {
  const handleMouse = (e) => {
    // Hide all learn more sections
    document.querySelectorAll(".aboutDiv").forEach((div) => {
      if (e.currentTarget.querySelector(".aboutDiv") !== div) {
        div.classList.remove("opacity-0");
        div.classList.add("opacity-0");
      }
    });
    document.querySelectorAll(".learnMoreBtn").forEach((button) => {
      if (e.currentTarget.querySelector(".learnMoreBtn") !== button) {
        button.classList.remove("hidden");
        button.classList.add("hidden");
      }
    });
    e.currentTarget.querySelector(".aboutDiv").classList.toggle("opacity-0");
    const btn = e.currentTarget.querySelector(".learnMoreBtn");
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
