import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const Events = () => {
  const events = [
    {
      date: "FRI, DEC 15",
      year: "2024",
      title: "Neon Nights Festival",
      venue: "Electric Arena",
      location: "Los Angeles, CA",
      ticketLink: "#",
    },
    {
      date: "SAT, DEC 23",
      year: "2024",
      title: "New Year's Eve Countdown",
      venue: "Skyline Club",
      location: "Miami, FL",
      ticketLink: "#",
    },
    {
      date: "FRI, JAN 12",
      year: "2025",
      title: "Underground Sessions",
      venue: "The Warehouse",
      location: "Brooklyn, NY",
      ticketLink: "#",
    },
    {
      date: "SAT, JAN 27",
      year: "2025",
      title: "Sunset Beach Party",
      venue: "Ocean Drive",
      location: "San Diego, CA",
      ticketLink: "#",
    },
  ];

  return (
    <section id="events" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
            Upcoming <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-muted-foreground text-lg">Catch me live at these venues</p>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.2)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Date */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="inline-block bg-gradient-primary p-[2px] rounded-lg">
                    <div className="bg-background rounded-lg px-6 py-4">
                      <div className="font-display font-bold text-2xl text-primary">
                        {event.date}
                      </div>
                      <div className="text-sm text-muted-foreground">{event.year}</div>
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-grow">
                  <h3 className="font-display font-bold text-2xl mb-2">{event.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                {/* Ticket Button */}
                <Button 
                  className="flex-shrink-0 bg-gradient-primary hover:shadow-[0_0_20px_hsl(var(--glow-cyan)/0.5)] transition-all duration-300 font-display font-semibold"
                  onClick={() => window.open(event.ticketLink, '_blank')}
                >
                  Get Tickets
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Want me to play at your event?{" "}
            <a href="#contact" className="text-primary hover:underline font-semibold">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
