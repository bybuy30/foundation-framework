/**
 * CarouselSection Component
 * 
 * Section wrapper for the image carousel.
 */

import ImageCarousel from "@/components/carousel/ImageCarousel";

const CarouselSection = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facility</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse inside our state-of-the-art hydroponic growing facilities.
          </p>
        </div>
        <ImageCarousel />
      </div>
    </section>
  );
};

export default CarouselSection;
