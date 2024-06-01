import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <h1 className="footer-logo">Travello</h1>
                <div className="footer-content">
                    <p>
                        Developed by
                        <a
                            href="https://shanmukh25.vercel.app/"
                            className="social-link"
                            target="_blank"
                        >
                            Shanmukh
                        </a>
                        and
                        <a
                            href="https://phaneendra-nikhil.netlify.app/"
                            className="social-link"
                            target="_blank"
                        >
                            Nikhil.
                        </a>
                    </p>
                    {/* <p>
                        Follow us on:
                        <a href="https://facebook.com" className="social-link">
                            Facebook
                        </a>{" "}
                        |
                        <a href="https://twitter.com" className="social-link">
                            Twitter
                        </a>{" "}
                        |
                        <a href="https://instagram.com" className="social-link">
                            Instagram
                        </a>
                    </p> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
