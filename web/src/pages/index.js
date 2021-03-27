import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import FilterList from "../components/filter-list";
import Container from "../components/container";
import ContactForm from "../components/contact-form";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    categories: allSanityCategory {
      edges {
        node {
          title
        }
      }
    }
    posts: allSanityPost(
      limit: 6
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
          services
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  // console.log(data);
  const categories = data.categories.edges;
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;
  const postNodes = (data || {}).posts
    ? mapEdgesToNodes(data.posts)
        .filter(filterOutDocsWithoutSlugs)
        .filter(filterOutDocsPublishedInTheFuture)
    : [];

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  // console.log(postNodes);
  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <Container homePage={true}>
        <h1>{site.description}</h1>
        <FilterList categories={categories} />
        {/* <ul>
      
        </ul> */}

        {postNodes && (
          <BlogPostPreviewList
            // title="Latest blog posts"
            nodes={postNodes}
            browseMoreHref="/archive/"
          />
        )}

        <ContactForm />
      </Container>
    </Layout>
  );
};

export default IndexPage;
