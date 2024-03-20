// components/home/faq/index.tsx

import React from 'react';
import FAQItem from './item';
import faqs, { Faq } from '@/lib/data/faqs';

/**
 * Represents the Frequently Asked Questions (FAQ) Section of the Learnly platform.
 * This section contains a list of common questions and answers to help users find information quickly.
 * It utilizes the `FAQItem` component to individually render each FAQ in an accordion format, allowing users
 * to click on a question to reveal its answer. This interaction model helps manage screen real estate
 * effectively by only showing answers to questions that users are interested in.
 *
 * @returns {React.ReactElement} The FAQ section comprising a series of collapsible accordion items.
 */
const FAQSection: React.FC = () => {
  return (
    <section className="container-fluid py-5">
              <div className='container'>

      <h2 className="text-center mb-5">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq: Faq, index: number) => (
          <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      </div>
      
    </section>
  );
};

export default FAQSection;
