import React, { useState, useEffect } from "react";
import Link from "next/link";

/**
 * HeroSection component displays the main hero banner for the Learnly platform.
 * It prominently features a motivational headline and subheadline to encapsulate
 * the essence of Learnly's mission. Additionally, it provides call-to-action (CTA)
 * buttons to encourage users to explore courses or join the platform.
 *
 * The component utilizes Bootstrap classes for styling and layout, ensuring
 * responsiveness and alignment.
 *
 * @component
 * @example
 * return <HeroSection />;
 */
const HeroSection: React.FC = () => {
  // State to hold window width
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Effect hook to set the window width on component mount and when resizing
  useEffect(() => {
    // Function to update the state with current window width
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set window width on component mount
    updateWindowWidth();

    // Add event listener for window resize
    window.addEventListener("resize", updateWindowWidth);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <section
      className="p-3 bg-white text-white container-fluid d-flex justify-content-center align-items-center"
      id="heroSection"
    >
      <div className="text-center container">
        <h1 className="mb-3 display-4 fw-bold">
          Unlock Your Potential with Unlimited Learning.
        </h1>
        <h4 className="mb-4">
          Dive into expert-led courses and accelerate your career today.
        </h4>
        <div className="d-flex justify-content-center">
          {/* Adjusted button sizes based on windowWidth state */}
          <Link
            href="/browse-courses"
            className={`btn btn-outline-light ${windowWidth > 1024 ? "btn-lg" : "btn-md"} me-2`}
          >
            Browse Courses
          </Link>
          <Link
            href="/join-now"
            className={`btn btn-warning ${windowWidth > 1024 ? "btn-lg" : "btn-md"}`}
          >
            Join Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
