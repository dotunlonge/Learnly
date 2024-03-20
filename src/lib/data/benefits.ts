/**
 * Define the interface for a single benefit.
 * @interface
 * @property {string} iconUrl - The URL of the icon representing the benefit.
 * @property {string} title - The title of the benefit.
 * @property {string} description - The description of the benefit.
 */
export interface Benefit {
  iconUrl: string;
  title: string;
  description: string;
}

/**
* Example benefit data.
* @type {Benefit[]}
*/
const benefitsData: Benefit[] = [
  {
      iconUrl: "https://img.icons8.com/ios/200/path.png",
      title: "Personalized Learning Paths",
      description: "Discover an educational journey tailored just for you. Our platform adapts to your learning pace, style, and goals, ensuring a truly personalized learning experience.",
  },
  {
      iconUrl: "https://img.icons8.com/ios/200/project.png",
      title: "Real-World Project Experience",
      description: "Gain hands-on experience with projects that simulate real-world challenges. Apply what you've learned in practical scenarios to solve actual problems, preparing you for the professional world.",
  },
  {
      iconUrl: "https://img.icons8.com/ios/200/technical-support.png",
      title: "Community Support",
      description: "Join a vibrant community of learners and experts ready to support your learning journey. Engage in discussions, share insights, and find mentorship to enhance your learning experience.",
  },
];

export default benefitsData;
