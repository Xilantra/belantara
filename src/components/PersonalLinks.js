import React from "react"
import JSONData from "../util/personal-links.json";

import facebook from "../img/social/facebook.svg";
import twitter from "../img/social/twitter.svg";
import instagram from "../img/social/instagram.svg";

function CommonWeb({ accountName, url, iconName }) {
  return (
      <li className="navbar-item">
          <a title={accountName} href={url} target="_blank" rel="noopener noreferrer">
              <img
                  src={iconName}
                  alt={`${accountName}'s logo`}
                  style={{ width: "1em", height: "1em" }}
              />
          </a>
      </li>
  );
}

export default function SocialLinks() {
  const {
    socialMedia,
    personalLinks
  } = JSONData;

    if (!!socialMedia.custom) {
        return (
            <React.Fragment>

              {socialMedia.facebookUsername ? (
                  <CommonWeb accountName="Facebook" url={`https://facebook.com/${socialMedia.facebookUsername}`} iconName={facebook} />
                ) : ( null )}
                
              {socialMedia.twitterUsername ? (
                  <CommonWeb accountName="Twitter" url={`https://twitter.com/${socialMedia.twitterUsername}`} iconName={twitter} />
                ) : ( null )}

              {socialMedia.instagramUsername ? (
                  <CommonWeb accountName="Instagram" url={`https://instagram.com/${socialMedia.instagramUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.pinterestUsername ? (
                  <CommonWeb accountName="Pinterest" url={`https://pinterest.com/${socialMedia.pinterestUsername}`} iconName={instagram} />
                ) : ( null )}

              {socialMedia.tiktokUsername ? (
                  <CommonWeb accountName="Tiktok" url={`https://instagram.com/${socialMedia.tiktokUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.dribbbleUsername ? (
                  <CommonWeb accountName="Dribbble" url={`https://dribbble.com/${socialMedia.dribbbleUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.deviantartUsername ? (
                  <CommonWeb accountName="DeviantArt" url={`https://deviantart.com/${socialMedia.deviantartUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.behanceUsername ? (
                  <CommonWeb accountName="Behance" url={`https://behance.net/${socialMedia.behanceUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.youtubeUsername ? (
                  <CommonWeb accountName="Youtube" url={`https://youtube.com/${socialMedia.youtubeUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.linkedinUsername ? (
                  <CommonWeb accountName="Linkedin" url={`https://linkedin.com/in/${socialMedia.linkedinUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.mediumUsername ? (
                  <CommonWeb accountName="Medium" url={`https://medium.com/@${socialMedia.mediumUsername}`} iconName={instagram} />
                ) : ( null )}
              
                {socialMedia.getmatterUsername ? (
                    <CommonWeb accountName="Matter" url={`https://getmatter.app/${socialMedia.getmatterUsername}`} iconName={instagram} />
                  ) : ( null )}
              
              {socialMedia.githubUsername ? (
                  <CommonWeb accountName="Github" url={`https://github.com/${socialMedia.githubUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.codepenUsername ? (
                  <CommonWeb accountName="Codepen" url={`https://codepen.io/${socialMedia.codepenUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.buymeacoffeeUsername ? (
                  <CommonWeb accountName="Buy Me a Coffee" url={`https://www.buymeacoffee.com/${socialMedia.buymeacoffeeUsername}`} iconName={instagram} />
                ) : ( null )}
              
              {socialMedia.email ? (
                  <CommonWeb accountName="Email" url={`mailto:${socialMedia.email}`} iconName={instagram} />
                ) : ( null )}

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
