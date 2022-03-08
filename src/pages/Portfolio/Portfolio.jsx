import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioSection from "../../components/PortfolioSection";
import { NavLink } from "react-router-dom";
import Habitat from "../../imgs/Habitat.png";
const Portfolio = () => {
  return (
    <section id="portfolio" className="min-h-screen bg-gray-200 text-slate-900">
      <h2 className=" text-center text-4xl uppercase font-medium pt-14 py-3">
        projects
      </h2>
      <div className="mx-auto w-32 border-b-4 border-solid border-pink-600"></div>
      <div className="grid">
        <div>
          <img src={Habitat} alt="pre futureproof projects" />
        </div>
        <div></div>
        <div></div>
      </div>
      {/* <nav>
        <NavLink to="/before-futureproof">Before&nbsp;futureproof</NavLink>
        <NavLink to="/confessions-page">Confessions&nbsp;page</NavLink>
        <NavLink to="/habit-tracker">Habit&nbsp;Tracker</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<p>Click on a link to see more about it</p>} />
        <Route path=":projectId" element={<PortfolioSection />} />
      </Routes> */}
    </section>
  );
};

export default Portfolio;
