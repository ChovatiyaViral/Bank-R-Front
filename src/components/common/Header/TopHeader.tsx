"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";
import data from "../../../../public/data.json";
import { Image } from "react-bootstrap";
import { ReactSVG } from "react-svg";

const TopHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="header_style_wrapper">
      <div className={`above_top_bar ${scrolled ? "scrolled" : ""}`}>
        <div className="page_content_wrapper">
          <div className="social_wrapper social_icon_with_text">
            <span id="award_text">
              #1 of 12 Restaurants in Huntly with 4.5 Rating from Tripadvisor.
            </span>
            <a href="https://www.tripadvisor.co.uk/Restaurant_Review-g1020800-d9597106-Reviews-The_Bank_Cafe_and_Restaurant-Huntly_Aberdeenshire_Scotland.html" target="_blank" className="tripadviser_icon">
              <Image src="/contactImages/tripadviser-icon.png" width={40} height={40} />
            </a>
            {/* <ul>
              <li> */}
                <a href="https://www.facebook.com/Clubroom2023" target="_blank">
                  <ReactSVG src={"/svg/facebook_white.svg"} />
                </a>
              {/* </li>
            </ul> */}

          </div>
          <div className="extend_top_contact_info top_contact_info">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="location-symbol"
            />
            {/* <ReactSVG src={data.url} className="location-symbol"/> */}
            <span id="top_contact_address">
              1 The Square, Huntly AB54 8BR Scotland
            </span>
            <span id="top_contact_number">
              {/* <ReactSVG src={data.url} className="phone-symbol"/> */}
              <FontAwesomeIcon
                icon={faPhone}
                size="1x"
                className="phone-symbol"
              />
               <a href="tel:+44 1466 543103">+44 1466 543103</a>
            </span>
            {/* <FontAwesomeIcon
              icon={faLocationDot}
              className="location-symbol"
            /> */}
          </div>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default TopHeader;
