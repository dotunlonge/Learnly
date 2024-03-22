import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialsSection from "@/pages/components/home/testimonials/index";
import testimonialsData from "@/lib/data/testimonials";

// Optionally mock the `react-slick` Slider if you want to control its behavior or render output
jest.mock("react-slick", () => {
  const MockComponent = ({ children }: React.PropsWithChildren) => (
    <div>{children}</div>
  );
  MockComponent.displayName = "SlickMock";
  return MockComponent;
});

describe("Testimonials Section On Homepage", () => {
  beforeEach(() => {
    render(<TestimonialsSection />);
  });

  it("displays the correct number of testimonials", () => {
    testimonialsData.forEach((testimonial) => {
      expect(screen.getByText(`“${testimonial.quote}“`)).toBeInTheDocument();
      expect(screen.getByText(`- ${testimonial.author}`)).toBeInTheDocument();
    });
  });

  // Optional: If you wish to test the settings passed to Slider, you'll need a more sophisticated mock
  // that can inspect props. This would involve creating a jest.fn() mock for `react-slick` and examining
  // the props it receives when your component renders it.
});
