/**
 * B2B Partner Brands
 * 
 * This file contains partner brand data for the B2B Ties section.
 * Replace logos and names as needed.
 */

export interface Brand {
  id: string;
  name: string;
  logo: string; // Path to logo in assets/images/brands/
}

export const brands: Brand[] = [
  { id: "1", name: "Partner One", logo: "/placeholder.svg" },
  { id: "2", name: "Partner Two", logo: "/placeholder.svg" },
  { id: "3", name: "Partner Three", logo: "/placeholder.svg" },
  { id: "4", name: "Partner Four", logo: "/placeholder.svg" },
  { id: "5", name: "Partner Five", logo: "/placeholder.svg" },
  { id: "6", name: "Partner Six", logo: "/placeholder.svg" },
  { id: "7", name: "Partner Seven", logo: "/placeholder.svg" },
  { id: "8", name: "Partner Eight", logo: "/placeholder.svg" },
];

export default brands;
