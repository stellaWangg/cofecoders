import React from "react";
import Image from "next/image";
import cfc from "../images/cfc.png";
import coders from "../images/girls.jpeg";
const About = () => {
  return (
    <section className="bg-white" id="about">
      <div className="md:container pt-20 ">
        <div className="md:w-1/2">
          <h1 className="text-center lg:text-left w-full block font-bold px-3">
            About Us
          </h1>
          <div className="hidden md:block space-y-10 md:w-1/2 ml-5">
            <Image src={cfc} alt="coders" className="rounded-xl" />
            <Image src={coders} alt="coders" className="rounded-xl ml-20" />
          </div>
        </div>
        <div className="p-4 md:ml-5 md:w-1/2 md:mt-20 md:leading-8">
          <p className="text-gray-600">
            -{">"} We're brewing up a supportive community for women who code in
            Cork. Any woman who either works in the IT field, uses programming
            in their work, is learning computer programming or simply curious to
            know more about it. All jobs, experience, levels, backgrounds, and
            programming languages are welcome.
          </p>
          <p className="text-gray-600 mt-4">
            -{">"} Our purpose is to help female IT professionals and learners
            to socialize with peers, support each other, and improve their
            coding and problem-solving skills.
          </p>
          <p className="text-gray-600 mt-4">
            -{">"} We meet every 2 weeks for informal gatherings in cafe places,
            and every 2 months for IT-related talks in UCC. More updates soon!
          </p>
          {/* Add your button here */}
        </div>
      </div>
    </section>
  );
};

export default About;
