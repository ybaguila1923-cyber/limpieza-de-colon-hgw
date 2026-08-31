import React from 'react';
import { Leaf, MapPin, Phone, MessageCircle, ShieldCheck, Heart, AlertCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      
      {/* Upper Footer: Brand, Navigation & Local Business Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="font-black text-lg text-white tracking-tight">
                  DETOX Y SALUD NATURAL
                </span>
                <p className="text-xs text-emerald-400 font-medium">
                  Ventas Directas • {BUSINESS_DATA.ownerName}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md">
              Distribución y asesoría personalizada del programa de 6 días con la Bebida Digestiva <strong className="text-stone-200">Fresh Drink Chang Jin Jin de HGW</strong> en polvo (1 sobre por día en 500 ml de agua).
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{BUSINESS_DATA.city}, {BUSINESS_DATA.province}, {BUSINESS_DATA.country}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                <a href={getPhoneCallUrl()} className="hover:text-white transition-colors">
                  {BUSINESS_DATA.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: {BUSINESS_DATA.phoneFormatted}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-emerald-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                  Beneficios del Programa
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">
                  ¿Cómo Funciona?
                </a>
              </li>
              <li>
                <a href="#producto" className="hover:text-emerald-400 transition-colors">
                  Detalles del Producto (HGW)
                </a>
              </li>
              <li>
                <a href="#sobre-nosotros" className="hover:text-emerald-400 transition-colors">
                  Sobre Yamilka Batista
                </a>
              </li>
              <li>
                <a href="#pagos-y-envios" className="hover:text-emerald-400 transition-colors">
                  Pagos por Yappy y Envíos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Payment & Guarantees (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Medios de Pago y Envíos
            </h4>
            
            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2 text-xs">
              <p className="text-stone-200 font-bold">
                💙 YAPPY Banco General
              </p>
              <p className="text-stone-400">
                Número: <strong className="text-white font-mono">{BUSINESS_DATA.yappy.formattedPhone}</strong>
                <br />
                A nombre de: <span className="text-emerald-400 font-semibold">{BUSINESS_DATA.yappy.registeredName}</span>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-stone-800/80 border border-stone-700/80 space-y-2 text-xs">
              <p className="text-stone-200 font-bold">
                🇵🇦 Envíos Nacionales
              </p>
              <p className="text-stone-400">
                Despachos desde Santiago de Veraguas hacia todas las provincias y comarcas de Panamá vía encomienda de tu preferencia.
              </p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box (Responsible Language) */}
        <div className="mt-10 p-5 rounded-2xl bg-stone-950 border border-stone-800 text-[11px] sm:text-xs text-stone-400 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-[11px]">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Aviso Legal y Declaración Informativa Responsable</span>
          </div>
          <p>
            La información contenida en este sitio web tiene propósitos estrictamente comerciales, informativos y de orientación general sobre ventas directas. La <strong>Bebida Digestiva Fresh Drink Chang Jin Jin de HGW en polvo</strong> no es un medicamento, no reemplaza la atención médica profesional, ni está destinada a diagnosticar, tratar, curar o prevenir ninguna afección o enfermedad.
          </p>
          <p>
            Los consumidores deben siempre leer y seguir las instrucciones oficiales del fabricante impresas en la etiqueta del producto. Si tiene alguna condición médica preexistente, está embarazada, en período de lactancia o bajo tratamiento farmacológico, consulte a un profesional de la salud antes de consumir cualquier suplemento o bebida nutricional.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>
            © {currentYear} <strong>DETOX Y SALUD NATURAL</strong> • Yamilka Batista. Santiago de Veraguas, Panamá. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ventas Directas Panamá</span>
            <span>•</span>
            <a href={getWhatsAppUrl()} className="text-emerald-400 hover:underline">
              WhatsApp +507 6760-3578
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
