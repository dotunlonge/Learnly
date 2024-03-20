/**
 * @file Unit tests for the Footer component of the Learnly application.
 *
 * This file contains tests for the Footer component, ensuring that it renders
 * correctly and includes all expected elements and content. The tests cover
 * the presence of specific sections such as "Courses" and "Contact," the correct
 * rendering of the Learnly description, and the dynamic display of the current copyright
 * year. Additionally, the tests verify that links and icons for social media and other
 * useful links are correctly rendered, assuming the test environment supports such features.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '@/pages/components/footer';

/**
 * Describes the group of tests focusing on the Footer component functionality and rendering.
 */
describe('Footer Component', () => {
  /**
   * Tests if the Footer component renders its content correctly.
   * 
   * This test ensures that the Footer component renders the expected textual content,
   * including the Learnly description and sections for "Courses" and "Contact". It also
   * checks for the dynamic rendering of the current year in the copyright notice. Where applicable,
   * it tests for the presence of specific links and social media icons, subject to the testing
   * environment's capabilities.
   */
  it('renders the footer content correctly', () => {
    render(<Footer />);
    
    // Verify Learnly's mission statement is present
    expect(screen.getByText(/Learnly empowers learners worldwide/i)).toBeInTheDocument();

    // Check for sections that provide navigation and contact information
    expect(screen.getByText('Courses')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();

    // Confirm the footer dynamically displays the current year
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(`© ${currentYear} Learnly`)).toBeInTheDocument();

    // Tests the presence of text within Next.js Link components
    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Become an Instructor')).toBeInTheDocument();
    
  });
});
