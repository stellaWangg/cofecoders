import React from "react";
type Props = {
  mobileMenu: boolean;
  setMobileMenu: (val: boolean) => void;
};

const HamburgerButton = ({ mobileMenu, setMobileMenu }: Props) => {
  return (
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className="flex-shrink-0 w-14 h-10 flex flex-col justify-center relative md:hidden border-none"
    >
      <span
        className={
          "w-full h-[6px] bg-black rounded-lg transition-all ease-in duration-300 absolute " +
          (mobileMenu ? "origin-center rotate-[400deg]" : "translate-y-[-16px]")
        }
      />
      <span
        className={`w-full h-[6px] bg-black rounded-lg transition-opacity absolute ${
          mobileMenu ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={
          "w-full h-[6px] bg-black rounded-lg transition-all ease-in duration-300 absolute " +
          (mobileMenu
            ? "origin-center -rotate-45 bg-background"
            : "translate-y-[16px]")
        }
      />
    </button>
  );
};

export default HamburgerButton;
