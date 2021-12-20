import * as React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const LinkList = ({ gridItems }) => (
  <ul className="columns is-multiline">
    {gridItems.map((item) => (
      <li key={item.name} id={`${kebabCase(item.name)}`} className="column is-12">
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
              </div>

          </a>
      </li>
    ))}
  </ul>
);

LinkList.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default LinkList;
