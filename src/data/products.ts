/**
 * Product Data
 * 
 * This file contains placeholder product data.
 * Replace the data here to update products across the entire site.
 * 
 * Each product should have:
 * - id: unique identifier
 * - name: display name
 * - category: filter category (must match filters.ts categories)
 * - retailPrice: consumer price
 * - b2bPrice: wholesale/business price
 * - image: path to product image in assets/images/products/
 * - inStock: availability status
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  retailPrice: number;
  b2bPrice: number;
  image: string;
  inStock: boolean;
  description?: string;
}

// Placeholder product data - replace with actual products
export const products: Product[] = [
  { id: "1", name: "Butter Lettuce", category: "salads", retailPrice: 4.99, b2bPrice: 2.99, image: "/placeholder.svg", inStock: true },
  { id: "2", name: "Romaine Hearts", category: "salads", retailPrice: 5.49, b2bPrice: 3.29, image: "/placeholder.svg", inStock: true },
  { id: "3", name: "Baby Spinach", category: "exotic-greens", retailPrice: 6.99, b2bPrice: 4.19, image: "/placeholder.svg", inStock: true },
  { id: "4", name: "Arugula Mix", category: "exotic-greens", retailPrice: 5.99, b2bPrice: 3.59, image: "/placeholder.svg", inStock: true },
  { id: "5", name: "Thai Basil", category: "exotic-greens", retailPrice: 4.49, b2bPrice: 2.69, image: "/placeholder.svg", inStock: true },
  { id: "6", name: "Micro Greens", category: "exotic-greens", retailPrice: 8.99, b2bPrice: 5.39, image: "/placeholder.svg", inStock: true },
  { id: "7", name: "Bell Peppers", category: "peppers", retailPrice: 3.99, b2bPrice: 2.39, image: "/placeholder.svg", inStock: true },
  { id: "8", name: "Jalapeño", category: "peppers", retailPrice: 2.99, b2bPrice: 1.79, image: "/placeholder.svg", inStock: true },
  { id: "9", name: "Habanero", category: "peppers", retailPrice: 4.49, b2bPrice: 2.69, image: "/placeholder.svg", inStock: true },
  { id: "10", name: "Serrano", category: "peppers", retailPrice: 3.49, b2bPrice: 2.09, image: "/placeholder.svg", inStock: true },
  { id: "11", name: "Pothos Plant", category: "live-plants", retailPrice: 12.99, b2bPrice: 7.79, image: "/placeholder.svg", inStock: true },
  { id: "12", name: "Snake Plant", category: "live-plants", retailPrice: 18.99, b2bPrice: 11.39, image: "/placeholder.svg", inStock: true },
  { id: "13", name: "Monstera", category: "live-plants", retailPrice: 24.99, b2bPrice: 14.99, image: "/placeholder.svg", inStock: true },
  { id: "14", name: "Peace Lily", category: "live-plants", retailPrice: 16.99, b2bPrice: 10.19, image: "/placeholder.svg", inStock: true },
  { id: "15", name: "Kale Mix", category: "exotic-greens", retailPrice: 5.99, b2bPrice: 3.59, image: "/placeholder.svg", inStock: true },
  { id: "16", name: "Swiss Chard", category: "exotic-greens", retailPrice: 4.99, b2bPrice: 2.99, image: "/placeholder.svg", inStock: true },
  { id: "17", name: "Iceberg Lettuce", category: "salads", retailPrice: 3.49, b2bPrice: 2.09, image: "/placeholder.svg", inStock: true },
  { id: "18", name: "Mixed Greens", category: "salads", retailPrice: 6.49, b2bPrice: 3.89, image: "/placeholder.svg", inStock: true },
  { id: "19", name: "Ghost Pepper", category: "peppers", retailPrice: 6.99, b2bPrice: 4.19, image: "/placeholder.svg", inStock: true },
  { id: "20", name: "Cayenne", category: "peppers", retailPrice: 3.99, b2bPrice: 2.39, image: "/placeholder.svg", inStock: true },
  { id: "21", name: "Philodendron", category: "live-plants", retailPrice: 22.99, b2bPrice: 13.79, image: "/placeholder.svg", inStock: true },
  { id: "22", name: "Fern Variety", category: "live-plants", retailPrice: 14.99, b2bPrice: 8.99, image: "/placeholder.svg", inStock: true },
  { id: "23", name: "Watercress", category: "exotic-greens", retailPrice: 5.49, b2bPrice: 3.29, image: "/placeholder.svg", inStock: true },
  { id: "24", name: "Endive", category: "salads", retailPrice: 4.99, b2bPrice: 2.99, image: "/placeholder.svg", inStock: true },
  { id: "25", name: "Radicchio", category: "salads", retailPrice: 5.99, b2bPrice: 3.59, image: "/placeholder.svg", inStock: true },
  { id: "26", name: "Poblano", category: "peppers", retailPrice: 4.49, b2bPrice: 2.69, image: "/placeholder.svg", inStock: true },
  { id: "27", name: "Spider Plant", category: "live-plants", retailPrice: 11.99, b2bPrice: 7.19, image: "/placeholder.svg", inStock: true },
  { id: "28", name: "Dracaena", category: "live-plants", retailPrice: 19.99, b2bPrice: 11.99, image: "/placeholder.svg", inStock: true },
];

export default products;
