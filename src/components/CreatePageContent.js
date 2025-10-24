import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PostContent from "../components/Content";

import { kebabCase } from "lodash";

const PreviewPageComponent = ({ contentType }) => {

  // const { alt = "", childImageSharp, image } = imageInfo;
  // const { type } = type;

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 md:gap-8">
        {contentType.map((item) => (
          <li key={item.name} id={`${kebabCase(item.name)}`} className="list-none">
            {item.type === 'typeOne' ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-5 border border-border bg-background/90 p-5 shadow-sm transition-colors hover:border-accent/70"
              >
                <div className="w-16 shrink-0 overflow-hidden border border-border/60 bg-muted">
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
                <div>
                  <p className="font-medium text-foreground transition-colors group-hover:text-accent">{item.name}</p>
                  {item.description && (
                    <p className="mt-1 text-sm text-secondary-foreground">{item.description}</p>
                  )}
                </div>
              </a>
            ) : null}

            {item.type === 'typeTwo' ? (
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <PostContent content={item.body} />
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

PreviewPageComponent.propTypes = {
  contentType: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array]),
};

export default PreviewPageComponent;
