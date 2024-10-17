import React from "react";

const About = () => {
  return (
    <main>
      <div className="h-screen bg-stone-900">
        <div className="grid place-items-center h-screen text-white mx-auto max-w-4xl p-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-3xl text-center md:text-6xl font-extrabold md:leading-relaxed">
              工事中🚧
            </h1>
            <p className="text-lg font-mono font-semibold md:leading-relaxed ">
              このページは工事中です。
              <br />
              リリースまでしばらくお待ちください。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
