
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
          alt="Stylish shoes on display" 
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>
      <div className="container relative mx-auto px-4 py-32 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Step into <span className="text-shoe-accent">Style</span>
          </h1>
          <p className="mt-6 text-xl max-w-lg">
            Discover the perfect pair for every occasion. From athletic performance to casual comfort, we've got you covered.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-shoe-accent hover:bg-shoe-accent/90 text-white">
              <Link to="/category/new-arrivals">Shop New Arrivals</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/category/sale">View Sale Items</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
