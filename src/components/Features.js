import * as React from "react";
import { kebabCase } from "lodash";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
    {gridItems.map((item) => (
      <li key={item.name} id={`${kebabCase(item.name)}`} className="list-none">
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-start gap-5 rounded-xl border border-border bg-background/90 p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/70 hover:shadow-md"
        >
          <div className="w-16 h-16 shrink-0 overflow-hidden rounded-lg border border-border/60 bg-muted flex items-center justify-center">
            <PreviewCompatibleImage imageInfo={item} />
          </div>
          <div>
            <p className="font-medium text-foreground transition-colors group-hover:text-accent">{item.name}</p>
            {item.description && (
              <p className="mt-1 text-sm text-secondary-foreground">{item.description}</p>
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
