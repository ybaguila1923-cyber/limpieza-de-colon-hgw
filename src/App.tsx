import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { ProductDetail } from './components/ProductDetail';
import { OrderCalculator } from './components/OrderCalculator';
import { AboutOwner } from './components/AboutOwner';
import { Testimonials } from './components/Testimonials';
import { PaymentMethods } from './components/PaymentMethods';
import { ShippingInfo } from './components/ShippingInfo';
import { LocationSchedule } from './components/LocationSchedule';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50/40 text-stone-800 font-sans">
      {/* 1. Encabezado y Navegación Sticky */}
      <Header />

      {/* 2. Main Content */}
      <main className="grow">
        {/* Sección Hero de Alto Impacto */}
        <Hero />

        {/* Barra de Confianza & Pilares */}
        <TrustBadges />

        {/* Sección de Beneficios Comerciales Responsables */}
        <Benefits />

        {/* Sección ¿Cómo Funciona? en 3 Pasos */}
        <HowItWorks />

        {/* Sección Detalle del Producto (HGW Fresh Drink) */}
        <ProductDetail />

        {/* Asistente Interactivo de Pedidos por WhatsApp */}
        <OrderCalculator />

        {/* Sección Sobre Detox y Salud Natural (Yamilka Batista) */}
        <AboutOwner />

        {/* Sección de Testimonios y Reseñas de Ejemplo */}
        <Testimonials />

        {/* Sección de Métodos de Pago (Yappy & Banco General) */}
        <PaymentMethods />

        {/* Sección de Envíos a Todo Panamá */}
        <ShippingInfo />

        {/* Sección de Ubicación y Horarios (Santiago de Veraguas) */}
        <LocationSchedule />

        {/* Sección Preguntas Frecuentes (FAQ) */}
        <Faq />

        {/* Sección CTA Final de Alta Conversión */}
        <FinalCta />
      </main>

      {/* 3. Botones Flotantes de Acción Rápida (WhatsApp y Llamada) */}
      <FloatingActions />

      {/* 4. Pie de Página con Avisos Legales y SEO */}
      <Footer />
    </div>
  );
}
