"use client";
import Link from "next/link";
import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Slider from "react-slick";
import { ReactSVG } from "react-svg";
import data from "../../../../public/data.json";

const Footer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedSliderIndex, setSelectedSliderIndex] = useState(0);

  const handleImageClick = (imageUrl: any) => {
    setSelectedImage(imageUrl);
  };
  const handleModalClose = () => {
    setSelectedImage(null);
  };

  var settings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="footer_top">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="footer_topwrapper">
                <div>
                  <Link href="/">
                    <Image src="/svg/logo.svg" alt="" width="115" height="110" />
                  </Link>
                </div>
                {/* <h2 className="heading-text">SPECIAL DIETS</h2>
                <p className="pb-0">Vegetarian Friendly, Vegan Options, Gluten Free Options</p>
                <h2 className="heading-text">CUISINES</h2>
                <p className="mt-0 pt-3">Cafe, European, British, Scottish</p> */}
                {/* <div className="social_wrapper">
                  <a
                    href="https://www.tripadvisor.co.uk/Restaurant_Review-g1020800-d9597106-Reviews-The_Bank_Cafe_and_Restaurant-Huntly_Aberdeenshire_Scotland.html"
                    target="_blank"
                    className="tripadviser_icon"
                  >
                    <Image src="/contactImages/tripadviser-icon.png" width={40} height={40} />
                  </a>
                </div> */}
              </div>
            </Col>
            <Col lg={4}>
              <div className="footer_topwrapper footer_middleContainer">
                <h2 className="heading-text">SPECIAL DIETS</h2>
                <p className="pb-0">Vegetarian Friendly, Vegan Options, Gluten Free Options</p>
                <h2 className="heading-text">CUISINES</h2>
                <p className="mt-0 pt-3">Cafe, European, British, Scottish</p>
                <div className="social_wrapper">
                  <a
                    href="https://www.tripadvisor.co.uk/Restaurant_Review-g1020800-d9597106-Reviews-The_Bank_Cafe_and_Restaurant-Huntly_Aberdeenshire_Scotland.html"
                    target="_blank"
                    className="tripadviser_icon"
                  >
                    <Image src="/contactImages/tripadviser-icon.png" width={40} height={40} />
                  </a>
                </div>
              </div>
            </Col>
            {/* <Col lg={4}>
              <div className="footer_middleContainer">
                <h2 className="heading-text galarytext">GALLERY</h2>

                {showModal ? (
                  <div className={`image_view_slider ${showModal ? "open" : "close"}`}>
                    <div className="image_slider">
                      <Image src="/svg/close-icon.svg" alt="image" width={24} height={24} className="close_icon_image" onClick={() => setShowModal(false)} />
                      {data.dataURL && data.dataURL.length > 0 ? (
                        <Slider {...settings} currentSlide={selectedSliderIndex}>
                          {data.dataURL.map((item: any, index: number) => {
                            return (
                              <div
                                style={{
                                  height: "150",
                                  width: "150",
                                  background: "red",
                                }}
                                key={index}
                                className="inner_div"
                              >
                                <Image src={item.url} alt="image" width={450} height={450} />
                              </div>
                            );
                          })}
                        </Slider>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <Container>
                    <Row>
                      {data.dataURL.length > 0
                        ? data.dataURL.map((data: any, index: number) => {
                            return (
                              <Col lg={4} xs={4} key={index} className="pad">
                                <div className="top-footer_imagewrapper">
                                  <Image
                                    src={data.url}
                                    className="footer-card_image"
                                    onClick={() => {
                                      setShowModal(true), setSelectedSliderIndex(index);
                                    }}
                                  />
                                </div>
                              </Col>
                            );
                          })
                        : ""}
                    </Row>
                  </Container>
                )}
              </div>
            </Col> */}
            <Col lg={4}>
              <div className="footer_middleContainer">
                <h2 className="heading-text">Contact info</h2>
                <div className="contact-info_wrapper">
                  <ul className="contact-info">
                    <li>
                      <ReactSVG src={`/svg/locationicon.svg`} />
                      {/* <FontAwesomeIcon
                      icon={faLocationDot}
                      size="sm"
                      className="location-symbol"
                    /> */}
                      <p> 1 The Square, Huntly AB54 8BR Scotland</p>
                    </li>
                    <li>
                      <ReactSVG src={`/svg/phoneicon.svg`} />
                      {/* <FontAwesomeIcon
                      icon={faPhone}
                      size="sm"
                      className="location-symbol"
                    /> */}
                      <p>
                        <a href="tel:+44 1466 543103">+44 1466 543103</a>
                      </p>
                    </li>
                    <li>
                      {/* <FontAwesomeIcon
                      icon={faEnvelope}
                      size="sm"
                      className="location-symbol"
                    /> */}

                      <ReactSVG src={"/svg/mailicon.svg"} />
                      <p>
                        <a href="mailto:info@thebankrestauranthuntly.com">info@thebankrestauranthuntly.com</a>
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="policy_menu_section">
                  <Link href={`/terms-and-condition`}>Terms & Conditions</Link>
                  {/* <a href="/terms-and-condition">Terms & Conditions</a> */}
                  <Link href={`/privacy-policy`}>Privacy Policy</Link>
                  {/* <a href="/privacy-policy">Privacy Policy</a> */}
                  <Link href={`/cookie-policy`}>Cookie Policy</Link>
                  {/* <a href="/cookie-policy">Cookie Policy</a> */}

                  {/* <a href="https://thespiritsembassy.com/policies/terms-of-service" target="_blank">Terms & Condition</a> */}
                  {/* <a href="/privacy-policy">Privacy Policy</a> */}
                  {/* <a href="https://thespiritsembassy.com/policies/privacy-policy" target="_blank">Cookie Policy</a> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className=" footer_bottom">
        <div id="copyright">© {new Date().getFullYear()} The Bank Restaurant. All Rights Reserved</div>
        {/* <span id="toTop">
          <FontAwesomeIcon icon={faAngleUp} size="lg" />
        </span> */}
      </div>
    </>
  );
};

export default Footer;
