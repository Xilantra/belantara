import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import useSiteMetadata from "./SiteMetadata";

export default function Logo(props) {
    const {
        navBar,
        footBar
        } = props;

    const { 
        meta
    } = useSiteMetadata();

   if (!!navBar) {
    return (
        <Link className="navbar-item" title={meta.title} to="/">
          <img
            src={meta.logo}
            alt={`${meta.title}'s logo`}
            style={{ width: "88px" }}
          />
        </Link>
        );
    } else if (!!footBar) {
        return (
            <Link title={meta.title} to="/">
                <img
                    src={meta.logo}
                    alt={`${meta.title}'s logo`}
                    style={{ width: "14em", height: "10em" }}
                />
                </Link>
            );
        } else {
            return null
        }
    }

    Logo.propTypes = {
        navBar: PropTypes.bool,
        footBar: PropTypes.bool
    };
    