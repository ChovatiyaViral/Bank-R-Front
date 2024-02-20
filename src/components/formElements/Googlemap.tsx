"use client";
import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const Googlemap = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "50vh", width: "100%" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCCT4hFuYzBlo2RLIYVCVIfrpSo49Oi6jk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact> */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2146.8205223827003!2d-2.7892882231990948!3d57.4473248737582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4884526c3ffc50cf%3A0x372d8f9cbcae900d!2sThe%20Bank%20Cafe%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1689322405454!5m2!1sen!2sin" width="100%" height="100%" loading="lazy"></iframe>
    </div>
  );
};

export default Googlemap;
