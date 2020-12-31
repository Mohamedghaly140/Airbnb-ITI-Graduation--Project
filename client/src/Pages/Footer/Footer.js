import React from "react";
import { Link } from "react-router-dom";
import LanguageIcon from "@material-ui/icons/Language";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Homefooter">
      <div className="footer__links">
        <div className="footer__links__about">
          <ul>
            <li>
              {" "}
              <h4>ABOUT</h4>
            </li>
            <Link to="/about">
              <li>How Airbnb works</li>
            </Link>
            <Link to="/become_host">
              <li>News Room</li>
            </Link>
            <Link to="/about">
              <li>Airbnb Plus</li>
            </Link>
            <Link to="/associates">
              <li>Airbnb Luxe</li>
            </Link>
            <Link to="/terms">
              <li>HotelTonight</li>
            </Link>
            <Link to="/about">
              <li>Airbnb for Work</li>
            </Link>
            <Link to="/safty">
              <li>Olympics</li>
            </Link>
            <Link to="/terms">
              <li>Careers</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links__community">
          <ul>
            <li>
              <h4>COMMUNITY</h4>
            </li>
            <Link to="/fighting_racism">
              <li>Diversity&Belonging</li>
            </Link>
            <Link to="/about">
              <li>Against Discrimination</li>
            </Link>
            <Link to="/terms">
              <li>Accessibility</li>
            </Link>
            <Link to="/associates">
              <li>Airbnb Associates</li>
            </Link>
            <Link to="/safty">
              <li>Frontline Stays</li>
            </Link>
            <Link to="/fighting_racism">
              <li>Invite Friends</li>
            </Link>
            <Link to="/terms">
              <li>Gift Cards</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links__host">
          <ul>
            <li>
              <h4>HOST</h4>
            </li>
            <Link to="/become_host">
              <li>Host your home</li>
            </Link>
            <Link to="/associates">
              <li>Host an online Exprience</li>
            </Link>
            <Link to="/terms">
              <li>Host an Exprience</li>
            </Link>
            <Link to="/fighting_racism">
              <li>Responsible Hosting</li>
            </Link>
            <Link to="/about">
              <li>Open Homes</li>
            </Link>
            <Link to="/terms">
              <li>Resource Center</li>
            </Link>
            <Link to="/associates">
              <li>Community Center</li>
            </Link>
          </ul>
        </div>
        <div className="footer__links__support">
          <ul>
            <li>
              <h4>SUPPORT</h4>
            </li>
            <Link to="/safty">
              <li>Our COVID-19 Response</li>
            </Link>
            <Link to="/about">
              <li>Help Center</li>
            </Link>
            <Link to="/about">
              <li>Cancellation Option</li>
            </Link>
            <Link to="/terms">
              <li>Neighbourhood Support</li>
            </Link>
            <Link to="/terms">
              <li>Trust & Safety</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="footer__end">
        <div className="footer__end__links">
          <ul>
            <Link to="/terms">
              <li>Privacy</li>
            </Link>
            <Link to="/fighting_racism">
              <li>Terms</li>
            </Link>
            <Link to="/about">
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

      <div className="footer__copyright text-center">
        © 2020 Airbnb, Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
