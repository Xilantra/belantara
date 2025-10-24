import * as React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const LinkList = ({ gridItems }) => (
  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
    {gridItems.map((item) => (
      <li key={item.name} id={`${kebabCase(item.name)}`} className="list-none">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-5 border border-border bg-background/90 p-5 shadow-sm transition-colors hover:border-accent/70"
        >
          <div className="w-16 shrink-0 overflow-hidden border border-border/60 bg-muted">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="font-medium text-foreground transition-colors group-hover:text-accent">{item.name}</div>
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
