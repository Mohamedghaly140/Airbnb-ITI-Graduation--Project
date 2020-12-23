import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Card from "../card";
import "./Personal.css";



let PersonalTow = (props) => {

  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues:{
      first : props.firstNameState,
      last :props.lastNameState,
      email:props.email
    }
  });
  const onSubmit = data => console.log(data);

  const history = useHistory();

  const [nameEditState, nameSet] = useState(false);
  const [ginderEditState, ginderSet] = useState(false);
  const [DOBEditState, DOBSet] = useState(false);
  const [emailEditState, emailSet] = useState(false);
  const [phoneEditState, phoneSet] = useState(false);
  return (
    <div id="personal" className=" mt-5">
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
            <p>Personal info</p>
          </li>
        </ul>
        <h3 className="font-weight-bold">Personal info</h3>
        <div className="row mt-5">
          <div className="left-personal col-md-7">
            <div >
              <div className="name">
                <span className="font-weight-bold">Legal name</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    nameSet(!nameEditState);
                  }}
                >
                  Edit
                </span>
                {nameEditState ? (
                  <div className="name-edit">
                    <p>
                      This is the name on your travel document, which could be a
                      license or a passport.
                    </p>
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                      <div className="col-md-5">
                        <label  className="form-label">
                          First name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="First"
                          // value={props.firstNameState}
                          name="first"
                          ref={register}
                        />
                      </div>
                      <div className="col-md-5">
                        <label  className="form-label">
                          Last name
                        </label>
                        <input
                          type="text"
                          // value={props.lastNameState}
                          className="form-control"
                          id="Last"
                          name="last"
                          ref={register}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Save"
                        className="btn col-md-4 mt-4"
                      />
                    </form>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mt-3">
                      {props.firstNameState} {props.lastNameState}
                    </p>
                  </>
                )}
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="Gender">
                <span className="font-weight-bold">Gender</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    ginderSet(!ginderEditState);
                  }}
                >
                  Edit
                </span>
                {ginderEditState ? (
                  <div className="Gender-edit">
                    <select className="form-control mb-3">
                      <option value="0" disabled selected>
                        Select
                      </option>
                      <option value="1">Male</option>
                      <option value="2">Fimal</option>
                      <option value="3">other</option>
                    </select>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mt-3">Not Selected</p>
                  </>
                )}
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="DOB">
                <span className="font-weight-bold">Date of birth</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    DOBSet(!DOBEditState);
                  }}
                >
                  Edit
                </span>
                {DOBEditState ? (
                  <div className="DOB-edit">
                    <input
                      value={props.date}
                      type="date"
                      name="BOD"
                      className="form-control w-50"
                      id=""
                      ref={register}
                    />
                    <input type="button" value="Save" className="btn" />
                  </div>
                ) : (
                  <>
                    <p>{props.date}</p>
                  </>
                )}
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="email">
                <span className="font-weight-bold">Email address</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    emailSet(!emailEditState);
                  }}
                >
                  Edit
                </span>
                {emailEditState ? (
                  <div className="email-edit">
                    <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
                      <div className="col-md-12">
                        <p>Use an address you’ll always have access to.</p>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          ref={register}
                        />
                      </div>
                      <input
                        type="submit"
                        value="Save"
                        className="btn col-md-2 mt-4"
                      />
                    </form>
                  </div>
                ) : (
                  <>
                    <p className="text-muted mt-3">{props.email}</p>
                  </>
                )}
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="Phone number">
                <span className="font-weight-bold">Phone number</span>
                <span
                  role="button"
                  className="float-right edit"
                  onClick={(e) => {
                    phoneSet(!phoneEditState);
                  }}
                >
                  Edit
                </span>
                {phoneEditState ? (
                  <div className="phone-edit">
                    <input
                      value={props.phoneState}
                      type="text"
                      name="phone"
                      className="form-control w-50"
                      id=""
                      ref={register}
                    />
                    <input type="button" value="Save" className="btn" />
                  </div>
                ) : (
                  <>
                    <p>{props.phoneState}</p>
                  </>
                )}
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="Phon">
                <span className="font-weight-bold">Government ID</span>
                <span role="button" className="float-right edit">
                  Edit
                </span>
                <p className="text-muted">Not provided</p>
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="Phon">
                <span className="font-weight-bold">Emergency contact</span>
                <span role="button" className="float-right edit">
                  Add
                </span>
                <p className="text-muted">Not provided</p>
              </div>

              <span className="line mb-4 d-block w-100"></span>

              <div className="Phon">
                <span className="font-weight-bold">
                  Passport info for China travel
                </span>
                <span role="button" className="float-right edit">
                  Add
                </span>
                <p className="text-muted">Not provided</p>
              </div>
          <span className="line mb-4 d-block w-100"></span>
                  
              </div>
          </div>
          <div className="right-personal col-md-4 col-12 ml-auto">
            <div className="">
            <Card
              titel="What info is shared with others?"
              dis="Airbnb only releases contact information for hosts and guests after a reservation is confirmed."
            >
              <svg
                viewBox="0 0 24 24"
                role="presentation"
                aria-hidden="true"
                focusable="false"
                style={{
                  height: "40px",
                  width: "40px",
                  display: "block",
                  fill: "#60B6B5",
                }}
              >
                <path d="m18.66 6.51-14.84 9.65a1 1 0 0 0 .55 1.84h15.62a1 1 0 0 0 1-1v-9.24a1.5 1.5 0 0 0 -2.32-1.26z"></path>
                <path
                  d="m9.25 12a1.25 1.25 0 1 1 -1.25-1.25 1.25 1.25 0 0 1 1.25 1.25zm11.75-8h-14a .5.5 0 0 0 0 1h14a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-1.5a.5.5 0 0 0 0 1h1.5a2 2 0 0 0 2-2v-12a2 2 0 0 0 -2-2zm-5 15h-13a1 1 0 0 1 -1-1v-12a1 1 0 0 1 1-1h1a .5.5 0 0 0 0-1h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h13a .5.5 0 0 0 0-1zm-7.17-11.17a4.25 4.25 0 1 0 3.42 4.17 4.21 4.21 0 0 0 -.46-1.92.5.5 0 0 0 -.89.45 3.25 3.25 0 0 1 -.61 3.77 3.67 3.67 0 0 0 -4.56.02 3.25 3.25 0 0 1 2.27-5.57 3.3 3.3 0 0 1 .63.06.5.5 0 1 0 .19-.98zm5.67 3.17h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1zm0 2h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1zm0 2h5.5a.5.5 0 0 0 0-1h-5.5a.5.5 0 0 0 0 1z"
                  fill="#484848"
                ></path>
              </svg>
            </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTow;
