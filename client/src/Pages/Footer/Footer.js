import React from "react";
import {Link} from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Homefooter">
      <div className="footer__links">
        <div className="footer__links__about">
          <h4>ABOUT</h4>
          <ul>
            <Link to="/AddonOne">
            
              <li>How Airbnb works</li>
            </Link>
            <Link to="/AddonTwo">
              <li>News Room</li>
            </Link>
            <Link to="/AddonThree">
              <li>Airbnb Plus</li>
            </Link>
            <Link to="/AddonFour">
              <li>Airbnb Luxe</li>
            </Link>
            <Link to="/AddonFive">
              <li>HotelTonight</li>
            </Link>
            <Link to="/AddonTwo">
              <li>Airbnb for Work</li>
            </Link>
            <Link to="/AddonThree">
              <li>Olympics</li>
            </Link>
            <Link to="/AddonOne">
              <li>Careers</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links__community">
          <h4>COMMUNITY</h4>
          <ul>
            <Link to="/AddonOne">
              <li>Diversity&Belonging</li>
            </Link>
            <Link to="/AddonTwo">
              <li>Against Discrimination</li>
            </Link>
            <Link to="/AddonThree">
              <li>Accessibility</li>
            </Link>
            <Link to="/AddonFour">
              <li>Airbnb Associates</li>
            </Link>
            <Link to="/AddonFive">
              <li>Frontline Stays</li>
            </Link>
            <Link to="/AddonOne">
              <li>Invite Friends</li>
            </Link>
            <Link to="/AddonTwo">
              <li>Gift Cards</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links__host">
          <h4>HOST</h4>
          <ul>
            <Link to="/AddonThree">
              <li>Host your home</li>
            </Link>
            <Link to="/AddonFour">
              <li>Host an online Exprience</li>
            </Link>
            <Link to="/AddonFive">
              <li>Host an Exprience</li>
            </Link>
            <Link to="/AddonOne">
              <li>Responsible Hosting</li>
            </Link>
            <Link to="/AddonTwo">
              <li>Open Homes</li>
            </Link>
            <Link to="/AddonThree">
              <li>Resource Center</li>
            </Link>
            <Link to="/AddonFour">
              <li>Community Center</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links__support">
          <h4>SUPPORT</h4>
          <ul>
            <Link to="/AddonFive">
              <li>Our COVID-19 Response</li>
            </Link>
            <Link to="/AddonOne">
              <li>Help Center</li>
            </Link>
            <Link to="/AddonTwo">
              <li>Cancellation Option</li>
            </Link>
            <Link to="/AddonThree">
              <li>Neighbourhood Support</li>
            </Link>
            <Link to="/AddonFour">
              <li>Trust & Safety</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer__end">
        <div className="footer__end__links">
          <ul>
            <Link to="/AddonFive">
              <li>Privacy</li>
            </Link>
            <Link to="/AddonOne">
              <li>Terms</li>
            </Link>
            <Link to="/AddonTwo">
              <li>Sitemap</li>
            </Link>
          </ul>
        </div>
        <div className="footer__end__last">
          <div className="footer__end__last__language">
            <LanguageIcon />
            <Link to="/">English</Link>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        © 2020 Airbnb, Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
