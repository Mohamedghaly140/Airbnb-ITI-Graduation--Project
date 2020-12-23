import React from "react";
import CastleCards from "../castleComponent/CastleCards";

function Castle() {
  const exploreCard = [
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/ccef24a3-d378-48c7-ad1a-ee83d313fef5.jpg?im_q=highq&amp;im_w=320",
      title: "Houses",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/8bbcea0d-05d5-4f26-953a-77cf80f1c5ee.jpg?im_q=highq&amp;im_w=320",
      title: "Tiny houses",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/1385145a-0d2d-43fa-b6c5-6c21944e723c.jpg?im_q=highq&amp;im_w=320      ",
      title: "Guesthouses",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/812d72a8-2c76-4dc5-ba51-239d59d1ff5a.jpg?im_q=highq&amp;im_w=320      ",
      title: "Bed and breakfasts",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/1976f418-6b52-4c24-a77f-f7ee2211e0ed.jpg?im_q=highq&amp;im_w=320      ",
      title: "Apartments",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/980c9ff9-3e32-4f93-9771-bd39b20b27f4.jpg?im_q=highq&amp;im_w=320",
      title: "Boutique hotels",
    },
  ];

  return (
    <>
      <div className="explore-container">
        <div className="explore-header">
          <h1>From castles to condos, guests book it all</h1>
        </div>
        <div className="row">
          {exploreCard.map((card, i) => {
            return <CastleCards card={card} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Castle;
