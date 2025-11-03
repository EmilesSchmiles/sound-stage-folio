const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-5xl md:text-6xl mb-8 text-center">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="animate-slide-up">
            With over a decade of experience behind the decks, I've had the privilege of performing at some of the world's most renowned clubs and festivals. My sound is a fusion of deep house, techno, and progressive beats that create an unforgettable journey for every crowd.
          </p>
          
          <p className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Drawing inspiration from pioneers like Carl Cox, Nina Kraviz, and Tale of Us, I craft sets that blend powerful basslines with ethereal melodies. Each performance is a unique experience, carefully curated to connect with the energy of the moment.
          </p>
          
          <p className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            When I'm not performing, I'm in the studio producing original tracks and remixes that push the boundaries of electronic music. My goal is simple: to create moments that resonate long after the music stops.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "500+", label: "Performances" },
            { number: "50+", label: "Cities" },
            { number: "20+", label: "Countries" },
            { number: "10+", label: "Years" },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display font-black text-4xl md:text-5xl bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-display">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
