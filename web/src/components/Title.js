import React from "react";

import "./title.scss";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="main-title">{title}</h1>
      <hr className="main-hr"></hr>
    </>
  );
};

export default Title;
