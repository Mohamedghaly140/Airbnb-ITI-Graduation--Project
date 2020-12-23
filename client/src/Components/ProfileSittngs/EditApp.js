import React, { useState } from "react";
import Moment from "react-moment";
import { BrowserRouter as Router, Route ,useRouteMatch } from "react-router-dom";
import CardList from "./cardList";
import Personal from "./edit/personal_1";
import Login from "./edit/Login";
import Payments from "./edit/Payments ";
import Password from "./edit/Password";
import ConfirmPayment from "../confirmPayment/ConfirmPayment";

let date = new Moment("1993-08-03", "YYYY-MM-DD").props;


function EditApp() {
  const [firstNameState, firstnameSet] = useState("Ahmed");
  const [lastNameState, lastnameSet] = useState("Salah");
  const [emailStat, setEmail] = useState("salaheltantawy@gmail.com");
  const [emailtState, enailtSet] = useState("salaheltantawy@gmail.com");
  const [phoneState, phoneSet] = useState("01005475265");
  const [BDState, BDset] = useState(date);
  console.log(date);

  let {path , url } = useRouteMatch()
  return (
    <>
      <Router>
        <Route
          path={`${path}/edit`}
          exact
          component={() => (
            <CardList
              firstNameState={firstNameState}
              lastNameState={lastNameState}
              email={emailtState}
            />
          )}
        />
        <Route
          path={`${path}/edit/personal`}
          exact
          component={() => (
            <Personal
              firstNameState={firstNameState}
              setFirst={firstnameSet}
              setLast={lastnameSet}
              lastNameState={lastNameState}
              email={emailStat}
              date={BDState}
              BDset={BDset}
              setEmail={setEmail}
              phoneState={phoneState}
              phoneSet={phoneSet}
            />
          )}
        />
        <Route path={`${path}/edit/Payments`} component={()=><Payments/>}  exact/>
        <Route path={`${path}/edit/login`} component={Login} />
        <Route path={`${path}/edit/login/password`} component={Password} />
        <Route path={`${path}/ConfirmPayment`} component={ConfirmPayment} />
      </Router>
    </>
  );
}

export default EditApp;
