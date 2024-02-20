"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import SearchInput from "@/components/formElements/SearchInput";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Tablebooking from "@/components/modal/Tablebooking";
import { ReactSVG } from "react-svg";
import Thankyou from "@/components/modal/Thankyou";
import ReservationText from "@/components/modal/ReservationText";
const hamburgerImage = [
  { url: "/upload/40747094363_16c3b23b2f_s.jpg", alt: "img" },
  { url: "/upload/40747094363_16c3b23b2f_s.jpg", alt: "img" },
  { url: "/upload/40747094363_16c3b23b2f_s.jpg", alt: "img" },
  { url: "/upload/46968818334_b4bb23dc19_s.jpg", alt: "img" },
  { url: "/upload/40747094363_16c3b23b2f_s.jpg", alt: "img" },
  { url: "/upload/46968818334_b4bb23dc19_s.jpg", alt: "img" },
  { url: "/upload/40747094363_16c3b23b2f_s.jpg", alt: "img" },
  { url: "/upload/40747094363_16c3b23b2f_s.jpg", alt: "img" },
];
const Hamburger = (props: any) => {
  const { modalClass, onModalClose } = props;

  const [isReservationModalActive, setReservationModalActive] = useState(false);
  const [isThankyouModalActive, setThankyouModalActive] = useState(false);
  const [isReservationContactActive, setReservationContactActive] = useState(false);

  const reservationmodal = () => {
    setReservationModalActive(!isReservationModalActive);
    document.body.classList.toggle("overflow-hidden");
  };
  const handlereservationmodal = () => {
    reservationmodal();
    onModalClose();
  };


  const contactModal = () => {
    setReservationContactActive(!isReservationContactActive);
    onModalClose();
    // document.body.classList.toggle("overflow-hidden");
  };

  const thankyoumodal = () => {
    setThankyouModalActive(!isThankyouModalActive);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      <div className={`hamburger-container ${modalClass}`}>
        <div className="hamburger-innercontainer">
          <div className="menulist">
            <ul>
              <Link href={`/`}>
                <li onClick={onModalClose}>Home</li>
              </Link>
              <Link href={`/menu`}>
                <li onClick={onModalClose}>Menu</li>
              </Link>
              <Link href={`/valentine-menu`}>
                <li onClick={onModalClose}>VALENTINE&apos;S Menu</li>
              </Link>
              <Link href={`/our-whiskies`}>
                <li onClick={onModalClose}>Our Whiskies</li>
              </Link>
              {/* <Link href={`/press-release`}>
                <li onClick={onModalClose}>Press Release</li>
              </Link> */}
              <Link href={`/about-us`}>
                <li onClick={onModalClose}>About us</li>
              </Link>
              <Link href={`/contact-us`}>
                <li onClick={onModalClose}>Contact us</li>
              </Link>

              <li
                className={`reservation_btnmobile  `}
                onClick={() => contactModal()}
              >
                Reservation
              </li>
            </ul>
          </div>
          <Link href="/">
            <ReactSVG src={"/svg/logo.svg"} className=" humberg-modal" />
          </Link>
        </div>

        <span className="close-button" onClick={onModalClose}>
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            style={{ color: "#777777" }}
            className="x-btn"
          />
        </span>
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
    </>
  );
};

export default Hamburger;
