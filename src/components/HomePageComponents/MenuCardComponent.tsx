"use client";
import React, { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF,faInstagram,faPinterest,faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
// import {
//   faSignOut,
//   faLocationDot,
//   faPhone,
//   faGlobe,
//   faEarthAmericas,faAngleUp
// } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Slider from "react-slick";
const items = [
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "a",
    isOrder: "order",
    imageUrl: "/upload/dl_00_01_021-400x400.jpg",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl: "/upload/dl_00_01_021-400x400.jpg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
    imageUrl: "/upload/dl_00_01_021-400x400.jpg",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Roasted Red Potatoes with Rosemary",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
    imageUrl:
      "/upload/4ccb9fab-c445-4343-884d-3992a6588e98-620x444-400x400-1433934149.jpeg",
  },
];
var settings: any = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MenuCardComponent = ({ menuItems }: any) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedSliderIndex, setSelectedSliderIndex] = useState(0);
  return (
    <div>
      {showModal ? (
        <div className={`image_view_slider ${showModal ? "open" : "close"}`}>
          <div className="image_slider">
            <Image
              src="/svg/close-icon.svg"
              alt="image"
              width={24}
              height={24}
              className="close_icon_image"
              onClick={() => setShowModal(false)}
            />
            {menuItems && menuItems.length > 0 ? (
              <Slider {...settings} currentSlide={selectedSliderIndex}>
                {menuItems.slice(0, 4).map((item: any, index: number) => {
                  return (
                    <div
                      style={{ height: "150", width: "150", background: "red" }}
                      key={index}
                      className="inner_div"
                    >
                      <Image
                        src={item.imageUrl}
                        alt="image"
                        width={450}
                        height={450}
                      />
                      {/* <div className="menu_item_details">
                              <div className="inner_details">
                                <h2>{item.cardHeading}</h2>
                                <h3>{item.cardSubtext}</h3>
                              </div>
                              <p>{item.cardPrice}</p>
                            </div> */}
                    </div>
                  );
                })}
              </Slider>
            ) : null}
          </div>
        </div>
      ) : null}
      <Container>
        <Row>
          {menuItems && menuItems.length > 0
            ? menuItems.slice(0, 4).map((item: any, index: any) => {
                return (
                  <Col
                    lg={3}
                    md={3}
                    xs={12}
                    key={index}
                    style={{ padding: "0" }}
                    className="card-wrapper"
                  >
                    <Image
                      src={item.imageUrl}
                      className="card-image"
                      alt="image"
                      width={304}
                      height={304}
                    />
                    <div
                      className="card-afterhower"
                      onClick={() => {
                        setShowModal(true), setSelectedSliderIndex(index);
                      }}
                    >
                      {/* <div className="inner_card_div">
                          <div className="menu_detail_section">
                            <div className="details">
                              <h2>{item.cardHeading}</h2>
                              <h3>{item.cardSubtext}</h3>
                            </div>
                            <p>{item.cardPrice}</p>
                          </div>
                        </div> */}
                    </div>
                  </Col>
                );
              })
            : ""}
        </Row>
      </Container>
    </div>
  );
};

export default MenuCardComponent;
