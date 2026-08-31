import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, MapPin, Check, Sparkles, Send, User, ChevronRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const OrderCalculator: React.FC = () => {
  const [packCount, setPackCount] = useState<number>(1);
  const [customerName, setCustomerName] = useState<string>('');
  const [province, setProvince] = useState<string>('Santiago de Veraguas');
  const [extraQuestion, setExtraQuestion] = useState<string>('');

  const provinces = [
    'Santiago de Veraguas (Local)',
    'Ciudad de Panamá',
    'Panamá Oeste (Chorrera, Arraiján)',
    'Chiriquí (David, Boquete, etc.)',
    'Herrera (Chitré y distritos)',
    'Los Santos (Las Tablas, etc.)',
    'Coclé (Penonomé, Aguadulce)',
    'Colón',
    'Bocas del Toro',
    'Darién',
    'Comarcas',
  ];

  const handleGenerateWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const namePart = customerName.trim() ? `Soy ${customerName.trim()}. ` : '';
    const packsText = packCount === 1 
      ? '1 caja (Programa de 6 días con 6 sobres)' 
      : `${packCount} cajas (${packCount * 6} sobres)`;
    
    let message = `Hola Yamilka, ${namePart}estoy interesado(a) en ordenar: ${packsText} de Fresh Drink Chang Jin Jin de HGW. Mi ubicación es: ${province}.`;
    
    if (extraQuestion.trim()) {
      message += ` También quisiera consultar: ${extraQuestion.trim()}`;
    }

    const targetUrl = getWhatsAppUrl(message);
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="hacer-pedido" className="py-16 sm:py-24 bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-300/80 shadow-xl relative overflow-hidden">
          
          {/* Subtle top decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Asistente de Pedido Directo</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
              Prepara tu Pedido y Envía por WhatsApp en 1 Clic
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Selecciona cuántos días o cajas deseas y genera tu mensaje listo para Yamilka Batista.
            </p>
          </div>

          <form onSubmit={handleGenerateWhatsApp} className="space-y-6">
            
            {/* Step 1: Pack Selection */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                1. Elige la cantidad del programa:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { count: 1, title: 'Programa 6 Días', subtitle: '1 Caja (6 sobres)', badge: 'Más popular' },
                  { count: 2, title: 'Programa 12 Días', subtitle: '2 Cajas (12 sobres)', badge: 'Recomendado dúo' },
                  { count: 3, title: 'Paquete Familiar', subtitle: '3 Cajas (18 sobres)', badge: 'Para compartir' },
                ].map((option) => (
                  <button
                    key={option.count}
                    type="button"
                    onClick={() => setPackCount(option.count)}
                    className={`p-4 rounded-2xl border text-left transition-all relative ${
                      packCount === option.count
                        ? 'border-emerald-600 bg-emerald-50/80 ring-2 ring-emerald-500/20 shadow-xs'
                        : 'border-stone-200 hover:border-stone-300 bg-stone-50/50'
                    }`}
                  >
                    {packCount === option.count && (
                      <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      {option.badge}
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm sm:text-base">
                      {option.title}
                    </h4>
                    <p className="text-xs text-stone-500 mt-0.5">
                      {option.subtitle}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Location & Name Form Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="customer-name-input" className="block text-xs font-bold text-stone-800">
                  Tu Nombre (Opcional):
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="customer-name-input"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej. Indira o Carlos"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm text-stone-800 outline-hidden transition-all bg-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="province-select" className="block text-xs font-bold text-stone-800">
                  Provincia / Ubicación en Panamá:
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    id="province-select"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-sm text-stone-800 outline-hidden transition-all bg-white"
                  >
                    {provinces.map((prov, i) => (
                      <option key={i} value={prov}>
                        {prov}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Optional question textarea */}
            <div className="space-y-1.5">
              <label htmlFor="extra-question-input" className="block text-xs font-bold text-stone-800">
                ¿Alguna consulta sobre el pago (Yappy/Banco General) o envío? (Opcional):
              </label>
              <textarea
                id="extra-question-input"
                rows={2}
                value={extraQuestion}
                onChange={(e) => setExtraQuestion(e.target.value)}
                placeholder="Ej. ¿En qué agencia de encomienda puedo retirar en David? o ¿Cuánto tarda la entrega?"
                className="w-full p-3.5 rounded-xl border border-stone-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 text-xs sm:text-sm text-stone-800 outline-hidden transition-all bg-white resize-none"
              />
            </div>

            {/* Action Button */}
            <button
              id="submit-order-whatsapp-btn"
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-base shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:scale-101 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-100" />
              <span>Enviar mi Pedido por WhatsApp (+507 6760-3578)</span>
            </button>

            <p className="text-center text-[11px] text-stone-500">
              🔒 No solicitamos datos de tarjetas ni contraseñas. Serás redirigido directamente al chat de WhatsApp oficial de Yamilka Batista.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};
