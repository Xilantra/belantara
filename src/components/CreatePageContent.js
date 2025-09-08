import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import PostContent from "../components/Content";

import { kebabCase } from "lodash";

const PreviewPageComponent = ({ contentType }) => {
  const imageStyle = { borderRadius: "5px" };

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
