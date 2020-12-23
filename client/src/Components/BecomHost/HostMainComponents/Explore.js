import React from "react";
import ExploreCard from "../exploreCards/ExploreCard";

function Explore() {
  const exploreCard = [
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/d93286ce-08ac-4146-9b8a-7a9992ee33a8.jpg?im_q=highq&amp;im_w=320",
      title: "Why host on Airbnb",
      details:
        "Hosts reveal what they love about sharing their space on Airbnb",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/ef1cef25-75ea-454d-8bfd-41d0de1f1076.jpg?im_q=highq&amp;im_w=320",
      title: "How to get started on Airbnb",
      details:
        "From creating your listing to prepping your space,learn how to start hosting",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/354e974b-8113-42de-93e7-4054c4713e3c.jpg?im_q=highq&amp;im_w=320",
      title: "How to earn money on Airbnb",
      details: "What every host needs to know about pricing and payouts",
    },
    {
      imgURL:
        "https://a0.muscache.com/im/pictures/f79bf564-58bd-45f3-94c3-9f530cea052b.jpg?im_q=highq&amp;im_w=320",
      title: "Is my space a good fit for Airbnb",
      details:
        "There's perfect guest for every spaceــthe key is setting guest expectations.",
    },
  ];

  return (
    <>
      <div className="explore-container">
        <div className="explore-header">
          <h1>Explore how hosting works</h1>
        </div>
        <div className="row">
          {exploreCard.map((card, i) => {
            return <ExploreCard card={card} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Explore;
