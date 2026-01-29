import { Button } from "@/components/ui/button";
import { MapPin, Clock, Star } from "lucide-react";
import heroImage from "@/assets/hero-massage.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Masaje tailandés tradicional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 fill-primary" />
            <span className="text-sm font-medium">{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            {t.hero.title.split(' ').slice(0, 3).join(' ')}
            <span className="text-primary block mt-2">{t.hero.title.split(' ').slice(3).join(' ')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Info Pills */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>{t.hero.location}</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>{t.hero.hours}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#reservar">{t.hero.bookNow}</a>
            </Button>
            <Button variant="elegant" size="xl" asChild>
              <a href="#servicios">{t.hero.viewServices}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
