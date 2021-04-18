import  "./blog-post-preview-list.scss";
import BlogPostPreview from "./blog-post-preview";

import React from "react";
import Title from "./Title";

function BlogPostPreviewGrid(props) {
  return (
    <div className='root'>
      <Title title="From our collecion" />
      {props.title && <h2 className='headline'>{props.title}</h2>}
      <ul className='grid'>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
    </div>
  );
}

BlogPostPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: "",
};

export default BlogPostPreviewGrid;
