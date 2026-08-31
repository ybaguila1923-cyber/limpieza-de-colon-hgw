import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, X } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCallTooltip, setShowCallTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const floatingWhatsAppUrl = getWhatsAppUrl(
    'Hola Yamilka, estoy interesado(a) en el programa Fresh Drink Chang Jin Jin de 6 días y quisiera recibir información'
  );

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          id="floating-scroll-top-btn"
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 rounded-full bg-white text-stone-700 border border-stone-200 shadow-md hover:bg-stone-50 flex items-center justify-center transition-all hover:scale-110 focus:outline-hidden"
          aria-label="Volver al inicio"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        id="floating-call-btn"
        href={getPhoneCallUrl()}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white text-emerald-900 border border-emerald-300 shadow-lg hover:shadow-xl hover:scale-105 transition-all text-xs font-bold"
        title="Llamar directamente"
      >
        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
          <Phone className="w-3.5 h-3.5" />
        </div>
        <span>Llamar: {BUSINESS_DATA.phoneFormatted}</span>
      </a>

      {/* Floating WhatsApp Action with Active Pulse Badge */}
      <div className="relative pointer-events-auto group">
        
        {/* Tooltip on Desktop */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden md:block bg-stone-900 text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chatea con Yamilka Batista
        </div>

        {/* Pulsing Live Dot */}
        <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
        </span>

        {/* Main WhatsApp Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-700/50 hover:scale-108 hover:rotate-3 transition-all duration-300 focus:outline-hidden"
          aria-label="Abrir chat de WhatsApp con Yamilka Batista"
        >
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>

    </div>
  );
};
