import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Youtube, Music } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Instagram, label: "Instagram", url: "https://instagram.com" },
    { icon: Youtube, label: "YouTube", url: "https://youtube.com" },
    { icon: Music, label: "SoundCloud", url: "https://soundcloud.com" },
    { icon: Mail, label: "Email", url: "mailto:booking@djnova.com" },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">Let's create something amazing together</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-display font-semibold text-2xl mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.5)] transition-all duration-300 font-display font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-display font-semibold text-2xl mb-6">Connect With Me</h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)] group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <social.icon className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{social.label}</div>
                    <div className="text-sm text-muted-foreground">Follow for updates</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="font-display font-semibold mb-3">Booking Inquiries</h4>
              <p className="text-muted-foreground mb-4">
                For bookings, collaborations, or press inquiries, please email:
              </p>
              <a 
                href="mailto:booking@djnova.com" 
                className="text-primary hover:underline font-semibold"
              >
                booking@djnova.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
