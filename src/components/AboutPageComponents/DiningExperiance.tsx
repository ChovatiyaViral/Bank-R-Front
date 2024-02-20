"use client";
import ImageModal from "@/components/modal/ImageModal";
import { useState } from "react";
import { Image } from "react-bootstrap";
const DiningExperiance = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl: any) => {
    setSelectedImage(imageUrl);
  };
  const handleModalClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="dining-container">
      <Image
        src="/aboutUsImages/ex-1.jpg"
        className="philosophy-image"
        // onClick={() => handleImageClick("/aboutUsImages/ex-1.jpg")}
      />
      {selectedImage && <ImageModal selectedImage={selectedImage} handleModalClose={handleModalClose} imagemodal={"imagemodal"} img={"img"} />}
      <div className="ourphilosophy-textcontainer onlydesktop" data-aos="fade-down fade-up">
        <p className="dining-text">Dining</p>
        <h2>Experience</h2>
        {/* <h3 className="sub-text">
          ULTIMATE DINING EXPERIENCE LIKE NO OTHER. OUR MODERN FUSION CUISINE
        </h3> */}
        <h3 className="text">Our Head Chef comes with over 35 year’s experience, in kitchens around the world bringing innovation and passion with him.</h3>
        <h3 className="text">
          With his experience, we have a menu that suits all tastes and caters towards the requirements expected today. Brunches, lunches and dinners are all available with a daily selection of
          specials.
        </h3>
      </div>
      {/* <div className="ourphilosophy-textcontainer onlymobile">
        <p className="dining-text">Dining</p>
        <h2>Experiance</h2>
        <p className="sub-text">
          ULTIMATE DINING EXPERIENCE LIKE NO OTHER. OUR MODERN FUSION CUISINE
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          veniam sit iure. Corrupti, eaque velit? Dicta quisquam quam quos esse
          iusto dolorem quia commodi voluptates, quibusdam provident eaque
          repudiandae iure?
        </p>
      </div> */}
    </div>
  );
};

export default DiningExperiance;
