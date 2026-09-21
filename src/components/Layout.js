import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/tailwind.css";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { useLocation } from '@reach/router'
import { ThemeProvider } from '../context/ThemeContext'
import Seo from "./Seo";

const TemplateWrapper = ({ title, description, children }) => {
  const { 
    meta,
    theme
   } = useSiteMetadata();
  const location = useLocation()

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-accent/20 overflow-x-hidden">
        <Helmet>
          <html lang="en" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={meta.iconImage}
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
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content={theme.themeColor.dark} />
        </Helmet>
        <Seo title={title} description={description} pathname={location.pathname} />
        <Navbar />
        <main className="bg-background">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default TemplateWrapper;
