import React from "react";
import "../App.css";
import Journeybox from "./Journeybox";

const Banner = () => {
    return (
        <>
            <div className="banner-content">
                <section className="banner">
                    <article className="banner-text">
                        <h1>
                            Life is a journey.... <br />
                            Make it a high flying adventure!
                        </h1>
                        <p>
                            Sharing your flying adventures on social media is a
                            way for you to document your own travels, but also a
                            way to inspire others to explore the world.
                        </p>
                    </article>
                    <article className="banner-img">
                        <img
                            src="https://cdn6.aptoide.com/imgs/9/9/6/996de528f72ad505efce1fbae0a9da10_fgraphic.jpg"
                            alt=""
                            className="img"
                            style={{ borderRadius: "5%" }}
                        />
                    </article>
                </section>
            </div>
            <Journeybox />
        </>
    );
};

export default Banner;
