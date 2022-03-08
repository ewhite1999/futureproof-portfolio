import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-gray-200 font-light">
      <h1 className="text-3xl mb-1 sm:text-6xl sm:mb-2 2xl:text-8xl 2xl:mb-4">
        Hey, I'm <span className=" text-pink-600">Edward White.</span>
      </h1>
      <p className="text-2xl mt-1 sm:text-4xl sm:mt-2 2xl:text-5xl 2xl:mt-4">
        An aspiring developer
      </p>
    </section>
  );
};

export default Home;
