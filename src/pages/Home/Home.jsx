import React from "react";

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-gray-200 font-light space-y-4 sm:space-y-8 2xl:font-normal">
      <div className=" text-center">
        <h1 className="text-3xl sm:text-6xl 2xl:text-8xl">
          Hey, I'm <span className=" text-pink-600">Edward White.</span>
        </h1>
        <p className="text-xl  sm:text-4xl sm:mt-2 2xl:text-5xl 2xl:mt-4">
          An aspiring developer.
        </p>
      </div>
      <button className=" border-2 px-4 py-2 font-extralight hover:bg-transparent hover:bg-pink-600 hover:border-pink-600 hover:transition-colors hover:duration-500">
        See my Portfolio
      </button>
    </section>
  );
};

export default Home;
