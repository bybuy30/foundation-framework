/**
 * ImageCarousel Component
 * 
 * Displays a carousel of images from the carousel data file.
 * Images can be replaced by updating src/data/carousel.ts
 */

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carouselImages } from "@/data/carousel";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div 
      className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-muted"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Images */}
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image) => (
          <div key={image.id} className="w-full h-full flex-shrink-0">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentIndex 
                ? "bg-primary" 
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
