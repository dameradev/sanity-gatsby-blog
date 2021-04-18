import React from "react";
import { graphql } from "gatsby";
import {
  filterOutDocsPublishedInTheFuture,
  filterOutDocsWithoutSlugs,
  formatDate,
  mapEdgesToNodes,
} from "../lib/helpers";
import BlogPostPreviewList from "../components/blog-post-preview-list";
import FilterList from "../components/filter-list";
import Container from "../components/container";
import ContactForm from "../components/contact-form";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import GalleryGrid from "../components/GalleryGrid";
import ThisIsUs from "../components/ThisIsUs";
import ContactUs from "../components/ContactUs";

import Image from "gatsby-image";

import "../styles/contact.scss";
import ContactUsForm from "../components/ContactUsForm";

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

  query ContactPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
      bannerImage {
        picture {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      services {
        _updatedAt
        title
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
      blogPosts {
        _updatedAt
        title
        mainImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
          # alt
        }
      }
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
    images: allSanityPicture(limit: 14) {
      nodes {
        picture {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  // console.log(data);
  console.log(data.site, "here");
  let images = data.images.nodes;
  images = images.map((imageObject) => imageObject.picture.asset);
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
      <Container>
        <div className="contact__wrapper">
          <h1>So, are we doing this?</h1>
          <p>
            We value an honest and uncomplicated dialouge. We will try to answer
            most group- and eventrequests within 24 hours on working days.
          </p>

          <div>
            <ContactUsForm />
            <img src="../assets/images/map.png" />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
