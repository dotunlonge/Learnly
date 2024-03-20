/**
 * Defines the structure for frequently asked questions (FAQs) on the Learnly platform.
 * Each FAQ is represented as an object containing a question and its corresponding answer.
 *
 * @interface
 * @property {string} question - The question asked by users or potential learners.
 * @property {string} answer - The provided answer or information responding to the question.
 */
export interface Faq {
  question: string;
  answer: string;
}

/**
* An array of FAQ objects, each containing a commonly asked question along with its answer.
* This data set represents a collection of inquiries about the Learnly platform, addressing
* topics such as course accessibility, support options, certification, and user engagement.
* It's designed to assist users by providing immediate answers to common questions, enhancing
* the user experience by facilitating self-service support and information discovery.
*
* @type {Faq[]} - An array of objects conforming to the Faq interface.
*/
const faqs: Faq[] = [
  {
    question: 'Can I access Learnly courses on mobile devices?',
    answer: 'Absolutely! Learnly is fully optimized for mobile devices, enabling you to learn on-the-go, anytime, anywhere.'
  },
  {
    question: 'What type of support does Learnly offer?',
    answer: 'Learnly offers comprehensive support through email, live chat, and community forums, connecting you with both instructors and fellow learners for assistance.'
  },
  {
    question: 'Do Learnly courses offer certificates?',
    answer: 'Yes, upon completion of a course, Learnly provides certificates that you can share on your resume or LinkedIn profile to showcase your new skills.'
  },
  {
    question: 'Are there any prerequisites for joining Learnly?',
    answer: 'Most Learnly courses do not require prerequisites. However, some advanced courses might need a foundational understanding of the subject.'
  },
  // Additional provided questions and answers
  {
    question: 'How often are new courses added to Learnly?',
    answer: 'New courses are added every month across various categories, ensuring our learners always have access to the latest knowledge and skills.'
  },
  {
    question: `Can I request a refund if I'm not satisfied with a course?`,
    answer: 'Learnly offers a 30-day money-back guarantee on all courses, giving you peace of mind and a risk-free learning experience.'
  },
  {
    question: 'Is there a community or network I can join as a Learnly student?',
    answer: 'Yes, all Learnly learners gain access to our exclusive online community where you can network, collaborate on projects, and exchange ideas.'
  },
  {
    question: `Do Learnly courses have interactive content?`,
    answer: `Indeed, our courses include quizzes, hands-on projects, and interactive exercises to enhance your learning experience and ensure you can apply what you've learned.`
  },
 
  {
    question: 'Are Learnly instructors industry professionals?',
    answer: 'Absolutely. Learnly instructors are seasoned professionals and experts in their respective fields, bringing real-world experience into the classroom.'
  },
  {
    question: 'How do I track my course progress?',
    answer: 'Learnly’s platform features a comprehensive dashboard that tracks your course progress, quiz scores, and completed projects, all in one place.'
  },
  {
    question: 'Can I interact with my instructors?',
    answer: 'Certainly! Learnly encourages interaction with instructors through course forums, live Q&A sessions, and direct messaging.'
  },
  {
    question: 'What makes Learnly different from other online learning platforms?',
    answer: 'Learnly sets itself apart with personalized learning paths, real-world project experience, and direct access to industry experts, all geared towards your career growth.'
  },
  {
    question: 'Can I preview courses before enrolling?',
    answer: 'Learnly provides free previews for all courses, allowing you to explore course content and teaching style before making a commitment.'
  },
  {
    question: 'Does Learnly have a partner program?',
    answer: 'Yes, our Learnly Partner Program is designed for content creators, educators, and influencers looking to expand their reach and earn through course creation.'
  },
  {
    question: 'How can I become an instructor on Learnly?',
    answer: 'If you’re passionate about teaching and have expertise to share, we invite you to join us as an instructor. Visit our “Teach on Learnly” page to get started.'
  }
];

export default faqs;