/**
 * Home component serves as the landing page for the Learnly platform.
 * It aggregates various sections that highlight the platform's features,
 * including a hero section, features overview, testimonials from users,
 * pricing plans, benefits of using Learnly, course highlights, and a FAQ section.
 *
 * This component utilizes `next/dynamic` for dynamically importing the Navbar
 * component without server-side rendering (SSR) to improve page load performance.
 * The `Inter` font from `next/font/google` is used to enhance text readability and aesthetics.
 *
 * Each section component is designed to convey specific information about
 * Learnly's offerings and advantages, creating a comprehensive and engaging
 * user experience for visitors interested in online learning opportunities.
 *
 * @returns {React.ReactElement} The main landing page of the Learnly platform,
 * showcasing its key features, courses, and user testimonials to encourage new learners to join.
 */
import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import FeaturesSection from "./components/home/features";
import HeroSection from "./components/home/hero";
import TestimonialsSection from "./components/home/testimonials";
import PricingSection from "./components/home/pricing";
import BenefitsSection from "./components/home/benefits";
import CourseHighlightsSection from "./components/home/courseHighlights";
import FAQSection from "./components/home/faq";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learnly - Unlimited Online Learning</title>
        <meta
          name="description"
          content="Learnly offers unlimited access to a wide range of online courses across various subjects. Join today and start learning at your own pace!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`d-flex flex-column justify-content-between align-items-center p-0 m-0 min-vh-100 w-100`}
      >
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BenefitsSection />
        <CourseHighlightsSection />
        <FAQSection />
        <PricingSection />
        <Footer />
      </main>
    </>
  );
}
