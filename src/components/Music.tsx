import { Music2 } from "lucide-react";

const Music = () => {
  return (
    <section id="music" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
            Latest <span className="bg-gradient-primary bg-clip-text text-transparent">Mixes</span>
          </h2>
          <p className="text-muted-foreground text-lg">Listen to my recent sets and productions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* SoundCloud Embed Placeholder */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="w-6 h-6 text-primary" />
              <h3 className="font-display font-semibold text-xl">Summer Festival Mix 2024</h3>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <iframe 
                width="100%" 
                height="166" 
                scrolling="no" 
                frameBorder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1234567890&color=%2300ffff&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
                className="rounded-lg"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground">
              A high-energy journey through progressive house and melodic techno, recorded live at sunset.
            </p>
          </div>

          {/* Spotify Embed Placeholder */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="w-6 h-6 text-primary" />
              <h3 className="font-display font-semibold text-xl">Midnight Sessions Vol. 3</h3>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <iframe 
                style={{ borderRadius: '12px' }} 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4dyzvuaRJ0n?utm_source=generator" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-sm text-muted-foreground">
              Deep, hypnotic beats for late-night listening. Perfect for the after-hours crowd.
            </p>
          </div>

          {/* Additional Mix Cards */}
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="w-6 h-6 text-primary" />
              <h3 className="font-display font-semibold text-xl">Club Anthems 2024</h3>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Music2 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              The biggest tracks from this year's club circuit, mixed and remixed for maximum impact.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)]">
            <div className="flex items-center gap-3 mb-4">
              <Music2 className="w-6 h-6 text-primary" />
              <h3 className="font-display font-semibold text-xl">Warehouse Sessions</h3>
            </div>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <Music2 className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Raw, underground techno recorded live at an intimate warehouse party.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
