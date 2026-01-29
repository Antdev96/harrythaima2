import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: t.contact.addressValue,
      subtitle: t.contact.addressSub,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      content: t.contact.phoneValue,
      subtitle: t.contact.phoneSub,
    },
    {
      icon: Clock,
      title: t.contact.hours,
      content: t.contact.hoursValue,
      subtitle: t.contact.hoursSub,
    },
    {
      icon: Mail,
      title: t.contact.email,
      content: t.contact.emailValue,
      subtitle: t.contact.emailSub,
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            {t.contact.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground font-medium">{info.content}</p>
                  <p className="text-muted-foreground text-sm">{info.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.9887!2d0.1108547!3d38.8418678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129e1b1f8cdbaacf%3A0x38915f04220937a1!2sHary%20Thai!5e0!3m2!1ses!2ses!4v1705500000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Hary Thai"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
