import React from "react";
import '../App.css';
import TopNav from "./TopNav";
import logolight from "../assets/logolight.png";

const Nav = () => {
  return (
    <>
      <div className="nav-layout">
        <TopNav />
        <nav>
          <a href="#">
            <img src={logolight} alt="logo image" className="logo"/>
          </a>
          ul
        </nav>
      </div>
    </>
  );
};

export default Nav;
