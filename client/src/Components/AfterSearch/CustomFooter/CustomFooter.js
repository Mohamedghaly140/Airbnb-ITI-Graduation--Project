import React from "react";
import LanguageIcon from "@material-ui/icons/Language";

import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__links__about">
          <h4>ABOUT</h4>
          <ul>
            <a href="/">
              <li>How Airbnb works</li>
            </a>
            <a href="/">
              <li>News Room</li>
            </a>
            <a href="/">
              <li>Airbnb Plus</li>
            </a>
            <a href="/">
              <li>Airbnb Luxe</li>
            </a>
            <a href="/">
              <li>HotelTonight</li>
            </a>
            <a href="/">
              <li>Airbnb for Work</li>
            </a>
            <a href="/">
              <li>Olympics</li>
            </a>
            <a href="/">
              <li>Careers</li>
            </a>
          </ul>
        </div>
        <div className="footer__links__community">
          <h4>COMMUNITY</h4>
          <ul>
            <a href="/">
              <li>Diversity&Belonging</li>
            </a>
            <a href="/">
              <li>Against Discrimination</li>
            </a>
            <a href="/">
              <li>Accessibility</li>
            </a>
            <a href="/">
              <li>Airbnb Associates</li>
            </a>
            <a href="/">
              <li>Frontline Stays</li>
            </a>
            <a href="/">
              <li>Invite Friends</li>
            </a>
            <a href="/">
              <li>Gift Cards</li>
            </a>
          </ul>
        </div>
        <div className="footer__links__host">
          <h4>HOST</h4>
          <ul>
            <a href="/">
              <li>Host your home</li>
            </a>
            <a href="/">
              <li>Host an online Exprience</li>
            </a>
            <a href="/">
              <li>Host an Exprience</li>
            </a>
            <a href="/">
              <li>Responsible Hosting</li>
            </a>
            <a href="/">
              <li>Open Homes</li>
            </a>
            <a href="/">
              <li>Resource Center</li>
            </a>
            <a href="/">
              <li>Community Center</li>
            </a>
          </ul>
        </div>
        <div className="footer__links__support">
          <h4>SUPPORT</h4>
          <ul>
            <a href="/">
              <li>Our COVID-19 Response</li>
            </a>
            <a href="/">
              <li>Help Center</li>
            </a>
            <a href="/">
              <li>Cancellation Option</li>
            </a>
            <a href="/">
              <li>Neighbourhood Support</li>
            </a>
            <a href="/">
              <li>Trust & Safety</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer__end">
        <div className="footer__end__links">
          <ul>
            <a href="/">
              <li>Privacy</li>
            </a>
            <a href="/">
              <li>Terms</li>
            </a>
            <a href="/">
              <li>Sitemap</li>
            </a>
          </ul>
        </div>
        <div className="footer__end__last">
          <div className="footer__end__last__language">
            <LanguageIcon />
            <a href="/">English</a>
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
