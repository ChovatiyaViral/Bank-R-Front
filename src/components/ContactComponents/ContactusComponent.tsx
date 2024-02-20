"use client";
import Googlemap from "@/components/formElements/Googlemap";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import ContactForm from "./ContactForm";

const ContactusComponent = ({ contactDetails }: any) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl: any) => {
    setSelectedImage(imageUrl);
  };
  const handleModalClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section className="contactus-wrapper">
        <div className="headingText-container">
          <p className="contact_description" id="context-description-text">
            {contactDetails.description}
          </p>
        </div>
        <div className="image-container">
          <Image src="/contactImages/contact-form-bg.jpg" className="contactus-image" />
          {/* {selectedImage && (
            <ImageModal
              selectedImage={selectedImage}
              handleModalClose={handleModalClose}
              imagemodal={"imagemodal"}
              img={"img"}
            />
          )} */}
          <div className="form-wrapper" data-aos="fade-down fade-up">
            <ContactForm />
          </div>
        </div>
      </section>
      <div className="contactus-mapcontainer">
        <Googlemap />
      </div>
    </>
  );
};

export default ContactusComponent;
