
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-shoe-dark text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">KickCart</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for the latest and greatest in footwear fashion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/men" className="text-gray-300 hover:text-white transition">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/category/women" className="text-gray-300 hover:text-white transition">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/category/kids" className="text-gray-300 hover:text-white transition">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/category/sale" className="text-gray-300 hover:text-white transition">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l text-shoe-dark"
              />
              <button
                type="submit"
                className="bg-shoe-accent px-4 py-2 rounded-r font-medium hover:bg-opacity-90 transition"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} KickCart. All rights reserved.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <Link to="/privacy" className="text-sm text-gray-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-300 hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
