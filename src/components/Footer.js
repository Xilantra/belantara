import * as React from "react";
import { Link } from "gatsby";

import useSiteMetadata from "./SiteMetadata";
import AccountList from "./socialMedia";
// import { BeakerIcon } from '@heroicons/react/solid'

// import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

// const Footer = class extends React.Component {}
const Footer = () => {
  const { 
    logo,
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
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/work">
                        Work
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/links">
                        Links
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
                        Stack
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
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
                  <AccountList usrName={socMed.facebookUsername} accountUrl={`https://facebook.com/${socMed.facebookUsername}`} iconName={facebook} />

                  <AccountList usrName={socMed.twitterUsername} accountUrl={`https://twitter.com/${socMed.twitterUsername}`} iconName={twitter} />

                  <AccountList usrName={socMed.instagramUsername} accountUrl={`https://instagram.com/${socMed.instagramUsername}`} iconName={instagram} />

                  <AccountList usrName={socMed.twitterUsername} accountUrl={`https://linkedin.com/in/${socMed.linkedinUsername}`} iconName={twitter} />

                  <AccountList usrName={socMed.twitterUsername} accountUrl={`https://github.com/${socMed.githubUsername}`} iconName={twitter} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
