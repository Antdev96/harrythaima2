import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Sparkles, Gift } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Service data with prices
const mainServicesData = [
  { id: 1, duration: 60, price: "50€", popular: true },
  { id: 2, duration: 60, price: "55€", popular: false },
  { id: 3, duration: 60, price: "55€", popular: false },
  { id: 4, duration: 60, price: "45€", popular: false },
  { id: 5, duration: 60, price: "50€", popular: true },
  { id: 6, duration: 60, price: "85€", popular: true },
  { id: 7, duration: 45, price: "40€", popular: false },
];

const focusedServicesData = [
  { id: 8, duration: 30, price: "30€" },
  { id: 9, duration: 30, price: "25€" },
  { id: 10, duration: 20, price: "20€" },
  { id: 11, duration: 20, price: "20€" },
  { id: 12, duration: 30, price: "30€" },
  { id: 13, duration: 25, price: "25€" },
  { id: 14, duration: 20, price: "20€" },
];

// Bonos data
const bonosData = [
  { id: 1, serviceName: "Masaje Thai", originalPrice: 250, bonoPrice: 225 },
  { id: 2, serviceName: "Masaje Relajante", originalPrice: 225, bonoPrice: 200 },
  { id: 3, serviceName: "Masaje Deportivo", originalPrice: 250, bonoPrice: 225 },
  { id: 4, serviceName: "Reflexología Podal", originalPrice: 200, bonoPrice: 175 },
];

const Services = () => {
  const { t } = useLanguage();

  const mainServices = mainServicesData.map((service, index) => ({
    ...service,
    name: t.services.items[index]?.name || "",
    description: t.services.items[index]?.description || "",
  }));

  const focusedServices = focusedServicesData.map((service, index) => ({
    ...service,
    name: t.services.focusedItems?.[index]?.name || "",
    description: t.services.focusedItems?.[index]?.description || "",
  }));

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            {t.services.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            {t.services.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            {t.services.mainServices}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mainServices.map((service, index) => (
              <Card 
                key={service.id}
                className="group relative bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {service.popular && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      <Sparkles className="w-3 h-3" />
                      {t.services.popular}
                    </div>
                  )}
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors pr-16">
                    {service.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{service.duration} {t.services.duration}</span>
                    </div>
                    <span className="text-xl font-display font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                  <Button variant="elegant" className="w-full mt-4" asChild>
                    <a href="#reservar">{t.services.book}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Focused Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-foreground mb-8 text-center">
            {t.services.focusedServices}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {focusedServices.map((service, index) => (
              <Card 
                key={service.id}
                className="group bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-4 text-center">
                  <h4 className="text-base font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {service.name}
                  </h4>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mb-2">
                    <Clock className="w-3 h-3" />
                    <span>{service.duration} {t.services.duration}</span>
                  </div>
                  <span className="text-lg font-display font-bold text-primary">
                    {service.price}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bonos Section */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
              <Gift className="w-5 h-5" />
              <span className="font-medium">{t.bonos?.title || "Bonos de Sesiones"}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              {t.bonos?.subtitle || "Ahorra con nuestros bonos de 5 sesiones"}
            </h3>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonosData.map((bono) => (
              <Card key={bono.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                    {bono.serviceName}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {t.bonos?.sessions || "5 sesiones"}
                  </p>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground line-through">{bono.originalPrice}€</span>
                  </div>
                  <div className="text-3xl font-display font-bold text-primary mb-2">
                    {bono.bonoPrice}€
                  </div>
                  <div className="inline-block bg-accent/30 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full mb-4">
                    {t.bonos?.savings || "Ahorro"}: {bono.originalPrice - bono.bonoPrice}€
                  </div>
                  <Button variant="elegant" className="w-full" asChild>
                    <a href="#reservar">{t.bonos?.buy || "Comprar Bono"}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
