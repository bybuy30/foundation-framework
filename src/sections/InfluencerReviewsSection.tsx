/**
 * InfluencerReviewsSection Component
 * * Premium, minimal carousel displaying one review at a time.
 * Features auto-slide every 15 seconds, manual navigation, and smooth animations.
 */

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewCard from "@/components/influencer-reviews/ReviewCard";
import { influencerReviews } from "@/data/influencer-reviews";

const InfluencerReviewsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_SLIDE_INTERVAL = 15000;

  const resetAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % influencerReviews.length);
    }, AUTO_SLIDE_INTERVAL);
  }, []);

  const nextReview = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % influencerReviews.length);
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, resetAutoSlide]);

  const prevReview = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) =>
      prev === 0 ? influencerReviews.length - 1 : prev - 1
    );
    resetAutoSlide();
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, resetAutoSlide]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoSlide]);

  return (
    <section id="influencer-reviews" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          {/* Centered Accent Line */}
          <div className="w-[800px] h-[2px] bg-primary mx-auto mb-20 rounded-full" />
          
          <h2 className="font-helvetica text-4xl md:text-5xl mb-4">
            Influencer Reviews
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See what influencers are saying about our fresh hydroponic produce.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={prevReview}
              disabled={isTransitioning}
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-50"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextReview}
              disabled={isTransitioning}
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg backdrop-blur-sm transition-all hover:scale-110 disabled:opacity-50"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Reviews Container */}
            <div className="relative min-h-[450px] md:min-h-[500px] flex items-center justify-center">
              {influencerReviews.map((review, index) => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  isActive={index === activeIndex}
                />
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {influencerReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setActiveIndex(index);
                      resetAutoSlide();
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfluencerReviewsSection;