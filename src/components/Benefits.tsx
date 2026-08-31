import React from 'react';
import { 
  CupSoda, 
  PackageCheck, 
  CalendarDays, 
  HeartHandshake, 
  Truck, 
  Check, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Benefits: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    CupSoda,
    PackageCheck,
    CalendarDays,
    HeartHandshake,
    Truck,
  };

  return (
    <section id="beneficios" className="py-16 sm:py-24 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ventajas del Programa</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            ¿Por qué elegir el programa de 6 días con Fresh Drink Chang Jin Jin?
          </h2>

          <p className="text-base text-stone-600 leading-relaxed">
            Una propuesta práctica, cómoda y transparente diseñada para integrarse sin complicaciones en tu rutina diaria desde cualquier lugar de Panamá.
          </p>
        </div>

        {/* 5 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_DATA.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.iconName] || CupSoda;
            const isFeatured = index === 0;

            return (
              <div
                key={benefit.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex flex-col justify-between ${
                  isFeatured 
                    ? 'border-emerald-300 ring-2 ring-emerald-500/20 shadow-md md:col-span-2 lg:col-span-1' 
                    : 'border-stone-200/80 shadow-xs hover:border-emerald-200'
                }`}
              >
                <div>
                  {/* Top Badge Highlight */}
                  {benefit.highlight && (
                    <span className="inline-block bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-200/70 mb-4">
                      {benefit.highlight}
                    </span>
                  )}

                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100/70 text-emerald-800 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Benefit Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors mb-2.5">
                    {benefit.title}
                  </h3>

                  {/* Benefit Description (Ethical & Responsible) */}
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom confirmation marker */}
                <div className="pt-5 mt-5 border-t border-stone-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Beneficio garantizado en tu compra</span>
                </div>
              </div>
            );
          })}

          {/* Interactive CTA Card inside grid */}
          <div className="bg-gradient-to-br from-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-7 text-white shadow-lg flex flex-col justify-between">
            <div className="space-y-3">
              <span className="inline-block bg-emerald-600/60 text-emerald-100 text-[11px] font-bold px-2.5 py-1 rounded-full">
                Asesoría Gratuita
              </span>
              <h3 className="text-lg sm:text-xl font-bold leading-tight">
                ¿Tienes dudas sobre cómo tomarlo?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Yamilka Batista te orienta personalmente por WhatsApp antes de tu compra para que sigas el programa con total confianza.
              </p>
            </div>

            <a
              id="benefits-whatsapp-cta"
              href={getWhatsAppUrl('Hola Yamilka, quiero saber más sobre los beneficios y cómo tomar el programa Fresh Drink Chang Jin Jin.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-emerald-900 font-bold text-xs sm:text-sm hover:bg-emerald-50 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-700" />
              <span>Preguntar a Yamilka</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
