/**
 * @file Unit tests for the Course Highlights Section component and its items on the Learnly platform's homepage.
 * 
 * This suite focuses on verifying the structural integrity and content rendering of the Course Highlights Section, 
 * including individual Course Highlight Items. It ensures that the section renders with its title correctly 
 * and that the correct number of course highlight items, based on the provided data, are displayed.
 * Additionally, it tests the rendering of individual course highlight items for correctness in displaying
 * course information (title, description, and image).
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseHighlightItem from '@/pages/components/home/courseHighlights/item';
import courseHighlights from '@/lib/data/courseHighlights'; // Ensure the correct import path
import CourseHighlightsSection from '@/pages/components/home/courseHighlights';

/**
 * Grouping tests related to the CourseHighlightsSection component.
 */
describe('Course Highlights Section On Homepage', () => {
  /**
   * Test to verify if the CourseHighlightsSection component properly renders its title.
   * This is a basic rendering test aimed at checking the presence of the section's title in the document.
   */
  it('renders correctly with a title', () => {
    render(<CourseHighlightsSection />);
    expect(screen.getByText('Our Courses')).toBeInTheDocument();
  });

  /**
   * Test to check if the correct number of CourseHighlightItem components are displayed.
   * It iterates through the courseHighlights data to ensure each course's title is rendered,
   * indirectly verifying the dynamic rendering capability of the CourseHighlightsSection.
   */
  it('displays the correct number of course highlight items', () => {
    render(<CourseHighlightsSection />);
    courseHighlights.forEach((course) => {
      expect(screen.getByText(course.title)).toBeInTheDocument();
    });
  });

  // Defining mock course data to test the rendering of a single CourseHighlightItem component.
  const mockCourse = {
    image: '/path/to/image.jpg',
    title: 'Mock Course',
    description: 'Mock Description',
    url: '#'
  };

  /**
   * Test to ensure that a CourseHighlightItem component correctly renders course information.
   * This test validates the presence of the course's title, description, and image in the document,
   * verifying that the CourseHighlightItem component displays its props as expected.
   * 
   * Additionally, this test checks the Next.js Image component for proper attribute rendering,
   * ensuring that the image for the course is displayed with the correct source and alternative text.
   */
  it('renders the course information correctly', () => {
    render(<CourseHighlightItem {...mockCourse} />);
    expect(screen.getByText(mockCourse.title)).toBeInTheDocument();
    expect(screen.getByText(mockCourse.description)).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', expect.stringContaining('/_next/image'));
    expect(img).toHaveAttribute('alt', mockCourse.title);
  });
});
