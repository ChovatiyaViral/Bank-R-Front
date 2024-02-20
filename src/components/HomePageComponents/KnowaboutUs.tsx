import React from "react";

const KnowaboutUs = (props: any) => {
  return (
    <div className="knowaboutUs-container" style={{ backgroundImage: `url(${props.imageUrl})` }}>
      <p className="know-text">Know More</p>
      <h2 className="word-space">Our History</h2>
      <p className="text pb-2">
        Based in the ancient town of Huntly in Aberdeenshire, The Bank offers a menu to suit all from brunches through to innovative suggestions on our evening menu.
      </p>
      {/* <p className="text"> All this while enjoying the finest whiskies from Duncan Taylor Scotch Whisky Ltd alongside an extensive wine and cocktail list.
      </p> */}
      {/* <p className="john-text">J o h n &nbsp; P h i l l i p e</p> */}
    </div>
  );
};

export default KnowaboutUs;
