import React, { useState } from "react";
import LanguageIcon from "@material-ui/icons/Language";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SignUpModale from "../../../Components/signup/SignUpModale";

// import { Dropdown } from "reactstrap";

function HeaderRight() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  //signup popup
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // model bootstrap
  const [modalShow, setModalShow] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <>
      <div className="header2__right col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
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
            <ul>
              <a href="/">
                <li>Login</li>
              </a>
              <a variant="primary" onClick={() => setModalShow(true)}>
                <li>Signup</li>
              </a>
              <SignUpModale
                role="button"
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
              <Link to="/edit_profile/edit">
                <li>Sitings</li>
              </Link>
              <a href="/">
                {" "}
                <li>Help</li>
              </a>
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default HeaderRight;
