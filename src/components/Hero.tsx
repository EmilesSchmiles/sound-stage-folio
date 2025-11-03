import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-dj.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-6">
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl mb-4 bg-gradient-primary bg-clip-text text-transparent animate-glow">
            DJ NOVA
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-primary rounded-full"></div>
        </div>
        <p className="text-xl md:text-2xl text-muted-foreground font-display mb-12 max-w-2xl mx-auto">
          Mixing vibes that move you
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-[0_0_30px_hsl(var(--glow-cyan)/0.5)] transition-all duration-300 font-display font-bold text-lg px-8"
            onClick={() => scrollToSection("music")}
          >
            Listen Now
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 font-display font-bold text-lg px-8"
            onClick={() => scrollToSection("events")}
          >
            Upcoming Events
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
