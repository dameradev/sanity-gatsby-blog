import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import * as styles from "../styles/about.module.css";

import PortableText from "../components/portableText";
import Container from "../components/container";
import ContactForm from "../components/contact-form";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";

export const query = graphql`
  query AboutPageQuery {
    allSanityAboutUs {
      nodes {
        people {
          name
          picture {
            picture {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        perks {
          description
          title
        }
        testamonials {
          name
          content
          picture {
            picture {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        _rawFirstParagraph
        _rawSecondParagraph
        _rawThirdParagraph
        thirdTitle
        secondTitle
        firstTitle
        awards {
          award
          year
        }
      }
    }
  }
`;

const AboutPage = (props) => {
  const { data, errors } = props;

  console.log(data);
  const about = data.allSanityAboutUs.nodes[0];
  console.log(about);

  const {
    firstTitle,
    secondTitle,
    thirdTitle,
    _rawFirstParagraph,
    _rawSecondParagraph,
    _rawThirdParagraph,
    people,
    perks,
    awards,
    testamonials,
  } = about;

  // console.log(_rawBody);
  return (
    <Layout>
      <SEO
      // title={site.title}
      // description={site.description}
      // keywords={site.keywords}
      />
      <Container homePage={true}>
        <h1>{firstTitle}</h1>
        {_rawFirstParagraph && <PortableText blocks={_rawFirstParagraph} />}
        <h1>{secondTitle}</h1>
        {_rawSecondParagraph && <PortableText blocks={_rawSecondParagraph} />}
        <h1>{thirdTitle}</h1>
        {_rawThirdParagraph && <PortableText blocks={_rawThirdParagraph} />}

        <ul className={styles.people}>
          {people.map((person) => (
            <li key={person.name}>
              <Image fluid={person.picture.picture.asset.fluid} />
              <h3>{person.name}</h3>
            </li>
          ))}
        </ul>

        <ul className={styles.perks}>
          {perks.map((perk) => (
            <li key={perk.title}>
              <h3>{perk.title}</h3>
              <p>{perk.description}</p>
            </li>
          ))}
        </ul>

        <h1>Awards & Keydates</h1>

        <ul className={styles.awards}>
          {awards.map((award) => (
            <li key={award.award}>
              <p>
                <span>{award.year}</span> <span>{award.award}</span>
              </p>
            </li>
          ))}
        </ul>

        <ul className={styles.testamonials}>
          {testamonials.map(({ name, content, picture }) => (
            <li key={name}>
              <name>{content}</name>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  fluid={picture.picture.asset.fluid}
                />
                <p>{name}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default AboutPage;
