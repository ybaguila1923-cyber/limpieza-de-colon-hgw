import React from 'react';
import { HeartHandshake, Truck, Smartphone, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';

export const TrustBadges: React.FC = () => {
  const trustItems = [
    {
      icon: HeartHandshake,
      title: 'Atención Personalizada',
      desc: 'Asesoría directa y humana con Yamilka Batista vía WhatsApp.',
      accent: 'emerald',
    },
    {
      icon: Truck,
      title: 'Envíos a Todo Panamá',
      desc: 'Despachos rápidos y seguros a todas las provincias y comarcas.',
      accent: 'teal',
    },
    {
      icon: Smartphone,
      title: 'Pago por Yappy o Banco General',
      desc: `Yappy al ${BUSINESS_DATA.yappy.formattedPhone} o transferencia directa.`,
      accent: 'blue',
    },
    {
      icon: ShieldCheck,
      title: 'Ventas Directas Confiables',
      desc: 'Producto original HGW distribuido desde Santiago de Veraguas.',
      accent: 'emerald',
    },
  ];

  return (
    <section className="bg-white border-y border-emerald-100/80 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100/60 hover:bg-emerald-50 hover:border-emerald-200 transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-emerald-200/80 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:text-emerald-800 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-stone-900 group-hover:text-emerald-950 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
