import React, { useState } from 'react';
import { 
  Package, 
  Droplets, 
  Calendar, 
  AlertTriangle, 
  Check, 
  ShieldCheck, 
  Leaf, 
  Info,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ProductDetail: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  const productFeatures = [
    {
      title: '1 Caja Original de HGW',
      desc: 'Empaque sellado de fábrica que garantiza frescura, calidad y autenticidad del producto.',
      icon: Package,
    },
    {
      title: '6 Sobres Individuales',
      desc: 'Cada sobre contiene la porción exacta de bebida en polvo para facilitar la dosificación diaria.',
      icon: Calendar,
    },
    {
      title: 'Preparación en 500 ml de Agua',
      desc: 'Se disuelve rápida y homogéneamente en medio litro de agua fresca o a temperatura ambiente.',
      icon: Droplets,
    },
    {
      title: 'Programa Estructurado de 6 Días',
      desc: '1 sobre al día durante 6 días consecutivos como complemento a tu hidratación y estilo de vida.',
      icon: Leaf,
    },
  ];

  return (
    <section id="producto" className="py-16 sm:py-24 bg-gradient-to-b from-stone-50/70 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            Detalles del Producto
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Conoce la Bebida Digestiva Fresh Drink Chang Jin Jin de HGW
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Una bebida en polvo diseñada para una rutina de 6 días orientada a la limpieza natural del colon y el confort digestivo.
          </p>
        </div>

        {/* Product Showcase Card & Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Product Image & Quick Box Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-lg">
              
              {/* Product Visual Box */}
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-100 flex items-center justify-center p-4 overflow-hidden border border-emerald-100">
                <img
                  id="product-detail-main-img"
                  src={BUSINESS_DATA.images.product}
                  alt="Caja de Bebida Digestiva Fresh Drink Chang Jin Jin de HGW - 6 sobres"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className={`w-full h-full object-contain ${imgError ? 'hidden' : 'block'}`}
                  onError={() => setImgError(true)}
                />

                {imgError && (
                  <div className="text-center p-6 space-y-2">
                    <Package className="w-16 h-16 text-emerald-600 mx-auto" />
                    <p className="font-bold text-stone-800 text-sm">{BUSINESS_DATA.productName}</p>
                    <p className="text-xs text-stone-500">Espacio preparado para imagen del producto</p>
                  </div>
                )}

                <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-xs">
                  Original HGW
                </div>
              </div>

              {/* Box Content Summary */}
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-bold text-stone-900">
                  ¿Qué incluye exactamente cada paquete?
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>1 Caja sellada</strong> de Fresh Drink Chang Jin Jin de HGW.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>6 Sobres individuales</strong> con fórmula en polvo.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Guía de preparación:</strong> 1 sobre por día en 500 ml de agua.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Asesoría directa</strong> de Yamilka Batista vía WhatsApp.</span>
                  </li>
                </ul>
              </div>

              {/* Direct CTA */}
              <a
                id="product-section-buy-cta"
                href={getWhatsAppUrl('Hola Yamilka, quiero comprar el paquete de Fresh Drink Chang Jin Jin de 6 sobres.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir este producto por WhatsApp</span>
              </a>

            </div>
          </div>

          {/* Right Column: Features & Preparation Guide & Health Warning */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 4 Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productFeatures.map((feat, index) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs hover:border-emerald-200 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-stone-900 text-sm mb-1">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Preparation Step-by-Step Card */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-7 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Droplets className="w-4 h-4" />
                <span>Instrucciones de Preparación Diaria</span>
              </div>
              <h3 className="text-xl font-bold">
                ¿Cómo preparar tu porción de Fresh Drink?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800 text-xs space-y-1">
                  <span className="font-bold text-emerald-300 text-sm block">1. Agua</span>
                  <p className="text-emerald-100/80">Sirve 500 ml de agua potable fresca en tu vaso o termo.</p>
                </div>
                <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800 text-xs space-y-1">
                  <span className="font-bold text-emerald-300 text-sm block">2. 1 Sobre</span>
                  <p className="text-emerald-100/80">Vierte 1 sobre completo de Fresh Drink en el agua.</p>
                </div>
                <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800 text-xs space-y-1">
                  <span className="font-bold text-emerald-300 text-sm block">3. Mezclar</span>
                  <p className="text-emerald-100/80">Disuelve muy bien y consume según las indicaciones de la etiqueta.</p>
                </div>
              </div>
            </div>

            {/* Prominent Legal & Health Warning Box (Mandatory & Responsible) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/80 border border-amber-300 text-amber-950 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0" />
                <span>Aviso Importante y Uso Responsable del Producto</span>
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Este producto se comercializa como una bebida digestiva y complemento nutricional en polvo. <strong>No es un medicamento</strong> y no está destinado a diagnosticar, tratar, curar ni prevenir ninguna enfermedad.
              </p>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                Recomendamos leer y seguir siempre las instrucciones oficiales del fabricante impresas en la etiqueta del empaque. Si usted está embarazada, en período de lactancia, toma medicamentos bajo prescripción médica o padece alguna condición de salud particular, consulte previamente a su médico o profesional de la salud de confianza.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
