import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1">
      <Button
        variant={language === 'es' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('es')}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          language === 'es' 
            ? 'bg-primary text-primary-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        ES
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          language === 'en' 
            ? 'bg-primary text-primary-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
