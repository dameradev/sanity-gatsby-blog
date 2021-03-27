import React from "react";
import { cn } from "../lib/helpers";

import * as styles from "./container.module.css";

const Container = ({ children, homePage }) => {
  return (
    <div className={cn(styles.root, homePage && styles.homePage)}>
      {children}
    </div>
  );
};

export default Container;
