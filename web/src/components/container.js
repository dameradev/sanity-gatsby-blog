import React from "react";
import { cn } from "../lib/helpers";

import "./container.scss";

const Container = ({ children, homePage }) => {
  return (
    <div className="root homePage">
      {children}
    </div>
  );
};

export default Container;
