import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Bestdeals = () => {
    const settings = {
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
                            {/* <img
                                src="https://www.tallengestore.com/cdn/shop/products/Very_British_-_London_Photo_and_Painting_Collection_43256631-b643-47b6-a62b-e127d149bdd4_large.jpg?v=1547799894"
                                alt="Product"
                            /> */}
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
                            <button className="card-btn">Book Now</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            {/* <img
                                src="https://www.tallengestore.com/cdn/shop/products/Very_British_-_London_Photo_and_Painting_Collection_43256631-b643-47b6-a62b-e127d149bdd4_large.jpg?v=1547799894"
                                alt="Product"
                            /> */}
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
                            <button className="card-btn">Book Now</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            {/* <img
                                src="https://www.tallengestore.com/cdn/shop/products/Very_British_-_London_Photo_and_Painting_Collection_43256631-b643-47b6-a62b-e127d149bdd4_large.jpg?v=1547799894"
                                alt="Product"
                            /> */}
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
                            <button className="card-btn">Book Now</button>
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
                borderRadius: "0%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                right: "0px",
                backgroundColor: "#252525",
            }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                borderRadius: "0%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                left: "0px",
                backgroundColor: "#252525",
            }}
            onClick={onClick}
        />
    );
};

export default Bestdeals;
