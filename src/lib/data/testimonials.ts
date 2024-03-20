/**
 * Interface representing a single testimonial.
 * @interface
 * @property {string} quote - The quote or feedback provided by the testimonial.
 * @property {string} author - The name of the author of the testimonial.
 */
export interface Testimonial {
  quote: string;
  author: string;
}

/**
 * Testimonial data.
 * @constant
 * @type {Testimonial[]}
 */
const testimonialsData: Testimonial[] = [
  {
      quote: "Learnly has been my go-to platform for upgrading my skills. From programming to project management, their courses are top-notch and have helped me advance in my career.",
      author: "Sarah Richards",
  },
  {
      quote: "As a freelancer, staying competitive in the market is crucial. Learnly has been instrumental in keeping me updated with the latest tools and techniques. Highly recommend it to fellow freelancers.",
      author: "Michael Wong",
  },
  {
      quote: "Learnly isn't just about learning; it's about growth. Their courses aren't just informative; they're transformative. Thanks to Learnly, I've expanded my skill set and landed my dream job.",
      author: "Emily Carter",
  },
  {
      quote: "I've tried several online learning platforms, but Learnly stands out for its engaging content and knowledgeable instructors. Whether you're a beginner or an expert, there's always something valuable to learn.",
      author: "David Patel",
  },
  {
      quote: "Learnly has made learning enjoyable and accessible. Their diverse course offerings cater to different learning styles, making it easy for anyone to pick up new skills at their own pace.",
      author: "Rachel Thompson",
  },
  {
      quote: "I'm constantly amazed by the depth and breadth of courses available on Learnly. From industry-specific topics to soft skills development, Learnly has everything I need to stay ahead in my career.",
      author: "Daniel Miller",
  },
  {
      quote: "Learnly's user-friendly interface and interactive learning modules make it a breeze to navigate through complex topics. Thanks to Learnly, I've been able to master subjects I never thought I could.",
      author: "Jessica Lee",
  },
  {
      quote: "With Learnly, learning doesn't feel like a chore; it feels like an adventure. Their gamified approach to learning keeps me motivated and engaged, ensuring that I retain knowledge effectively.",
      author: "Ryan Thompson",
  },
  {
      quote: "As a busy professional, finding time for learning can be challenging. Learnly's bite-sized lessons and mobile-friendly platform allow me to squeeze in learning sessions whenever and wherever I can.",
      author: "Sophia Nguyen",
  },
  {
      quote: "Learnly isn't just a platform; it's a community. The forums and discussion boards provide invaluable opportunities for networking and collaboration, enriching the learning experience even further.",
      author: "Adam Wilson",
  },
];

export default testimonialsData;