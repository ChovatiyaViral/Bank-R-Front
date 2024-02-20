"use client";
import DiningExperiance from "@/components/AboutPageComponents/DiningExperiance";
import OurPhilosophy from "@/components/AboutPageComponents/OurPhilosophy";
import SliderComponent from "@/components/AboutPageComponents/SliderComponent";
import OnlineReservation from "@/components/HomePageComponents/OnlineReservation";
import OurMenu from "@/components/HomePageComponents/OurMenu";
import React from "react";

const AboutusPage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (window.innerWidth <= 700) {
      setIsMobile(true);
    }
  }, []);
  return (
    <>
      <OurMenu
        headingtext="More"
        subtext="About Us"
        imageUrl={isMobile ? "/aboutUsImages/about-bg-mobile.jpg" : "/aboutUsImages/about-bg.jpg"}
      />
      <OurPhilosophy />
      <DiningExperiance />
      <SliderComponent />
      <OnlineReservation primaryText={"Make"} secondaryText={`RESERVATION`} />
    </>
  );
};

export default AboutusPage;
