import React from "react";
import Img from "gatsby-image";

const NonStretchedImage = (props) => {
  let normalizedProps = props;

  if (props.fluid) {
    normalizedProps = {
      ...props,
      style: {
        ...(props.style || {}),
        maxWidth: props.fluid.sizes.split(", ")[1],
        // maxHeight: window.innerHeight - 50px,
        height: window.innerHeight - 50,
        width: "auto",
        margin: "50px auto 0", // Used to center the image
      },
    };
  }

  return <Img {...normalizedProps} />;
};
export default NonStretchedImage;
