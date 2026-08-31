import { BusinessConfig } from '../types';

/**
 * =========================================================================
 * ARCHIVO DE CONFIGURACIÓN PRINCIPAL - DETOX Y SALUD NATURAL
 * =========================================================================
 * Todos los textos, teléfonos, cuentas de banco, horarios, imágenes y datos
 * de contacto se pueden editar fácilmente en este archivo.
 */

export const BUSINESS_DATA: BusinessConfig = {
  name: 'DETOX Y SALUD NATURAL',
  tagline: 'Ventas Directas de Bienestar y Salud Digestiva en Panamá',
  ownerName: 'YAMILKA BATISTA',
  role: 'Distribuidora y Asesora de Ventas Directas',
  
  // Contacto WhatsApp y llamadas (Formato internacional y local)
  phoneRaw: '50767603578',
  phoneFormatted: '+507 6760-3578',
  
  // Mensajes predeterminados para WhatsApp
  whatsappMessageDefault: 'Hola Yamilka, estoy interesado(a) en el programa Fresh Drink Chang Jin Jin de 6 días y quisiera recibir información.',
  whatsappMessageProduct: 'Hola Yamilka, vi la página de Detox y Salud Natural y quiero consultar sobre la Bebida Digestiva Fresh Drink Chang Jin Jin de HGW.',
  whatsappMessageOrder: 'Hola Yamilka, deseo realizar mi pedido del programa de 6 días de Fresh Drink Chang Jin Jin. Mi provincia/ciudad es: ',

  // Ubicación y Envíos
  city: 'Santiago de Veraguas',
  province: 'Veraguas',
  country: 'Panamá',
  addressNote: 'Atención personalizada en Santiago de Veraguas y coordinación de pedidos para entrega local o envíos por encomienda a nivel nacional.',
  shippingCoverage: 'Envíos a todo Panamá (Todas las provincias y comarcas con cobertura de transporte)',

  // Datos del Producto Principal
  productName: 'Bebida Digestiva Fresh Drink Chang Jin Jin de HGW en Polvo',
  productBrand: 'HGW (Health Green World)',
  productFormat: 'Caja con 6 sobres individuales de bebida en polvo',
  programDuration: 'Programa de 6 Días',
  preparation: '1 sobre por día disuelto en 500 ml de agua',
  totalSachets: 6,
  commercialProposal: 'Limpieza de Colon Natural en 6 Días',

  // Enlaces de imágenes proporcionados (Google Drive direct embeds con fallbacks)
  images: {
    // Imagen del producto Fresh Drink Chang Jin Jin
    product: 'https://lh3.googleusercontent.com/d/1UFx0FZ6Inbru3b_gGpBgiIeNzxV8vu0C',
    // Imagen de Yamilka Batista
    owner: 'https://lh3.googleusercontent.com/d/1KeOPcyuhctKp1qJsNsfw-nlUuXzyU_hf',
    // Imagen de testimonio de ejemplo
    testimonial: 'https://lh3.googleusercontent.com/d/1NM-Q79mG1UT8rWwMLKzWgBYa8sUVCDaS',
  },

  // Métodos de Pago
  yappy: {
    phone: '67603578',
    formattedPhone: '6760-3578',
    registeredName: 'YAMILKA BATISTA',
    instructions: 'Abre tu app de Banco General > Yappy > Buscar el número 67603578 > Verificar nombre YAMILKA BATISTA > Ingresar monto y confirmar.',
  },

  bankAccount: {
    bankName: 'Banco General',
    accountType: 'Cuenta de Ahorros / Corriente',
    accountNumber: 'Por confirmar directamente por WhatsApp', // Campo editable
    beneficiaryName: 'Yamilka Batista',
    emailContact: 'contacto@detoxsaludnatural.pa',
    notes: 'Solicita el número de cuenta directo por WhatsApp si prefieres transferencia bancaria tradicional o ACH Xpress.',
  },

  // Horarios de Atención (Totalmente modificables por Yamilka)
  schedule: [
    { days: 'Lunes a Viernes', hours: '8:00 AM – 7:00 PM', status: 'Atención Inmediata WhatsApp' },
    { days: 'Sábados', hours: '8:30 AM – 5:00 PM', status: 'Atención Inmediata WhatsApp' },
    { days: 'Domingos y Feriados', hours: '9:00 AM – 2:00 PM', status: 'Mensajes programados' },
  ],

  // 5 Beneficios Comerciales Concretos (Lenguaje responsable y ético)
  benefits: [
    {
      id: 'b1',
      title: 'Facilidad de Preparación',
      description: 'Solo disuelve 1 sobre en 500 ml de agua fresca o a temperatura ambiente. Listo en segundos sin licuadora ni procesos complicados.',
      iconName: 'CupSoda',
      highlight: '1 sobre en 500 ml',
    },
    {
      id: 'b2',
      title: 'Sobres Individuales para 6 Días',
      description: 'Cada caja contiene 6 sobres dosificados de manera higiénica y práctica. Llévalos a tu trabajo o rutina diaria con total comodidad.',
      iconName: 'PackageCheck',
      highlight: '6 sobres exactos',
    },
    {
      id: 'b3',
      title: 'Programa Práctico y Sencillo',
      description: 'Una rutina estructurada para 6 días consecutivos diseñada para acompañar tus hábitos saludables de forma cómoda y natural.',
      iconName: 'CalendarDays',
      highlight: 'Rutina de 6 días',
    },
    {
      id: 'b4',
      title: 'Acompañamiento y Asesoría',
      description: 'Atención personalizada directamente de Yamilka Batista antes, durante y después de recibir tu programa para resolver cualquier inquietud.',
      iconName: 'HeartHandshake',
      highlight: 'Asesoría directa',
    },
    {
      id: 'b5',
      title: 'Envíos Seguros a Todo Panamá',
      description: 'Despachos rápidos y coordinados hacia Santiago de Veraguas, Ciudad de Panamá, Chiriquí, Colón, Azuero, Coclé y todas las provincias.',
      iconName: 'Truck',
      highlight: 'Cobertura nacional',
    },
  ],

  // Pasos de Funcionamiento
  steps: [
    {
      number: 1,
      title: 'Contacta a Yamilka por WhatsApp',
      description: 'Escríbenos directamente o pulsa cualquier botón de la página. Te orientamos sobre el programa de 6 días, disponibilidad y dudas.',
      detail: 'Atención rápida y trato humano desde Santiago de Veraguas.',
      iconName: 'MessageCircle',
    },
    {
      number: 2,
      title: 'Realiza el Pago (Yappy o Banco General)',
      description: 'Paga de forma rápida y segura mediante Yappy al 67603578 a nombre de YAMILKA BATISTA o por transferencia bancaria.',
      detail: 'Envías el comprobante por WhatsApp para validar tu orden al instante.',
      iconName: 'Smartphone',
    },
    {
      number: 3,
      title: 'Recibe tu Programa de 6 Días',
      description: 'Coordinamos la entrega inmediata en Santiago o el envío por agencia de encomiendas a cualquier punto del territorio panameño.',
      detail: 'Recibes tu caja con 6 sobres lista para comenzar.',
      iconName: 'Package',
    },
  ],

  // Testimonios (Claramente identificados como ejemplos listos para que la administradora los actualice)
  testimonials: [
    {
      id: 't1',
      name: 'María G. (Cliente Ejemplo)',
      location: 'Santiago de Veraguas, Panamá',
      rating: 5,
      comment: 'La atención de Yamilka fue excelente desde el primer mensaje por WhatsApp. Me explicó con mucha paciencia cómo tomar cada sobre en los 500 ml de agua. La entrega en Santiago fue muy puntual.',
      date: 'Hace 2 semanas',
      isExample: true,
    },
    {
      id: 't2',
      name: 'Carlos R. (Cliente Ejemplo)',
      location: 'Ciudad de Panamá',
      rating: 5,
      comment: 'Hice mi pedido y pagué por Yappy en un minuto. El envío llegó a la agencia de encomienda súper rápido y bien protegido. Muy práctico el formato de 6 sobres.',
      date: 'Hace 1 mes',
      isExample: true,
    },
    {
      id: 't3',
      name: 'Elena M. (Cliente Ejemplo)',
      location: 'Chitré, Herrera',
      rating: 5,
      comment: 'Excelente servicio de ventas directas. Es un producto fácil de preparar por las mañanas y el acompañamiento de Yamilka durante la compra genera mucha confianza.',
      date: 'Hace 3 semanas',
      isExample: true,
    },
  ],

  // Preguntas Frecuentes FAQ
  faqs: [
    {
      question: '¿Qué incluye exactamente el programa de 6 días?',
      answer: 'Incluye 1 caja original de Bebida Digestiva Fresh Drink Chang Jin Jin de HGW en polvo, conteniendo 6 sobres individuales dosificados para tomar 1 sobre por día durante 6 días consecutivos, además de la asesoría personalizada de Yamilka Batista.',
      category: 'Producto',
    },
    {
      question: '¿Cómo se prepara la Bebida Digestiva Fresh Drink Chang Jin Jin?',
      answer: 'Es muy sencillo: solo debes verter el contenido de 1 sobre individual en 500 ml de agua fresca o a temperatura ambiente, mezclar bien hasta que se disuelva por completo y consumirlo según las indicaciones oficiales del fabricante en la etiqueta.',
      category: 'Preparación',
    },
    {
      question: '¿Cómo puedo realizar el pago de mi pedido?',
      answer: 'Aceptamos pagos rápidos y seguros por YAPPY al número 67603578 a nombre de YAMILKA BATISTA, así como transferencias bancarias a BANCO GENERAL. Una vez hecho el pago, solo nos envías la captura o comprobante por WhatsApp.',
      category: 'Pagos',
    },
    {
      question: '¿Realizan envíos a todo Panamá y cómo se coordina?',
      answer: '¡Sí! Realizamos envíos a todas las provincias de Panamá a través de las principales agencias de encomiendas de tu preferencia (UnoExpress, Transporte Ferguson, Flete Chavale, Servientrega u otras). El costo, tiempo y punto de retiro exacto se confirman contigo por WhatsApp según tu ubicación.',
      category: 'Envíos',
    },
    {
      question: '¿Cómo hago mi pedido paso a paso?',
      answer: 'Solo pulsa el botón "Pedir por WhatsApp" o "Quiero mi programa de 6 días". Nos escribes indicando tu nombre y tu provincia/ciudad, te confirmamos el total y los datos de pago, y tras verificar el comprobante, procedemos con el despacho inmediato.',
      category: 'Pedidos',
    },
    {
      question: '¿Puedo consultar con Yamilka antes de comprar?',
      answer: '¡Por supuesto! La atención es 100% personalizada. Puedes escribir al WhatsApp +50767603578 o llamar directamente para hacer todas las preguntas que tengas sobre la presentación, preparación o logística de envío.',
      category: 'Atención',
    },
    {
      question: '¿El producto reemplaza algún medicamento o tratamiento médico?',
      answer: 'No. Fresh Drink Chang Jin Jin de HGW es una bebida digestiva en polvo comercializada como suplemento/alimento para el bienestar y la higiene digestiva. No es un medicamento ni sustituye diagnósticos, tratamientos o consultas médicas profesionales. Siempre recomendamos seguir las indicaciones oficiales de la etiqueta y consultar a su médico ante dudas de salud específicas.',
      category: 'Responsabilidad',
    },
  ],
};
