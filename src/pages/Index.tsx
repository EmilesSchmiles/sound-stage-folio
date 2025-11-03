import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Music />
      <Gallery />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
