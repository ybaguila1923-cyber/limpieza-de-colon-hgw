import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Respuestas Claras</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Preguntas Frecuentes sobre el Programa
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Resolvemos las dudas más habituales sobre la presentación, preparación, formas de pago y envíos en Panamá.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {BUSINESS_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'border-emerald-300 bg-emerald-50/30 shadow-xs' 
                    : 'border-stone-200 hover:border-emerald-200 bg-white'
                }`}
              >
                <button
                  id={`faq-toggle-btn-${index}`}
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-stone-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-emerald-600 text-white rotate-180' : 'bg-stone-100 text-stone-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-emerald-100/60 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra FAQ CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-stone-50 border border-stone-200 text-center space-y-3">
          <h4 className="font-bold text-stone-900 text-sm sm:text-base">
            ¿Tienes alguna otra duda que no aparezca aquí?
          </h4>
          <p className="text-xs text-stone-600">
            Escríbele directamente a Yamilka Batista por WhatsApp para recibir atención personalizada en minutos.
          </p>
          <a
            id="faq-ask-custom-btn"
            href={getWhatsAppUrl('Hola Yamilka, tengo una consulta adicional sobre el programa Fresh Drink Chang Jin Jin.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Consultar por WhatsApp (+507 6760-3578)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
