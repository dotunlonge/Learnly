// components/home/pricing/index.tsx

import React from 'react';
import pricingPlans from '@/lib/data/pricing'; // Adjust the import path as necessary
import PricingPlanItem from './item'; // Ensure the correct path

/**
 * The PricingSection component displays the various pricing plans available on Learnly.
 * This section is designed to give potential users a clear understanding of the different
 * subscription options, their benefits, and costs, helping them make informed decisions.
 * 
 * It dynamically generates a list of pricing plans, each represented by a `PricingPlanItem`
 * component. The data for these plans is sourced from an external file (`@/lib/data/pricing`),
 * allowing for easy updates and scalability of pricing options.
 *
 * Each `PricingPlanItem` receives its respective plan data as props, displaying detailed
 * information such as the plan's name, price, and a list of features or benefits included.
 * 
 * @returns {React.ReactElement} A section of the Learnly platform's homepage that outlines
 * the available pricing plans in a visually appealing and user-friendly format.
 */
const PricingSection: React.FC = () => {
  return (
    <section className="container-fluid py-5 bg-white">
      <h3 className='text-center px-1 py-1'>Our Pricing</h3>
      <div className="container align-center text-center row justify-content-center pt-5 mx-auto">
        {Boolean(pricingPlans) && pricingPlans.map((plan, index) => (
          <PricingPlanItem key={index} {...plan} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
