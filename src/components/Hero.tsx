import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Truck, 
  CheckCircle2, 
  CalendarDays, 
  Droplets,
  MapPin,
  Leaf
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroWhatsAppUrl = getWhatsAppUrl(
    'Hola Yamilka, quiero comenzar mi programa de 6 días de Fresh Drink Chang Jin Jin en Santiago de Veraguas / Panamá. ¿Me brindas los detalles para pedirlo?'
  );

  return (
    <section 
      id="hero" 
      className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-white via-emerald-50/40 to-emerald-100/30"
    >
      {/* Background Decorative Blobs */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copywriting & High Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Location & Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-emerald-900 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <MapPin className="w-3.5 h-3.5 text-emerald-700" />
              <span>Santiago de Veraguas, Panamá • Envíos Nacionales</span>
            </div>

            {/* Main Headline (Benefit + Location) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              Limpieza de colon natural en <span className="text-emerald-700 underline decoration-emerald-400 decoration-wavy decoration-2">6 días</span> en Santiago de Veraguas
            </h1>

            {/* Responsible Subtitle */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Conoce el programa digestivo con la <strong className="text-stone-800 font-semibold">Bebida Fresh Drink Chang Jin Jin de HGW en polvo</strong>: una práctica fórmula en 6 sobres individuales para preparar 1 sobre diario en 500 ml de agua. Acompañamiento personalizado directo con <span className="font-semibold text-emerald-800">Yamilka Batista</span>.
            </p>

            {/* Key Quick Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-emerald-200/80 text-xs font-semibold text-stone-700 shadow-xs">
                <CalendarDays className="w-3.5 h-3.5 text-emerald-600" />
                Programa de 6 Días (6 Sobres)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-emerald-200/80 text-xs font-semibold text-stone-700 shadow-xs">
                <Droplets className="w-3.5 h-3.5 text-teal-600" />
                1 sobre en 500 ml de agua
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-emerald-200/80 text-xs font-semibold text-stone-700 shadow-xs">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                Envíos a todo Panamá
              </span>
            </div>

            {/* Primary CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-primary-cta-whatsapp"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base sm:text-lg font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-lg shadow-emerald-700/30 hover:shadow-xl hover:shadow-emerald-700/40 hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <MessageCircle className="w-6 h-6 text-emerald-100" />
                <span>QUIERO MI PROGRAMA DE 6 DÍAS</span>
              </a>

              <a
                id="hero-call-cta"
                href={getPhoneCallUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl text-sm sm:text-base font-bold text-emerald-900 bg-white hover:bg-emerald-50 border-2 border-emerald-300/80 shadow-xs hover:border-emerald-500 transition-all text-center"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Llamar (+507 6760-3578)</span>
              </a>
            </div>

            {/* Direct Trust Proof Note */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-stone-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pago seguro por <strong>YAPPY</strong> o <strong>Banco General</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Venta Directa Original HGW</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Atención humana y cercana</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Product Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-emerald-950/5 border border-emerald-100 ring-1 ring-emerald-500/10">
              
              {/* Product Badge Overlay */}
              <div className="absolute top-4 right-4 z-20 bg-emerald-700 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                6 Días • 6 Sobres
              </div>

              {/* Product Image Container */}
              <div className="relative w-full aspect-square bg-gradient-to-b from-emerald-50/80 to-stone-100 rounded-2xl overflow-hidden flex items-center justify-center border border-emerald-100/80 mb-4 group">
                
                {/* Real Image from Google Drive */}
                <img
                  id="hero-product-img"
                  src={BUSINESS_DATA.images.product}
                  alt="Bebida Digestiva Fresh Drink Chang Jin Jin de HGW en Polvo - Caja con 6 sobres"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className={`w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500 ${imageError ? 'hidden' : 'block'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />

                {/* Fallback Graphic if link blocked */}
                {imageError && (
                  <div className="text-center p-6 space-y-3">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                      <Leaf className="w-8 h-8" />
                    </div>
                    <p className="font-bold text-stone-800 text-sm">
                      {BUSINESS_DATA.productName}
                    </p>
                    <p className="text-xs text-stone-500">
                      Caja con 6 sobres individuales de polvo para preparar en agua
                    </p>
                    <span className="inline-block bg-emerald-600 text-white text-[10px] font-bold px-2 py-1 rounded-md">
                      HGW Original
                    </span>
                  </div>
                )}

                {/* Preparation Callout Floating Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs rounded-xl p-2.5 border border-emerald-100 shadow-sm flex items-center gap-3 text-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 font-extrabold">
                    1/D
                  </div>
                  <div className="text-left text-stone-700 leading-tight">
                    <p className="font-bold text-stone-900 text-[11px] sm:text-xs">Fórmula en Polvo</p>
                    <p className="text-[10px] text-stone-500">1 sobre al día disuelto en 500 ml de agua</p>
                  </div>
                </div>
              </div>

              {/* Box Content Specs */}
              <div className="space-y-2.5 pt-1">
                <div className="flex items-center justify-between text-xs text-stone-600 pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-900">Presentación:</span>
                  <span className="text-stone-700">Caja con 6 sobres en polvo</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-600 pb-2 border-b border-stone-100">
                  <span className="font-semibold text-stone-900">Marca:</span>
                  <span className="text-stone-700">HGW (Health Green World)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span className="font-semibold text-stone-900">Distribución:</span>
                  <span className="text-emerald-700 font-medium">Yamilka Batista (Santiago de Veraguas)</span>
                </div>
              </div>

              {/* Quick WhatsApp Action inside Card */}
              <a
                id="hero-card-direct-link"
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Consultar disponibilidad por WhatsApp</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
