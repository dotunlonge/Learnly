/**
 * @file Unit tests for the FAQ Section component and its items on the Learnly platform's homepage.
 *
 * This suite focuses on verifying the structural integrity and content rendering of the FAQ Section,
 * including individual FAQ Items. It ensures that the section renders correctly.
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import FAQSection from "@/pages/components/home/faq";
import faqs from "@/lib/data/faqs"; // Ensure the correct import path is used
import FAQItem from "@/pages/components/home/faq/item";

/**
 * Describes the test suite for the FAQSection component on the homepage.
 *
 * This suite aims to ensure that the FAQSection component renders its title correctly
 * and dynamically generates the appropriate number of FAQItem components based on
 * the data provided in faqs. Additionally, it verifies the content and visibility
 * of each FAQ item.
 */
describe("FAQ Section On Homepage", () => {
  /**
   * Before each test, the FAQSection component is rendered to ensure a fresh state.
   * This setup step is crucial for testing the component in isolation.
   */
  beforeEach(() => {
    render(<FAQSection />);
  });

  /**
   * Tests if the FAQSection renders its title "Frequently Asked Questions".
   *
   * This test checks for the presence of the section's title within the rendered component,
   * confirming that the FAQ section is correctly identified by its title.
   */
  it("renders the FAQ section title", () => {
    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
  });

  /**
   * Verifies the correct number of FAQ items are rendered.
   *
   * By iterating through the faqs data array, this test ensures each question is displayed,
   * matching the count of FAQ items to the length of the provided faqs data. The presence
   * of each question in the document validates the dynamic rendering of FAQ items.
   */
  it("renders the correct number of FAQ items", () => {
    faqs.forEach((faq) => {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    });
    expect(screen.getAllByRole("button").length).toBe(faqs.length);
  });

  // Defining sample FAQ data to test individual FAQItem components.
  const sampleFaq = {
    index: 0,
    question: "Sample Question?",
    answer: "Sample answer to the question.",
  };

  /**
   * Confirms that the FAQItem component displays its question correctly.
   *
   * This test ensures the FAQItem component renders the provided question,
   * signifying that individual FAQ items correctly display their questions.
   */
  it("displays the question", () => {
    render(<FAQItem {...sampleFaq} />);
    expect(screen.getByText(sampleFaq.question)).toBeInTheDocument();
  });

  /**
   * Ensures the FAQItem component includes its answer in the document.
   *
   * While the FAQ section may initially hide answers from view, this test verifies
   * that the answer text is present in the document, ensuring the content is available
   * for display upon user interaction.
   */
  it("includes the answer in the document", () => {
    render(<FAQItem {...sampleFaq} />);
    expect(screen.getByText(sampleFaq.answer)).toBeInTheDocument();
  });

  // Additional tests for interactive behaviors like expanding/collapsing answers can be added below.
});
