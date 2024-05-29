import React from "react";
import Slider from "react-slick";

const Topplaces = () => {
    const settings = {
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="top-places">
                <h1>Top Places</h1>
                <Slider {...settings} className="tp-cards">
                    <div class="tpcard">
                        <div className="tpcard-img"></div>
                        <div class="tpcard-info">
                            <p class="tptext-title">Product title </p>
                            <p class="tptext-body">
                                <p>1x Adult, 1x Child</p>
                            </p>
                        </div>
                        <div class="tpcard-footer">
                            <span class="tptext-title">$499.49</span>
                            <button class="tpcard-button">
                                Search flights
                            </button>
                        </div>
                    </div>
                    <div class="tpcard">
                        <div className="tpcard-img"></div>
                        <div class="tpcard-info">
                            <p class="tptext-title">Product title </p>
                            <p class="tptext-body">World class flight deals</p>
                        </div>
                        <div class="tpcard-footer">
                            <span class="tptext-title">$499.49</span>
                            <button class="tpcard-button">
                                Search flights
                            </button>
                        </div>
                    </div>
                    <div class="tpcard">
                        <div className="tpcard-img"></div>
                        <div class="tpcard-info">
                            <p class="tptext-title">Product title </p>
                            <p class="tptext-body">s</p>
                        </div>
                        <div class="tpcard-footer">
                            <span class="tptext-title">$499.49</span>
                            <button class="tpcard-button">
                                Search flights
                            </button>
                        </div>
                    </div>
                    <div class="tpcard">
                        <div className="tpcard-img"></div>
                        <div class="tpcard-info">
                            <p class="tptext-title">Product title </p>
                            <p class="tptext-body">
                                Product description and details
                            </p>
                        </div>
                        <div class="tpcard-footer">
                            <span class="tptext-title">$499.49</span>
                            <button class="tpcard-button">
                                Search flights
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                right: "0px",
                backgroundColor: "#252525",
                width: "40px", // Adjust width and height as needed
                height: "40px",
            }}
            onClick={onClick}
        ></div>
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                left: "0px",
                backgroundColor: "#252525",
                width: "40px", // Adjust width and height as needed
                height: "40px",
            }}
            onClick={onClick}
        ></div>
    );
};

export default Topplaces;
