import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" alt="slider" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" alt="slider" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  padding: 2rem;

  ui li button {
    &:before {
      font-size: 10px;
      color: rgb(150 158 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    box-shadow: rgba(0 0 0 / 69%) 0 26px 30px -10px,
      rgba(0 0 0 / 73%) 0 16px 10px -10px;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
