import React from "react";
import "../App.css";
import light from "/light.png";

const Nav = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <h1 className="logo-title">Travello</h1>
          <ul className="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destinations</a>
            </li>
            <li>
              <a href="#">Planes</a>
            </li>
            <li>
              <a href="#">Travel guide</a>
            </li>
            <li>
              <a href="#">Best Deals</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
