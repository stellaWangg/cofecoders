import React from "react";

import { socialLinks } from "../data/socialLinks";

const Hero: React.FC = () => {
  return (
    <div className="md:container lg:h-screen justify-center lg:items-center px-8 py-20">
      {/* Main content */}

      <h1 className=" text-white">Cork Female Coders./</h1>
      <div className="max-w-md">
        <p className="text-sm md:text-xl text-white mb-5">
          A coffee meet-up for female coders located in Cork, Ireland.
        </p>
        <div className="flex gap-x-10 mb-10">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-3xl"
              target="_blank"
              rel="noopener noreferrer" // For security
              aria-label={link.name}
            >
              <link.icon className="hover:text-violet-100 transition-colors duration-300" />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-black font-poppins text-violet-100 px-6 py-3 rounded-full text-base md:text-lg font-semibold shadow-lg hover:bg-violet-100 hover:text-black transition-colors"
        >
          CONNECT NOW
        </a>
      </div>
      {/* </main> */}
    </div>
  );
};

export default Hero;
