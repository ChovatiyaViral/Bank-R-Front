"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import { ReactSVG } from "react-svg";
const items = [
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
  },
  {
    cardHeading: "Roasted Red Potatoes ",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "a",
    isOrder: "order",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
  },
  {
    cardHeading: "Roasted Red Potatoes ",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
  },
  {
    cardHeading: "Roasted Red Potatoes ",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
  },
  {
    cardHeading: "Roasted Red Potatoes ",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
  },
  {
    cardHeading: "Baked potato Pizza",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$15",
    isStar: "",
  },
  {
    cardHeading: "Roasted Red Potatoes ",
    cardSubtext: "Potato/Bread/Onion",
    cardPrice: "$12.5",
    isStar: "",
  },
];
const MainCourse = (props: any) => {
  const { menuCourseItem, title, subTitle, isMenubutton_ourwhiskies } = props;
  return (
    <div className="maincourse-container">
      {title ? (
        <div className="inner-wrapper  menu_main_title">
          <h2>{title}</h2>
          <h3 className="sub_menu_item_name">{subTitle}</h3>
        </div>
      ) : null}
      <div className="card-wrapper">
        <Container>
          <Row>
            {menuCourseItem && menuCourseItem.length > 0
              ? menuCourseItem.map((item: any, index: any) => {
                
                  return (
                    <>
                      <Col
                        xl={4}
                        lg={6}
                        xs={12}
                        style={{ marginTop: "30px" }}
                        key={index}
                      >
                        <div className="inner-cardwrapper">
                          <h4 style={{ marginBottom: "3px" }}>
                            <span className="cardheading cardheading-maxwidth">
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
                                Specialty <ReactSVG src="/svg/star-icon.svg" />
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                          {
                            item.whiskyUrl && (
                              //  <Link href={`/our-whiskies`} className="order_menu">
                              <a
                                className="order_menu"
                                href={item.whiskyUrl}
                                target="_blank"
                                key={index}
                              >
                                Buy Online{" "}
                                <ReactSVG src="/svg/right-arrow-icon.svg" />
                              </a>
                            )
                            //  </Link>
                          }
                        </div>
                      </Col>
                    </>
                  );
                })
              : ""}
            {isMenubutton_ourwhiskies ? (
              <Col xl={12} lg={12} xs={12}>
                <div className="menupage-ourwhiskies">
                  <Link href={"/our-whiskies"}>
                    <button>Explore</button>
                  </Link>
                </div>
              </Col>
            ) : null}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MainCourse;
