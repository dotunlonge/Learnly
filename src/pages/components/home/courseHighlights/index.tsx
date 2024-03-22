// components/home/courseHighlights/index.tsx
import React from "react";
import CourseHighlightItem from "./item";
import courseHighlights, { CourseHighlight } from "@/lib/data/courseHighlights";

/**
 * The CourseHighlightsSection component showcases a selection of standout courses available on Learnly.
 * It provides potential learners with a quick glance at some of the high-quality courses that can help
 * them achieve their learning goals. Each course is represented by a CourseHighlightItem, which displays
 * a course image, title, and a brief description.
 *
 * This section is designed to be visually appealing and informative, arranged in a responsive grid that
 * adjusts to screen size. On larger screens, courses are displayed in three columns, while on smaller screens,
 * they stack vertically for better readability.
 *
 * Data for the course highlights is sourced from an external file (`@/lib/data/courseHighlights`), making
 * it easy to update or extend the list of courses featured in this section without direct modifications to
 * the component's code.
 *
 * @returns {React.ReactElement} A section component that displays highlighted courses in a responsive grid.
 */
const CourseHighlightsSection: React.FC = () => {
  return (
    <section className="py-5 bg-light container-fluid">
      <div className="container">
        <h2 className="text-center mb-4">Our Courses</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
          {Boolean(courseHighlights) &&
            courseHighlights.map((course: CourseHighlight, index: number) => (
              <CourseHighlightItem
                url={course.url}
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CourseHighlightsSection;
