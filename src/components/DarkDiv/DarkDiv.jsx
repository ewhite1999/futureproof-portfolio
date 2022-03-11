import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DarkDiv = () => {
  let navigate = useNavigate();
  const [hide, setHide] = useState("");
  useEffect(() => {
    navigate("");
    setHide("");
  }, [hide]);
  return (
    <div
      onClick={() => {
        setHide("hide");
        const div = document.querySelector("#darkCover");
        div.classList.add("opacity-0", "invisible");
        div.classList.remove("opacity-70");
      }}
      id="darkCover"
      className="bg-black h-full left-0 fixed top-0 w-full z-10 opacity-0 transition-opacity invisible duration-300"
    ></div>
  );
};

export default DarkDiv;
