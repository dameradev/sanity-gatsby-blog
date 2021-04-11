import React from "react";

import { Link } from "gatsby";
import Title from "./Title";
import "./ThisIsUs.scss";
import services from "../images/thisIsUs/services.svg"
import aboutUs from "../images/thisIsUs/aboutus.svg"
import contact from "../images/thisIsUs/contact.svg"
import group from "../images/thisIsUs/group.svg"


const ThisIsUs = () => {
  return (
    <>
      <Title title="This is us" />
      <ul className="this-is-us">
        <Link className="list-item" to="/services">
          <img className="list-item__img" src={services} />
          <h2 className="list-item__h2" >Services</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>

        </Link>

        <Link className="list-item" to="/about">
        <img className="list-item__img" src={aboutUs} />
          <h2 className="list-item__h2" >About us</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>

        </Link>

        <Link className="list-item" to="/corporate">
        <img className="list-item__img" src={group} />
          <h2 className="list-item__h2" > Corporate & groups</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>
        </Link>

        <Link className="list-item" to="/contact">
        <img className="list-item__img" src={contact} />
          <h2 className="list-item__h2" >Contact</h2>
          <hr width="80%"></hr>
          <h3 className="list-item__h3">More information </h3>
          
        </Link>
      </ul>
    </>
  );
};

export default ThisIsUs;
