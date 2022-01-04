import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            lightMode  {
              bgColor
              themeColor
            }
            darkMode {
              bgColor
              themeColor
            }
            logo
            description
            iconImage
            googleAnalytics
            socMed {
              facebookUsername
              twitterUsername
              instagramUsername
              linkedinUsername
              githubUsername
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
