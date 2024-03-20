// components/home/features/index.tsx

import React from 'react';
import FeatureItem from './item';
import { featuresData } from '@/lib/data/features'; // Adjust the import path as necessary

/**
 * The `FeaturesSection` component renders a section on the page that showcases 
 * the main features of the platform. It dynamically generates `FeatureItem` components
 * based on the `featuresData` array, displaying an icon, title, and description for each feature.
 * 
 * This component is designed to provide users with quick insights into what the platform offers,
 * making it an essential part of the website's home page.
 *
 * @returns {React.ReactElement}
 */
const FeaturesSection: React.FC = () => {
  return (
    <section className="container-fluid py-5 bg-white"> {/* Bootstrap utilities for padding and background color */}
      <div className="container">
        <div className="row justify-content-center"> {/* Bootstrap utility for centering */}
          {featuresData.map((feature) => (
            <FeatureItem
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
