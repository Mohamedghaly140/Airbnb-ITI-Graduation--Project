import React, { Fragment, useContext, useState } from "react";
import "./NavbarStyle.css";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import SettingsIcon from "@material-ui/icons/Settings";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import SignUpModale from "../../signup/SignUpModale";
import { AuthContext } from "../../../Context/AuthContext";
import Login from "../../Login/Login";
function NavbarDown() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow_2, setModalShow_2] = useState(false);
  const authContext = useContext(AuthContext);
  const { logout, token } = authContext;
  return (
    <Fragment>
      <div className="nav-down d-md-none" style={{ width: "100%" }}>
        <div className="nav-down-container" style={{ width: "80%" }}>
          <Link to="/become_host" className="nav-down-item nav-hosting">
            <div>
              <HomeWorkIcon className="nav-down-icon" />
            </div>
            <span className="text-center">Hosting</span>
          </Link>
          {!token && (
            <div
              className="nav-down-item nav-login"
              onClick={() => setModalShow_2(true)}
            >
              <div>
                <DirectionsRunIcon className="nav-down-icon" />
              </div>
              <span className="text-center">Login</span>
            </div>
          )}
          {!token && (
            <div
              className="nav-down-item nav-signup"
              onClick={() => setModalShow(true)}
            >
              <div>
                <PersonAddIcon className="nav-down-icon" />
              </div>
              <span className="text-center">signup</span>
            </div>
          )}
          {token && (
            <Link
              to="/edit_profile/edit"
              className="nav-down-item nav-settings"
            >
              <div>
                <SettingsIcon className="nav-down-icon" />
              </div>
              <span className="text-center">settings</span>
            </Link>
          )}

          {token && (
            <div className="nav-down-item nav-logout" onClick={logout}>
              <div>
                <ExitToAppIcon className="nav-down-icon" />
              </div>
              <span className="text-center">Log out</span>
            </div>
          )}
        </div>
      </div>
      <SignUpModale
        role="button"
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Login show={modalShow_2} onHide={() => setModalShow_2(false)} />
    </Fragment>
  );
}

export default NavbarDown;
