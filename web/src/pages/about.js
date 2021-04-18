import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import * as styles from "../styles/about.module.css";
// import { imageUrlFor } from "../lib/image-url";

import PortableText from "../components/portableText";
import Container from "../components/container";
// import ContactForm from "../components/contact-form";
// import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import logo1 from "../images/perks/logo1.svg";
import logo2 from "../images/perks/logo2.svg";
import logo3 from "../images/perks/logo3.svg";

export const query = graphql`
  query AboutPageQuery {
    allSanityAboutUs {
      nodes {
        mainImage {
          picture {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
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
        content {
          title
          _rawText
          image {
            picture {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        awards {
          award
          year
        }
      }
    }
  }
`;

let logoDispay = (value) => {
  if (value == 0) {
    return <img className={styles.perks__img} src={logo1} />;
  } else if (value == 1) {
    return <img className={styles.perks__img} src={logo2} />;
  } else if (value == 2) {
    return <img className={styles.perks__img} src={logo3} />;
  }
};
const AboutPage = (props) => {
  const { data, errors } = props;

  console.log(data);
  const about = data.allSanityAboutUs.nodes[0];
  console.log(about);

  const { people, perks, awards, testamonials, mainImage, content } = about;

  console.log(mainImage);
  return (
    <Layout>
      {/* <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      /> */}
      <Container>
        <div className={styles.aboutus__banner}>
          <div className={styles.aboutus__text}>
            <h1>About budapest agency</h1>
            <h3>This is your next travel and eventmaker in budapest!</h3>
          </div>
          <Image fluid={mainImage.picture.asset.fluid} />
        </div>
        <div className={styles.first__div}>
          <div className={styles.first__image}>
            <Image fluid={content[0].image.picture.asset.fluid} />
          </div>
          <div className={styles.first__paragraph}>
            <h1 className={styles.first__h1}>{content[0].title}</h1>
            <hr></hr>

            <PortableText blocks={content[0]._rawText} />
          </div>
        </div>

        {/* {mainImage && mainImage.picture && (
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
        )} */}
        <div className={styles.second__div}>
          <div className={styles.first__paragraph}>
            <h1 className={styles.first__h1}>{content[1].title}</h1>
            <hr></hr>

            <PortableText blocks={content[1]._rawText} />
          </div>
          <div className={styles.first__image}>
            <Image fluid={content[1].image.picture.asset.fluid} />
          </div>
        </div>

        <ul className={styles.perks}>
          {perks.map((perk, index) => (
            <li key={perk.title}>
              {logoDispay(index)}
              <h3 className={styles.perks__title}>{perk.title}</h3>
              <p className={styles.perks__p}>{perk.description}</p>
            </li>
          ))}
        </ul>

        <div className={styles.first__div}>
          <div className={styles.first__image}>
            <Image fluid={content[2].image.picture.asset.fluid} />
          </div>
          <div className={styles.first__paragraph}>
            <h1 className={styles.first__h1}>{content[2].title}</h1>
            <hr></hr>
            <PortableText blocks={content[2]._rawText} />
          </div>
        </div>
        <ul className={styles.awards}>
          <h1 className={styles.awards__title}>Awards & Keydates</h1>
          {awards.map((award) => (
            <li key={award.award} className={styles.awards__li}>
              <div className={styles.awards__div}></div>{" "}
              <p>
                {" "}
                <span className={styles.awards__year}>{award.year}</span>{" "}
                <br></br>
                <span className={styles.awards__desc}>{award.award}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.peopleWrapper}>
          <h1>Meet our team</h1>
          <ul className={styles.people}>
            {people.map((person) => (
              <li key={person.name}>
                <Image fluid={person.picture.picture.asset.fluid} />

                <h3>{person.name}</h3>
              </li>
            ))}
          </ul>
        </div>

        <ul className={styles.testamonials}>
          {testamonials.map(({ name, content, picture }) => (
            <li key={name}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.image}
                  fluid={picture.picture.asset.fluid}
                />
              </div>
              <p className={styles.content}>{content}</p>
              <h2>{name}</h2>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default AboutPage;
