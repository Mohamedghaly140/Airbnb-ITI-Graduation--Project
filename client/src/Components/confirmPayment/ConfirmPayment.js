import React, { useState } from "react";
import { RiVisaFill, RiMastercardLine, RiPaypalLine, RiLock2Line } from "react-icons/ri"
import Moment from "react-moment"

import "./ConfirmPayment.css"
import DatePekerModal from "./DatePeker"
import GuestsModal from "./GuestsModal";
import PaymentForm from "./pymentform"
import TripDetails from "./cardInfo"



const ConfirmPayment = (props) => {
    //date state
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")

    //counter state
    const [aduldNumber, aduldNumberSet] = useState(0);
    const [childNumber, childNumberSet] = useState(0);
    const [infantNumber, infantNumberSet] = useState(0);

    // let setNums = () => {
    //     aduldNumberSet()
    //     childNumberSet()
    //     infantNumberSet()
    // }

    const setDateFun = (ranges) => {
        console.log(ranges);
        setStartDate(ranges.selection.startDate)
        // console.log(startDate);
        setEndDate(ranges.selection.endDate)
        // console.log(endDate);
    }
    return (
        <div id="confirm">
            <div className="container">
                <span role="button" className="font-weight-bold">&#x276C;</span>
                <div className="row confirm mt-5">
                    <div className="col-md-6 payment_details">
                        <h3 className="font-weight-bold mb-2">Confirm and pay</h3>
                        <div className="row rare mb-2 mt-4">
                            <div className="col">
                                <b>This is a rare find.</b>
                                <p className="text-muted">Rasha's place is usually booked.</p>
                            </div>
                            <div className="col d-flex justify-content-center">
                                <svg viewBox="0 0 26 24" role="presentation" aria-hidden="true" focusable="false" style={{ height: "32px", width: "32px", display: "block", fill: "rgb(96, 182, 181)" }}><path d="m12 10a2.49 2.49 0 0 1 -1.3 2.18 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.35 3.3v1.5h2.5a.49.49 0 0 0 .5-.48v-11.03a.97.97 0 0 0 -.43-.75l-5.14-3a .96.96 0 0 0 -.86 0l-5.14 3a .95.95 0 0 0 -.43.76v1.05a2.5 2.5 0 0 1 2 2.45z"></path><path d="m25.43 6.26a.5.5 0 0 1 -.69.17l-1.74-1.05v-4.38q-2 0-2 .01v2.16a.55.55 0 0 1 -.85.47l-3.99-2.45a.43.43 0 0 0 -.33 0l-7.56 4.62a.5.5 0 0 1 -.52-.85l7.56-4.62a1.4 1.4 0 0 1 1.38 0l3.32 2.03v-1.36a1 1 0 0 1 .98-1.01h2.02a1 1 0 0 1 .99.99v3.83l1.26.75a.5.5 0 0 1 .17.69zm-1.93 1.74a.5.5 0 0 0 -.5.5v10.5h-1.5a.5.5 0 0 0 0 1h1.9a.61.61 0 0 0 .6-.6v-10.9a.5.5 0 0 0 -.5-.5zm-4.5 8.5v3.5h-1v-3.5a2.49 2.49 0 0 0 -4.34-1.68 4.41 4.41 0 0 1 .34 1.68v3.5h-1v-3.5a3.46 3.46 0 0 0 -.5-1.77 3.5 3.5 0 0 0 -2.5-1.69 3.45 3.45 0 0 0 -.5-.04 3.54 3.54 0 0 0 -3.5 3.5v3.5h-1v-3.5a4.41 4.41 0 0 1 .34-1.68 2.49 2.49 0 0 0 -4.34 1.68v3.5h-1v-3.5a3.5 3.5 0 0 1 2.35-3.29 2.5 2.5 0 1 1 2.29 0 3.53 3.53 0 0 1 1.19.72 4.53 4.53 0 0 1 2.47-1.74 2.5 2.5 0 1 1 2.39 0 4.53 4.53 0 0 1 2.47 1.74 3.53 3.53 0 0 1 1.19-.72 2.5 2.5 0 1 1 2.29 0 3.5 3.5 0 0 1 2.36 3.29zm-14-5.5a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5zm6-1a1.5 1.5 0 0 0 -1-1.41 1.48 1.48 0 0 0 -.5-.09 1.5 1.5 0 0 0 0 3 1.48 1.48 0 0 0 .5-.09 1.5 1.5 0 0 0 1-1.41zm6 1a1.5 1.5 0 1 0 -1.5 1.5 1.5 1.5 0 0 0 1.5-1.5z" fill="#484848"></path></svg>
                            </div>
                        </div>
                        <span className="line mb-4 d-block"></span>
                        <div className="your-trip mt-5">
                            <h5 className="font-weight-bold">Your trip</h5>
                            <div className="row mt-3">
                                <div className="col mt-3">
                                    <b>Dates</b>
                                    <p className="text-muted"><Moment local format="YYYY/MM/DD" date={startDate} /> |  <Moment local format="YYYY/MM/DD" date={endDate}></Moment></p>
                                </div>
                                <div className="col text-center">
                                    <DatePekerModal setDateFun={setDateFun} />
                                </div>
                            </div>
                        </div>
                        <div className="guests mt-5 mb-5">
                            <div className="row">
                                <div className="col">{aduldNumber} Adult, {childNumber} child .{infantNumber} infant</div>
                                <div className="col text-center">
                                    <GuestsModal aduldNumber={aduldNumber} childNumber={childNumber} infantNumber={infantNumber} aduldNumberSet={aduldNumberSet} childNumberSet={childNumberSet} infantNumberSet={infantNumberSet} />
                                </div>
                            </div>
                        </div>

                        <span className="line mb-4 d-block"></span>

                        <div className="pay-with mt-4 mb-4">
                            <div className="row">
                                <div className="col ">
                                    <h3>Pay with</h3>
                                </div>
                                <div className="col" >
                                    <div className="icon text-center">
                                        <RiVisaFill /><RiMastercardLine /><RiPaypalLine /><RiLock2Line />
                                    </div>
                                </div>
                            </div>
                            <PaymentForm />
                        </div>
                    </div>
                    <div className="trip-card col position-relative">
                        <TripDetails />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmPayment