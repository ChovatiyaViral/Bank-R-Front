import { url } from "inspector";
import React from "react";

const OurMenu = (props:any) => {
  return (
    <div className="ourmenu-wrapper" style={{backgroundImage:`url(${props.imageUrl})`}}>
      <div className="parallax_title ">
        <p className="ppb_ourtitle">{props.headingtext}</p>
        <p className="meals-subtext">{props.subtext}</p>
      </div>
    </div>
  );
};

export default OurMenu;
