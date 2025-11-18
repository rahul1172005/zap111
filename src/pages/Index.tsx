import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Internships from "@/components/Internships";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio className="mx-0 my-0 py-[15px]" />
      <Internships />
      <Footer />
    </div>;
};
export default Index;