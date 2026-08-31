# Detox y Salud Natural — Landing Page Oficial

Landing Page profesional, moderna, responsive y orientada a conversión para el negocio de ventas directas **“DETOX Y SALUD NATURAL”**, ubicado en **Santiago de Veraguas, Panamá**, administrado por **Yamilka Batista**.

---

## 🌿 Características del Proyecto

- **Producto Principal:** Bebida Digestiva *Fresh Drink Chang Jin Jin* de HGW en polvo (Programa de 6 días, 1 sobre diario en 500 ml de agua, 6 sobres por caja).
- **Propuesta Comercial:** *Limpieza de Colon Natural en 6 Días*.
- **Contacto Directo:** Botones de WhatsApp con mensajes prellenados y llamadas a `+507 6760-3578`.
- **Métodos de Pago en Panamá:** 
  - **Yappy:** `67603578` a nombre de `YAMILKA BATISTA`.
  - **Banco General:** Transferencia bancaria y ACH.
- **Logística:** Envíos a todo Panamá desde Santiago de Veraguas.
- **Tecnologías:** React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Vite.
- **Compatibilidad:** 100% compatible con **GitHub** y despliegue directo en **Vercel** (sin dependencias de backend ni Firebase).
- **SEO Local:** Metadatos optimizados para Santiago de Veraguas, Panamá, Open Graph y datos estructurados Schema.org (`LocalBusiness` y `Product`).

---

## 📁 Estructura del Proyecto

```text
├── index.html                  # Metadatos SEO, Open Graph, Schema.org y fuentes
├── vercel.json                 # Configuración de rutas para despliegue en Vercel
├── package.json                # Dependencias y scripts de construcción
├── vite.config.ts              # Configuración de Vite y Tailwind CSS
├── metadata.json               # Metadatos de la aplicación
├── src/
│   ├── main.tsx                # Entrada principal de React
│   ├── App.tsx                 # Ensamblaje modular de la landing page
│   ├── index.css               # Estilos globales y Tailwind CSS
│   ├── types.ts                # Interfaces y tipos de TypeScript
│   ├── data/
│   │   └── content.ts          # ⚙️ ARCHIVO DE CONFIGURACIÓN (Textos, números, banco, etc.)
│   ├── utils/
│   │   └── whatsapp.ts         # Generador de enlaces de WhatsApp y utilidades
│   └── components/
│       ├── Header.tsx          # Barra de navegación superior y menú móvil
│       ├── Hero.tsx            # Sección Hero con CTA principal y foto del producto
│       ├── TrustBadges.tsx     # Pilares de confianza y garantías
│       ├── Benefits.tsx        # 5 Beneficios comerciales responsables
│       ├── HowItWorks.tsx      # ¿Cómo funciona? en 3 pasos sencillos
│       ├── ProductDetail.tsx   # Detalle de la caja HGW, preparación y aviso de salud
│       ├── OrderCalculator.tsx # Asistente interactivo de pedidos para WhatsApp
│       ├── AboutOwner.tsx      # Historia humana de Yamilka Batista y ventas directas
│       ├── Testimonials.tsx    # Reseñas de ejemplo y galería de testimonios
│       ├── PaymentMethods.tsx  # Yappy con botón de copiar y Banco General
│       ├── ShippingInfo.tsx    # Envíos a todo Panamá y logística
│       ├── LocationSchedule.tsx# Ubicación en Santiago y horarios configurables
│       ├── Faq.tsx             # Preguntas frecuentes con acordeón
│       ├── FinalCta.tsx        # Sección de llamado a la acción final
│       ├── FloatingActions.tsx # Botón flotante de WhatsApp y llamada
│       └── Footer.tsx          # Pie de página y aviso legal responsable
```

---

## ⚙️ ¿Cómo Modificar Datos, Textos, Imágenes y Cuentas?

Toda la información del negocio se encuentra centralizada en un solo archivo:
👉 `src/data/content.ts`

Ahí podrás modificar fácilmente:
1. **Teléfono y WhatsApp:** `phoneRaw: '50767603578'`, `phoneFormatted: '+507 6760-3578'`.
2. **Datos de Yappy:** Número de teléfono y nombre registrado (`YAMILKA BATISTA`).
3. **Datos de Banco General:** Tipo de cuenta, número de cuenta y notas de pago.
4. **Horarios de Atención:** Días y horas en el arreglo `schedule`.
5. **Imágenes:** Enlaces de imagen del producto, foto de Yamilka y testimonios en el objeto `images`.
6. **Preguntas Frecuentes:** Agregar o modificar preguntas en el arreglo `faqs`.

---

## 🚀 Instalación y Ejecución Local

1. **Clonar el repositorio o descargar el proyecto:**
   ```bash
   git clone <URL_DE_TU_REPOSITORIO>
   cd detox-salud-natural
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:3000`.

4. **Compilar para producción:**
   ```bash
   npm run build
   ```
   Los archivos estáticos se generarán en la carpeta `dist/`.

---

## 🌐 Cómo Subir a GitHub

1. Inicializa el repositorio si no lo has hecho:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page detox y salud natural Santiago de Veraguas"
   ```

2. Crea un nuevo repositorio en tu cuenta de [GitHub](https://github.com/new).

3. Conecta y sube los cambios:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```

---

## ⚡ Despliegue Directo en Vercel

1. Ingresa a [Vercel](https://vercel.com/) e inicia sesión con tu cuenta de GitHub.
2. Haz clic en **"Add New..."** > **"Project"**.
3. Importa el repositorio de GitHub que acabas de subir.
4. Vercel detectará automáticamente la configuración de **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Haz clic en **"Deploy"**. ¡Tu página estará en línea en menos de 1 minuto!

---

## ⚖️ Aviso Legal y Cumplimiento

La página incluye declaraciones claras y responsables indicando que la *Bebida Digestiva Fresh Drink Chang Jin Jin de HGW en polvo* es un complemento alimenticio/digestivo y no debe presentarse como medicamento ni sustituto de atención médica profesional.
