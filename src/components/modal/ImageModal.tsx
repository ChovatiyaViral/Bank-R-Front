"use client";
import React, { useState } from "react";
import ModalImage from "react-modal-image";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ImageModal = (props: any) => {

  const {selectedImage,handleModalClose,imagemodal,img}=props;
  return (
    <>
      <div className={imagemodal} onClick={handleModalClose}>
        <Image src={`${selectedImage}`} alt="Selected Image" className={img} />
        <span className="close-button">
          <FontAwesomeIcon
            icon={faXmark}
            size="xl"
            style={{ color: "#FFFFFF" }}
            className="x-btn"
          />
        </span>
      </div>
    </>
  );
};

export default ImageModal;
