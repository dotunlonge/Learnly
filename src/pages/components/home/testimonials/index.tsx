// components/home/testimonials/index.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsData, { Testimonial } from "@/lib/data/testimonials"; // Adjust path as necessary
import TestimonialItem from "./item"; // Adjust path as necessary

/**
 * The TestimonialsSection component showcases user testimonials using a carousel slider.
 * This component utilizes the `react-slick` library to present a smooth, auto-playing,
 * responsive carousel of testimonials from Learnly users. Each testimonial is represented
 * as a `TestimonialItem` component, which displays the quote and author information.
 *
 * The carousel's behavior, including its responsiveness and autoplay features, is
 * configured via the `settings` object. This ensures the testimonials are accessible
 * and engaging across different device sizes. The component enhances the credibility
 * and social proof of the Learnly platform by highlighting positive experiences from
 * its community.
 *
 * Testimonials data is loaded from an external source defined in `@/lib/data/testimonials`,
 * demonstrating a modular approach to content management.
 *
 * @component
 * @example
 * <TestimonialsSection />
 *
 * @returns {React.ReactElement} A section containing a carousel slider of testimonials.
 */
const TestimonialsSection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container-fluid text-center py-5 px-2 bg-warning">
      {" "}
      {/* Bootstrap classes for full-width container, text alignment, and padding */}
      <div className="container py-5">
        <Slider {...settings}>
          {testimonialsData.map((testimonial: Testimonial, index: number) => (
            <TestimonialItem
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsSection;
