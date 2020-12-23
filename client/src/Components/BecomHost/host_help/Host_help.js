import React from "react";
import helpsvg1 from "../svgs/helpsvg1.svg";
import helpsvg2 from "../svgs/helpsvg2.svg";
import helpsvg3 from "../svgs/helpsvg3.svg";
import helpsvg4 from "../svgs/helpsvg4.svg";
import Get_started from "./Get_started";
function Host_help() {
  return (
    <>
      <section className="host-help container-fluid">
        <div className="row pb-5">
          <div className="col-md-6 col-12 p-5">
            <h1 className="help-header">We’re here to help</h1>
          </div>
          <div className="col-md-6 col-12">
            <div className="row host-help-sec">
              <div className="col-10">
                <img src={helpsvg1} className="help-logo" />
                <h5 className="pt-2">24/7 customer support</h5>
                <span>
                  From setting up your listing to concerns about guests, our
                  global team is here to support you by phone, email, and chat,
                  every step of the way.
                </span>
              </div>
            </div>
            <div className="row pt-4 host-help-sec">
              <div className="col-10">
                <img src={helpsvg2} className="help-logo" />
                <h5 className="pt-2">24/7 customer support</h5>
                <span>
                  From setting up your listing to concerns about guests, our
                  global team is here to support you by phone, email, and chat,
                  every step of the way.
                </span>
              </div>
            </div>
            <div className="row pt-4 host-help-sec">
              <div className="col-10">
                <img src={helpsvg3} className="help-logo" />
                <h5 className="pt-2">24/7 customer support</h5>
                <span>
                  From setting up your listing to concerns about guests, our
                  global team is here to support you by phone, email, and chat,
                  every step of the way.
                </span>
              </div>
            </div>
            <div className="row pt-4 host-help-sec">
              <div className="col-10">
                <img src={helpsvg4} className="help-logo" />
                <h5 className="pt-2">24/7 customer support</h5>
                <span>
                  From setting up your listing to concerns about guests, our
                  global team is here to support you by phone, email, and chat,
                  every step of the way.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Get_started />
    </>
  );
}

export default Host_help;
