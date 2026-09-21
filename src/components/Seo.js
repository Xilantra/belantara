import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useSiteMetadata from "./SiteMetadata"

const getImageUrl = (image, siteUrl) => {
  if (!image) return `${siteUrl}/img/og-image.jpg`

  let imagePath = ""
  if (typeof image === "string") {
    imagePath = image
  } else if (image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src) {
    imagePath = image.childImageSharp.gatsbyImageData.images.fallback.src
  } else if (image?.publicURL) {
    imagePath = image.publicURL
  }

  if (!imagePath) return `${siteUrl}/img/og-image.jpg`
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath
  }
  const cleanSiteUrl = siteUrl.replace(/\/$/, "")
  const cleanPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`
  return `${cleanSiteUrl}${cleanPath}`
}

const Seo = ({
  title,
  description,
  image,
  pathname,
  article = false,
  publishedTime,
  modifiedTime,
  tags = [],
  author,
  noindex = false,
}) => {
  const { meta } = useSiteMetadata()
  const siteUrl = (meta?.siteUrl || "https://belantara.afiq.me").replace(/\/$/, "")
  const defaultTitle = meta?.title || "Belantara"
  const metaDescription = description || meta?.description || ""
  const pageTitle = title ? (title === defaultTitle ? defaultTitle : `${title} | ${defaultTitle}`) : defaultTitle
  const canonical = pathname ? `${siteUrl}${pathname.startsWith("/") ? "" : "/"}${pathname}` : siteUrl
  const ogImage = getImageUrl(image, siteUrl)
  const twitterUser = (meta?.twitterUsername || "xilantra").replace(/^@/, "")
  const authorName = author || meta?.title || "Belantara"

  // Base structured data
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: defaultTitle,
      url: siteUrl,
      description: meta?.description || "",
    },
  ]

  if (article) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonical,
      },
      headline: title || defaultTitle,
      description: metaDescription,
      image: [ogImage],
      datePublished: publishedTime || undefined,
      dateModified: modifiedTime || publishedTime || undefined,
      author: {
        "@type": "Person",
        name: authorName,
      },
      publisher: {
        "@type": "Organization",
        name: defaultTitle,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}${meta?.logo || "/img/logo.svg"}`,
        },
      },
      keywords: tags.length ? tags.join(", ") : undefined,
    })
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={defaultTitle} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title || defaultTitle} />

      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article &&
        tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${twitterUser}`} />
      <meta name="twitter:creator" content={`@${twitterUser}`} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title || defaultTitle} />

      {/* Structured Data */}
      {jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  pathname: PropTypes.string,
  article: PropTypes.bool,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  noindex: PropTypes.bool,
}

export default Seo