// components/home/testimonials/item.tsx
import React from "react";
import { Testimonial } from "@/lib/data/testimonials";

/**
 * Renders an individual testimonial.
 *
 * @param {Testimonial} props - Properties containing the quote and author of the testimonial.
 * @returns {React.ReactElement} A single testimonial component.
 */

const TestimonialItem: React.FC<Testimonial> = ({ quote, author }) => {
  return (
    <div className="text-center text-white py-4">
      {" "}
      {/* Bootstrap classes for text alignment and padding */}
      <h3 className="mb-3 text-black">&ldquo;{quote}&ldquo;</h3>{" "}
      {/* Margin bottom class */}
      <cite className="d-block">- {author}</cite>{" "}
      {/* Display block for proper citation formatting */}
    </div>
  );
};

export default TestimonialItem;
