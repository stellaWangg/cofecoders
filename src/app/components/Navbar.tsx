"use client";

import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
const navItems = [
  { link: "Home", path: "/" },
  { link: "About", path: "/#about" },
  { link: "Activities", path: "/#activities" },
  { link: "Contact", path: "/#contact" },
  { link: "Events", path: "/events" },
];

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="flex items-center mx-auto">
      {/* Desktop menu */}
      <ul className="hidden sm:flex space-x-5 font-semibold">
        {navItems.map((item, index) => {
          const { link, path } = item;
          return (
            <li key={index}>
              <a
                className="text-2xl sm:text-base hover:underline py-2 hover:text-accent underline-offset-8"
                href={path}
                onClick={() => setMobileMenu(false)}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>
      {/* Mobile menu button */}
      <div className="sm:hidden ">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div
        className={`absolute left-0 top-full w-full h-screen backdrop-blur-3xl sm:hidden transition-all ease-in duration-300 ${
          mobileMenu ? "flex" : "hidden"
        } flex-col items-center py-8 mt-2 space-y-8 font-bold rounded-b-xl`}
      >
        {navItems.map((item, index) => (
          <a href={item.path} key={index} onClick={() => setMobileMenu(false)}>
            <span className="text-black hover:underline underline-offset-8">
              {item.link}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
