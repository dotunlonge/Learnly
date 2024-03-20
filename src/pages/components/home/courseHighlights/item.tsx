// components/home/courseHighlights/item.tsx
import { CourseHighlight } from '@/lib/data/courseHighlights';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

/**
 * Displays a single course highlight within the CourseHighlightsSection.
 * This component is responsible for rendering the visual representation
 * of a course, including its image, title, and a brief description.
 * It uses the Next.js Image component for optimized image loading and 
 * is styled as a card for a consistent and appealing presentation.
 *
 * @param {CourseHighlight} props The props passed to the CourseHighlightItem component.
 * @param {string} props.image The URL of the course's thumbnail image.
 * @param {string} props.title The title of the course.
 * @param {string} props.description A short description of the course.
 * @param {string} props.url A url to the course.
 * @returns {React.ReactElement} A React component representing a single course highlight.
 *
 * @example
 * <CourseHighlightItem
 *   image="/path/to/course/image.jpg"
 *   title="Introduction to Web Development"
 *   description="Learn the basics of web development, from HTML to advanced JavaScript."
 * />
 */
const CourseHighlightItem: React.FC<CourseHighlight> = ({ image, title, description, url }) => {
  return (
    <Link href={url ? url : '#'} className="col course">
      <div className="card h-100">
        <Image src={image} width={200} height={200}  alt={title} className='course-image'  />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseHighlightItem;
