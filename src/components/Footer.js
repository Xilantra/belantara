import * as React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "./SiteMetadata";
// import AccountList from "./SocialMedia";
// import { BeakerIcon } from '@heroicons/react/solid'

// import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

function AccountList({ userName, accountUrl, iconName }) {
  return (
      <li className="column is-12">
          <a title={userName} href={accountUrl} target="_blank" rel="noopener noreferrer">
              <img
                  src={iconName}
                  alt={userName}
                  style={{ width: "1em", height: "1em" }}
              />
          </a>
      </li>
  );
}

// const Footer = class extends React.Component {}
const Footer = () => {
  const { 
    logo,
    aboutPage,
    workPage,
    blogPage,
    stackPage,
    linksPage,
    contactPage,
    socMed
   } = useSiteMetadata();
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                        {aboutPage.title}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/work">
                        {workPage.title}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        {blogPage.title}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/links">
                        {linksPage.title}
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/stack">
                        {stackPage.title}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        {contactPage.title}
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <ul>
                {/* <BeakerIcon/> */}
                  <AccountList userName={socMed.facebookUsername} accountUrl={`https://facebook.com/${socMed.facebookUsername}`} iconName={facebook} />

                  <AccountList userName={socMed.twitterUsername} accountUrl={`https://twitter.com/${socMed.twitterUsername}`} iconName={twitter} />

                  <AccountList userName={socMed.instagramUsername} accountUrl={`https://instagram.com/${socMed.instagramUsername}`} iconName={instagram} />

                  <AccountList userName={socMed.twitterUsername} accountUrl={`https://linkedin.com/in/${socMed.linkedinUsername}`} iconName={twitter} />

                  <AccountList userName={socMed.twitterUsername} accountUrl={`https://github.com/${socMed.githubUsername}`} iconName={twitter} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
