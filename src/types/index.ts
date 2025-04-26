
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  salePrice?: number;
  images: string[];
  description: string;
  sizes: Size[];
  colors: Color[];
  featured?: boolean;
  newArrival?: boolean;
  rating: number;
  reviewCount: number;
}

export interface Size {
  value: string;
  label: string;
  available: boolean;
}

export interface Color {
  name: string;
  value: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}

export interface FilterOptions {
  brand?: string[];
  category?: string[];
  price?: [number, number];
  size?: string[];
  color?: string[];
}
