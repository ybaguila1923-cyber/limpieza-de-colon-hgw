import React, { useState } from 'react';
import { Leaf, MessageCircle, Phone, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { getWhatsAppUrl, getPhoneCallUrl } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Beneficios', href: '#beneficios' },
    { name: '¿Cómo Funciona?', href: '#como-funciona' },
    { name: 'El Producto', href: '#producto' },
    { name: 'Sobre Yamilka', href: '#sobre-nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Pagos y Envíos', href: '#pagos-y-envios' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100/80 shadow-xs">
      {/* Top Banner Informativo */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-xs sm:text-sm py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-600/60 px-2 py-0.5 rounded-full text-emerald-100 text-[11px] font-semibold tracking-wide">
              <MapPin className="w-3 h-3" /> Santiago de Veraguas
            </span>
            <span className="hidden sm:inline text-emerald-100">|</span>
            <span className="text-emerald-50 truncate">
              🇵🇦 Envíos rápidos a todo Panamá • Pagos por Yappy y Banco General
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              id="top-call-link"
              href={getPhoneCallUrl()}
              className="hover:text-emerald-200 transition-colors flex items-center gap-1 font-semibold"
              title="Llamar directamente"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>{BUSINESS_DATA.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Brand Identity */}
          <a
            id="brand-logo-link"
            href="#"
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-emerald-50" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-emerald-950">
                  DETOX Y SALUD
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                  Natural
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium">
                Ventas Directas • {BUSINESS_DATA.ownerName}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-600 hover:text-emerald-700 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-emerald-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={getPhoneCallUrl()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hover:scale-102"
              title="Llamar a Yamilka Batista"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Llamar</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25 transition-all hover:scale-102"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>WhatsApp Directo</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-whatsapp-header"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 md:hidden"
              aria-label="Abrir WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-600 hover:text-emerald-700 hover:bg-stone-100 focus:outline-hidden"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-emerald-100 bg-white/98 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-stone-700 hover:text-emerald-700 hover:bg-emerald-50/70 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-emerald-100 flex flex-col gap-2">
            <a
              id="drawer-whatsapp-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chatear por WhatsApp (+507 6760-3578)</span>
            </a>

            <a
              id="drawer-call-btn"
              href={getPhoneCallUrl()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Llamar a Yamilka Batista</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
