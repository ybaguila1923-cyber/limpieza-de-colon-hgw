import React, { useState } from 'react';
import { 
  HeartHandshake, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles,
  UserCheck
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const AboutOwner: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="sobre-nosotros" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image of Yamilka Batista */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-500 rounded-3xl rotate-2 opacity-20 filter blur-xs" />
              
              <div className="relative bg-emerald-50 rounded-3xl p-4 sm:p-5 border border-emerald-200/80 shadow-xl overflow-hidden">
                
                {/* Photo container */}
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center border border-emerald-100">
                  <img
                    id="about-yamilka-photo"
                    src={BUSINESS_DATA.images.owner}
                    alt={`Foto de ${BUSINESS_DATA.ownerName} - Detox y Salud Natural`}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className={`w-full h-full object-cover object-top ${imgError ? 'hidden' : 'block'}`}
                    onError={() => setImgError(true)}
                  />

                  {imgError && (
                    <div className="p-6 text-center space-y-3">
                      <div className="w-20 h-20 rounded-full bg-emerald-200 text-emerald-800 mx-auto flex items-center justify-center text-2xl font-bold">
                        YB
                      </div>
                      <h4 className="font-bold text-stone-900">{BUSINESS_DATA.ownerName}</h4>
                      <p className="text-xs text-stone-500">{BUSINESS_DATA.name}</p>
                      <span className="inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-3 py-1 rounded-full">
                        Santiago de Veraguas
                      </span>
                    </div>
                  )}

                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-emerald-100 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="font-extrabold text-stone-900 text-xs sm:text-sm">
                        {BUSINESS_DATA.ownerName}
                      </p>
                      <p className="text-[11px] text-emerald-700 font-semibold">
                        {BUSINESS_DATA.role}
                      </p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-md">
                      Verificado
                    </span>
                  </div>
                </div>

                {/* Location indicator under photo */}
                <div className="mt-4 flex items-center justify-between text-xs text-stone-600 px-1">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    Santiago de Veraguas, Panamá
                  </span>
                  <span className="text-emerald-700 font-bold">
                    Ventas Directas
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Close, Human Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
              <span>Conoce a tu asesora</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Hola, soy <span className="text-emerald-700">{BUSINESS_DATA.ownerName}</span>, fundadora de Detox y Salud Natural
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-600 leading-relaxed">
              <p>
                En <strong className="text-stone-800 font-semibold">Detox y Salud Natural</strong> creemos en el valor del trato humano, la cercanía y la honestidad en las ventas directas. Desde el corazón de <strong className="text-stone-800 font-semibold">Santiago de Veraguas</strong>, he creado este espacio para brindarte una atención transparente y ayudarte a conocer alternativas naturales y responsables para tu bienestar diario.
              </p>

              <p>
                Mi compromiso principal no es solo entregarte una caja del programa de 6 días con <span className="text-emerald-900 font-medium">Fresh Drink Chang Jin Jin de HGW</span>, sino acompañarte en cada paso de tu compra: desde responder todas tus preguntas iniciales, coordinar tu método de pago con total seguridad mediante <strong className="text-stone-800">Yappy</strong> o <strong className="text-stone-800">Banco General</strong>, hasta asegurarme de que tu paquete llegue a tus manos en cualquier punto de Panamá.
              </p>

              <p>
                La confianza se construye con hechos: producto original sellado, comunicación constante y un servicio que siempre pone a las personas en primer lugar.
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Trato directo sin intermediarios</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Envíos coordinados a todo Panamá</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pagos rápidos por Yappy y Banco General</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Asesoría respetuosa y transparente</span>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                id="about-whatsapp-cta"
                href={getWhatsAppUrl('Hola Yamilka, leí sobre ti en la página de Detox y Salud Natural y quisiera consultarte sobre el programa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar con Yamilka</span>
              </a>

              <a
                id="about-call-cta"
                href={getPhoneCallUrl()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Llamar al {BUSINESS_DATA.phoneFormatted}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
