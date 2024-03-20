// components/home/benefits/index.tsx

import benefitsData, { Benefit } from '@/lib/data/benefits';
import React from 'react';
import BenefitItem from './item';

/**
 * Represents the Benefits Section on the Learnly platform.
 * This section dynamically displays a list of benefits Learnly offers to its users, 
 * including unique selling points like personalized learning paths, expert-led courses, 
 * and community support. Each benefit is represented by a `BenefitItem` component.
 *
 * The benefits data is sourced from an external `benefitsData` array, which contains 
 * objects adhering to the `Benefit` interface. This modular approach allows for easy 
 * maintenance and updates to the benefits section without direct modifications to the 
 * component's internal logic.
 *
 * @returns {React.ReactElement} A section component that displays benefits in a responsive grid.
*/
const BenefitsSection: React.FC = () => {
  return (
    <section className="container-fluid py-5">
      <div className='container'>
        <h2 className="text-center mb-5">Our Benefits</h2>
        <div className="px-3 row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          {benefitsData.map((benefit: Benefit, index: number) => (
            <BenefitItem key={index} iconUrl={benefit.iconUrl} title={benefit.title} description={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
