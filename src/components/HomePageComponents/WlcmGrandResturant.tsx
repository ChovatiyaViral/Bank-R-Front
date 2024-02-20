"use client";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

const WlcmGrandResturant = () => {

  const homeSliderImage = ["home/home-slider-1.jpg", "home/home-slider-2.jpg", "home/home-slider-3.jpg", "home/home-slider-4.jpg"]

  var settings: any = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
  };
  return (
    <>
      <div className="home_slider">
        <Slider {...settings}>
          {
            homeSliderImage.map((item: any, index: number) => {
              return (
                <div key={index} className="home_slider_inner_div">
                  <Image src={item} alt="image" width={450} height={450} />
                </div>
              )
            })
          }
        </Slider>
        <div className="home_slider_text_section">
          <p className="welcome-text">Welcome to the </p>
          <h1>Bank Café & Restaurant</h1>
          <p className="bottom-text mb-0">
            Let our locally based team take you through our diverse menu. <br /> Food & drinks for any time of day served <br />by a committed and knowledgeable team of servers.<br />
          </p>
          <p className="bottom-text mt-1 font-italic"><b>Call us on <a href="tel:+44 1466 543103">+44 1466 543103</a>  for reservations</b></p>
        </div>
      </div>
    </>
  );
};

export default WlcmGrandResturant;
