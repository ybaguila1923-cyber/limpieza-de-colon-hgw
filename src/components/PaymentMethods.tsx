import React, { useState } from 'react';
import { Smartphone, CreditCard, Copy, Check, ShieldCheck, MessageCircle, AlertCircle, Building2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/content';
import { copyToClipboard, getWhatsAppUrl } from '../utils/whatsapp';

export const PaymentMethods: React.FC = () => {
  const [copiedYappy, setCopiedYappy] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const handleCopyYappy = async () => {
    const success = await copyToClipboard(BUSINESS_DATA.yappy.phone);
    if (success) {
      setCopiedYappy(true);
      setTimeout(() => setCopiedYappy(false), 2500);
    }
  };

  return (
    <section id="pagos-y-envios" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-blue-700" />
            <span>Métodos de Pago Oficiales</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            Paga de forma rápida y segura en Panamá
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Aceptamos pagos directos mediante las opciones más utilizadas y confiables del país.
          </p>
        </div>

        {/* 2 Payment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: YAPPY BANCO GENERAL */}
          <div className="bg-gradient-to-b from-blue-50/70 via-white to-white rounded-3xl p-7 sm:p-8 border-2 border-blue-200/90 shadow-md relative flex flex-col justify-between">
            
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black text-xl shadow-xs">
                    Y!
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-stone-900">
                      YAPPY (Banco General)
                    </h3>
                    <p className="text-xs text-blue-800 font-semibold">
                      Pago instantáneo sin comisiones
                    </p>
                  </div>
                </div>

                <span className="bg-blue-100 text-blue-800 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase">
                  Recomendado
                </span>
              </div>

              {/* Data Block with 1-click Copy */}
              <div className="bg-white p-5 rounded-2xl border border-blue-200 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-500 font-semibold uppercase tracking-wider">
                    Número para Yappy:
                  </span>
                  <button
                    id="copy-yappy-btn"
                    type="button"
                    onClick={handleCopyYappy}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg transition-colors"
                  >
                    {copiedYappy ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar número</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="text-3xl font-black text-stone-900 tracking-wider">
                  {BUSINESS_DATA.yappy.formattedPhone}
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-stone-500">Nombre registrado:</span>
                  <span className="font-extrabold text-stone-900 uppercase">
                    {BUSINESS_DATA.yappy.registeredName}
                  </span>
                </div>
              </div>

              {/* Instructions */}
              <p className="text-xs text-stone-600 leading-relaxed">
                {BUSINESS_DATA.yappy.instructions}
              </p>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-blue-100">
              <a
                id="yappy-confirm-btn"
                href={getWhatsAppUrl('Hola Yamilka, quiero confirmar el pago por Yappy al 67603578 a nombre de YAMILKA BATISTA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enviar comprobante Yappy por WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Card 2: TRANSFERENCIA BANCARIA BANCO GENERAL */}
          <div className="bg-stone-50/70 rounded-3xl p-7 sm:p-8 border border-stone-200/90 shadow-xs flex flex-col justify-between">
            
            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-stone-900">
                      Transferencia Bancaria
                    </h3>
                    <p className="text-xs text-stone-500 font-semibold">
                      {BUSINESS_DATA.bankAccount.bankName}
                    </p>
                  </div>
                </div>

                <span className="bg-stone-200/70 text-stone-700 text-[11px] font-bold px-3 py-1 rounded-full uppercase">
                  ACH / Depósito
                </span>
              </div>

              {/* Bank Details Table */}
              <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2.5 text-xs sm:text-sm shadow-xs">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="text-stone-500">Banco:</span>
                  <span className="font-bold text-stone-900">{BUSINESS_DATA.bankAccount.bankName}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="text-stone-500">Tipo de Cuenta:</span>
                  <span className="font-semibold text-stone-800">{BUSINESS_DATA.bankAccount.accountType}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <span className="text-stone-500">Beneficiario:</span>
                  <span className="font-bold text-stone-900 uppercase">{BUSINESS_DATA.bankAccount.beneficiaryName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">Número de Cuenta:</span>
                  <span className="font-mono text-emerald-800 font-semibold text-xs">
                    {BUSINESS_DATA.bankAccount.accountNumber}
                  </span>
                </div>
              </div>

              {/* Editable / Coordination note */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-100 text-xs text-emerald-900 leading-relaxed">
                <p>
                  <strong>{BUSINESS_DATA.bankAccount.notes}</strong>
                </p>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-6 mt-6 border-t border-stone-200">
              <a
                id="bank-ask-details-btn"
                href={getWhatsAppUrl('Hola Yamilka, deseo los datos de cuenta de Banco General para hacer una transferencia bancaria para mi pedido.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar datos bancarios por WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

        {/* Verification and Safety Advice */}
        <div className="mt-8 max-w-5xl mx-auto p-4 rounded-2xl bg-stone-100 border border-stone-200/80 flex items-center gap-3 text-xs text-stone-600">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Garantía de Seguridad:</strong> Todos los pagos se confirman de forma transparente. Una vez enviado tu comprobante, recibirás confirmación inmediata de tu orden y el número de guía de envío si aplica.
          </span>
        </div>

      </div>
    </section>
  );
};
