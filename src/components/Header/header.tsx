import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      className="w-full bg-black text-white h-16 fixed top-0 flex items-center justify-between px-4"
      data-testid="header"
    >
      <span className="text-5xl my-2 hidden md:inline-block">B</span>
      <p className="text-white uppercase">
        <span className="text-4xl text-red-400">t</span>he{" "}
        <span className="text-4xl text-green-400">b</span>logpost{" "}
        <span className="text-4xl text-blue-400">a</span>pp
      </p>
      <span className="text-5xl my-2 hidden md:inline-block">B</span>
    </header>
  );
};

export default Header;
