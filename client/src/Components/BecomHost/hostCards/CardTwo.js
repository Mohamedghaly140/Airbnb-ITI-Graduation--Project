import React from "react";
function CardTwo() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/8a09fe60-64e5-4461-bb80-aaf8bc3238a7.jpg?im_q=highq&amp;im_w=960",
    title: "Candida & Jeff",
    details: "Host a house in Joshua Tree",
    checkout: "Check out some houses",
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
export default CardTwo;
