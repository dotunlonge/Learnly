// components/home/faq/item.tsx
import React from "react";

/**
 * Defines the structure for frequently asked questions (FAQs) on the Learnly platform.
 * Each FAQ is represented as an object containing a question and its corresponding answer.
 *
 * @interface
 * @property {string} question - The question asked by users or potential learners.
 * @property {string} answer - The provided answer or information responding to the question.
 * @property {number} index - The index/id of the FAQ Object.
 */
interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

/**
 * FAQItem component represents a single Frequently Asked Question (FAQ) within an accordion structure.
 * It is designed to show a question as an interactive element that users can click to reveal or hide the answer.
 * This component is a part of the FAQSection and contributes to an effective user experience by organizing
 * information in a compact and accessible manner. Each FAQItem is dynamically generated based on data provided
 * through props, allowing for easy updates and scalability.
 *
 * The component utilizes Bootstrap's accordion component for the interactive collapse functionality, ensuring
 * a consistent look and feel with the rest of the Learnly platform.
 *
 * @param {FAQItem} props The properties passed to the FAQ item component.
 * @param {string} props.question The text of the question to be displayed.
 * @param {string} props.answer The text of the answer to the question.
 * @param {number} props.index The index of the FAQ item, used to generate unique IDs for accessibility and control.
 * @returns {React.ReactElement} A collapsible FAQ item with a question as the toggle element and an answer as the content.
 */
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${index}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${index}`}
          aria-expanded="false"
          aria-controls={`collapse${index}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse${index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${index}`}
        data-bs-parent="#faqAccordion"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
