import * as styles from "./blog-post.module.css";
// import { differenceInDays, formatDistance, format } from "date-fns";
// import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import GalleryGrid from "../components/GalleryGrid";
// import Image from "gatsby-image";

function BlogPost(props) {
  const {
    _rawBody,
    // authors,
    // categories,
    // publishedAt,
    gallery,
    title,
    mainImage,
  } = props;
  // console.log(gallery);
  const images = gallery.map((imageObject) => imageObject.picture.asset);

  return (
    <article className={styles.root}>
      {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
          <h1 className={styles.title}>{title}</h1>
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>

          {/* <div className={styles.imageGrid}>
            {gallery.map((pic, idx) => (
              <Image
                className={styles.image}
                fluid={pic.picture.asset.fluid}
                key={idx}
              />
            ))}
          </div> */}

          <GalleryGrid images={images} />
        </div>
      </Container>
    </article>
  );
}

export default BlogPost;
