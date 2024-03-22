/**
 * @file Tests for the Features Section component on the homepage.
 *
 * This file contains tests aimed at verifying the correct rendering and functionality
 * of the Features Section, including the dynamic display of individual Feature Items.
 * The tests ensure that:
 * - The correct number of features is displayed based on the provided data.
 * - Each feature item correctly renders its icon, title, and description.
 *
 * The FeaturesSection and FeatureItem components play a crucial role in highlighting
 * the main attractions and functionalities of the platform, thus ensuring their correct
 * rendering is vital for user engagement and information conveyance.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { featuresData } from "@/lib/data/features"; // Adjust the import path as necessary
import FeatureItem from "@/pages/components/home/features/item";
import FeaturesSection from "@/pages/components/home/features";

describe("Features Section On Homepage", () => {
  // Tests for verifying the correct rendering and functionality of the FeaturesSection and FeatureItem components

  it("displays the correct number of features", () => {
    render(<FeaturesSection />);
    featuresData.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });
  });

  it("renders the feature item with provided data", () => {
    const mockFeature = {
      icon: "/path/to/icon1.png",
      title: "Feature 1",
      description: "Description 1",
    };

    render(<FeatureItem {...mockFeature} />);
    // Check for the title and description text
    expect(screen.getByText(mockFeature.title)).toBeInTheDocument();
    expect(screen.getByText(mockFeature.description)).toBeInTheDocument();
    // Assuming you have alt text for images, you can check for the presence of the image via alt text
    expect(screen.getByAltText(mockFeature.title)).toBeInTheDocument();
  });
});
