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
              twitterUsername
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
              notes {
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
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
