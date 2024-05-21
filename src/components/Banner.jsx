import React from "react";
import "../App.css";
import ban from "../assets/ban.jpg";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        {/* <img src={ban} alt="" /> */}
        <article className="banner-content">
          <h1>Find your next favourite place to travel...</h1>
          
          <button>Get Started</button>
        </article>
      </div>
    </>
  );
};

export default Banner;
