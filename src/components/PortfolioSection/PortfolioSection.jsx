import React from "react";
import { useParams } from "react-router-dom";

const PortfolioSection = () => {
  let { projectId } = useParams();
  projectId = projectId.replace(/\W+/g, "").toLowerCase();
  return <p>Hello {projectId} page</p>;
};

export default PortfolioSection;
