import * as React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const LinkList = ({ gridItems }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {gridItems.map((item) => (
      <li key={item.name} id={`${kebabCase(item.name)}`} className="list-none">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4 backdrop-blur hover:border-primary/50 transition"
        >
          <div className="w-14 shrink-0 overflow-hidden rounded">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div className="font-medium group-hover:text-primary">{item.name}</div>
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
