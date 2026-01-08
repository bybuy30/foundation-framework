/**
 * Assets Index
 * 
 * This file documents the asset folder structure.
 * Replace placeholder files with actual assets.
 * 
 * Folder Structure:
 * 
 * src/assets/
 * ├── videos/
 * │   └── Hydronest.mp4         -- Hero background video
 * ├── images/
 * │   ├── carousel/
 * │   │   ├── image1.jpg        -- Carousel slides (5 images)
 * │   │   ├── image2.jpg
 * │   │   ├── image3.jpg
 * │   │   ├── image4.jpg
 * │   │   └── image5.jpg
 * │   ├── products/
 * │   │   └── product1-28.jpg   -- Product images (28 total)
 * │   └── brands/
 * │       └── brand1-8.png      -- B2B partner logos (8+)
 * └── blobs/
 *     └── blob1-3.svg           -- Decorative blob shapes
 * 
 * Usage:
 * - Import assets using ES6 imports for React components
 * - Update data files (products.ts, carousel.ts, brands.ts) with actual paths
 * 
 * Example:
 * import heroVideo from "@/assets/videos/Hydronest.mp4";
 * import product1 from "@/assets/images/products/product1.jpg";
 */

export const ASSET_PATHS = {
  videos: {
    hero: "/assets/videos/Hydronest.mp4",
  },
  images: {
    carousel: "/assets/images/carousel/",
    products: "/assets/images/products/",
    brands: "/assets/images/brands/",
  },
  blobs: "/assets/blobs/",
} as const;

export default ASSET_PATHS;
