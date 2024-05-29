import React from "react";
import "../App.css";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Bestdeals from "./Bestdeals";
import Topplaces from "./Topplaces";
import Footer from "../components/Footer";

const Homepage = () => {
    return (
        <>
            <div className="home-container">
                <Nav />
                <Banner />
                <Bestdeals />
                <Topplaces />
                <Footer />
            </div>
        </>
    );
};

export default Homepage;
