import React from "react";
import SaftyCards from "../safty/SaftyCards";
import saflogo1 from "../svgs/saflogo1.svg";
import saflogo2 from "../svgs/saflogo2.svg";
import saflogo3 from "../svgs/saflogo3.svg";

function Safty() {
  const saftyCards = [
    {
      saflogo: saflogo1,
      title: "Host insurance and protection",
      details:
        "o support you in the rare event of an incident, each booking on Airbnb includes property damage protection of up to $1M USD and liability insurance of up to $1M USD.",
      link: "How you're protected thile hosting",
    },
    {
      saflogo: saflogo2,
      title: "COVID-19 safety guidance and support",
      details:
        "To help protect the health of our community, we’ve partnered with experts to create safety practices for everyone, plus a cleaning process for hosts.",
      link: "Explore the enhanced cleaning process",
    },
    {
      saflogo: saflogo3,
      title: "Requirements for all guests",
      details:
        "To give hosts peace of mind, we offer guest identification and let you check out reviews of guests before they book. Our new Guest Standards Policy sets higher expectations for behavior.",
      link: "Steps we take to help hosts feel confident",
    },
  ];

  return (
    <>
      <div className="safty-container">
        <div className="safty-header">
          <h1>Safety is our priority</h1>
        </div>
        <div className="row justify-content-around">
          {saftyCards.map((card, i) => {
            return <SaftyCards card={card} key={i} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Safty;
