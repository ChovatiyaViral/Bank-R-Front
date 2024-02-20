"use client";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faL } from "@fortawesome/free-solid-svg-icons";
import { ReactSVG } from "react-svg";
import Link from "next/link";
import Tablebooking from "@/components/modal/Tablebooking";
import Hamburger from "../HamburgerMenu/Hamburger";
import { usePathname } from "next/navigation";
import Thankyou from "@/components/modal/Thankyou";
import AcceptCookies from "@/components/modal/AcceptCookies";
import ReservationText from "@/components/modal/ReservationText";

const Header = () => {
  const [isReservationModalActive, setReservationModalActive] = useState(false);
  const [isHamburgerActive, setHamburgerActive] = useState(false);
  const router = usePathname();

  const hamburgermodal = () => {
    setHamburgerActive(!isHamburgerActive);
    document.body.classList.toggle("overflow-hidden");
  };

  const reservationmodal = () => {
    setReservationModalActive(!isReservationModalActive);
    document.body.classList.toggle("overflow-hidden");
  };
  const [isThankyouModalActive, setThankyouModalActive] = useState(false);
  const [isReservationContactActive, setReservationContactActive] = useState(false);

  const contactModal = () => {
    setReservationContactActive(!isReservationContactActive);
    // document.body.classList.toggle("overflow-hidden");
  };

  const thankyoumodal = () => {
    setThankyouModalActive(!isThankyouModalActive);
    document.body.classList.toggle("overflow-hidden");
  };
  const [scrolled, setScrolled] = useState(false);
  const [policyPage, setPolicyPage] = useState(false);

  useEffect(() => {
    const pathName = ["/privacy-policy", "/cookie-policy", "/terms-and-condition"]
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    if (pathName.includes(router)) {
      setPolicyPage(true);
    } else {
      setPolicyPage(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [router]);


  return (
    <>
      <div className={`bottom-header_wrapper ${scrolled ? "scrolled policy-scrolled-header" : ""}  ${policyPage ? "scrolled policy-top-header" : ""}`}>
        <Container>
          <Row>
            <Col md={3} xs={6}>
              <Link href="/"><ReactSVG src={"/svg/logo.svg"} className="leftsection_image" /></Link>
            </Col>
            <Col md={9} xs={6}>
              <div
                className={`bottom-header_rightsection ${scrolled ? "scrolled" : ""
                  }  ${policyPage ? "scrolled" : ""}`}
              >
                <ul>
                  <Link href={`/`} className={`${router === "/" && "active"}`}>
                    <li>Home</li>
                  </Link>
                  <Link
                    href={`/menu`}
                    className={`${router === "/menu" && "active"}`}
                  >
                    <li>Menu</li>
                  </Link>
                  <Link
                    href={`/valentine-menu`}
                    className={`${router === "/valentine-menu" && "active"}`}
                  >
                    <li>VALENTINE&apos;S Menu</li>
                  </Link>
                  <Link
                    href={`/our-whiskies`}
                    className={`${router === "/our-whiskies" && "active"}`}
                  >
                    <li>Our WHISKies</li>
                  </Link>
                  {/* <Link
                    href={`/press-release`}
                    className={`${router === "/press-release" && "active"}`}
                  >
                    <li>Press Release</li>
                  </Link> */}
                  <Link
                    href={`/about-us`}
                    className={`${router === "/about-us" && "active"}`}
                  >
                    <li>About us</li>
                  </Link>
                  <Link
                    href={`/contact-us`}
                    className={`${router === "/contact-us" && "active"}`}
                  >
                    <li>Contact us</li>
                  </Link>
                  <li
                    className={`reservation_btn ${scrolled ? "scrolled" : ""} ${policyPage ? "scrolled" : ""}`}
                    onClick={contactModal}
                  >
                    Reservation
                  </li>
                  {/* <p className="reservation" onClick={reservationmodal}></p> */}
                  <li onClick={hamburgermodal} className="onlymobile">
                    {/* <FontAwesomeIcon icon={faBars} size="xl" /> */}
                    <ReactSVG src={"/svg/hamburgmenu.svg"} />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Tablebooking
        onModalClose={reservationmodal}
        onThankyouClose={thankyoumodal}
        modalClass={`thankyou-modal ${isReservationModalActive ? "open" : ""}`}
      />
      <Thankyou
        onModalClose={thankyoumodal}
        modalClass={`thankyou-modal ${isThankyouModalActive ? "open" : ""}`}
      />
      <ReservationText
        onModalClose={contactModal}
        modalClass={`thankyou-modal ${isReservationContactActive ? "open" : ""}`}
      />
      {/* <AcceptCookies onModalClose={thankyoumodal}
        modalClass={`thankyou-modal ${isThankyouModalActive ? "open" : ""}`}/> */}

      <Hamburger
        onModalClose={hamburgermodal}
        modalClass={`thankyou-modal ${isHamburgerActive ? "open" : ""}`}
      />
    </>
  );
};

export default Header;
