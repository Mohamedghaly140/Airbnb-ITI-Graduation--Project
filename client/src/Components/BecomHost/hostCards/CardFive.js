import React from "react";
function CardFour() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/e4ad8c8e-ccf9-473c-856b-0b3c5dfe0662.jpg?im_q=highq&amp;im_w=960",
    title: "Nancy",
    details: "Hosts a private room in San Francisco",
    checkout: "Check out some private rooms",
  };
  return (
    <>
      <div className="carousol-container">
        <div
          src={hostObj.imgURL}
          alt={hostObj.title}
          className="host-img"
          style={{ backgroundImage: `url(${hostObj.imgURL})` }}
        />
        <div className="pb-2">
          <h4 className="pt-2 font-weight-bold">{hostObj.title}</h4>
          <span>{hostObj.details}</span>
        </div>
        <a className="host-link" href="/">
          {hostObj.checkout}
        </a>
      </div>
    </>
  );
}
export default CardFour;
