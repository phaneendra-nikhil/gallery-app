import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Topplaces = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
              <p class="tptext-body">Product description and details</p>
            </div>
            <div class="tpcard-footer">
              <span class="tptext-title">$499.49</span>
              <button class="tpcard-button">Search flights</button>
            </div>
          </div>
          <div class="tpcard">
            <div className="tpcard-img"></div>
            <div class="tpcard-info">
              <p class="tptext-title">Product title </p>
              <p class="tptext-body">Product description and details</p>
            </div>
            <div class="tpcard-footer">
              <span class="tptext-title">$499.49</span>
              <button class="tpcard-button">Search flights</button>
            </div>
          </div>
          <div class="tpcard">
            <div className="tpcard-img"></div>
            <div class="tpcard-info">
              <p class="tptext-title">Product title </p>
              <p class="tptext-body">Product description and details</p>
            </div>
            <div class="tpcard-footer">
              <span class="tptext-title">$499.49</span>
              <button class="tpcard-button">Search flights</button>
            </div>
          </div>
          <div class="tpcard">
            <div className="tpcard-img"></div>
            <div class="tpcard-info">
              <p class="tptext-title">Product title </p>
              <p class="tptext-body">Product description and details</p>
            </div>
            <div class="tpcard-footer">
              <span class="tptext-title">$499.49</span>
              <button class="tpcard-button">Search flights</button>
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

export default Topplaces;
