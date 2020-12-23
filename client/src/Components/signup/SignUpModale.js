import React, { useState , useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Footer from "../../Pages/Footer/Footer";
import AgreeAndContinue from "./AgreeAndContinue";
import EmailInput from "./EmailInput";
import FirstName from "./FirstName";
import LastName from "./LastName";
import PasswordInput from "./PasswordInput";
import "./Signup.css";
import { Modal } from "react-bootstrap";

function SignUpModale(props) {
  const { register, handleSubmit, errors } = useForm();
  const [signUpInfo , setSignUpInfo] = useState({})
  const history = useHistory();

  const postData = async (dataForm) =>{

    // const data = await api by post with dataForm
    console.log("dataForm" , dataForm)
   }

  const onSubmitHandler = (dataForm) => {
   // setSignUpInfo(dataForm)
    postData(dataForm)
    if (history.location.pathname === "/become_host") {
      //send the  form value data to api as  a Host user //dont forget to send a flag
      return history.push("/host_form");
    } else {
      //send data to api as  a reguler user
      return window.location.reload();
    }
  };




  return (
    <div id="signupmodel">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {" "}
        <Modal.Body>
          <div className="signup-container">
            <div className="finish-signup">
              <h5 className="text-center">Finish signing up</h5>
            </div>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="full-name">
                {/* FirstName */}
                <div className="name-input">
                  <FirstName errors={errors} register={register} />
                </div>

                {/* LastName */}
                <div className="name-input last-name">
                  <LastName errors={errors} register={register} />
                </div>
              </div>
              <span>Make sure it matches the name on your government ID.</span>
              <br />
              <div className="input-container">
                <input
                  id="date"
                  type="date"
                  style={{ width: "100%" }}
                  ref={register({ required: true })}
                  name="date"
                />
              </div>
              <span>
                To sign up, you need to be at least 18. Your birthday won’t be
                shared with other people who use Airbnb.
              </span>
              <br />

              {/* EmailInput */}
              <div className="input-container">
                <EmailInput errors={errors} register={register} />
              </div>
              <span>We'll email you trip confirmations and receipts.</span>
              <br />

              {/* password */}
              <div className="input-container">
                <PasswordInput errors={errors} register={register} />
              </div>
              <AgreeAndContinue />
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUpModale;
