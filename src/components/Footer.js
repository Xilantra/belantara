import * as React from "react";
import Logo from "./Logo";
import PageList from "./PageList";
import PersonalLinks from "./PersonalLinks";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <Logo footBar={true} />
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://www.mindapura.com">MindaPura</a>
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
  }
};

export default Footer;
