import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import ProfileMenu from "./ProfileMenu";

const categories = [
  { name: "New Arrivals", href: "/category/new-arrivals" },
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Kids", href: "/category/kids" },
  { name: "Sale", href: "/category/sale" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemCount = 2; // This would be dynamic in a real app

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-shoe-dark">
              KickCart
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="text-gray-600 hover:text-shoe-primary transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Search, Cart, Profile and Account */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="search"
                placeholder="Search shoes..."
                className="w-60 pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search 
                size={18} 
                className="absolute right-2 text-gray-500" 
              />
            </div>

            {/* Cart Link */}
            <Link to="/cart" className="relative p-2">
              <ShoppingCart size={24} className="text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-shoe-accent rounded-full">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Profile Menu */}
            <ProfileMenu />

            {/* Mobile menu button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu size={24} />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col mt-8 space-y-4">
                  <Input
                    type="search"
                    placeholder="Search shoes..."
                    className="mb-4"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="py-2 text-lg"
                    >
                      {category.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <Link to="/account" className="flex items-center py-2">
                      <ProfileMenu />
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
