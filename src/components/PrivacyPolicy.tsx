import React from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  if (language === "es") {
    return (
      <section id="privacidad" className="py-12 md:py-20 bg-background/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-display font-bold mb-4">Política de Protección de Datos</h2>
          <p className="mb-3 text-muted-foreground">
            En Hary Thai tratamos los datos personales con responsabilidad y conforme a la
            normativa vigente (RGPD y LOPDGDD). Los datos que nos facilite serán utilizados
            exclusivamente para gestionar reservas, comunicaciones y facturación cuando proceda.
          </p>
          <h3 className="font-semibold mt-4">Responsable</h3>
          <p className="text-muted-foreground">Hary Thai</p>
          <p className="text-muted-foreground">C/ Temple de sant, Telm, 19, 03700 Dénia (Alicante)</p>
          <p className="text-muted-foreground">Tel: 622459959</p>
          <h3 className="font-semibold mt-4">Finalidad</h3>
          <p className="text-muted-foreground">Gestión de reservas, atención al cliente y envío de información relevante.</p>
          <h3 className="font-semibold mt-4">Legitimación</h3>
          <p className="text-muted-foreground">Ejecución del contrato y el consentimiento del interesado cuando proceda.</p>
          <h3 className="font-semibold mt-4">Derechos</h3>
          <p className="text-muted-foreground">Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad dirigiéndose a nuestro correo info@harythai.com o por escrito a la dirección indicada.</p>
          <p className="text-muted-foreground mt-4">Si necesita más información sobre el tratamiento de datos, contacte con nosotros.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="privacidad" className="py-12 md:py-20 bg-background/5">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-display font-bold mb-4">Privacy Policy</h2>
        <p className="mb-3 text-muted-foreground">
          At Hary Thai we treat personal data responsibly and in accordance with applicable law (GDPR).
          The data you provide will be used exclusively to manage bookings, communications and invoicing when appropriate.
        </p>
        <h3 className="font-semibold mt-4">Controller</h3>
        <p className="text-muted-foreground">Hary Thai</p>
        <p className="text-muted-foreground">C/ Temple de sant, Telm, 19, 03700 Dénia (Alicante)</p>
        <p className="text-muted-foreground">Phone: 622459959</p>
        <h3 className="font-semibold mt-4">Purpose</h3>
        <p className="text-muted-foreground">Booking management, customer service and communications.</p>
        <h3 className="font-semibold mt-4">Legal basis</h3>
        <p className="text-muted-foreground">Execution of the contract and consent when applicable.</p>
        <h3 className="font-semibold mt-4">Rights</h3>
        <p className="text-muted-foreground">You can exercise your rights of access, rectification, erasure, opposition, restriction and portability by contacting info@harythai.com or the postal address above.</p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
