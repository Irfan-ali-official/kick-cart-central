
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-shoe-primary to-shoe-secondary text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-8 lg:mb-0 lg:max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sign Up & Get 15% Off</h2>
            <p className="text-lg opacity-90 mb-6">
              Join our community to receive exclusive offers, early access to new releases, and personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md text-shoe-dark w-full sm:w-auto"
              />
              <Button className="bg-shoe-accent hover:bg-shoe-accent/90 text-white">
                Subscribe Now
              </Button>
            </div>
          </div>
          
          <div className="relative lg:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" 
              alt="Subscribe to our newsletter" 
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
