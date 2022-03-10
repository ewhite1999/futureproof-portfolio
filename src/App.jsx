import React from "react";
import * as Pages from "./pages";
import DarkDiv from "./components/DarkDiv";

const App = () => {
  return (
    <>
      <DarkDiv />
      <Pages.Home></Pages.Home>
      <Pages.Portfolio></Pages.Portfolio>
    </>
  );
};

export default App;
