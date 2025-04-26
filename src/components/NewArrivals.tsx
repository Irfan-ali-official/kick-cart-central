
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { getNewArrivals } from "@/lib/data";

export default function NewArrivals() {
  const newProducts = getNewArrivals();

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold">New Arrivals</h2>
          <Link to="/category/new-arrivals" className="text-shoe-primary hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <Card className="overflow-hidden transition-transform hover:scale-[1.02] group">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-gray-500">{product.brand}</p>
                  <h3 className="font-medium mt-1">{product.name}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
