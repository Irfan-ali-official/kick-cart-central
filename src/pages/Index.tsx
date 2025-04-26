
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryGrid from "@/components/CategoryGrid";
import NewArrivals from "@/components/NewArrivals";
import PromoSection from "@/components/PromoSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <CategoryGrid />
        <NewArrivals />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
