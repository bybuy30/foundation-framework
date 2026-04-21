import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Plan {
  id: number;
  name: string;
  price: string;
  benefits: string;
  products: string[];
  vegetables: string[];
}

interface SubscriptionPlanCardProps {
  plan: Plan;
}

const SubscriptionPlanCard = ({ plan }: SubscriptionPlanCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="h-full cursor-pointer perspective"
      onClick={handleFlip}
      style={{
        perspective: "1000px"
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        <div
          className="border rounded-lg p-6 bg-background hover:shadow-lg transition-shadow flex flex-col h-full"
          style={{
            backfaceVisibility: "hidden"
          }}
        >
          <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
          
          <div className="mb-6">
            <p className="text-3xl font-bold mb-2">
              {plan.price}
              <span className="text-lg text-muted-foreground ml-1">/week</span>
            </p>
          </div>

          <p className="text-muted-foreground mb-6 flex-grow">
            {plan.benefits}
          </p>

          <p className="text-xs text-muted-foreground mb-4 text-center">
            Click to see products
          </p>

          <Button className="w-full">Subscribe</Button>
        </div>

        <div
          className="border rounded-lg p-6 bg-background hover:shadow-lg transition-shadow flex flex-col h-full absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>

          <div className="mb-6">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">
              Products Included
            </h4>
            <div className="flex flex-wrap gap-2">
              {plan.products.map((product, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6 flex-grow">
            <h4 className="text-sm font-semibold text-muted-foreground mb-3">
              Vegetables Included
            </h4>
            <div className="flex flex-wrap gap-2">
              {plan.vegetables.map((vegetable, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                >
                  {vegetable}
                </span>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Click to flip back
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanCard;
