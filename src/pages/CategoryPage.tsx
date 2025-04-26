
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Filter, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/data";

const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Latest", value: "latest" },
  { label: "Rating", value: "rating" },
];

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [sortOrder, setSortOrder] = useState("latest");
  const [filterOpen, setFilterOpen] = useState(false);
  
  // Get products based on the category
  let products = getProducts(category);
  const brandFilters = Array.from(new Set(products.map(p => p.brand)));
  
  // Apply sorting
  products = [...products].sort((a, b) => {
    switch (sortOrder) {
      case "price_asc":
        return (a.salePrice || a.price) - (b.salePrice || b.price);
      case "price_desc":
        return (b.salePrice || b.price) - (a.salePrice || a.price);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  let categoryTitle = "All Products";
  if (category === "men") categoryTitle = "Men's Shoes";
  if (category === "women") categoryTitle = "Women's Shoes";
  if (category === "kids") categoryTitle = "Kids' Shoes";
  if (category === "sale") categoryTitle = "Sale Items";
  if (category === "new-arrivals") categoryTitle = "New Arrivals";
  if (category === "featured") categoryTitle = "Featured Collection";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container px-4 mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">{categoryTitle}</h1>
            <p className="text-gray-500 mt-2">
              {products.length} results
            </p>
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-wrap gap-4 justify-between mb-6">
            <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter size={16} />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-left">Filters</SheetTitle>
                </SheetHeader>
                <div className="py-6">
                  <Accordion type="single" collapsible className="w-full" defaultValue="brand">
                    <AccordionItem value="brand">
                      <AccordionTrigger>Brand</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {brandFilters.map((brand) => (
                            <div key={brand} className="flex items-center space-x-2">
                              <Checkbox id={`brand-${brand}`} />
                              <label htmlFor={`brand-${brand}`} className="text-sm">
                                {brand}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="price">
                      <AccordionTrigger>Price Range</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-0-50" />
                            <label htmlFor="price-0-50" className="text-sm">$0 - $50</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-50-100" />
                            <label htmlFor="price-50-100" className="text-sm">$50 - $100</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-100-150" />
                            <label htmlFor="price-100-150" className="text-sm">$100 - $150</label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="price-150-plus" />
                            <label htmlFor="price-150-plus" className="text-sm">$150+</label>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="size">
                      <AccordionTrigger>Size</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-3 gap-2">
                          {["5", "6", "7", "8", "9", "10", "11", "12", "13"].map((size) => (
                            <div key={size} className="flex items-center space-x-2">
                              <Checkbox id={`size-${size}`} />
                              <label htmlFor={`size-${size}`} className="text-sm">
                                US {size}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                <div className="flex gap-4 mt-auto">
                  <Button variant="outline" className="flex-1">Reset</Button>
                  <Button className="flex-1" onClick={() => setFilterOpen(false)}>Apply</Button>
                </div>
              </SheetContent>
            </Sheet>

            <Select value={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Product Grid */}
          {products.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-medium mb-2">No products found</h2>
              <p className="text-gray-500">
                Try changing your filters or browse our other categories.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
