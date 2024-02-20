"use client";
import ImageModal from "@/components/modal/ImageModal";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
const OurPhilosophy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl: any) => {
    setSelectedImage(imageUrl);
  };
  const handleModalClose = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    AOS.init({ duration: 300 });
    AOS.refresh();
  }, []);
  return (
    <div className="philosophy-container">
      <div
        className="ourphilosophy-textcontainer onlydesktop"
        data-aos="fade-down fade-up"
      >
        <p className="our-text">Our</p>
        <h2>Philosophy</h2>
        <h3 className="text">
          Sourcing the absolute best ingredients grown and harvested locally, The Bank strives to offer the finest dining experience possible.
        </h3>
        <h3 className="text">
          Enjoy your food whilst also sampling the finest of whisky from <br/> Duncan Taylor Scotch Whisky Ltd.
        </h3>
      </div>
      {/* <div className="ourphilosophy-textcontainer onlymobile">
        <p className="our-text">Our</p>
        <h2>Philosophy</h2>
        <h3 className="our-description-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          veniam sit iure. Corrupti, eaque velit? Dicta quisquam quam quos esse
          iusto dolorem quia commodi voluptates, quibusdam provident eaque
          repudiandae iure?
        </h3>
      </div> */}

      <Image
        src="/aboutUsImages/bg-img-3.jpg"
        className="philosophy-image"
      // onClick={() => handleImageClick("/aboutUsImages/bg-img-3.jpg")}
      />
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          handleModalClose={handleModalClose}
          imagemodal={"imagemodal"}
          img={"img"}
        />
      )}
    </div>
  );
};

export default OurPhilosophy;
