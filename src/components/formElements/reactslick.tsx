"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";

const aboutusSliderData = [
  {
    isStar: "",
    descriptionText:"Lovely setting, very friendly staff and absolutely delicious food. Really enjoyed my meal. Great!!!!",
    imageUrl: "/contactImages/user-1-image.jpg",
    imageName: "765kingsleyp",
    title:"Great food at The Bank"
  },
  {
    isStar: "",
    descriptionText:"Had a lovely lunch here yesterday, varied choice and great value! Really nice place and really enjoyed the country music playing in the background",
    imageUrl: "/contactImages/user-2-image.jpg",
    imageName: "PipsylilAberdeen",
    title:"Lunch"
  },
  {
    isStar: "",
    descriptionText:"This is definitely a hidden gem. The quality of food and service were exceptional . Five star quality at such great value. Wonderful friendly service. Don't miss this one.",
    imageUrl: "/contactImages/user-3-image.jpg",
    imageName: "gaz4caz",
    title:"What a Find"
  },
];

const ReactSlider = (props: any) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       dots:true,
    //       slidesToScroll: 1,
    //       variableWidth: true,
    //       // centerMode: true,
    //       infinite: true,
    //     },
    //   },
    // ],
  };

  return (
    <section className="wishlistcard-section">
      <Container>
        <Row>
          <Col>
            <div className="my-wishlist-card-wrapper slider">
              <Slider className="customer-say-slider" {...settings}>
                {
                  aboutusSliderData.map((item,index:any)=>{
                    return(
                      <div className="aboutusReactslick-card_wrapper" key={index}>
                      <div className="aboutusReactslick-card_rating">
                        <ul>
                          <li>
                            <FontAwesomeIcon icon={faStar} size="lg" />{" "}
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} size="lg" />{" "}
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} size="lg" />{" "}
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} size="lg" />{" "}
                          </li>
                          <li>
                            <FontAwesomeIcon icon={faStar} size="lg" />{" "}
                          </li>
                        </ul>
                      </div>
                      <h2 className="aboutusReactslick-card_descriptiontext">
                        {item.descriptionText}
                      </h2>
                      <Image
                        src={item.imageUrl}
                        className="aboutusReactslick-card_profilephoto"
                      />
                      <p className="aboutusReactslick-card_profileheading">
                        {item.imageName}
                      </p>
                      {/* <p className="aboutusReactslick-card_profileheading">
                        {item.title}
                      </p> */}
                    </div>
                    )
                  })
                }
               
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ReactSlider;
