import React, { useEffect, useState } from "react";
import Footer from "../../Pages/Footer/Footer";
import HostHeader from "../BecomHost/HostHeader/HostHeader";

const AddonThree = () => {
  //Navigate to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <HostHeader navbar={navbar} setNavbar={setNavbar} />
      <div id="addonthree">
        <div className="container text-center">
          <div className="w-50 m-auto p-3">
            <h1>Frontline stays for COVID-19 responders</h1>
            <p>
              Hosts are offering their places to doctors, nurses, and other
              frontline responders, so they can stay close to their work or
              safely distanced from their own families.
            </p>
          </div>
          <div className="sectionone py-5">
            <div className="row p-3">
              <div className="col-md">
                <img src="5.PNG" className="img-fluid" alt="" />
              </div>
              <div className="col-md m-auto">
                <h3>How hosts can help</h3>
                <p>
                  If you have an entire home, you can opt in to host healthcare
                  staff and frontline responders in your area. We'll provide a
                  helpful cleaning checklist so your space is ready for first
                  responders. Responders will also be reviewed for eligibility
                  before every stay.
                </p>
              </div>
            </div>
            <div className="row p-3">
              <div className="col-md m-auto">
                <h3>Are you a COVID-19 responder?</h3>
                <p>
                  Hosts are offering free and discounted places to stay to
                  people working on the frontlines. We’re also waiving service
                  fees on all Frontline stays. To access a stay, you’ll need to
                  answer a few questions to make sure you’re eligible. Once
                  that’s done, you’ll be able to see the stays available in your
                  area
                </p>
              </div>
              <div className="col-md">
                <img src="6.PNG" alt="" srcset="" />
              </div>
            </div>
            <div className="row p-3">
              <div className="col-md">
                <img src="7.PNG" alt="" srcset="" />
              </div>
              <div className="col-md m-auto">
                <h3>Keeping your health top-of-mind</h3>
                <p>
                  We want people to feel comfortable hosting and booking stays
                  right now. That’s why we worked with healthcare experts to
                  create an extensive cleaning checklist that will help hosts
                  prepare before each stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AddonThree;
