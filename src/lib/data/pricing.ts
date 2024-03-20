/**
 * Define the interface for a single pricing plan.
 * @interface
 * @property {string} title - The title of the pricing plan.
 * @property {string} price - The price of the pricing plan.
 * @property {string[]} features - An array of features included in the pricing plan.
 * @property {boolean} recommended - Indicates whether the pricing plan is recommended.
 */
export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  recommended: boolean;
}

/**
* Pricing plan data.
* @type {PricingPlan[]}
*/
const pricingPlans: PricingPlan[] = [
  {
      title: 'Basic',
      price: '$9.99',
      features: ['Access to 10 courses', '1-month access', 'Email support'],
      recommended: false,
  },
  {
      title: 'Premium',
      price: '$29.99',
      features: ['Access to all courses', 'Lifetime access', 'Priority email support', 'Downloadable resources'],
      recommended: true,
  },
  {
      title: 'Team',
      price: '$49.99',
      features: ['5 accounts', 'Access to all courses', 'Lifetime access', 'Priority email support'],
      recommended: false,
  },
];

export default pricingPlans;
