import React, { useState } from "react"
import { FaRegCreditCard } from "react-icons/fa"
import { useForm } from "react-hook-form";


import "./pymentform.css"



let PaymentForm = () => {

const { register, handleSubmit, watch, errors } = useForm();

const onSubmit=(data)=>{
    console.log(data);
}
    // const [cardNumberState, cardNumberSet] = useState("");
    // const [cvvState, cvvSet] = useState("");
    // const [expirState, expireSet] = useState("");

    return (
        <div id="paymentForm">
            <form action="/#" method="post" id="" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <select name="way" ref={register} className="form-control rounded  col mb-3 b-2" >
                        <option value="1"><FaRegCreditCard />  Credit or debit card</option>
                        <option value="2">PayPal</option>
                        <option value="3">Google Pay</option>
                    </select>
                </div>
                <div className="row">
                    <input ref={register({required:true})} type="text" name="cardnumber" aria-invalid={errors.firstName ? "true" : "false"}
                    className="form-control rounded  col-12 " placeholder="Card number" id=""  />
                    
                    <input ref={register({required:true})} type="text" name="expiration" className="form-control rounded  col " placeholder="YY/MM" id="" />
                    <input ref={register({required:true})} type="text" name="cvv" className="form-control rounded  col " placeholder="CVV"  />
                </div>
                <button name="" id="confirm-btn" className="btn rounded font-weight-bold mb-3" href="#" role="button" style={{ background: "#FE375C", color: "#FFFFFF" }}>Confirm Payment</button>
            </form >
            <span className="line mb-4 d-block"></span>

            <div className="policy">
                <div className="policy-inner ml-3">
                    <h3 className="font-weight-bold mb-3">Cancellation policy</h3>
                    <p className="text-muted">Free cancellation until 2:00 PM on Jan 18. After that, cancel before 2:00 PM on Jan 23 and get a 50% refund, minus the first night and service fee. </p>
                    <b role="button"><u>Learn more</u></b>
                </div>
            </div>

            <span className="line mb-4 d-block"></span>

            <div className="selecte-buton">
                <p className="end-p">By selecting the button below, I agree to the <a href="">House Rules</a>, <a href="">Safety Disclosures</a>, <a href="">Cancellation Policy</a>, <a href="">Airbnb’s social-distancing and other COVID-19-related guidelines</a>, and the <a href="">Guest Refund Policy</a>. I also agree to pay the total amount shown, which includes Service Fees.</p>
            </div>

        </div>

    )
}

export default PaymentForm;