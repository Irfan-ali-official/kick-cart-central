
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProduct } from "@/lib/data";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = getProduct(id || "");
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [mainImage, setMainImage] = useState(product?.images[0] || "");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate("/")}>Back to Homepage</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    if (product.colors.length > 0 && !selectedColor) {
      alert("Please select a color");
      return;
    }

    addToCart(
      product,
      quantity,
      selectedSize,
      selectedColor || product.colors[0]?.value || ""
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg">
                <img
                  src={mainImage}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex gap-4 overflow-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-24 h-24 rounded border-2 flex-shrink-0 overflow-hidden ${
                      mainImage === image ? "border-shoe-primary" : "border-transparent"
                    }`}
                    onClick={() => setMainImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-2 flex items-center">
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">{product.category}</span>
                <p className="ml-3 text-sm text-gray-500">{product.brand}</p>
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">
                  {product.reviewCount} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                {product.salePrice ? (
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-red-600">${product.salePrice}</span>
                    <span className="ml-2 text-gray-500 line-through">${product.price}</span>
                    <span className="ml-2 text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      Save ${(product.price - (product.salePrice || 0)).toFixed(2)}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-bold">${product.price}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="grid grid-cols-5 sm:grid-cols-8 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.value}
                      className={`py-2 text-center border rounded ${
                        selectedSize === size.value
                          ? "border-shoe-primary bg-shoe-primary/10 text-shoe-primary"
                          : "border-gray-300 text-gray-700"
                      } ${!size.available && "opacity-50 cursor-not-allowed"}`}
                      onClick={() => size.available && setSelectedSize(size.value)}
                      disabled={!size.available}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection (if available) */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color.value
                            ? "border-shoe-primary ring-2 ring-shoe-primary/50"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedColor(color.value)}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center">
                  <button
                    onClick={handleDecrement}
                    className="w-10 h-10 flex items-center justify-center border border-r-0 rounded-l"
                  >
                    <Minus size={16} />
                  </button>
                  <div className="w-12 h-10 flex items-center justify-center border">
                    {quantity}
                  </div>
                  <button
                    onClick={handleIncrement}
                    className="w-10 h-10 flex items-center justify-center border border-l-0 rounded-r"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="flex-1 bg-shoe-primary hover:bg-shoe-primary/90"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="px-4">
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to Wishlist</span>
                </Button>
              </div>

              {/* Additional Info */}
              <div className="border-t pt-6">
                <Tabs defaultValue="details">
                  <TabsList className="w-full grid grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                    <TabsTrigger value="returns">Returns</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="pt-4">
                    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                      <li>Brand: {product.brand}</li>
                      <li>Style: Athletic</li>
                      <li>Material: Breathable mesh upper, rubber sole</li>
                      <li>Care Instructions: Wipe clean with damp cloth</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="shipping" className="pt-4">
                    <p className="text-sm text-gray-600">
                      Free standard shipping on all orders over $100. Orders typically ship within
                      1-2 business days. Express and overnight options available at checkout.
                    </p>
                  </TabsContent>
                  <TabsContent value="returns" className="pt-4">
                    <p className="text-sm text-gray-600">
                      We offer a 30-day return policy for most items. Returns must be unworn with
                      the original tags still attached. Read our full return policy for more details.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
