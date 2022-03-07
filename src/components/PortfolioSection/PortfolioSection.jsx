import React from "react";
import { useParams } from "react-router-dom";
import Intro from "../Intro";
import * as data from "./data.json";

const PortfolioSection = () => {
  let { projectId } = useParams();
  projectId = projectId.replace(/\W+/g, "").toLowerCase();
  const sectionData = data[projectId];
  const { intro, learning, technologies, nexttime } = sectionData;
  return (
    <>
      <Intro intro={intro} />
    </>
  );
};

export default PortfolioSection;
