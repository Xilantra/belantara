import * as React from "react";
// import { Link } from "gatsby";

import PageList from "./PageList";
import useSiteMetadata from "./SiteMetadata";
import PersonalLinks from "./PersonalLinks";
// import { BeakerIcon } from '@heroicons/react/solid'

// import logo from "../img/logo.svg";
// import facebook from "../img/social/facebook.svg";
// import instagram from "../img/social/instagram.svg";
// import twitter from "../img/social/twitter.svg";

// const Footer = class extends React.Component {}
const Footer = () => {
  const { 
    meta
   } = useSiteMetadata();
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={meta.logo}
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
                    <PageList footerBar={true} className="test"/>
                  </ul>
                </section>
              </div>
              
              <div className="column is-4 navbar-start">
                <ul className="navbar-menu">
                  <PersonalLinks />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
