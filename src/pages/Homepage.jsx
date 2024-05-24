import React from "react";
import "../App.css";
import Banner from "../components/Banner";
import Nav from "../components/Nav";

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
