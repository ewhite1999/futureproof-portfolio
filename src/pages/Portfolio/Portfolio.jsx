import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioSection from "../../components/PortfolioSection";
import { NavLink } from "react-router-dom";
import preFutureproof from "../../imgs/preFutureproof.png";
import tldr from "../../imgs/tldr.png";
import Habitat from "../../imgs/Habitat.png";
import LearnMore from "../../components/LearnMore";

const Portfolio = () => {
  const handleMouse = (e) => {
    e.currentTarget.querySelector(".aboutDiv").classList.toggle("opacity-0");
  };
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-200 text-slate-900 flex flex-col"
    >
      <h2 className=" text-center text-4xl uppercase font-medium pt-14 py-3">
        projects
      </h2>
      <div className="mx-auto w-32 border-b-4 border-solid border-pink-600 mb-10"></div>
      <div className="grid max-w-7xl mx-auto flex-auto content-center sm:grid-cols-2">
        <div
          className="h-fit bg-white relative"
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <img src={preFutureproof} alt="pre futureproof projects" />
          <LearnMore title="Before futureproof" />
        </div>

        <div
          className="h-fit bg-white relative"
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <img src={tldr} alt="too long didn't read project" />
          <LearnMore title="Confessions Page" />
        </div>
        <div
          className="h-fit bg-white relative"
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <img src={Habitat} alt="habit at project" />
          <LearnMore title="Habit Tracker" />
        </div>
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
