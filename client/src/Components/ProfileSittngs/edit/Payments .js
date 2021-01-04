import React from "react";
import { useHistory } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import PaymentTow from "./PymentComponant/Payment_2";
import PaymentOne from "./PymentComponant/Payment_1";
import Taxes from "./PymentComponant/payment_3";

import "./payment.css"

const Payments = () => {
  const history = useHistory();
  
  return (
    <div id="payment">
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <p role="button" onClick={() => history.push("/edit_profile/edit")}>
              Account
            </p>
          </li>
          <li className="nav-item ml-2">
            <p>&#x276D;</p>
          </li>
          <li className="nav-item ml-2">
            <p>Login & security</p>
          </li>
        </ul>
        <h1 className="font-weight-bold">Payments & payouts</h1>
        <Tabs className='myTabs mb-4' defaultActiveKey="PAYMENTS">
          <Tab tabClassName='myTab' eventKey="PAYMENTS" title="PAYMENTS">
            <PaymentOne />
          </Tab>
          <Tab eventKey="PAYOUTS" title="PAYOUTS">
            <PaymentTow />
          </Tab>
          <Tab eventKey="TAXES" title="TAXES">
            <Taxes/>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default Payments;
