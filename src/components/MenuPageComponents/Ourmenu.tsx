'use client';
import React from 'react'

const Ourmenu = (props:any) => {
  const {primaryText,secondaryText}=props;
  return (
    <div className="menupage-wrapper">
    <div className="parallax_title ">
      {/* <h2 className="ppb_title"> */}
        <p className="ppb_title_first">{primaryText}</p>
        <span>{secondaryText}</span>
      {/* </h2> */}
      
    </div>
  </div>
  )
}

export default Ourmenu