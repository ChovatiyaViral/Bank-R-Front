"use client";
import ContactusComponent from '@/components/ContactComponents/ContactusComponent';
import OurMenu from '@/components/HomePageComponents/OurMenu'
import React from 'react';

const ContactusPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const contactDetails = {
    description: "#1 of 12 Restaurants in Huntly with 4.5 Rating from Tripadvisor."
  }

  React.useEffect(() => {
    if (window.innerWidth <= 700) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <OurMenu headingtext="Our" subtext="Contact" imageUrl={isMobile ? "/contactImages/contact-bg-mobile.jpg" : "/contactImages/contact-bg.jpg"} />
      <ContactusComponent contactDetails={contactDetails} />
    </>
  )
}

export default ContactusPage;