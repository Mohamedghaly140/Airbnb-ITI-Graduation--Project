import React from "react";

function CastleCards({ card }) {
  return (
    <div className="col-lg-2 col-md-4 col-12 mt-2">
      <div
        src={card.imgURL}
        alt={card.title}
        className="explore-img castle-img"
        style={{ backgroundImage: `url(${card.imgURL})` }}
      />
      <h5 className="pt-3 font-weight-bold ">{card.title}</h5>
      <span>{card.details}</span>
    </div>
  );
}

export default CastleCards;
