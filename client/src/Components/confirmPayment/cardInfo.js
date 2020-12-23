import React from "react";

import "./cardinfo.css";
import Pic from "./1.PNG"

const TripDetails = () => {
    return (
        <div className="right w-100 rounded">

            <div className="heading">
                <div className="image">
                    <img src={Pic} alt="Dahab" />
                </div>
                <div className="info">
                    <p>Entire apartment in Dahab</p>
                    <small>The Cozy Beach Elite</small>
                    <p>1bed 1bath</p>
                    <p> <i className="fa fa-star"></i> <span className="dark">4.67</span>(70)</p>
                </div>
            </div>
            <hr />

            <div className="price">
                <h1 className="dark">Price Details</h1>
                <p>$49.04 x 23 nights <span>$1,128.00</span></p>
                <p>10% Weekly Price Discount <span className="green">-$112.80</span></p>
                <p>Service Fee <span>$150.49</span></p>
                <p className="dark bold"><span className="removeUnderline">Total</span>(USD) <span>$1,165.69</span></p>
            </div>
            <hr />

            <div className="cancel">
                <h3 className="dark">Free cancellation until 2:00 PM On Jan 18</h3>
                <p>After that, cancel before 2:00 PM on Jan 23 get a 50% refund, minus the first night and service fee.</p>
                <p><a className="dark bold" href="#">Learn More</a></p>
            </div>
        </div>

    )
}

export default TripDetails;
