import React, { useState } from 'react';
import { Star, MessageSquare, MapPin, CheckCircle, Info, Image as ImageIcon } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const Testimonials: React.FC = () => {
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [testimonioImgError, setTestimonioImgError] = useState(false);

  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            <span>Opiniones y Experiencias</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Experiencias con la Atención y el Servicio
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Valoramos la honestidad y la confianza de nuestros clientes en Santiago de Veraguas y en todo Panamá.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs text-left max-w-xl mx-auto">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Nota de transparencia:</strong> Los siguientes recuadros corresponden a testimonios de ejemplo editables para mostrar la estructura de opiniones de clientes reales.
            </span>
          </div>
        </div>

        {/* Testimonials 3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BUSINESS_DATA.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Example tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                    Testimonio de ejemplo
                  </span>
                </div>

                {/* Comment Text */}
                <p className="text-stone-700 text-sm italic leading-relaxed mb-6">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-stone-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-emerald-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <span className="text-[10px] text-stone-400 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Media / Captured Feedback Preview Section (Drive Testimonial reference) */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200/90 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100 px-2.5 py-1 rounded-md">
                Evidencia de Atención
              </span>
              <h3 className="text-xl font-bold text-stone-900">
                Galería de Comentarios y Atención al Cliente
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Yamilka comparte capturas y confirmaciones de entrega directamente por WhatsApp respetando la privacidad de cada comprador. Puedes consultar más detalles sobre el producto y atención antes de comprar.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                id="view-testimonial-proof-btn"
                type="button"
                onClick={() => setShowImagePreview(!showImagePreview)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs sm:text-sm border border-emerald-300 transition-colors"
              >
                <ImageIcon className="w-4 h-4 text-emerald-700" />
                <span>{showImagePreview ? 'Ocultar Referencia' : 'Ver Imagen de Testimonio'}</span>
              </button>

              <a
                id="testimonial-whatsapp-link"
                href={getWhatsAppUrl('Hola Yamilka, quisiera consultar qué opinan otros clientes sobre el programa de 6 días.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
              >
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Expandable Image container */}
          {showImagePreview && (
            <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col items-center">
              <p className="text-xs text-stone-500 mb-3 text-center">
                Imagen de referencia proporcionada para la administradora (Santiago de Veraguas, Panamá):
              </p>
              <div className="max-w-md w-full bg-stone-100 rounded-2xl overflow-hidden border border-stone-200 shadow-md p-2">
                <img
                  src={BUSINESS_DATA.images.testimonial}
                  alt="Referencia de testimonio de cliente - Detox y Salud Natural"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className={`w-full max-h-96 object-contain rounded-xl ${testimonioImgError ? 'hidden' : 'block'}`}
                  onError={() => setTestimonioImgError(true)}
                />
                {testimonioImgError && (
                  <div className="p-8 text-center text-xs text-stone-500">
                    <p className="font-semibold text-stone-800">Espacio preparado para imagen de testimonio</p>
                    <p>La administradora puede actualizar esta imagen en el archivo de configuración.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
