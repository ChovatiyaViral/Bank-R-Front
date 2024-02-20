import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ReactSVG } from "react-svg";

const ReservationText = (props: any) => {

  const { modalClass, onModalClose } = props;

  return (
    <div className={`modal-wrapper ${modalClass}`}>
      <div className="modal-container">
        <h1 className="contact_heading mb-3 mt-2">
        Contact The Bank Restaurant For Reservations
        </h1>

        <div className="contact_text mb-3">
          <ReactSVG src={`/svg/phoneicon.svg`} />

          <a href="tel:+44 1466 543103">+44 1466 543103</a>
        </div>

        <div className="contact_text">

          <ReactSVG src={"/svg/mailicon.svg"} />

          <a href="mailto:info@thebankrestauranthuntly.com">info@thebankrestauranthuntly.com</a>
        </div>

        <span className="close-button" onClick={onModalClose}>
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            style={{ color: "#FFFFFF" }}
            className="x-btn"
          />
        </span>
      </div>

    </div>
  );
};

export default ReservationText;
