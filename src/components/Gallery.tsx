import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "DJ performing at outdoor festival during sunset" },
    { src: gallery2, alt: "Close-up of DJ equipment and turntables" },
    { src: gallery3, alt: "Energetic crowd at electronic music concert" },
    { src: gallery4, alt: "Professional DJ studio setup with lighting" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">Moments from my journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
