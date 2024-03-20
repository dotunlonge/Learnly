/**
 * @file Unit tests for the BenefitsSection component.
 * 
 * This test suite aims to verify the correct rendering and functionality
 * of the BenefitsSection component within the Learnly platform's home page.
 * Specifically, it checks for the presence of the section's title and the 
 * accurate display of benefits data as individual BenefitItem components.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import benefitsData, { Benefit } from '@/lib/data/benefits'; // Adjust the import path as necessary
import BenefitsSection from '@/pages/components/home/benefits';

describe('BenefitsSection', () => {
  /**
   * Renders the BenefitsSection component before each test.
   * 
   * This setup step ensures that each test starts with a freshly rendered
   * instance of the BenefitsSection, providing a clean slate for testing
   * the component's rendering and behavior.
   */
  beforeEach(() => {
    render(<BenefitsSection />);
  });

  /**
   * Verifies that the section title "Our Benefits" is rendered within the BenefitsSection.
   * 
   * This test confirms that the BenefitsSection includes its title, indicating
   * the component has rendered correctly and the title is present in the DOM.
   */
  it('renders the section title', () => {
    expect(screen.getByText('Our Benefits')).toBeInTheDocument();
  });

  /**
   * Checks that the correct number of benefit items are displayed.
   * 
   * This test iterates through the benefitsData array, ensuring each benefit's
   * title and description are correctly rendered within the BenefitsSection.
   * It validates the component's ability to dynamically generate BenefitItem
   * components based on the data provided, accurately reflecting each benefit's
   * information.
   */
  it('displays the correct number of benefit items', () => {
    benefitsData.forEach((benefit: Benefit) => {
      expect(screen.getByText(benefit.title)).toBeInTheDocument();
      expect(screen.getByText(benefit.description)).toBeInTheDocument();
    });
  });
});
