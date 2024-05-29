import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Nav = () => {
    const navigate = useNavigate();
    return (
        <div className="header">
            <header>
                <nav>
                    <h1 className="logo-title">Travello</h1>
                    <ul className="nav-links">
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/destinations")}>
                            Destinations
                        </li>
                        <li onClick={() => navigate("/planes")}>Planes</li>
                        <li onClick={() => navigate("/guide")}>Travel guide</li>
                        <li onClick={() => navigate("/about")}>About us</li>
                        <li onClick={() => navigate("/login")}>Login</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Nav;
