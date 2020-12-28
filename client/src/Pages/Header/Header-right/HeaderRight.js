import React, { useState, useContext } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SignUpModale from "../../../Components/signup/SignUpModale";
import Login from "../../../Components/Login/Login";
// import { Dropdown } from "reactstrap";

import { AuthContext } from "../../../Context/AuthContext";

function HeaderRight() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow_2, setModalShow_2] = useState(false);
  const authContext = useContext(AuthContext);
  const { logout, token } = authContext;

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <>
      <div className="header2__right d-none d-md-flex">
        <Link to="/become_host">
          <p className="header_host_text">Become a Host</p>
        </Link>
        <div className="header2__right__currency">
          <LanguageIcon />
        </div>
        <div className="header2__right__icons">
          <div className="header2__right__profileIcons" onClick={toggle}>
            <DehazeIcon />
            <AccountCircleIcon />
          </div>
          {dropdownOpen && (
            <ul className="links">
              {!token && (
                <li
                  role="button"
                  className="py-1"
                  variant="primary"
                  onClick={() => setModalShow_2(true)}
                >
                  Login
                </li>
              )}
              <Login show={modalShow_2} onHide={() => setModalShow_2(false)} />
              {!token && (
                <li
                  role="button"
                  className="py-1"
                  variant="primary"
                  onClick={() => setModalShow(true)}
                >
                  Signup
                </li>
              )}
              <SignUpModale
                role="button"
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              {token && (
                <Link className="py-1" to="/edit_profile/edit">
                  <li>Sitings</li>
                </Link>
              )}
              {token && (
                <li className="py-1" onClick={logout} role="button">
                  {" "}
                  Log out
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default HeaderRight;
