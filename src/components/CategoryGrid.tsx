
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Men's Shoes",
    image: "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
    href: "/category/men"
  },
  {
    name: "Women's Shoes",
    image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    href: "/category/women"
  },
  {
    name: "Kids' Shoes",
    image: "https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    href: "/category/kids"
  },
  {
    name: "Sale",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    href: "/category/sale"
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square h-full w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
