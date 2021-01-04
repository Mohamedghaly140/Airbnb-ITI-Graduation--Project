import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../card";
import Password from "./Password";

const Login = (props) => {
  const [passEditState, passChangeSet] = useState(false);
  let history = useHistory();

  return (
    <div id="login">
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
            <p>Payments & payouts</p>
          </li>
        </ul>
        <h1 className="font-weight-bold">Login & security</h1>
        <ul className="nav nav-tabs mb-5 mt-5">
          <li className="nav-item">
            <a className="nav-link" role="button">
              Login
            </a>
          </li>
        </ul>
        <div className="login">
          <h3>Login</h3>
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-10 ">
                  <b>Password</b>
                  {!passEditState ? (
                    <p>Last updated 4 days ago</p>
                  ) : (
                    <Password />
                  )}
                </div>
                <div className="col-2 p-0">
                  <a
                    className=""
                    role="button"
                    onClick={() => passChangeSet(!passEditState)}
                  >
                    {" "}
                    {!passEditState ? " Update" : "Cancel"}{" "}
                  </a>
                </div>
              </div>

              <span className="line mb-4 d-block"></span>

              <div className="row">
                <div className="col-10 ">
                  <b>Google</b>
                  <p>Not connected</p>
                </div>
                <div className="col-2 p-0">
                  <a className="" role="button">
                    Connect
                  </a>
                </div>
              </div>
              <span className="line mb-4 d-block"></span>
              <div className="row">
                <div className="col-10 ">
                  <b>Facebook</b>
                  <p>Not connected</p>
                </div>
                <div className="col-2 p-0">
                  <a className="" role="button">
                    Connect
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 ml-auto">
              <Card
                titel="Login & security >"
                dis="We’re always working on ways to increase safety in our community. That’s why we look at every account to make sure it’s as secure as possible."
              >
                <svg
                  viewBox="0 0 24 24"
                  role="presentation"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    height: "32px",
                    width: "32px",
                    fill: "rgb(255, 180, 0)",
                  }}
                >
                  <path d="m5 20.5a.5.5 0 0 1 -.5.5h-.5v.5a.5.5 0 0 1 -1 0v-.5h-.5a.5.5 0 0 1 0-1h .5v-.5a.5.5 0 0 1 1 0v .5h.5a.5.5 0 0 1 .5.5zm1.5 1.5a.5.5 0 1 0 .5.5.5.5 0 0 0 -.5-.5zm16-20h-.5v-.5a.5.5 0 0 0 -1 0v .5h-.5a.5.5 0 0 0 0 1h .5v.5a.5.5 0 0 0 1 0v-.5h.5a.5.5 0 0 0 0-1zm-2.58 4.87a13.41 13.41 0 0 1 -6.76-3.2.37.37 0 0 0 -.63.26l.08 16.22a.38.38 0 0 0 .55.32 11.98 11.98 0 0 0 7.07-13.31.37.37 0 0 0 -.31-.3z"></path>
                  <path
                    d="m14.39 8.32a1.93 1.93 0 0 0 -3.66 0l-2.42 4.85a3.09 3.09 0 0 0 -.4 1.61 2.36 2.36 0 0 0 2.23 2.23 3.95 3.95 0 0 0 2.42-1.06 3.95 3.95 0 0 0 2.42 1.06 2.36 2.36 0 0 0 2.23-2.23 3.09 3.09 0 0 0 -.4-1.61zm-2.72 4.38c0-.05.01-1.23.89-1.23s.88 1.18.88 1.23a3.25 3.25 0 0 1 -.88 1.83 3.25 3.25 0 0 1 -.89-1.83zm3.31 3.31a2.92 2.92 0 0 1 -1.71-.77 4.3 4.3 0 0 0 1.17-2.54 2.02 2.02 0 0 0 -1.8-2.22l-.08-.01a2.02 2.02 0 0 0 -1.89 2.15l.01.08a4.29 4.29 0 0 0 1.17 2.54 2.92 2.92 0 0 1 -1.71.77 1.36 1.36 0 0 1 -1.23-1.23 2.13 2.13 0 0 1 .29-1.16l2.42-4.85c.33-.65.55-.76.94-.76s.61.11.94.76l2.42 4.85a2.13 2.13 0 0 1 .29 1.16 1.36 1.36 0 0 1 -1.23 1.23zm7.01-10.35a.5.5 0 0 0 -.43-.4 13.03 13.03 0 0 1 -8.68-4.57.52.52 0 0 0 -.77 0 13.03 13.03 0 0 1 -8.68 4.57.5.5 0 0 0 -.43.4c-1.58 8.19 1.55 14.02 9.3 17.31a.5.5 0 0 0 .39 0c7.75-3.29 10.87-9.11 9.3-17.31zm-9.49 16.3c-7.1-3.09-9.91-8.25-8.57-15.76a13.98 13.98 0 0 0 8.57-4.43 13.98 13.98 0 0 0 8.57 4.43c1.33 7.51-1.48 12.67-8.57 15.76z"
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

export default Login;
