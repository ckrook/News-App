import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <header className="py-8 ">
      <div className="flex mx-auto w-11/12 justify-center">
        <h1 className="mb-4 text-center font-bold text-3xl">News App</h1>
      </div>
      <div className="flex justify-center">
        <Nav />
      </div>
    </header>
  );
}

export default Header;

// <div className="flex mx-auto w-11/12 justify-center">
