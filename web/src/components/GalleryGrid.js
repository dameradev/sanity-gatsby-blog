import React from "react";

import Gallery from "./gallery";

import "./GalleryGrid.scss";
import Title from "./Title";

const GalleryGrid = ({ images }) => {
  console.log(images);
  return (
    <div>
      <Title title={"From Our events"} />

      <Gallery images={images} />
      {/* <ul className="gallery">
        {images.map((image, index) => (
          <Image
            className={`gallery__item gallery__item--${index + 1}`}
            key={index}
            fluid={image.picture.asset.fluid}
          />
        ))}
      </ul> */}
    </div>
  );
};

export default GalleryGrid;
