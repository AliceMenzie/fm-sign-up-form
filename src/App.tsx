import React from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import bgDesktop from "./assets/images/bg-intro-desktop.png";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${bgDesktop})` }}
      className="font-poppins bg-red flex flex-col items-center justify-center md:flex-row h-full md:h-screen py-20 md:bg-no-repeat md:bg-center md:bg-contain"
    >
      <header className="text-center md:text-left md:h-[220px] md:w-[600px] text-white pt-5 pb-16 ">
        <h1 className="text-2xl font-semibold mx-10 mb-4 md:text-5xl">
          Learn to code by watching others
        </h1>
        <p className="text-sm md:text-base mx-12">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </header>
      <main className="">
        <Banner>
          <p className="mx-10">
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
        </Banner>
        <Form />
      </main>
    </div>
  );
}

export default App;
