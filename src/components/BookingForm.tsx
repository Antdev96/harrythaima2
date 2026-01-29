import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { useLanguage } from "@/i18n/LanguageContext";

// ============================================
// CONFIGURACIÓN DE WHATSAPP
// ============================================
// Reemplaza este número con el número real de WhatsApp del negocio
// Formato: código de país + número sin + ni espacios
// Ejemplo para España: "34612345678"
const WHATSAPP_NUMBER = "34622459959";
// ============================================

const servicesData = [
  { id: "thai", duration: "60min", price: "50€" },
  { id: "ayurvedic", duration: "60min", price: "65€" },
  { id: "pindas", duration: "60min", price: "65€" },
  { id: "relajante", duration: "60min", price: "50€" },
  { id: "deportivo", duration: "60min", price: "55€" },
  { id: "4-manos", duration: "60min", price: "90€" },
  { id: "reflexologia", duration: "45min", price: "40€" },
  { id: "30-min", duration: "30min", price: "30€" },
  { id: "facial", duration: "30min", price: "30€" },
  { id: "hombros", duration: "20min", price: "25€" },
  { id: "cuello", duration: "20min", price: "25€" },
  { id: "espalda", duration: "30min", price: "35€" },
  { id: "piernas", duration: "30min", price: "30€" },
  { id: "pies", duration: "20min", price: "25€" },
];

const timeSlots = [
  "10:00", "11:00", "12:00", "13:00", 
  "16:00", "17:00", "18:00", "19:00"
];

const BookingForm = () => {
  const { t, language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    time: "",
    message: "",
  });

  const allServices = [
    ...t.services.items.map((item, index) => ({
      id: servicesData[index]?.id || `service-${index}`,
      name: item.name,
      duration: servicesData[index]?.duration || "60min",
      price: servicesData[index]?.price || "50€"
    })),
    ...t.services.focusedItems.map((item, index) => ({
      id: servicesData[7 + index]?.id || `focused-${index}`,
      name: item.name,
      duration: servicesData[7 + index]?.duration || "30min",
      price: servicesData[7 + index]?.price || "30€"
    }))
  ];

  const getServiceName = (serviceId: string) => {
    const service = allServices.find(s => s.id === serviceId);
    return service?.name || serviceId;
  };

  const dateLocale = language === 'es' ? es : enUS;

  const buildWhatsAppMessage = () => {
    const serviceName = getServiceName(formData.service);
    const serviceInfo = allServices.find(s => s.id === formData.service);
    const dateStr = date 
      ? format(date, language === 'es' ? "EEEE d 'de' MMMM" : "EEEE, MMMM d", { locale: dateLocale }) 
      : language === 'es' ? "Por confirmar" : "To be confirmed";
    
    const message = language === 'es' 
      ? `¡Hola! 👋 Me gustaría agendar una cita en Hary Thai.

📋 *Detalles de la cita:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
${formData.email ? `• Email: ${formData.email}` : ""}
• Servicio: ${serviceName} (${serviceInfo?.duration} - ${serviceInfo?.price})
• Fecha preferida: ${dateStr}
• Hora preferida: ${formData.time}
${formData.message ? `\n💬 Mensaje: ${formData.message}` : ""}

¡Gracias!`
      : `Hello! 👋 I would like to schedule an appointment at Hary Thai.

📋 *Appointment details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
${formData.email ? `• Email: ${formData.email}` : ""}
• Service: ${serviceName} (${serviceInfo?.duration} - ${serviceInfo?.price})
• Preferred date: ${dateStr}
• Preferred time: ${formData.time}
${formData.message ? `\n💬 Message: ${formData.message}` : ""}

Thank you!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppSubmit = () => {
    if (!date || !formData.name || !formData.phone || !formData.service || !formData.time) {
      toast.error(language === 'es' 
        ? "Por favor, completa todos los campos obligatorios" 
        : "Please fill in all required fields");
      return;
    }

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    toast.success(language === 'es' 
      ? "¡Redirigiendo a WhatsApp para confirmar tu cita!" 
      : "Redirecting to WhatsApp to confirm your appointment!");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="reservar" className="py-12 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center shadow-card border-primary/20">
            <CardContent className="py-8 md:py-12">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                {language === 'es' ? "¡Solicitud Enviada!" : "Request Sent!"}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm md:text-base px-2">
                {language === 'es' 
                  ? "Te hemos redirigido a WhatsApp para confirmar tu cita. Si no se abrió automáticamente, haz clic en el botón de abajo."
                  : "We have redirected you to WhatsApp to confirm your appointment. If it didn't open automatically, click the button below."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className="gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {language === 'es' ? "Abrir WhatsApp" : "Open WhatsApp"}
                </Button>
                <Button 
                  variant="elegant" 
                  size="lg"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", service: "", time: "", message: "" });
                    setDate(undefined);
                  }}
                >
                  {language === 'es' ? "Hacer otra reserva" : "Make another booking"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="reservar" className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            {t.booking.title}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-foreground mt-3 mb-4">
            {t.booking.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {t.booking.subtitle}
          </p>
        </div>

        <form className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - Calendar */}
            <Card className="shadow-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 font-display text-lg md:text-xl">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  {t.booking.selectDate}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={dateLocale}
                    disabled={(date) => {
                      const now = new Date();
                      return date < now;
                    }}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="flex items-center gap-2 text-sm md:text-base">
                    <Clock className="w-4 h-4 text-primary" />
                    {t.booking.selectTime} *
                  </Label>
                  <Select 
                    value={formData.time} 
                    onValueChange={(value) => handleInputChange("time", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t.booking.selectTime} />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="px-2 py-1 text-xs text-muted-foreground font-medium">
                        {t.booking.morning}
                      </div>
                      {timeSlots.slice(0, 4).map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                      <div className="px-2 py-1 text-xs text-muted-foreground font-medium mt-2">
                        {t.booking.afternoon}
                      </div>
                      {timeSlots.slice(4).map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Form */}
            <Card className="shadow-card border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 font-display text-lg md:text-xl">
                  <User className="w-5 h-5 text-primary" />
                  {language === 'es' ? "Tus Datos" : "Your Details"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base">{t.booking.name} *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder={t.booking.name}
                      className="pl-10"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm md:text-base">{t.booking.phone} *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="pl-10"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm md:text-base">{t.booking.selectService} *</Label>
                  <Select 
                    value={formData.service} 
                    onValueChange={(value) => handleInputChange("service", value)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t.booking.selectService} />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="px-2 py-1 text-xs text-muted-foreground font-medium">
                        {t.services.mainServices}
                      </div>
                      {allServices.slice(0, 7).map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.duration} - {service.price}
                        </SelectItem>
                      ))}
                      <div className="px-2 py-1 text-xs text-muted-foreground font-medium mt-2">
                        {t.services.focusedServices}
                      </div>
                      {allServices.slice(7).map((service) => (
                        <SelectItem key={service.id} value={service.id}>
                          {service.name} - {service.duration} - {service.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm md:text-base">{t.booking.comments}</Label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Textarea
                      id="message"
                      placeholder={t.booking.commentsPlaceholder}
                      className="pl-10 min-h-[80px]"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  variant="whatsapp" 
                  size="xl" 
                  type="button" 
                  className="w-full mt-4 gap-2"
                  onClick={handleWhatsAppSubmit}
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.booking.scheduleButton}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  {language === 'es' 
                    ? "* Campos obligatorios. Al enviar, se abrirá WhatsApp con tu solicitud."
                    : "* Required fields. When you submit, WhatsApp will open with your request."}
                </p>
              </CardContent>
            </Card>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
