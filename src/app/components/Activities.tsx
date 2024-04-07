import React from "react";
import Image from "next/image";
import talk from "../images/talk.png";
import coding from "../images/coding.png";
import networking from "../images/networking.png";
const Activities = () => {
  return (
    <section className="container flex-col mx-auto" id="activities">
      <h1 className="text-center">What We Do?</h1>
      <div className="flex flex-wrap m-4 leading-7 tracking-wide">
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="relative pt-10 px-8 pb-20 h-full border-2 border-gray-800 border-opacity-50 rounded-3xl">
            <div className="relative">
              <Image src={talk} alt="talk" className="mb-8 mx-auto" />
              <h3 className="mb-6 text-xl text-white text-center">
                Valuable Talks
              </h3>
              <ul className="text-violet-100 list-disc">
                <li>Learn from industry experts.</li>
                <li>
                  Once every two months, one or two of us give a talk for
                  discussion on an IT-related topic. e.g. ChatGPT, AI for deep
                  fakes...
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="relative pt-10 px-8 pb-20 h-full border-2 border-gray-800 border-opacity-50 rounded-3xl">
            <div className="relative">
              <Image src={coding} alt="coding" className="mb-8 mx-auto" />

              <h3 className="mb-6 text-xl text-white text-center">
                Coding Challenges
              </h3>
              <p className="text-violet-100 ">
                We code together, playing coding exercises such as katas or
                digital escape games.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 p-2">
          <div className="relative pt-10 px-8 pb-20 h-full border-2 border-gray-800 border-opacity-50 rounded-3xl">
            <div className="relative">
              <Image
                src={networking}
                alt="networking"
                className="mb-8 mx-auto"
              />

              <h3 className="mb-6 text-xl text-white text-center">
                Networking
              </h3>
              <ul className="text-violet-100 list-disc">
                <li>Chat with fellow fellow female coders.</li>
                <li>
                  We share experiences from our workplaces and/or learning
                  process.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
