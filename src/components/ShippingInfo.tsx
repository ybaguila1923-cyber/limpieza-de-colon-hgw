import React from 'react';
import { Truck, MapPin, Clock, ShieldCheck, MessageCircle, CheckCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ShippingInfo: React.FC = () => {
  const provinces = [
    'Santiago de Veraguas (Local)',
    'Ciudad de Panamá y Panamá Oeste',
    'Chiriquí (David y distritos)',
    'Azuero (Herrera y Los Santos)',
    'Coclé (Penonomé, Aguadulce)',
    'Colón, Bocas del Toro y Darién',
  ];

  return (
    <section className="py-16 sm:py-20 bg-emerald-900 text-white relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-emerald-700/30 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-teal-700/30 blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-emerald-200 text-xs font-bold uppercase tracking-wider border border-emerald-700">
              <Truck className="w-3.5 h-3.5" />
              <span>Logística y Cobertura Nacional</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Envíos a todo Panamá desde Santiago de Veraguas
            </h2>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed">
              Despachamos tu programa de 6 días con rapidez y cuidado a través de las principales agencias de transporte y encomiendas de Panamá.
            </p>

            {/* Informative Highlights Box */}
            <div className="p-5 rounded-2xl bg-emerald-800/60 border border-emerald-700/80 space-y-3">
              <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>¿Cómo se coordina tu envío?</span>
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
                Los detalles exactos de <strong>costo de envío</strong>, <strong>agencia de transporte</strong> (UnoExpress, Ferguson, Flete Chavale u otra de tu preferencia) y <strong>tiempo estimado de entrega</strong> se confirman directamente por WhatsApp según tu provincia y sucursal más cercana.
              </p>
            </div>

            {/* Provinces Pills */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                Cobertura en todas las regiones:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {provinces.map((prov, i) => (
                  <div key={i} className="flex items-center gap-2 bg-emerald-800/40 px-3 py-2 rounded-lg border border-emerald-700/50">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{prov}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Shipping Calculator/Prompt */}
          <div className="lg:col-span-5">
            <div className="bg-white text-stone-900 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  Consulta de Envío
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  Respuesta inmediata
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-stone-900">
                ¿A qué parte de Panamá necesitas tu envío?
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                Escríbele a Yamilka indicando tu ciudad o corregimiento para recibir la cotización exacta del envío y las agencias disponibles para retiro o entrega a domicilio.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800">Origen:</p>
                    <p className="text-stone-500">Santiago de Veraguas, Panamá</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-xs">
                  <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-bold text-stone-800">Tiempos de despacho:</p>
                    <p className="text-stone-500">Mismo día o 24-48h según destino</p>
                  </div>
                </div>
              </div>

              <a
                id="shipping-whatsapp-btn"
                href={getWhatsAppUrl('Hola Yamilka, quiero cotizar el costo y tiempo de envío del programa de 6 días a mi provincia/ciudad:')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar costo de envío por WhatsApp</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
