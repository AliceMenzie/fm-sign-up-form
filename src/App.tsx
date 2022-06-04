import React from "react";
import Banner from "./components/Banner";

import Form from "./components/Form";

function App() {
  return (
    <div className="font-poppins bg-red flex flex-col items-center justify-center h-full py-20">
      <header className="text-center text-white py-5">
        <h1 className="text-2xl font-bold mx-10 mb-4">
          Learn to code by watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </header>
      <main className="">
        <Banner>
          <p>
            <span>Try it free 7 days</span> then $20/mo. thereafter
          </p>
        </Banner>
        <Form />
      </main>
    </div>
  );
}

export default App;
