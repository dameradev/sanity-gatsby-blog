import React from "react";

import { Link } from "gatsby";
import Title from "./Title";
import "./ThisIsUs.scss";

const ThisIsUs = () => {
  return (
    <>
      <Title title="This is us" />
      <ul className="this-is-us">
        <Link className="list-item" to="/services">
          Services
        </Link>

        <Link className="list-item" to="/about">
          About us
        </Link>

        <Link className="list-item" to="/corporate">
          Corporate & groups
        </Link>

        <Link className="list-item" to="/contact">
          Contact
        </Link>
      </ul>
    </>
  );
};

export default ThisIsUs;
