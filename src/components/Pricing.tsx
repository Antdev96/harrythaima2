import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";

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
          <div className="p-6 border rounded-md">
            <h3 className="font-semibold mb-3">{language === 'es' ? 'Individual' : 'Individual'}</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>30 min — 30€</li>
              <li>60 min — 50€</li>
              <li>90 min — 75€</li>
            </ul>
          </div>

          <div className="p-6 border rounded-md">
            <h3 className="font-semibold mb-3">{language === 'es' ? 'Parejas' : 'Couples'}</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>30 min — 55€</li>
              <li>60 min — 95€</li>
              <li>90 min — 145€</li>
            </ul>
          </div>

          <div className="p-6 border rounded-md">
            <h3 className="font-semibold mb-3">Ayurvedic masaje</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>60 min — 65€</li>
              <li>90 min — 85€</li>
            </ul>
          </div>

          <div className="p-6 border rounded-md">
            <h3 className="font-semibold mb-3">Pinda cliente</h3>
            <ul className="text-muted-foreground space-y-1">
              <li>30 min — 35€</li>
              <li>60 min — 65€</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
