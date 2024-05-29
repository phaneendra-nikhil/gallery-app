import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Create = () => {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <div className="login-container">
                <div className="form" id="login">
                    <h1 className="form__title">Create New Account</h1>
                    <div className="form__input-group">
                        <input
                            type="text"
                            className="form__input"
                            autofocus
                            placeholder="Email ID"
                            id="emailinput"
                        />
                    </div>
                    <div className="form__input-group">
                        <input
                            type="text"
                            className="form__input"
                            autofocus
                            placeholder="Username"
                            id="usernameinput"
                        />
                    </div>
                    <div className="form__input-group">
                        <input
                            type="text"
                            className="form__input"
                            autofocus
                            placeholder="Passwrord"
                            id="passwordinput"
                        />
                    </div>
                    <div className="form__input-group">
                        <input
                            type="password"
                            className="form__input"
                            autofocus
                            placeholder="Re-Enter Password"
                            id="passwordinput"
                        />
                        <div className="padding"></div>
                        <a href="/login">
                            <button className="form__button" id="loginButton">
                                Create
                            </button>
                        </a>
                        <br />
                        <br />
                        <br />
                        <h3 className="form__title">
                            Already have account?{" "}
                            <span onClick={() => navigate("/login")}>
                                Login.
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
