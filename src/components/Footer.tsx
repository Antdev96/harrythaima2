import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">Hary Thai</h3>
            <p className="text-background/70 leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-background/70 hover:text-background transition-colors">
                {t.nav.home}
              </a>
              <a href="#servicios" className="text-background/70 hover:text-background transition-colors">
                {t.nav.services}
              </a>
              <a href="#sobre-nosotros" className="text-background/70 hover:text-background transition-colors">
                {t.nav.about}
              </a>
              <a href="#reservar" className="text-background/70 hover:text-background transition-colors">
                {t.nav.book}
              </a>
              <Link to="/privacy" className="text-background/70 hover:text-background transition-colors">
                {t.nav.privacy}
              </Link> 
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t.footer.contactTitle}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>C/ Temple de sant, Telm, 19, 03700 Dénia</span>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+34622459959" className="hover:text-background">622459959</a>
              </div>
              <div className="flex items-center gap-2 text-background/70">
                <Clock className="w-4 h-4" />
                <span>{t.contact.hoursValue}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} Hary Thai. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
