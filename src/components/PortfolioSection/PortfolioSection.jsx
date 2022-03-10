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
    const { title, intro, learning, technologies, nexttime } = sectionData;
    return (
      <div className=" bg-zinc-50 fixed top-0 w-full max-w-fit p-6 right-0 left-0 mx-auto leading-6 text-slate-600 font-light z-20">
        <h3 className="text-4xl border-b-2 border-pink-600 pb-4 mb-4 text-slate-900 font-normal">
          {title}
        </h3>
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
