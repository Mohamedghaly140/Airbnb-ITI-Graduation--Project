import React from "react";

function SaftyCards({ card }) {
  return (
    <div className="col-lg-3 col-md-8 col-12 mt-4 mt-lg-0">
      <img src={`${card.saflogo}`} alt="logo" className="safty-logo" />
      <h5 className="pt-3 font-weight-bold ">{card.title}</h5>
      <div>
        <span>{card.details}</span>
      </div>
      <br />
      <a href="#">{card.link}</a>
    </div>
  );
}

export default SaftyCards;
