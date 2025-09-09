import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/tailwind.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { useLocation } from '@reach/router'
import { AnimatePresence, motion } from 'motion/react'
// import getShareImage from '@jlengstorf/get-share-image';

// const socialImage = getShareImage({
//   title: title,
//   tagline: notePost.tags.map(tag => `#${tag}`).join(' '),
//   cloudName: 'xilantra',
//   imagePublicID: 'xilantra/blog-post-card',
//   titleFont: 'lwj-title.otf',
//   titleExtraConfig: '_line_spacing_-10',
//   taglineFont: 'lwj-tagline.otf',
//   textColor: '232129',
// });


const TemplateWrapper = ({ title, description, children }) => {
  const { 
    meta,
    theme
   } = useSiteMetadata();
  const [dark, setDark] = React.useState(false)
  const location = useLocation()
  const prevDepthRef = React.useRef(0)
  const depth = (location.pathname || '/').split('/').filter(Boolean).length
  const direction = depth >= prevDepthRef.current ? 1 : -1
  React.useEffect(() => { prevDepthRef.current = depth }, [depth])

  React.useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored ? stored === 'dark' : prefers
    setDark(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }
  return (
    <div className="min-h-screen bg-white dark:bg-darkbg-900">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
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
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />

        {/* OpenGraph tags */}
        {/* <meta property="og:url" content={`https://belantara.netlify.app${notePost.slug}`} /> */}
        <meta property="og:type" content="article" />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={socialImage} /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${meta.twitterUsername}`} />
        <meta name="twitter:creator" content={`@${meta.twitterUsername}`} />
        
      </Helmet>
      <Navbar />
      {/* Dark mode toggle as a floating control for full-bleed layout */}
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-3 py-1 text-sm text-slate-700 dark:text-slate-200 hover:border-primary/60 hover:text-primary transition-colors"
        aria-label="Toggle dark mode"
      >
        {dark ? 'Dark' : 'Light'}
      </button>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 24 * direction, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -24 * direction, y: -8 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
