/**
 * @file Tests for the Pricing Section and Pricing Plan Item components on the homepage.
 *
 * This test suite evaluates the functionality and rendering accuracy of the PricingSection
 * and individual PricingPlanItem components within the Learnly platform's homepage.
 * Specifically, it ensures that:
 *
 * - The PricingSection component renders successfully, displaying a headline that
 *   introduces the section and the correct number of PricingPlanItem components, each
 *   corresponding to a mock pricing plan.
 * - Each PricingPlanItem component accurately presents the details of its respective
 *   pricing plan, including the plan's title, monthly price, and a list of included features.
 *   Moreover, it verifies that the component visually distinguishes recommended plans from
 *   others through specific styling.
 
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import PricingSection from '@/pages/components/home/pricing';
import PricingPlanItem from '@/pages/components/home/pricing/item';
import * as pricingPlans from '@/lib/data/pricing';

// Setup: Mocking the pricingPlans data to control the input for these tests.
jest.mock('@/lib/data/pricing', () => ({
  __esModule: true,
  default: [
    { recommended: false, title: 'Basic', price: '9', features: ['Feature 1', 'Feature 2'] },
    { recommended: true, title: 'Pro', price: '29', features: ['Feature 3', 'Feature 4'] },
  ],
}));

/**
 * Describes a suite of tests for the PricingSection component, focusing on its ability to
 * render the overall structure and content based on mock pricing plans data.
 */
describe('Pricing Section On Homepage', () => {
  /**
   * Validates that the PricingSection component renders correctly, featuring a
   * headline that introduces the pricing plans, and ensures the presence of an
   * appropriate number of PricingPlanItem components reflective of the mock data.
   */
  it('renders the pricing section successfully', () => {
    render(<PricingSection />);
    expect(screen.getByText('Our Pricing')).toBeInTheDocument();
    
    const pricingItems = screen.getAllByText(/month/);
    expect(pricingItems).toHaveLength(pricingPlans.default.length);
  });
});

/**
 * Describes tests targeting individual PricingPlanItem components, aiming to verify
 * the correct presentation of plan details and the application of distinct styles for
 * recommended plans.
 */
describe('PricingPlanItem', () => {
  /**
   * Checks that a PricingPlanItem designated as recommended displays its details correctly
   * and is styled distinctly to highlight its status. This test ensures that critical plan
   * information is accessible to potential users and that recommended plans are visually
   * prioritized.
   */
  it('displays pricing plan details correctly for recommended plans', () => {
    const mockPlan = {
      recommended: true, 
      title: 'Pro', 
      price: '29', 
      features: ['Feature 3', 'Feature 4'],
    };

    render(<PricingPlanItem {...mockPlan} />);
    expect(screen.getByText('Pro')).toBeInTheDocument();
    expect(screen.getByText('29/month')).toBeInTheDocument();
    mockPlan.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
    expect(screen.getByRole('button')).toHaveClass('btn-warning');
  });

  /**
   * Verifies that PricingPlanItem components not marked as recommended are correctly
   * rendered with their details and receive standard, non-highlighting styling. This
   * ensures a consistent and intuitive presentation for users exploring different
   * pricing options.
   */
  it('applies correct styling for non-recommended plans', () => {
    const mockPlan = {
      recommended: false, 
      title: 'Basic', 
      price: '9', 
      features: ['Feature 1', 'Feature 2'],
    };

    render(<PricingPlanItem {...mockPlan} />);
    expect(screen.getByRole('button')).toHaveClass('btn-outline-primary');
  });
});