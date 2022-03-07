import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioSection from "../../components/PortfolioSection";

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <Routes>
        <Route path="/" element={<p>Click on a link to see more about it</p>} />
        <Route path=":projectId" element={<PortfolioSection />} />
      </Routes>
    </section>
  );
};

export default Portfolio;
