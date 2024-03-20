/**
 * Define the interface for a single course highlight.
 * @interface
 * @property {string} image - The URL of the image representing the course.
 * @property {string} title - The title of the course.
 * @property {string} description - The description of the course.
 * @property {string} url - The url of the course.
 */
export interface CourseHighlight {
  image: string;
  title: string;
  description: string;
  url: string;
}

/**
 * Course highlights data.
 * @type {CourseHighlight[]}
 */
const courseHighlights: CourseHighlight[] = [
  {
    image: '/courses/python.jpg',
    url: '#',
    title: 'Introduction to Python',
    description: 'Dive into Python with this beginner-friendly course that covers the basics and beyond.',
  },
  {
    image: '/courses/frontend.jpg',
    url: '#',
    title: 'Front-End Web Development',
    description: 'Learn how to build beautiful and functional websites using HTML, CSS, and JavaScript.',
  },
  {
    image: '/courses/data-science.jpg',
    url: '#',
    title: 'Data Science Essentials',
    description: 'Explore the world of data science and learn how to analyze data with Python.',
  },
  {
    image: '/courses/ui-design.jpg',
    url: '#',
    title: 'UI/UX Design Fundamentals',
    description: 'Understand the principles of user interface and user experience design to create engaging products.',
  },
  {
    image: '/courses/digital-marketing.jpg',
    url: '#',
    title: 'Digital Marketing Strategies',
    description: 'Master the art of digital marketing and learn to craft strategies that yield results.',
  },
  {
    image: '/courses/blockchain.jpg',
    url: '#',
    title: 'Blockchain Basics',
    description: 'Get acquainted with the fundamentals of blockchain technology and its real-world applications.',
  },
];

export default courseHighlights;
