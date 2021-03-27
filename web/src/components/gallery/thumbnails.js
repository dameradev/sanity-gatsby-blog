import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

import { withStyles, ButtonBase, Grid } from "@material-ui/core";

const style = (theme) => ({
  previewButton: {
    display: "inline-block",
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    width: 500,
    height: 500,
    borderRadius: 4,
    boxShadow: "0 0 25px -5px rgba(0,0,0,0.3)",
    margin: "2rem",
  },
  thumbnail: {
    width: 500,
    height: 500,
    borderRadius: 4,
  },
});

const ThumbGrid = ({ images, handleOpen, classes }) => {
  return images.map((image, i) => (
    <Grid item key={i}>
      {console.log(image)}
      <ButtonBase onClick={handleOpen(i)} className={classes.previewButton}>
        <Img fluid={image.fluid} className={classes.thumbnail} />
      </ButtonBase>
    </Grid>
  ));
};

ThumbGrid.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
};
export default withStyles(style)(ThumbGrid);
