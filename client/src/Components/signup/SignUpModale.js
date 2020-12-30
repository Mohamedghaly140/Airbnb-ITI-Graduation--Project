import React, { useState, useContext } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory, useRouteMatch } from "react-router-dom";

import Footer from "../../Pages/Footer/Footer";
import AgreeAndContinue from "./AgreeAndContinue";
import EmailInput from "./EmailInput";
import FirstName from "./FirstName";
import LastName from "./LastName";
import PasswordInput from "./PasswordInput";
import "./Signup.css";
import { Modal } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthContext";

function SignUpModale(props) {
  const authContext = useContext(AuthContext);
  const { login } = authContext;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const route = useRouteMatch();

  const onSubmitHandler = dataForm => {
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    setLoading(true);

    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/signup`,
        dataForm,
        config
      )
      .then(res => {
        // if (res.status !== 201) {
        // 	 console.log(res.data.message);
        // 	setError(res.data.message);
        // }

        console.log(res);
        const user = res.data;
        const { token, userId, isHost, isAdmin } = user;

        if (route.path === "/become_host") {
          login(userId, token);
          history.push("/host_form");
        } else {
          login(userId, token);
        }

        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div id="signupmodel">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ borderRadius: "2rem" }}
      >
        {" "}
        <Modal.Body style={{ borderRadius: "2rem" }}>
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
              {loading ? (
                <React.Fragment>
                  <div className="text-center py-2">
                    <Spinner animation="border" variant="danger" />
                  </div>
                </React.Fragment>
              ) : (
                <AgreeAndContinue />
              )}
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUpModale;
