import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioSection from "../../components/PortfolioSection";
import { NavLink } from "react-router-dom";
const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <nav>
        <NavLink to="/before-futureproof">Before&nbsp;futureproof</NavLink>
        <NavLink to="/confessions-page">Confessions&nbsp;page</NavLink>
        <NavLink to="/habit-tracker">Habit&nbsp;Tracker</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<p>Click on a link to see more about it</p>} />
        <Route path=":projectId" element={<PortfolioSection />} />
      </Routes>
    </section>
  );
};

export default Portfolio;
