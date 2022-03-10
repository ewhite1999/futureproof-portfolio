import React from "react";
import * as Pages from "./pages";

const App = () => {
  return (
    <>
      <div
        id="darkCover"
        className="bg-black h-full left-0 fixed top-0 w-full z-10 opacity-0 transition-opacity invisible duration-300"
      ></div>
      <Pages.Home></Pages.Home>
      <Pages.Portfolio></Pages.Portfolio>
    </>
  );
};

export default App;
