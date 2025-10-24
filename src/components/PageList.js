import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import useSiteMetadata from "./SiteMetadata";


export default function PageList(props) {
  const { navBar, footerBar, className } = props;
  
  const {
    page
   } = useSiteMetadata();

    if (!!navBar) {
        return (
            <React.Fragment>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/work">
                        {page.work.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/notes">
                        {page.notes.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/page">
                        Page
                    </Link>
                </li>
            </React.Fragment>
        );
    } else if (!!footerBar) {
        return (
            <React.Fragment>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/now">
                        {page.now.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/work">
                        {page.work.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/notes">
                        {page.notes.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/page">
                        Page
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/about">
                        {page.about.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/stack">
                        {page.stack.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/tags">
                        Tags
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/links">
                        {page.links.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <Link className={className || "transition-colors hover:text-accent"} to="/contact">
                        {page.contact.title}
                    </Link>
                </li>
                <li className={`list-none`}>
                    <a
                        className={className || "transition-colors hover:text-accent"}
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Login
                    </a>
                </li>
                {/* {page.map((item) => (
                    <li key={item.name} className={className}>
                        <Link className="navbar-item" to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                ))} */}
            </React.Fragment>
        );
    } else {
        return null
    }
}

PageList.propTypes = {
    navBar: PropTypes.bool,
    footerBar: PropTypes.bool,
    className: PropTypes.string
};
