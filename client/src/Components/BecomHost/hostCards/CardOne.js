import React from "react";
function CardOne() {
  const hostObj = {
    imgURL:
      "https://a0.muscache.com/im/pictures/92acd468-73bf-4ca1-a956-277c4a94b3a3.jpg?im_q=highq&amp;im_w=960",
    title: "Darrel",
    details: "Hosts a tiny house in Atlanta",
    checkout: "Check out some tiny houses",
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
        <div className="container-fluid pl-md-5 pl-lg-0" >
        <div className="pb-2">
          <h4 className="pt-2 font-weight-bold">{hostObj.title}</h4>
          <span>{hostObj.details}</span>
        </div>
        <a className="host-link" href="/">
          {hostObj.checkout}
        </a>
        </div>
      </div>
    </>
  );
}
export default CardOne;
