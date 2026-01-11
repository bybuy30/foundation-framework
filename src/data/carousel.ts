/**
 * Carousel Images Configuration
 * 
 * This file contains the carousel image paths.
 * Update paths here to change carousel images site-wide.
 */

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
}

export const carouselImages: CarouselImage[] = [
  { id: "1", src: "/src/assets/images/image1.png", alt: "Image 1" },
  { id: "2", src: "/src/assets/images/salads.png", alt: "Salads" },
  { id: "3", src: "/src/assets/images/grocery%20store.png", alt: "Grocery store" },
  { id: "4", src: "/src/assets/images/grocery%20store%202.png", alt: "Grocery store 2" },
];

export default carouselImages;
