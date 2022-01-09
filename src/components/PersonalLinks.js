import React from "react"
import JSONData from "../util/personal-links.json";

import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";


export default function SocialLinks() {
  const {
    socialMedia,
    personalLinks
  } = JSONData;

    if (!!socialMedia.custom) {
        return (
            <React.Fragment>
                <li className="navbar-item">
                  <a title="Facebook" href={`https://facebook.com/${socialMedia.facebookUsername}`} target="_blank" rel="noopener noreferrer">
                      <img
                          src={facebook}
                          alt="Facebook" 
                          style={{ width: "1em", height: "1em" }}
                      />
                  </a>
                </li>
                <li className="navbar-item">
                  <a title="Twitter" href={`https://twitter.com/${socialMedia.twitterUsername}`} target="_blank" rel="noopener noreferrer">
                      <img
                          src={twitter}
                          alt="Twitter" 
                          style={{ width: "1em", height: "1em" }}
                      />
                  </a>
                </li>
                <li className="navbar-item">
                  <a title="Instagram" href={`https://instagram.com/${socialMedia.instagramUsername}`} target="_blank" rel="noopener noreferrer">
                      <img
                          src={instagram}
                          alt="Instagram" 
                          style={{ width: "1em", height: "1em" }}
                      />
                  </a>
                </li>
                <li className="navbar-item">
                  <a title="Email" href={`mailto:${socialMedia.email}`} target="_blank" rel="noopener noreferrer">
                      <img
                          src={facebook}
                          alt="Email" 
                          style={{ width: "1em", height: "1em" }}
                      />
                  </a>
                </li>
            </React.Fragment>
        );
    } else if (!socialMedia.custom) {
        return (
          <React.Fragment>
            {personalLinks.map((data, index) => {
              return <li className="navbar-item" key={`personalLinks_item_${index}`}>
                          <a title={data.title} href={data.url} target="_blank" rel="noopener noreferrer">{data.title}</a>
                      </li>
            })}
        </React.Fragment>
        );
    } else {
        return null
    }
}
