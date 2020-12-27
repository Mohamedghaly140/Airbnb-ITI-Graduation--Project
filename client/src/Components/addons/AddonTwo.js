import React, { useEffect, useState } from "react";
import Footer from "../../Pages/Footer/Footer";
import HostHeader from "../BecomHost/HostHeader/HostHeader";
// import "./styleFivePages.css";
const AddonTwo = () => {
  //Navigate to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <HostHeader navbar={navbar} setNavbar={setNavbar} />
      <div id="AddonTwo">
        <div className="container">
          <div className="sectionone row py-5">
            <div className="col-md-6 col-12">
              <img src="1.PNG" alt="" className="img-fluid" srcset="" />
            </div>
            <div className="col-md-6 col-12">
              <span className="text-muted">December 15, 2020</span>
              <h3>
                This New Year’s Eve, Sleep Under the Times Square Ball with
                Airbnb + Nasdaq
              </h3>
              <p>
                Airbnb and Nasdaq are coming together to host a magical stay
                under New Year’s Eve ball in Times Square to close out 2020,
                hosted by Mariah Carey.
              </p>
            </div>
          </div>
        </div>
        <div className="sectiontow py-5 container-fluid">
          <div className="row justify-content-around airbnb_card">
            <div className="col-md-3 card  p-0 mt-sm-5">
              <img className="img-fluid" src="2.PNG" alt="" srcset="" />

              <div className="card-title">
                <h5 className="p-2">
                  Airbnb Delivers $2.6 Billion in Taxes to Governments Around
                  the World
                </h5>
              </div>
              <div className="card-body">
                <p>
                  Airbnb is committed to helping our community pay its fair
                  share of taxes. We are collecting and remitting taxes in more
                  than 650 jurisdictions, covering thousands of cities.
                </p>
              </div>
            </div>
            <div className="col-md-3 card  p-0 mt-sm-5">
              <img className="img-fluid" src="3.PNG" alt="" srcset="" />
              <div className="card-title">
                <h5 className="p-2">
                  Ron Conway and the Economic Empowerment Award
                </h5>
              </div>
              <div className="card-body">
                <p>
                  New Year’s Eve will be a bit different from years’ past, that
                  doesn’t mean it can’t be celebrated together. Here are 10
                  Online Experiences to help groups celebrate the occasion.
                </p>
              </div>
            </div>
            <div className="col-md-3 card  p-0 mt-sm-5">
              <img className="img-fluid" src="4.PNG" alt="" srcset="" />
              <div className="card-title">
                <h5 className="p-2">
                  10 Ways to Celebrate New Year’s Eve at Home with Online
                  Experiences
                </h5>
              </div>
              <div className="card-body">
                <p>A message from Airbnb Co-Founder and CEO Brian Chesky.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddonTwo;
