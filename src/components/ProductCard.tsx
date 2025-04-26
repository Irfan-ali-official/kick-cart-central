
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden transition-transform hover:scale-[1.02] group h-full">
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          {product.newArrival && (
            <span className="absolute top-2 left-2 bg-shoe-primary text-white text-xs px-2 py-1 rounded">
              New
            </span>
          )}
          {product.salePrice && (
            <span className="absolute top-2 right-2 bg-shoe-accent text-white text-xs px-2 py-1 rounded">
              Sale
            </span>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">{product.brand}</p>
              <h3 className="font-medium mt-1">{product.name}</h3>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-shoe-accent text-shoe-accent" />
              <span className="text-sm ml-1">{product.rating}</span>
            </div>
          </div>
          <div className="mt-2">
            {product.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-medium">
                  ${product.salePrice}
                </span>
                <span className="text-gray-500 text-sm line-through">
                  ${product.price}
                </span>
              </div>
            ) : (
              <span className="font-medium">${product.price}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
