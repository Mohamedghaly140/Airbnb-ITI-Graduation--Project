import React from "react";

function ExploreCard({ card }) {
  return (
    <div className="col-lg-3 col-md-6 col-12 mt-2">
      <div
        src={card.imgURL}
        alt={card.title}
        className="explore-img"
        style={{ backgroundImage: `url(${card.imgURL})` }}
      />
      <h5 className="pt-3 font-weight-bold ">{card.title}</h5>
      <span>{card.details}</span>
    </div>
  );
}

export default ExploreCard;
