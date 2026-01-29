import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PRICING_CATEGORIES } from "@/lib/prices";

const Pricing = () => {
  const { language } = useLanguage();

  return (
    <section id="precios" className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold">{language === 'es' ? 'Precios' : 'Prices'}</h2>
          <p className="text-muted-foreground mt-2">{language === 'es' ? 'Nuestros precios' : 'Our prices'}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PRICING_CATEGORIES.map((cat) => (
            <div className="p-6 border rounded-md" key={cat.key}>
              <h3 className="font-semibold mb-3">{language === 'es' ? cat.title.es : cat.title.en}</h3>
              <ul className="text-muted-foreground space-y-1">
                {cat.items.map((i) => (
                  <li key={i.label}>{i.label} — {i.price}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
