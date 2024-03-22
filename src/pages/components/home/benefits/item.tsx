// components/home/benefits/item.tsx
import { Benefit } from "@/lib/data/benefits";
import Image from "next/image";
import React from "react";

/**
 * Displays a single benefit item within the BenefitsSection.
 * Each benefit consists of an icon, a title, and a description,
 * laid out in a visually appealing manner using Bootstrap's card
 * styling and centered alignment.
 *
 * @param {Benefit} props - The properties passed to the benefit item component.
 * @param {string} props.iconUrl - The URL to the icon image representing the benefit.
 * @param {string} props.title - The title of the benefit.
 * @param {string} props.description - A short description of the benefit.
 * @returns {React.ReactElement} The BenefitItem component.
 */
const BenefitItem: React.FC<Benefit> = ({ iconUrl, title, description }) => {
  return (
    // Utilizing Bootstrap grid column for responsive layout.
    <div className="col">
      <div className="h-100 text-center py-4">
        {/* Next.js Image for optimized image loading. */}
        <Image
          src={iconUrl}
          alt={title}
          width={80}
          height={80}
          className=" mx-auto d-block"
        />
        {/* Card content for title and description. */}
        <div className="card-body">
          <br />
          <h5 className="card-title">{title}</h5>
          <br />
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitItem;
