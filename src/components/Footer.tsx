const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="font-display font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent mb-4">
          DJ NOVA
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          © {new Date().getFullYear()} DJ Nova. All rights reserved.
        </p>
        <p className="text-muted-foreground text-xs">
          Designed with passion for the music community
        </p>
      </div>
    </footer>
  );
};

export default Footer;
