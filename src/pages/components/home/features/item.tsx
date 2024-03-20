// components/home/features/item.tsx

import React from 'react';
import Image from 'next/image'; // Import the Image component
import { Feature } from '@/lib/data/features';

/**
 * Represents a single feature item in the features section.
 * Utilizes Bootstrap 5 classes for layout and alignment.
 * 
 * @param {Feature} props - The properties of the feature item.
 * @returns {React.ReactElement} A component representing a feature item.
 */
const FeatureItem: React.FC<Feature> = ({ icon, title, description }) => {
  return (
    <div className="col-md-4 d-flex flex-column align-items-center text-center mb-4 mt-4"> {/* Bootstrap 5 utilities for flexbox and center alignment */}
    <div className="mb-3 mt-3"> {/* Bootstrap utility for margin below the image */}
      <Image 
          src={icon} 
          alt={title} 
          width={80} 
          height={80}
      />
    </div>
    <h5 className="text-dark mb-2">{title}</h5> {/* Bootstrap utility for text color and margin */}
    <p>{description}</p>
    </div>
  );
};

export default FeatureItem;


