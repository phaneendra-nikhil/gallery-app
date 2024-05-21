import React from "react";
import "../App.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

const Homepage = () => {
  return (
    <>
      <div className="home-container">
        <Nav />
        <Banner />
      </div>
    </>
  );
};

export default Homepage;
