import React from "react";
import { useParams } from "react-router-dom";
import Intro from "../Intro";
import Learning from "../Learning";
import * as data from "./data.json";

const PortfolioSection = () => {
  try {
    const { projectId } = useParams();
    const sanitisedProjectId = projectId.replace(/\W+/g, "").toLowerCase();
    const sectionData = data[sanitisedProjectId];
    if (!sectionData) {
      throw `I haven't done a project to do with a ${projectId
        .replace(/\W+/g, " ")
        .toLowerCase()
        .trim()} yet!`;
    }
    const { intro, learning, technologies, nexttime } = sectionData;
    return (
      <div className=" bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Intro intro={intro} />
        <Learning learning={learning} />
      </div>
    );
  } catch (e) {
    console.warn(e);
    return <></>;
  }
};

export default PortfolioSection;
