import React from "react";
import { Routes, Route } from "react-router-dom";
import PortfolioSection from "../../components/PortfolioSection";
import { NavLink } from "react-router-dom";
import preFutureproof from "../../imgs/preFutureproof.png";
import tldr from "../../imgs/tldr.png";
import Habitat from "../../imgs/Habitat.png";
import PortfolioCard from "../../components/PortfolioCard";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen bg-gray-200 text-slate-900 flex flex-col"
    >
      <h2 className=" text-center text-4xl uppercase font-medium pt-14 py-3">
        projects
      </h2>
      <div className="mx-auto w-32 border-b-4 border-solid border-pink-600 mb-10"></div>
      <div className="grid max-w-7xl mx-auto flex-auto content-center md:grid-cols-2">
        <PortfolioCard
          title="Before futureproof"
          alt="a recipe page project and a physics starter project"
          img={preFutureproof}
        />
        <PortfolioCard
          title="Confessions Page"
          alt="the words too long didn't read written on a blue background"
          img={tldr}
        />
        <PortfolioCard
          title="Habit Tracker"
          alt="a habit tracker site styled like a book"
          img={Habitat}
        />
      </div>
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
