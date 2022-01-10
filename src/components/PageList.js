import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import useSiteMetadata from "./SiteMetadata";


export default function PageList(props) {
  const {
    navBar,
    footerBar,
    className
  } = props;
  
  const {
    page
   } = useSiteMetadata();

    if (!!navBar) {
        return (
            <React.Fragment>
                <li className={className}>
                    <Link className="navbar-item" to="/now">
                        {page.now.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/work">
                        {page.work.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/notes">
                        {page.notes.title}
                    </Link>
                </li>
            </React.Fragment>
        );
    } else if (!!footerBar) {
        return (
            <React.Fragment>
                <li className={className}>
                    <Link className="navbar-item" to="/now">
                        {page.now.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/work">
                        {page.work.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/notes">
                        {page.notes.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/about">
                        {page.about.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/stack">
                        {page.stack.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/tags">
                        Tags
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/links">
                        {page.links.title}
                    </Link>
                </li>
                <li className={className}>
                    <Link className="navbar-item" to="/contact">
                        {page.contact.title}
                    </Link>
                </li>
                <li className={className}>
                    <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Login
                    </a>
                </li>
            </React.Fragment>
        );
    } else {
        return null
    }
}

PageList.propTypes = {
    navBar: PropTypes.string,
    footerBar: PropTypes.string,
    className: PropTypes.string
};
