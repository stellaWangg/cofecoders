import React from "react";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  return (
    <footer className="footer footer-center p-5 bg-stone-900 text-stone-100 text-center">
      <aside>
        <div className="flex gap-x-10 mb-5 justify-center mt-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="text-3xl"
              target="_blank"
              rel="noopener noreferrer" // For security
              aria-label={link.name}
            >
              <link.icon className="hover:text-violet-500 transition-colors duration-300" />
            </a>
          ))}
        </div>
        <p className="text-xs ">
          © All rights are reserved | 2024 | Cofe Coders
        </p>
      </aside>
    </footer>

    // <div> © All rights are reserved | 2023 | Made with 🫶 by Stella Wang</div>
  );
};

export default Footer;
