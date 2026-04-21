export interface Product {
  id: number;
  name: string;
  price: number;
  netQuantity: string;
  image?: string;
  category?: string; 
  images?: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Spinach",
    price: 55,
    netQuantity: "200 g",
    images: [
      "/src/assets/images/Shortlisted/Spinach 1.jpg",
      "/src/assets/images/Shortlisted/Spinach P.jpg",
    ],
  },
  {
    id: 2,
    name: "Lettuce Mix",
    price: 92,
    netQuantity: "150-180 g",
    category: "salads",
    images: [
      "/src/assets/images/Shortlisted/Lettuce Mix 1.jpg",
      "/src/assets/images/Shortlisted/Lettuce Mix 2.jpg",
      "/src/assets/images/Shortlisted/Lettuce Mix P.jpg",
    ],
  },
  {
    id: 3,
    name: "Seedless Cucumber",
    price: 60,
    netQuantity: "500 g",
    images: [
      "/src/assets/images/Shortlisted/Cucumber 1.jpeg",
      "/src/assets/images/Shortlisted/Cucumber 2.jpg",
      "/src/assets/images/Shortlisted/Seedless Cucumber P.jpg",
    ]
  },
  {
    id: 4,
    name: "Yellow Bell Pepper",
    price: 85,
    netQuantity: "250-350 g",
    category: "peppers",
    images: [
      "/src/assets/images/Shortlisted/Yellow Capsicum 1.jpg",
      "/src/assets/images/Shortlisted/Yellow Capsicum 2.jpg",
      "/src/assets/images/Shortlisted/Yellow Capsicum P.jpg",
    ],
  },
  {
    id: 5,
    name: "Red Bell Pepper",
    price: 85,
    netQuantity: "250-350 g",
    category: "peppers",
    images: [
      "/src/assets/images/Shortlisted/Red Bell Pepper 1.jpg",
      "/src/assets/images/Shortlisted/Red Bell Pepper 2.jpg",
      "/src/assets/images/Shortlisted/Red Bell Pepper P.jpg",
    ],
  },
  {
    id: 6,
    name: "Green Capsicum",
    price: 60,
    netQuantity: "250 g",
    category: "peppers",
    images: [
      "/src/assets/images/Shortlisted/Green Capsicum 1.jpg",
      "/src/assets/images/Shortlisted/Green Capsicum 2.jpg",
      "/src/assets/images/Shortlisted/Green Capsicum P.jpg",
    ],
  },
  {
    id: 7,
    name: "Baby Corn",
    price: 78,
    netQuantity: "200 g",
    images: [
      "/src/assets/images/Shortlisted/Baby Corn 1.jpg",
      "/src/assets/images/Shortlisted/Baby Corn P.jpg",
      "/src/assets/images/Shortlisted/Baby Corn P(1).jpg",
    ]
  },
  {
    id: 8,
    name: "Iceberg Lettuce",
    price: 108,
    netQuantity: "300-650 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Iceberg.jpeg",
    ]
  },
  {
    id: 9,
    name: "Broccoli",
    price: 108,
    netQuantity: "500 g",
    images: [
      "/src/assets/images/Shortlisted/Broccoli 1.jpeg",
      "/src/assets/images/Shortlisted/Broccoli 2.jpeg"
    ]
  },
  {
    id: 10,
    name: "Cocktail Bell Peppers",
    price: 135,
    netQuantity: "350-550 g",
    category: "peppers",
    images: [
      "/src/assets/images/Shortlisted/Cocktail Bell Pepper 1.jpg",
      "/src/assets/images/Shortlisted/Cocktail Bell Pepper P.jpg",
    ],
  },
  {
    id: 11,
    name: "Yellow Cherry",
    price: 52,
    netQuantity: "100 g",
    images: [
      "/src/assets/images/Shortlisted/Yellow Cherry Tomato 1.jpg",
      "/src/assets/images/Shortlisted/Yellow Cherry Tomato P.jpg",
    ],
  },
  {
    id: 12,
    name: "Cherry Tomato",
    price: 52,
    netQuantity: "100 g",
    images: [
      "/src/assets/images/Shortlisted/Red Cherry Tomato 1.jpg",
      "/src/assets/images/Shortlisted/Red Cherry Tomato P.jpg",
    ],
  },
  {
    id: 13,
    name: "Baby Spinach",
    price: 80,
    netQuantity: "100 g",
    images: [
      "/src/assets/images/Shortlisted/Baby Spinach 1.jpg",
      "/src/assets/images/Shortlisted/Baby Spinach P.jpg",
    ],
  },
  {
    id: 14,
    name: "Celery",
    price: 80,
    netQuantity: "250 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Celery 1.jpg",
      "/src/assets/images/Shortlisted/Celery P.jpg",
    ]
  },
  {
    id: 15,
    name: "Green Zucchini",
    price: 58,
    netQuantity: "250 g",
    images : [
      "/src/assets/images/Shortlisted/Green Zucchini 1.jpeg",
    ]
  },
  {
    id: 16,
    name: "Yellow Zucchini",
    price: 58,
    netQuantity: "250 g",
    images: [
      "/src/assets/images/Shortlisted/Yellow Zucchini 1.jpg",
      "/src/assets/images/Shortlisted/Yellow Zucchini 2.jpg",
      "/src/assets/images/Shortlisted/Yellow Zucchini P.jpg",
    ]
  },
  {
    id: 17,
    name: "Pok Choi",
    price: 56,
    netQuantity: "100-250 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Pok Choi 1.jpeg",
    ]
  },
  {
    id: 18,
    name: "Button Mushroom",
    price: 100,
    netQuantity: "200 g",
    images: [
      "/src/assets/images/Shortlisted/Premium Button Mushroom 1.jpg",
      "/src/assets/images/Shortlisted/Premium Button Mushroom P.jpg",
    ]
  },
  {
    id: 19,
    name: "Salad Mix Cucumber",
    price: 108,
    netQuantity: "150-180 g",
    category: "salads",
    images: [
      "/src/assets/images/Shortlisted/Salad Mix with Cucumber 2.jpg",
      "/src/assets/images/Shortlisted/Salad Mix with Cucumber 1.jpg",
      "/src/assets/images/Shortlisted/Salad Mix with Cucumber P.jpg",
    ]
  },
  {
    id: 20,
    name: "Wild Arugula",
    price: 55,
    netQuantity: "50 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Arugula 1.jpg",
      "/src/assets/images/Shortlisted/Arugula 2.jpg",
      "/src/assets/images/Shortlisted/Arugula P.jpg",
    ]
  },
  {
    id: 21,
    name: "Italian Basil",
    price: 45,
    netQuantity: "50 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Basil 1.jpeg",
      "/src/assets/images/Shortlisted/Basil 2.jpeg",
    ]
  },
    {
    id: 22,
    name: "Curly Kale",
    price: 50,
    netQuantity: "100 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Curly Kale 1.jpg",
      "/src/assets/images/Shortlisted/Curly Kale 2.jpg",
      "/src/assets/images/Shortlisted/Curly Kale P.jpg",
    ]
  },
  {
    id: 23,
    name: "Italian Kale",
    price: 50,
    netQuantity: "100 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Italian Kale 1.jpg",
      "/src/assets/images/Shortlisted/Italian Kale 2.jpg",
      "/src/assets/images/Shortlisted/Italian Kale P.jpg",
    ]
  },
  {
    id: 24,
    name: "Swiss Chard",
    price: 55,
    netQuantity: "100 g",
    category: "exotic-greens",
    images: [
      "/src/assets/images/Shortlisted/Swiss Chard 1.png",
      "/src/assets/images/Shortlisted/Swiss Chard 2.png",
      "/src/assets/images/Shortlisted/Swiss Chard P.jpg",
    ]
  },
  {
    id: 25,
    name: "Locarno",
    price: 60,
    netQuantity: "120-150 g",
    category: "live-plants",
    images: [
      "/src/assets/images/Shortlisted/Locarno 1.jpg",
      "/src/assets/images/Shortlisted/Locarno 2.jpg",
      "/src/assets/images/Shortlisted/Locarno P.jpg",
    ]
  },
    {
    id: 26,
    name: "Romaine",
    price: 60,
    netQuantity: "120-150 g",
    category: "live-plants",
    images: [
      "/src/assets/images/Shortlisted/Romaine 1.jpg",
      "/src/assets/images/Shortlisted/Romaine 2.jpg",
      "/src/assets/images/Shortlisted/Romaine P.png",
    ]
  },
    {
    id: 27,
    name: "Butterhead",
    price: 60,
    netQuantity: "120-150 g",
    category: "live-plants",
    images: [
      "/src/assets/images/Shortlisted/Butterhead 1.jpg",
      "/src/assets/images/Shortlisted/Butterhead 2.jpg",
      "/src/assets/images/Shortlisted/Butterhead P.jpg",
    ]
  },
  {
    id: 28,
    name: "Lollo Rosso",
    price: 60,
    netQuantity: "120-150 g",
    category: "live-plants",
    images: [
      "/src/assets/images/Shortlisted/Lollo Rosso 1.jpg",
      "/src/assets/images/Shortlisted/Lollo Rosso 2.png",
      "/src/assets/images/Shortlisted/Lollo Rosso P.png",
    ]
  },
];
