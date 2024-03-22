/**
 * @file Tests for the Hero Section component on the homepage.
 *
 * This file encompasses tests that validate the rendering of the Hero Section, focusing on:
 * - The presence of the main headline text, which communicates the core value proposition of the platform.
 * - The subheadline text, further elaborating on the platform's offerings.
 *
 * The Hero Section is a pivotal part of the homepage, designed to capture user interest
 * and convey the essence of the platform swiftly. Testing this section ensures that
 * critical information is correctly presented to the users upon their arrival.
 */

import { render, screen } from "@testing-library/react";
import HeroSection from "@/pages/components/home/hero";
// Mocking the next/link due to its reliance on the Next.js router
jest.mock(
  "next/link",
  () =>
    ({ children }: React.PropsWithChildren) =>
      children,
);

describe("Hero Section On Homepage", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  /**
   * Ensures the headline text of the HeroSection is rendered correctly,
   * verifying the component's ability to display key promotional content.
   */
  test("renders the component with a headline", () => {
    const headline = screen.getByRole("heading", {
      name: /unlock your potential with unlimited learning\./i,
    });
    expect(headline).toBeInTheDocument();
  });

  /**
   * Verifies the presence of the subheadline text in the HeroSection,
   * confirming the display of additional promotional content below the main headline.
   */
  test("renders the component with a subheadline", () => {
    const subheadline = screen.getByText(
      /dive into expert-led courses and accelerate your career today\./i,
    );
    expect(subheadline).toBeInTheDocument();
  });
});
