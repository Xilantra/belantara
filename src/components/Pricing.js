import * as React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    {data.map((price) => (
      <div key={price.plan} className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/40 p-6 backdrop-blur">
        <h4 className="text-center font-medium">{price.plan}</h4>
        <h2 className="mt-2 text-center font-display text-4xl text-primary">${price.price}</h2>
        {price.description && (
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm text-center">{price.description}</p>
        )}
        <ul className="mt-4 space-y-2">
          {price.items.map((item) => (
            <li key={item} className="text-base">{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
