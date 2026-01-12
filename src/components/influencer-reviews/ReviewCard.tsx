/**
 * ReviewCard Component
 * * Displays a single influencer review with a rectangular thumbnail and centered text.
 */

import { Star } from "lucide-react";
import { InfluencerReview } from "@/data/influencer-reviews";

interface ReviewCardProps {
  review: InfluencerReview;
  isActive: boolean;
}

const ReviewCard = ({ review, isActive }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 transition-colors ${
          index < rating
            ? "fill-yellow-400 text-yellow-400"
            : "fill-muted/30 text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <div
      className={`w-full flex flex-col items-center transition-all duration-500 ease-in-out ${
        isActive
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none absolute"
      }`}
    >
      {/* Rectangular Thumbnail */}
      <div className="mb-6">
        <a
          href={review.video_link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-shrink-0 group block"
        >
          <div className="w-32 h-40 md:w-40 md:h-52 rounded-2xl overflow-hidden bg-muted shadow-2xl ring-1 ring-border/50 group-hover:ring-primary/40 transition-all duration-300">
            <img
              src={review.thumbnail_url}
              alt={review.influencer_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
        </a>
      </div>

      {/* Influencer Content Section */}
      <div className="flex flex-col items-center text-center max-w-2xl px-4">
        <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-2">
          {review.influencer_name}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {renderStars(review.star_rating)}
        </div>

        {/* Quote */}
        <blockquote className="relative">
          <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
            &ldquo;{review.review_text}&rdquo;
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default ReviewCard;