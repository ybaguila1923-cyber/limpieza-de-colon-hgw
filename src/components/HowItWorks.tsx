import React from 'react';
import { MessageCircle, Smartphone, Package, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Contacta a Yamilka por WhatsApp',
      desc: 'Pulsa el botón de WhatsApp o escribe al +507 6760-3578 indicando tu interés en el programa de 6 días y tu ubicación en Panamá.',
      detail: 'Recibes respuesta directa y confirmación de disponibilidad inmediata.',
      icon: MessageCircle,
      badge: 'Paso 1: Contacto',
    },
    {
      stepNumber: '02',
      title: 'Paga con Yappy o Banco General',
      desc: `Realiza tu pago vía Yappy al número ${BUSINESS_DATA.yappy.formattedPhone} a nombre de YAMILKA BATISTA o por transferencia bancaria.`,
      detail: 'Envías tu captura de pago por WhatsApp para validar tu pedido.',
      icon: Smartphone,
      badge: 'Paso 2: Pago Seguro',
    },
    {
      stepNumber: '03',
      title: 'Recibe tu Programa de 6 Días',
      desc: 'Coordinamos la entrega inmediata en Santiago de Veraguas o despachamos tu paquete por encomienda a cualquier provincia de Panamá.',
      detail: 'Recibes tu caja con 6 sobres lista para preparar en 500 ml de agua.',
      icon: Package,
      badge: 'Paso 3: Envío Nacional',
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            Proceso de Compra Sencillo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            ¿Cómo funciona tu pedido en 3 pasos?
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Sin formularios complicados ni procesos engorrosos. Todo es coordinado de forma directa, rápida y transparente por WhatsApp.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-emerald-50/30 rounded-3xl p-7 sm:p-8 border border-emerald-100/90 shadow-xs hover:shadow-lg hover:border-emerald-300 transition-all group flex flex-col justify-between"
              >
                {/* Step Pill */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-emerald-300 group-hover:text-emerald-600 transition-colors">
                      {step.stepNumber}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white text-emerald-700 border border-emerald-200/80 flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-950">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-stone-600 leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Step Detail Footer */}
                <div className="pt-4 border-t border-emerald-100/80 flex items-start gap-2 text-xs text-emerald-900 font-medium bg-white/70 p-3 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Fast Action Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">
              ¿Listo para comenzar el paso 1 hoy mismo?
            </h4>
            <p className="text-xs sm:text-sm text-emerald-100">
              Yamilka está disponible en WhatsApp para atender tus dudas y preparar tu despacho.
            </p>
          </div>

          <a
            id="how-it-works-cta-btn"
            href={getWhatsAppUrl('Hola Yamilka, leí los 3 pasos y quiero iniciar mi pedido del programa de 6 días.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-emerald-900 font-extrabold text-sm hover:bg-emerald-50 hover:scale-103 transition-all shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>Iniciar mi Pedido por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
