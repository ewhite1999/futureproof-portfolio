import React from "react";
import { useParams } from "react-router-dom";
import Intro from "../Intro";
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
      <>
        <Intro intro={intro} />
      </>
    );
  } catch (e) {
    return <p>{e}</p>;
  }
};

export default PortfolioSection;
