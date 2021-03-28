import React, { useState } from "react";
import { graphql, StaticQuery } from "gatsby";
import ThumbGrid from "./thumbnails";
import LightBox from "./lightbox";
import { Grid } from "@material-ui/core";

import "../GalleryGrid.scss";

const GalleryComponent = (props) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (i) => (e) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };
  return (
    <div className="gallery" justify="center">
      <ThumbGrid images={props.images} handleOpen={handleOpen} />
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={props.images}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};
export default GalleryComponent;
