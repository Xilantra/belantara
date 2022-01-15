import * as React from "react";
import PropTypes from "prop-types";
import Features from "../components/Features";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PostContent from "../components/Content";

import { kebabCase } from "lodash";

const PreviewPageComponent = ({ type, contentType }) => {
  const imageStyle = { borderRadius: "5px" };

  // const { alt = "", childImageSharp, image } = imageInfo;
  // const { type } = type;

  return (
    <div>
      <div className="columns is-multiline">
          {contentType.map((item) => (
            <div key={item.name} id={`${kebabCase(item.name)}`} className="column is-12">
              {item.type === "typeOne" ? (
                <a 
                  href={item.url} 
                  target="_blank"
                  rel="noopener noreferrer">
                  <div
                      style={{
                        width: "56px",
                        display: "inline-block",
                      }}
                    >
                      <PreviewCompatibleImage imageInfo={item} />
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>

                </a>
              ) : ( null )}
                
              {item.type === "typeTwo" ? (
                <PostContent content={item.body} />
              ) : ( null )}
                
            </div>
          ))}
        </div>
    </div>
  );
};

PreviewPageComponent.propTypes = {
  contentType: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

export default PreviewPageComponent;
