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
            description
            iconimage
            facebookUsername
            twitterUsername
            igUsername
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
