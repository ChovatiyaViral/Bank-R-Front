import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Thankyou = (props: any) => {
 
  const { modalClass, onModalClose } = props;

  return (
    <div className={`modal-wrapper ${modalClass}`}>
      <div className="modal-container">
        <h1 className="heading">
        Thank you for making a reservation with us !
        </h1>
        <p className="subtext">A confirmation mail has been sent to you on your email id.</p>
        {/* <p className="bottomtext">Make Another reservation</p> */}
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

export default Thankyou;
