import * as React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data }) => (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
    {data.map((price) => (
      <div key={price.plan} className="flex h-full flex-col gap-4 border border-border bg-background/90 p-6 shadow-sm">
        <h4 className="text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">{price.plan}</h4>
        <h2 className="text-center font-display text-4xl text-accent">${price.price}</h2>
        {price.description && (
          <p className="text-center text-sm leading-relaxed text-secondary-foreground">{price.description}</p>
        )}
        <ul className="space-y-3 text-sm text-secondary-foreground">
          {price.items.map((item) => (
            <li key={item} className="text-base text-foreground">{item}</li>
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
