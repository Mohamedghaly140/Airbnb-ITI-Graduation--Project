import React from "react";
function CardFour() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/17d27522-7f79-4a82-9225-74c737800641.jpg?im_q=highq&amp;im_w=960",
    title: "Sophie",
    details: "Hosts a loft in Paris",
    checkout: "Check out some lofts",
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
