import * as React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
    {gridItems.map((item) => (
      <li key={item.name} id={`${kebabCase(item.name)}`} className="list-none">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-4 backdrop-blur hover:border-primary/50 transition"
        >
          <div className="w-14 shrink-0 overflow-hidden rounded">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div>
            <p className="font-medium group-hover:text-primary">{item.name}</p>
            {item.description && (
              <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{item.description}</p>
            )}
          </div>
        </a>
      </li>
    ))}
  </ul>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
