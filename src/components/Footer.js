import * as React from "react";
// import { Link } from "gatsby";

import PageList from "./PageList";
import useSiteMetadata from "./SiteMetadata";
import AccountList from "./SocialMedia";
// import { BeakerIcon } from '@heroicons/react/solid'

// import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";

// const Footer = class extends React.Component {}
const Footer = (footerBar) => {
  const { 
    meta,
    socMed
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
                    <PageList footerBar={footerBar} className="test"/>
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
