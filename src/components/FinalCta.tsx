import React from 'react';
import { MessageCircle, Phone, Sparkles, ShieldCheck, Truck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const FinalCta: React.FC = () => {
  const finalWhatsAppUrl = getWhatsAppUrl(
    'Hola Yamilka, quiero comenzar mi programa de 6 días con Fresh Drink Chang Jin Jin. ¿Cómo coordinamos el pago y la entrega?'
  );

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-950 text-white relative overflow-hidden">
      
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-700/80 border border-emerald-500/60 text-emerald-100 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
          <Sparkles className="w-4 h-4 text-emerald-300" />
          <span>¡Da el primer paso hacia tu bienestar hoy!</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
          ¿Quieres comenzar tu programa de <span className="text-emerald-300 underline decoration-emerald-400 decoration-wavy decoration-2">6 días</span>?
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Pide tu caja de <strong className="text-white">Fresh Drink Chang Jin Jin de HGW</strong> (6 sobres individuales) con atención personalizada de <span className="text-white font-semibold">Yamilka Batista</span>. Envíos directos a todo Panamá y pagos por Yappy.
        </p>

        {/* Big Conversion Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            id="final-cta-whatsapp"
            href={finalWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-2xl bg-white text-emerald-950 hover:bg-emerald-50 font-black text-base sm:text-lg shadow-xl shadow-emerald-950/40 hover:shadow-2xl hover:scale-103 transition-all duration-200"
          >
            <MessageCircle className="w-6 h-6 text-emerald-700" />
            <span>PEDIR POR WHATSAPP</span>
          </a>

          <a
            id="final-cta-call"
            href={getPhoneCallUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4.5 rounded-2xl bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold text-base border border-emerald-600/80 shadow-lg hover:scale-102 transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-emerald-300" />
            <span>LLAMAR AHORA (+507 6760-3578)</span>
          </a>
        </div>

        {/* Guarantees row */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm text-emerald-200/90 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Envíos a todo Panamá</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Yappy: 67603578 (Yamilka Batista)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Santiago de Veraguas, Panamá</span>
          </div>
        </div>

      </div>
    </section>
  );
};
