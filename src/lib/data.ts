
import { Product } from '@/types';

// Mock data for our shoe store
export const products: Product[] = [
  {
    id: "1",
    name: "Air Max Pulse",
    brand: "Nike",
    category: "men",
    price: 150,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
    ],
    description: "Featuring a unique design inspired by the energy of London, the Air Max Pulse combines a textile mesh upper and welded synthetic overlays for a sports-inspired design. The upper includes durable seatbelt-like webbing on the heel.",
    sizes: [
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: false },
      { value: "11", label: "US 11", available: true },
      { value: "12", label: "US 12", available: true }
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" }
    ],
    featured: true,
    rating: 4.5,
    reviewCount: 127
  },
  {
    id: "2",
    name: "Ultraboost Light",
    brand: "Adidas",
    category: "men",
    price: 190,
    images: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1431&q=80"
    ],
    description: "Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST, unique for its incredible lightweight properties.",
    sizes: [
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: true },
      { value: "11", label: "US 11", available: true },
      { value: "12", label: "US 12", available: false }
    ],
    colors: [
      { name: "Cloud White", value: "#FFFFFF" },
      { name: "Core Black", value: "#000000" },
      { name: "Grey", value: "#808080" }
    ],
    featured: true,
    newArrival: true,
    rating: 4.8,
    reviewCount: 243
  },
  {
    id: "3",
    name: "Classic Leather Legacy",
    brand: "Reebok",
    category: "women",
    price: 90,
    salePrice: 65,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80",
      "https://images.unsplash.com/photo-1554238113-6d3dbed5cf55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
    ],
    description: "Drawing inspiration from the Classic Leather Legacy and the Classic Leather Ripple, these shoes bring a fresh perspective to heritage-inspired footwear. They have a layered suede and textile upper for texture.",
    sizes: [
      { value: "5", label: "US 5", available: true },
      { value: "6", label: "US 6", available: true },
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: false },
      { value: "10", label: "US 10", available: true }
    ],
    colors: [
      { name: "Chalk", value: "#f5f5dc" },
      { name: "Core Black", value: "#000000" },
      { name: "Baked Earth", value: "#9b4f3e" }
    ],
    rating: 4.2,
    reviewCount: 86
  },
  {
    id: "4",
    name: "Chuck Taylor All Star",
    brand: "Converse",
    category: "unisex",
    price: 60,
    images: [
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1721&q=80",
      "https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80"
    ],
    description: "The Converse Chuck Taylor All Star is the one that started it all for Converse. Originally designed for basketball, the Chuck Taylor All Star has become one of the world's most iconic sneakers, with its timeless silhouette.",
    sizes: [
      { value: "5", label: "US 5", available: true },
      { value: "6", label: "US 6", available: true },
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: true },
      { value: "11", label: "US 11", available: true },
      { value: "12", label: "US 12", available: true }
    ],
    colors: [
      { name: "Optical White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Red", value: "#FF0000" },
      { name: "Navy", value: "#000080" }
    ],
    featured: true,
    rating: 4.7,
    reviewCount: 512
  },
  {
    id: "5",
    name: "Old Skool",
    brand: "Vans",
    category: "unisex",
    price: 70,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80",
      "https://images.unsplash.com/photo-1550399504-8953e1a6ac87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
    ],
    description: "First known as the Vans #36, the Old Skool debuted in 1977 with a unique new addition: a random doodle drawn by founder Paul Van Doren, and originally referred to as the 'jazz stripe.' Today, the famous Vans side stripe has become an unmistakable hallmark of the Vans brand.",
    sizes: [
      { value: "6", label: "US 6", available: true },
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: true },
      { value: "11", label: "US 11", available: false },
      { value: "12", label: "US 12", available: false }
    ],
    colors: [
      { name: "Black/White", value: "#000000" },
      { name: "Navy/White", value: "#000080" },
      { name: "Red/White", value: "#FF0000" }
    ],
    rating: 4.6,
    reviewCount: 324
  },
  {
    id: "6",
    name: "Kid's ZX 700",
    brand: "Adidas",
    category: "kids",
    price: 65,
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80"
    ],
    description: "These kids' adidas ZX 700 shoes add comfort to their everyday adventures. Lightweight and flexible, the shoes have a plush feel that supports small feet as they dash around the playground.",
    sizes: [
      { value: "k10", label: "US K10", available: true },
      { value: "k11", label: "US K11", available: true },
      { value: "k12", label: "US K12", available: true },
      { value: "k13", label: "US K13", available: true },
      { value: "1", label: "US 1", available: true },
      { value: "2", label: "US 2", available: true },
      { value: "3", label: "US 3", available: true }
    ],
    colors: [
      { name: "Blue/White", value: "#0000FF" },
      { name: "Pink/White", value: "#FFC0CB" }
    ],
    newArrival: true,
    rating: 4.3,
    reviewCount: 58
  },
  {
    id: "7",
    name: "Air Force 1 '07",
    brand: "Nike",
    category: "unisex",
    price: 110,
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"
    ],
    description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine.",
    sizes: [
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: true },
      { value: "11", label: "US 11", available: true },
      { value: "12", label: "US 12", available: true },
      { value: "13", label: "US 13", available: true }
    ],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" }
    ],
    featured: true,
    rating: 4.9,
    reviewCount: 782
  },
  {
    id: "8",
    name: "Gel-Kayano 29",
    brand: "ASICS",
    category: "women",
    price: 160,
    salePrice: 130,
    images: [
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
    ],
    description: "Enjoy excellent comfort and support with the GEL-KAYANO 29 running shoe. This model is a good choice for regular running enthusiasts. The shoe's underfoot cushioning is complemented by our series of stability and comfort updates.",
    sizes: [
      { value: "5", label: "US 5", available: true },
      { value: "6", label: "US 6", available: true },
      { value: "7", label: "US 7", available: true },
      { value: "8", label: "US 8", available: true },
      { value: "9", label: "US 9", available: true },
      { value: "10", label: "US 10", available: false },
      { value: "11", label: "US 11", available: false }
    ],
    colors: [
      { name: "Black/Purple", value: "#301934" },
      { name: "White/Blue", value: "#FFFFFF" },
      { name: "Pink/White", value: "#FFC0CB" }
    ],
    rating: 4.7,
    reviewCount: 156
  }
];

export function getProducts(category?: string) {
  if (category) {
    return products.filter(product => product.category === category);
  }
  return products;
}

export function getProduct(id: string) {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getNewArrivals() {
  return products.filter(product => product.newArrival);
}

export function getSaleProducts() {
  return products.filter(product => product.salePrice);
}
