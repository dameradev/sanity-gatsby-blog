import React from "react";

import { Link } from "gatsby";
import Title from "./Title";
import "./ThisIsUs.scss";
import Services from "../images/thisIsUs/services.svg";
import AboutUs from "../images/thisIsUs/aboutus.svg";
import Contact from "../images/thisIsUs/contact.svg";
import Group from "../images/thisIsUs/group.svg";

const ThisIsUs = () => {
  return (
    <>
      <Title title="This is us" />
      <ul className="this-is-us">
        <Link className="list-item" to="/services">
          <Services />

          <h2 className="list-item__h2">Services</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>
        </Link>

        <Link className="list-item" to="/about">
          <AboutUs />
          <h2 className="list-item__h2">About us</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>
        </Link>

        <Link className="list-item" to="/corporate">
          <Group />
          <h2 className="list-item__h2"> Corporate & groups</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>
        </Link>

        <Link className="list-item" to="/contact">
          <Contact />
          <h2 className="list-item__h2">Contact</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>
        </Link>
      </ul>
    </>
  );
};

export default ThisIsUs;
