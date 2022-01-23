import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import NotesRoll from "../components/NotesRoll";
import WorkRoll from "../components/WorkRoll";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import HeroSection from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  helmet,
  hero
  // image,
  // title,
  // subheading,
  // mainpitch,
}) => {
  const heroImage = getImage(hero.image) || hero.image;

  return (
    <div>
      {helmet || ""}
      <HeroSection img={heroImage} title={hero.title} subheading={hero.description} height={hero.size} position={hero.position} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  {/* <div className="content">
                    <div className="tile">
                      <h2 className="title">{mainpitch.title}</h2>
                    </div>
                    <div className="tile">
                      <p className="subtitle">{mainpitch.description}</p>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <PreviewCompatibleImage imageInfo={mainpitch.image} />
                      </article>
                    </div>
                  </div> */}
                  
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                        Work
                      </h3>
                    <WorkRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/work">
                        Read more
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <NotesRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/notes">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  hero: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // seo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // title: PropTypes.string,
  // subheading: PropTypes.string,
  // mainpitch: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // description: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  // const title = data.site.siteMetadata.meta.title;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        helmet={
          <Helmet titleTemplate={`%s`}>
            <title>{`${frontmatter.seo.title}`}</title>
            <meta
              name="description"
              content={`${frontmatter.seo.description}`}
            />
          </Helmet>
        }
        // title={frontmatter.title}
        // image={frontmatter.image}
        // subheading={frontmatter.subheading}
        // mainpitch={frontmatter.mainpitch}
        // description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    site {
      siteMetadata {
        meta {
          title
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          size
          position
        }
        seo {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`;

// mainpitch {
//   title
//   description
//   image {
//     alt
//     image {
//       childImageSharp {
//         gatsbyImageData(quality: 72, layout: FULL_WIDTH)
//       }
//     }
//   }
// }