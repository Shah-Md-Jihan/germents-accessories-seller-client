import React from "react";
import Navbar from "./Navbar";
import NavbarTop from "./NavbarTop";

const Header = () => {
  return (
    <header>
      <NavbarTop></NavbarTop>
      <Navbar></Navbar>
    </header>
  );
};

export default Header;
