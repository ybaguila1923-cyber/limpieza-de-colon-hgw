import React from 'react';
import { MapPin, Clock, MessageCircle, Phone, Navigation, Sparkles, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const LocationSchedule: React.FC = () => {
  return (
    <section id="ubicacion-y-horarios" className="py-16 sm:py-24 bg-stone-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Punto de Distribución y Horarios</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Ubicación en Santiago de Veraguas y Horarios de Atención
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Coordinamos entregas locales en Santiago y despachos a todo Panamá con atención personalizada vía WhatsApp.
          </p>
        </div>

        {/* 2 Column Layout: Schedule & Maps Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Configurable Schedule & Contact Info */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-stone-900">
                    Horarios de Atención WhatsApp
                  </h3>
                  <p className="text-xs text-stone-500">
                    Atención directa con {BUSINESS_DATA.ownerName}
                  </p>
                </div>
              </div>

              {/* Schedule Table (Configurable in content.ts) */}
              <div className="space-y-2.5">
                {BUSINESS_DATA.schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-100 text-xs sm:text-sm gap-1"
                  >
                    <div className="font-bold text-stone-800">
                      {item.days}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-700 font-semibold">{item.hours}</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-medium px-2 py-0.5 rounded-md hidden sm:inline-block">
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Admin Note regarding schedule modification */}
              <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/60 text-[11px] text-emerald-900 leading-tight">
                <p>
                  💡 <strong>Nota para Yamilka:</strong> Estos horarios se pueden actualizar fácilmente en cualquier momento editando el archivo <code className="bg-emerald-200/70 px-1 py-0.5 rounded font-mono">src/data/content.ts</code>.
                </p>
              </div>

              {/* Location details */}
              <div className="space-y-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-stone-900">{BUSINESS_DATA.city}, {BUSINESS_DATA.province}, {BUSINESS_DATA.country}</p>
                    <p className="text-stone-500 text-xs mt-0.5">{BUSINESS_DATA.addressNote}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick action buttons */}
            <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row gap-3">
              <a
                id="schedule-whatsapp-btn"
                href={getWhatsAppUrl('Hola Yamilka, quiero consultar sobre entregas en Santiago de Veraguas.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                id="schedule-call-btn"
                href={getPhoneCallUrl()}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>{BUSINESS_DATA.phoneFormatted}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Prepared Placeholder & Interactive Area */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-stone-900">
                    Mapa de Ubicación: Santiago de Veraguas
                  </h3>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  Veraguas, Panamá
                </span>
              </div>

              {/* Prepared Google Maps Container */}
              <div className="relative w-full aspect-video sm:aspect-4/3 rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden flex flex-col items-center justify-center p-6 text-center space-y-3 group">
                
                {/* Visual Map graphic background */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#15803d_1px,transparent_1px)] [background-size:16px_16px]" />
                
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7" />
                </div>

                <div className="relative z-10 max-w-sm space-y-1">
                  <p className="font-extrabold text-stone-900 text-sm sm:text-base">
                    Santiago de Veraguas, Panamá
                  </p>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    Espacio preparado para incrustar el mapa interactivo de Google Maps una vez confirmada la dirección física de la administradora.
                  </p>
                </div>

                <a
                  id="open-google-maps-link"
                  href="https://www.google.com/maps/place/Santiago+de+Veraguas,+Panama"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white border border-stone-300 text-xs font-bold text-stone-800 hover:bg-stone-50 shadow-xs transition-colors"
                >
                  <span>Ver Santiago en Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-500" />
                </a>

              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                * Para entregas en mano en Santiago de Veraguas, coordinamos el punto de encuentro conveniente contigo a través de WhatsApp.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
