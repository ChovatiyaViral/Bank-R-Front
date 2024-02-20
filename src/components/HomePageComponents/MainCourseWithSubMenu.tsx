"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import { ReactSVG } from "react-svg";

const MainCourseWithSubMenu = (props: any) => {
  const { menuCourseItem, title, subTitle, description, isChildrenMenu, additionals, additionalsPrice, recommendetionText, paninisSubText, sandwichesSubText, hotSandwichesSubText, noImage } =
    props;
  const [selectedSubMenuItemName, setSelectedSubMenuItemName]: any =
    useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedSliderIndex, setSelectedSliderIndex] = useState(0);
  var settings: any = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const keyName = Object.keys(menuCourseItem);
    if (keyName.length > 0) {
      setSelectedSubMenuItemName(keyName[0]);
    }
  }, [menuCourseItem]);

  return (
    <>
      <div className="maincourse-container">
        {title ? (
          <div className="inner-wrapper menu_main_title">
            <h2>{title}</h2>
            <h3 className="sub_menu_item_name">{subTitle}</h3>
          </div>
        ) : null}
        {description ? (
          <div className="menu_price_inner_div">
            {description}
          </div>
        ) : null}
        {recommendetionText ? (
          <div className="menu_price_inner_div">
            {recommendetionText}
          </div>
        ) : null}
        {isChildrenMenu ? (
          <div className="sub_menu_item_name">
            {Object.keys(menuCourseItem).map((item: any, index: number) => {
              return (
                <h3
                  key={index}
                  className={selectedSubMenuItemName === item ? "active" : ""}
                  onClick={() => setSelectedSubMenuItemName(item)}
                >
                  {item}{" "}
                </h3>
              );
            })}
          </div>
        ) : (
          <div className="sub_menu_item_name">
            {Object.keys(menuCourseItem).map((item: any, index: number) => {
              return (
                <h3
                  key={index}
                  className={selectedSubMenuItemName === item ? "active" : ""}
                  onClick={() => setSelectedSubMenuItemName(item)}
                >
                  {item}{" "}
                </h3>
              );
            })}
          </div>
        )}
        <div className="card-wrapper">
          {
            selectedSubMenuItemName == "Paninis" && paninisSubText ? (
              <div className="menu_price_inner_div sub_menu_text">
                {paninisSubText}
              </div>
            ) : null
          }
          {
            selectedSubMenuItemName == "Sandwiches" && sandwichesSubText ? (
              <div className="menu_price_inner_div sub_menu_text">
                {sandwichesSubText}
              </div>
            ) : null
          }

          {
            selectedSubMenuItemName == "Hot Sandwiches" && hotSandwichesSubText ? (
              <div className="menu_price_inner_div sub_menu_text">
                {hotSandwichesSubText}
              </div>
            ) : null
          }

          <Container>
            <Row>
              {menuCourseItem[selectedSubMenuItemName] &&
                menuCourseItem[selectedSubMenuItemName].length > 0
                ? menuCourseItem[selectedSubMenuItemName].map(
                  (item: any, index: any) => {
                    return (
                      <Col
                        xl={4}
                        lg={6}
                        xs={12}
                        style={{ marginTop: "30px" }}
                        key={index}
                      >
                        <div className="inner-cardwrapper">
                          <h4>
                            <span className="cardheading menu-header-text">
                              {item.cardHeading}
                            </span>
                            <span className="currency">{item.cardPrice}</span>
                          </h4>
                          <div className="menu-item-sub-text mb-2">
                            {item?.cardsubheading?.length > 0 && (
                              <div className="cardsubheading-textContainer">
                                {item.cardsubheading.map(
                                  (item: any, index: any) => {
                                    return (
                                      <span
                                        className="cardsubheading-text"
                                        key={index}
                                      >
                                        {item}
                                      </span>
                                    );
                                  }
                                )}
                              </div>
                            )}
                            <span className="cardsubtext">
                              {item.cardSubtext}
                            </span>
                            {item.isStar ? (
                              <span className="star star_tag">
                                Specialty{" "}
                                <ReactSVG src="/svg/star-icon.svg" />
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          {item.isOrder && (
                            <span className="order_menu">
                              Buy Online{" "}
                              <ReactSVG src="/svg/right-arrow-icon.svg" />
                            </span>
                          )}
                        </div>
                      </Col>
                    );
                  }
                )
                : ""}
            </Row>
            {
              selectedSubMenuItemName === "BAGUETTES" ?
                additionals && (<h6 className="mt-2"><b>* {additionals} baguettes {additionalsPrice}</b></h6>) : null
            }

            {
              selectedSubMenuItemName === "Toasties" ?
                additionals && (<h6 className="mt-2"><b>* {additionals} toastie {additionalsPrice}</b></h6>) : null
            }

            {
              selectedSubMenuItemName === "Hot Drinks - Coffees & Hot Chocolate" ?
                additionals && (<h6 className="mt-2"><b>* {additionals} toastie {additionalsPrice}</b></h6>) : null
            }

          </Container>
        </div>
      </div>
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
              {menuCourseItem[selectedSubMenuItemName] &&
                menuCourseItem[selectedSubMenuItemName].length > 0 ? (
                <Slider {...settings} currentSlide={selectedSliderIndex}>
                  {menuCourseItem[selectedSubMenuItemName].slice(0, 4).map(
                    (item: any, index: number) => {
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
                    }
                  )}
                </Slider>
              ) : null}
            </div>
          </div>
        ) : null}
        {/* {
          noImage ?
            null :

            <Container>
              <Row>
                {menuCourseItem[selectedSubMenuItemName] &&
                  menuCourseItem[selectedSubMenuItemName].length > 0
                  ? menuCourseItem[selectedSubMenuItemName]
                    .slice(0, 4)
                    .map((item: any, index: any) => {
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
                            width={300}
                            height={300}
                          />
                          <div
                            className="card-afterhower"
                            onClick={() => {
                              setShowModal(true), setSelectedSliderIndex(index);
                            }}
                          >
                          </div>
                        </Col>
                      );
                    })
                  : ""}
              </Row>
            </Container>
        } */}
      </div>
    </>
  );
};

export default MainCourseWithSubMenu;
