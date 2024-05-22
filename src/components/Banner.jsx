import React from "react";
import "../App.css";
import banner from "../assets/banner.jpg";
import Journeybox from "./Journeybox";

const Banner = () => {
  return (
    <>
      <div className="banner-content">
        <section className="banner">
          <article className="banner-text">
            <h1>
              Life is a journey.... <br />
              Make it a high flying adventure
            </h1>
            <p>
              Sharing your flying adventures on social media is a way for you to
              document your own travels, but also a way to inspire others to
              explore the world.
            </p>
          </article>
          <article className="banner-img">
            <img src={banner} alt="" className="img" />
          </article>
        </section>
        <Journeybox />
      </div>
    </>
  );
};

export default Banner;
