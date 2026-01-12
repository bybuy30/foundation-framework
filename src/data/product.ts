import { Product, products } from "./products";

/**
 * Extended Product Detail Interface
 * Contains additional information for product detail pages
 */
export interface ProductDetail extends Product {
  description?: string;
  images?: string[]; // Array of image URLs (primary image + thumbnails)
  properties?: ProductProperty[];
  relatedProductIds?: number[]; // IDs of related products
}

export interface ProductProperty {
  icon?: string; // Icon name or placeholder
  label: string;
  value?: string;
}

/**
 * Get related product IDs (excluding current product)
 * Returns up to 6 related products
 */
const getRelatedProductIds = (currentId: number, allProducts: Product[]): number[] => {
  return allProducts
    .filter((p) => p.id !== currentId)
    .slice(0, 6)
    .map((p) => p.id);
};

/**
 * Get product detail by ID
 * Returns extended product data with placeholders for missing fields
 */
export const getProductDetail = (id: number): ProductDetail | null => {
  const product = products.find((p: Product) => p.id === id);
  
  if (!product) return null;

  // Return extended product with placeholders for missing data
  return {
    ...product,
    description: product.description || `Fresh, premium quality ${product.name} grown using hydroponic methods. ${product.name} is known for its crisp texture and rich nutritional value.`,
    images: product.images || [
      product.image || `/src/assets/images/products/product${id}.jpg`,
      `/src/assets/images/products/product${id}_2.jpg`,
      `/src/assets/images/products/product${id}_3.jpg`,
    ],
    properties: product.properties || [
      { icon: "leaf", label: "Organic", value: "Certified" },
      { icon: "droplet", label: "Hydroponic", value: "Soil-free" },
      { icon: "package", label: "Net Weight", value: product.netQuantity },
      { icon: "calendar", label: "Shelf Life", value: "5-7 days" },
    ],
    relatedProductIds: product.relatedProductIds || getRelatedProductIds(id, products),
  };
};

/**
 * Get related products by IDs
 */
export const getRelatedProducts = (ids: number[]): Product[] => {
  return products.filter((p: Product) => ids.includes(p.id));
};
