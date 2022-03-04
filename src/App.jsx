import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Pages from "./pages";
import Header from "./layout/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>
        <Route path="about/*" element={<Pages.About />}></Route>
        <Route path="portfolio/*" element={<Pages.Portfolio />}></Route>
      </Routes>
    </>
  );
};

export default App;
