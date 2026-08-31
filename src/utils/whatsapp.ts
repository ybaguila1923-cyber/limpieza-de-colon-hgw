import { BUSINESS_DATA } from '../data/content';

/**
 * Genera un enlace de WhatsApp directo con mensaje personalizado
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = BUSINESS_DATA.phoneRaw;
  const message = customMessage || BUSINESS_DATA.whatsappMessageDefault;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Genera el enlace para llamadas telefónicas directas
 */
export function getPhoneCallUrl(): string {
  return `tel:+${BUSINESS_DATA.phoneRaw}`;
}

/**
 * Copia texto al portapapeles con fallback seguro para iframes
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback usando textarea
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err);
    return false;
  }
}
