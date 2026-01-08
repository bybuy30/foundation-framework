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
  { id: "1", src: "/placeholder.svg", alt: "Carousel image 1" },
  { id: "2", src: "/placeholder.svg", alt: "Carousel image 2" },
  { id: "3", src: "/placeholder.svg", alt: "Carousel image 3" },
  { id: "4", src: "/placeholder.svg", alt: "Carousel image 4" },
  { id: "5", src: "/placeholder.svg", alt: "Carousel image 5" },
];

export default carouselImages;
