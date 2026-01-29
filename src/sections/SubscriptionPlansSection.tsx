/**
 * Subscription Plans Section
 * 
 * Displays four subscription plans arranged side-by-side.
 * Features:
 * - Uniform layout
 * - Card flip animation to reveal product range and vegetable categories
 * - Subscribe button on each plan
 */

import SubscriptionPlanCard from "@/components/subscription/SubscriptionPlanCard";

const SubscriptionPlansSection = () => {
  const plans = [
    {
      id: 1,
      name: "Plan 1",
      price: "$0",
      benefits: "High-level benefit summary",
      products: ["Product 1", "Product 2"],
      vegetables: ["Vegetable 1", "Vegetable 2"]
    },
    {
      id: 2,
      name: "Plan 2",
      price: "$0",
      benefits: "High-level benefit summary",
      products: ["Product 1", "Product 2"],
      vegetables: ["Vegetable 1", "Vegetable 2"]
    },
    {
      id: 3,
      name: "Plan 3",
      price: "$0",
      benefits: "High-level benefit summary",
      products: ["Product 1", "Product 2"],
      vegetables: ["Vegetable 1", "Vegetable 2"]
    },
    {
      id: 4,
      name: "Plan 4",
      price: "$0",
      benefits: "High-level benefit summary",
      products: ["Product 1", "Product 2"],
      vegetables: ["Vegetable 1", "Vegetable 2"]
    }
  ];

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Introductory text about subscription plans */}
          </p>
        </div>

        {/* Subscription Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <SubscriptionPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlansSection;
