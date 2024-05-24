import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Destination = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
            <div className="destination-content">
                <h1>Our Best Deals...</h1>
                <Slider {...settings} className="destcards">
                    <div className="card">
                        <div className="card-image">
                            <img
                                src="https://www.tallengestore.com/cdn/shop/products/Very_British_-_London_Photo_and_Painting_Collection_43256631-b643-47b6-a62b-e127d149bdd4_large.jpg?v=1547799894"
                                alt="Product"
                            />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                            Product description. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                            <div className="card-price">
                                <span
                                    style={{
                                        textDecoration: "line-through",
                                    }}
                                >
                                    $123.45
                                </span>{" "}
                                <span style={{ color: "black" }}>$100.00</span>
                            </div>
                            <button className="card-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img
                                src="https://cdn11.bigcommerce.com/s-x49po/images/stencil/800w/products/5846/14457/52Landscape61__50983.1506574083.jpg?c=2"
                                alt="Product"
                            />
                        </div>
                        <div className="card-title">London</div>
                        <div className="card-subtitle">
                            London, the capital of England and the United
                            Kingdom.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                            <div className="card-price">
                                <span>$</span> 123.45
                            </div>
                            <button className="card-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img
                                src="https://www.tallengestore.com/cdn/shop/products/Very_British_-_London_Photo_and_Painting_Collection_43256631-b643-47b6-a62b-e127d149bdd4_large.jpg?v=1547799894"
                                alt="Product"
                            />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                            Product description. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                            <div className="card-price">
                                <span>$</span> 123.45
                            </div>
                            <button className="card-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img
                                src="https://www.tallengestore.com/cdn/shop/products/Very_British_-_London_Photo_and_Painting_Collection_43256631-b643-47b6-a62b-e127d149bdd4_large.jpg?v=1547799894"
                                alt="Product"
                            />
                        </div>
                        <div className="card-title">Product title</div>
                        <div className="card-subtitle">
                            Product description. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit.
                        </div>
                        <hr className="card-divider" />
                        <div className="card-footer">
                            <div className="card-price">
                                <span>$</span> 123.45
                            </div>
                            <button className="card-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path>
                                    <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path>
                                    <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path>
                                </svg>
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
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
            onClick={onClick}
        />
    );
};

export default Destination;
