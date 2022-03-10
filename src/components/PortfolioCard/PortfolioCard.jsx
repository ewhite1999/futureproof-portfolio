import React from "react";
import LearnMore from "../LearnMore";
const PortfolioCard = (props) => {
  const handleMouse = (e) => {
    e.currentTarget.querySelector(".aboutDiv").classList.toggle("opacity-0");
  };
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
};
export default PortfolioCard;
