import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="font-poppins sm:w-fit xl:w-1/3 rounded-3xl sticky top-0 shadow-xl items-center flex mx-auto xs:p-6 p-4 bg-gray-100 bg-opacity-25 text-black z-50">
      <Navbar />
    </div>
  );
};

export default Header;
