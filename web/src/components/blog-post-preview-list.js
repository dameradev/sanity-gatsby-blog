import * as styles from "./blog-post-preview-list.module.css";
import BlogPostPreview from "./blog-post-preview";

import React from "react";
import Title from "./Title";
import ThreePostList from "./ThreePostList";

function BlogPostPreviewGrid(props) {
  return (
    <>
      <Title title="From our collecion" />
      <div className={styles.root}>
        {props.title && <h2 className={styles.headline}>{props.title}</h2>}
        <ul className={styles.grid}>
          {props.nodes &&
            props.nodes.map((node) => (
              <li key={node.id}>
                <BlogPostPreview {...node} isInList />
              </li>
            ))}
        </ul>
        <div className="posts-list">
          <div>
            <h2>Blog</h2>
            <ul className="blog-posts">
              <ThreePostList posts={props.blogPosts} />
            </ul>
          </div>
          <div>
            <h2>Services</h2>
            <ul className="blog-posts">
              <ThreePostList posts={props.services} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
