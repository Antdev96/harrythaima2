import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#inicio" },
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.about, href: "#sobre-nosotros" },
    { label: t.nav.contact, href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display font-bold text-primary">
              Hary Thai
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <a href="tel:+34622459959" aria-label="Llamar 622459959" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">622459959</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <a href="#reservar">{t.nav.book}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="#reservar">{t.nav.book}</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
