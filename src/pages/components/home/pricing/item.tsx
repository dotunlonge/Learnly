// components/home/pricing/item.tsx
import React from 'react';
import { PricingPlan } from '@/lib/data/pricing'; // Adjust the import path as necessary

/**
 * Renders an individual pricing plan as part of the Learnly platform's Pricing Section.
 * This component displays detailed information about a pricing plan, including whether it is recommended,
 * its title, monthly price, and a list of features included in the plan. It visually distinguishes recommended
 * plans from others to guide user choice.
 *
 * @param {PricingPlan} props The pricing plan data for the component.
 * @param {boolean} props.recommended Indicates if the plan is recommended.
 * @param {string} props.title The title of the pricing plan.
 * @param {string} props.price The monthly price of the plan.
 * @param {string[]} props.features A list of features included in the plan.
 * @returns {React.ReactElement} A card component that outlines the details of a pricing plan.
 */
const PricingPlanItem: React.FC<any> = ({ recommended, title, price, features  }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className={`card ${recommended ? 'border-warning' : ''} h-100`}>
        <div className={`card-header ${recommended ? 'text-white bg-warning' : ''}`}>
          {title}
        </div>
        <div className="card-body py-5">
          <h3 className="card-title">{price}/month</h3>
          <ul className="list-unstyled">
            {Boolean(features) && features.map((feature: string, index: number) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="card-footer text-center">
          <button className={`btn ${recommended ? 'btn-warning' : 'btn-outline-primary'}`}>
            Choose Plan
          </button>
        </div>
      </div>
    </div>);
};

export default PricingPlanItem;
