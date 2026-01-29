import { CheckCircle } from "lucide-react";
import spaInterior1 from "@/assets/spa-interior-1.jpg";
import spaInterior2 from "@/assets/spa-interior-2.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-nosotros" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side - Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={spaInterior1} 
                  alt="Interior del spa Hary Thai" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden shadow-card mt-6 md:mt-8">
                <img 
                  src={spaInterior2} 
                  alt="Instalaciones de Hary Thai" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Decorative Card */}
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2 bg-card p-4 md:p-6 rounded-xl shadow-elegant border border-border">
              <div className="text-center">
                <span className="text-3xl md:text-4xl font-display font-bold text-primary">10+</span>
                <p className="text-muted-foreground text-xs md:text-sm mt-1">{t.about.experience}</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8 mt-8 lg:mt-0">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              {t.about.title}
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mt-3 mb-4 md:mb-6">
              {t.about.subtitle}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {t.about.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {t.about.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm md:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
