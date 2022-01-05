import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
// import getShareImage from '@jlengstorf/get-share-image';

// const socialImage = getShareImage({
//   title: title,
//   tagline: blogPost.tags.map(tag => `#${tag}`).join(' '),
//   cloudName: 'xilantra',
//   imagePublicID: 'xilantra/blog-post-card',
//   titleFont: 'lwj-title.otf',
//   titleExtraConfig: '_line_spacing_-10',
//   taglineFont: 'lwj-tagline.otf',
//   textColor: '232129',
// });

const TemplateWrapper = ({ children }) => {
  const { 
    meta,
    theme,
    socMed
   } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/* <meta name="image" content={socialImage} /> */}
        

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={meta.iconImage}
          // href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={theme.themeColor.light} />
        <meta name="theme-color" media="(prefers-color-scheme: dark)"  content={theme.themeColor.dark} />


        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        {/* OpenGraph tags */}
        {/* <meta property="og:url" content={`https://belantara.netlify.app${blogPost.slug}`} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:description" content={meta.description} />
        {/* <meta property="og:image" content={socialImage} /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${socMed.twitterUsername}`} />
        <meta name="twitter:creator" content={`@${socMed.twitterUsername}`} />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
