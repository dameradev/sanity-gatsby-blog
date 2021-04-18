import React from "react";
import { formatDate } from "../lib/helpers";
import Image from "gatsby-image";
const ThreePostList = ({ posts }) => {
  return (
    // <ul className="blog-posts">
    posts.map((post) => (
      <li className="blog-posts__post">
        <Image fluid={post.mainImage.asset.fluid} />
        <div>
          <p>{formatDate(post._updatedAt)}</p>
          <h3>{post.title}</h3>
        </div>
      </li>
    ))
    // </ul>
  );
};

export default ThreePostList;
