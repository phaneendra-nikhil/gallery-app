import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <Nav />
            <div className="login-container">
                <img
                    class="circular--square"
                    src="https://w7.pngwing.com/pngs/386/732/png-transparent-airplane-aircraft-logo-airplane-blue-logo-airplane-thumbnail.png"
                />
                <div className="form" id="login">
                    <h1 className="form__title">Welcome back!</h1>
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
                            type="password"
                            className="form__input"
                            autofocus
                            placeholder="Password"
                            id="passwordInput"
                        />
                        <div className="padding"></div>
                        <a href="/">
                            <button className="form__button" id="loginButton">
                                Login
                            </button>
                        </a>
                        <br />
                        <br />
                        <br />
                        <h3 className="form__title">
                            New to Travello?{" "}
                            <span onClick={() => navigate("/create")}>
                                Create Account.
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
