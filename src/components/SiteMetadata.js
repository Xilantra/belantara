import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            meta {
              title
              siteUrl
              description
              logo
              iconImage
              googleAnalytics
            }
            theme {
              background {
                light
                dark
              }
              themeColor {
                light
                dark
              }
            }
            page {
              about {
                title
                photo
              }
              work {
                title
                photo
              }
              blog {
                title
                photo
              }
              stack {
                title
                photo
              }
              links {
                title
                photo
              }
              contact {
                title
                photo
              }
            }
            socMed {
              facebookUsername
              twitterUsername
              instagramUsername
              linkedinUsername
              githubUsername
              dribbbleUsername
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
