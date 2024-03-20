/**
 * Define the interface for a single feature.
 * @interface
 * @property {string} icon - The URL of the icon representing the feature.
 * @property {string} title - The title of the feature.
 * @property {string} description - The description of the feature.
 */
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

/**
 * Features data.
 * @type {Feature[]}
 */
export const featuresData: Feature[] = [
    {
      icon: 'https://img.icons8.com/ios-filled/200/floating-guru.png',
      title: 'Expert-Led Courses',
      description: 'Learn from industry experts and leaders.',
    },
    {
      icon: 'https://img.icons8.com/ios/200/e-learning.png',
      title: 'Flexible Learning',
      description: 'Learn at your own pace, on your own schedule.',
    },
    {
      icon: 'https://img.icons8.com/ios/200/certificate--v1.png',
      title: 'Certificate of Completion',
      description: 'Earn certificates to showcase your learning achievements.',
    },
];
