import React, { Component } from "react";
import "../Accomndation/Accomndation.css";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PetsIcon from "@material-ui/icons/Pets";
import HelpIcon from "@material-ui/icons/Help";
export default class Accomndation extends Component {
  render() {
    return (
      <div className="person__all container-fluid">
        <hr className="hr-lg" />
        <div className="person">
          <div className="descraption">
            <img
              className="rounded-circle"
              src="https://a0.muscache.com/im/pictures/user/166ef51b-c0cf-4e90-b1b2-c4259bbd7258.jpg"
              alt="reviewer-img"
            />
            <div className="name">
              <label>Hosted by Mahmoud</label>
              <label>Joined in December 2013</label>
            </div>
          </div>
        </div>
        <div className="about row">
          <div className="review col-lg-6 col-md-6 col-12">
            <div className=" row rate ">
              <div className="row ml-5">
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <StarOutlinedIcon style={{ color: "red" }} />
                <p className="ml-2">252 Reviews</p>
              </div>
            </div>
            <p className="ml-4 mt-3">
              I have worked in the hotel and tourism industry in Dahab since I
              graduated from university twenty years ago. I love Dahab and my
              job so much, and I've always believed in the quality of service.
              My job is just perfect for me, makes me meet a lot of people and
              make friends from all over the world, which I feel shapes my
              personality for the better and vice versa. I am well familiar with
              the area and its people. I also have great connections, access to
              tourists benefits, provide a safety net during your stay, and have
              had the transformative experiences that I will recommend for you.
              I'll help you discover the stories waiting to be told.
              <strong>During your stay</strong>
              Always available for the guests.
            </p>
          </div>
          <div className="info">
            <div className="lang">
              <label>Languages: العربية, English</label>
            </div>
            <div className="resp_rate">
              <label>Response rate: 100%</label>
            </div>
            <div className="res_time">
              <label>Response time: within an hour</label>
            </div>
            <button className="contact_btn">Contact</button>
          </div>
        </div>
        <hr className="mt-5 hr-lg" />
        <div className="extra_info">
          <h3>Things to Know</h3>
          <div className="about row ">
            <div
              className=" links row col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h4>House rules</h4>

              <p>
                <AccessTimeIcon /> Check-in: After 3:00 PM
              </p>
              <p>
                <PetsIcon /> Pets are allowed
              </p>
              <a> FAQ </a>
              <a> Cookie prefrerences</a>
            </div>
            <div
              className=" links row col-xl-4  col-lg-4 col-md-4 col-sm-6 col-12"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h4>Health &amp; safety</h4>
              <p>
                Airbnb's social-distancing and other
                <br />
                COVID-19-related guidelines apply
              </p>
              <p>
                <HelpIcon />
                Carbon monoxide alarm not reported
              </p>
              <p>
                <HelpIcon />
                Smoke alarm not reported <a href="/">Learn More</a>
              </p>
              <a href="../helpcenter.html"> Help Center </a>
              <a> Corporate Information</a>
            </div>
            <div
              className=" links row col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h5>Cancellation policy</h5>
              <p>
                Add your trip dates to get the cancellation details for this
                stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
