import { Link } from "gatsby";
import React from "react";
import Icon from "./icon";
import { cn } from "../lib/helpers";

import  "./header.scss";

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="root">
    <div className="wrapper">
      <div className="branding">
        <Link to="/">{siteTitle}</Link>
      </div>

      <nav className="desktopNav">
        <ul>
          <li>
            <Link to="/archive/">Services</Link>
          </li>
          <li>
            <Link to="/about/">About us</Link>
          </li>
          <li>
            <Link to="/corporate/">Corporate & groups</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
        className="toggleNavButton"
        onClick={showNav ? onHideNav : onShowNav}
      >
        <Icon symbol="hamburger" />
      </button>

      <nav className="nav showNav">
        <ul>
          <li>
            <Link to="/archive/">Home</Link>
          </li>
          <li>
            <Link to="/archive/">About</Link>
          </li>
          <li>
            <Link to="/archive/">Services</Link>
          </li>
          <li>
            <Link to="/archive/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
