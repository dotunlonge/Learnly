// components/home/hero.tsx
import React from 'react';
import Link from 'next/link';

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
  return (
    // Adjusted container-fluid class for full width and my-3 for margin
    <section className="p-3 bg-white text-white container-fluid d-flex justify-content-center align-items-center" id='heroSection'>
      <div className="text-center container">
        {/* Updated headline and subheadline */}
        <h1 className="mb-3 display-4 fw-bold">Unlock Your Potential with Unlimited Learning.</h1>
        <h4 className="mb-4">Dive into expert-led courses and accelerate your career today.</h4>
        {/* Updated CTA buttons */}
        <div className="d-flex justify-content-center">
          <Link href="/browse-courses" className="btn btn-outline-light btn-lg me-2">Browse Courses
          </Link>
          <Link href="/join-now" className="btn btn-warning btn-lg">Join Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
