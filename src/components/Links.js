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
          className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-background/90 p-4 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-muted flex items-center justify-center">
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <div className="font-medium text-foreground transition-colors group-hover:text-accent truncate">
              {item.name}
            </div>
          </div>
          <svg className="w-5 h-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
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
