# Etiquetas Armo - Sitio Web Corporativo

Sitio web profesional para Etiquetas Armo, empresa especializada en la fabricación e impresión de etiquetas industriales y comerciales de alta calidad en la Ciudad de México.

## 📋 Descripción del Proyecto

Página web moderna y responsiva desarrollada con React que presenta los servicios de Etiquetas Armo, incluyendo:
- Etiquetas autoadheribles personalizadas
- Códigos de barras
- Ribbons térmicos
- Suministros para impresión térmica
- Software y equipos de etiquetado

## 🚀 Tecnologías Utilizadas

### Core
- **React 18.3.1** - Biblioteca de interfaz de usuario
- **TypeScript 5.8.3** - Tipado estático para JavaScript
- **Vite 5.4.19** - Build tool y servidor de desarrollo rápido

### Estilos y UI
- **Tailwind CSS 3.4.17** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI de alta calidad
- **Radix UI** - Primitivas UI accesibles y sin estilo
- **Lucide React** - Biblioteca de iconos

### Routing y Estado
- **React Router DOM 6.30.1** - Navegación del lado del cliente
- **TanStack React Query 5.83.0** - Gestión de estado del servidor
- **React Hook Form 7.61.1** - Gestión de formularios
- **Zod 3.25.76** - Validación de esquemas

### Características Especiales
- **Carrusel de imágenes** - Embla Carousel React
- **Animaciones** - tailwindcss-animate
- **Toast notifications** - Sonner
- **Temas** - next-themes (soporte modo oscuro)

## 📁 Estructura del Proyecto

```
armo-label-nexus-main/
├── src/
│   ├── components/          # Componentes React
│   │   ├── ui/             # Componentes shadcn/ui (60+)
│   │   ├── Header.tsx      # Navegación principal
│   │   ├── Hero.tsx        # Sección hero con carrusel
│   │   ├── Services.tsx    # Servicios ofrecidos
│   │   ├── Testimonials.tsx # Testimonios de clientes
│   │   ├── Contact.tsx     # Información de contacto
│   │   ├── Footer.tsx      # Pie de página
│   │   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
│   ├── pages/
│   │   ├── Index.tsx       # Página principal
│   │   └── NotFound.tsx    # Página 404
│   ├── hooks/              # Hooks personalizados
│   ├── lib/                # Utilidades y helpers
│   ├── assets/             # Imágenes y recursos
│   │   ├── logo-armo.png
│   │   ├── logo-armo-complete-transparent.png
│   │   ├── almacen_armo.jpg
│   │   ├── etiqueta_armo.jpg
│   │   └── maquinaria_armo.jpeg
│   ├── App.tsx             # Componente raíz
│   ├── main.tsx            # Punto de entrada
│   └── index.css           # Estilos globales
├── public/
│   └── favicon.png         # Icono del sitio
├── index.html              # HTML principal
├── package.json            # Dependencias y scripts
├── vite.config.ts          # Configuración de Vite
├── tailwind.config.ts      # Configuración de Tailwind
├── tsconfig.json           # Configuración de TypeScript
└── README.md              # Este archivo
```

## 🎨 Características Principales

### 1. Hero Section con Carrusel
- Carrusel automático de imágenes (almacén, etiquetas, maquinaria)
- Transiciones suaves cada 3 segundos
- Overlay semitransparente para legibilidad
- Estadísticas de la empresa (+15 años, 1000+ clientes)

### 2. Navegación Responsiva
- Header fijo con navegación suave (smooth scroll)
- Menú hamburguesa para móviles
- Logo con borde y animación hover

### 3. Sección de Servicios
- 4 servicios principales presentados en cards
- Iconos personalizados
- Animaciones hover

### 4. Testimonios
- 4 testimonios de clientes
- Calificaciones con estrellas
- Grid responsivo

### 5. Contacto
- Información completa (dirección, teléfono, email)
- Mapa de Google Maps embebido
- Botón de WhatsApp integrado
- Teléfono: 55 7465 5927

### 6. WhatsApp
- Botón flotante en todas las páginas
- Enlaces directos en múltiples secciones
- Mensaje predefinido
- Número: +52 55 7465 5927

### 7. Footer
- Logo con borde rojo y animación
- Descripción de la empresa
- Enlaces a servicios
- Información de contacto

## 🛠️ Instalación y Configuración

### Requisitos Previos
- Node.js 18+ y npm instalados
- Git (opcional)

### Instalación

```bash
# 1. Clonar el repositorio (si aplica)
git clone <repository-url>
cd armo-label-nexus-main

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en http://localhost:8080 o http://localhost:8081
```

## 📜 Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Crea build de producción
npm run build:dev    # Crea build en modo desarrollo
npm run preview      # Preview del build de producción
npm run lint         # Ejecuta ESLint
```

## 🌐 Despliegue en Vercel

### Preparación
El proyecto está completamente listo para desplegarse en Vercel sin configuración adicional.

### Pasos para Desplegar

1. **Crear cuenta en Vercel**
   - Visita [vercel.com](https://vercel.com)
   - Crea una cuenta o inicia sesión

2. **Importar Proyecto**
   - Click en "Add New..." → "Project"
   - Conecta tu repositorio de GitHub/GitLab/Bitbucket
   - O sube el proyecto directamente

3. **Configuración Automática**
   - Vercel detectará automáticamente que es un proyecto Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Variables de Entorno** (opcional)
   - No se requieren variables de entorno para este proyecto

5. **Desplegar**
   - Click en "Deploy"
   - Espera 1-2 minutos
   - Tu sitio estará en vivo en: `https://your-project.vercel.app`

### Configuración Manual (vercel.json)

Si necesitas configuración personalizada, crea un archivo `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite"
}
```

### Despliegue desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Desplegar a producción
vercel --prod
```

## 🎨 Personalización

### Colores
Los colores se definen en `src/index.css` usando variables CSS:
- **Primary (Azul):** `--primary: 210 100% 25%`
- **Accent (Rojo):** `--accent: 348 83% 47%`

### Contenido
- **Servicios:** Editar `src/components/Services.tsx`
- **Testimonios:** Editar `src/components/Testimonials.tsx`
- **Contacto:** Editar `src/components/Contact.tsx`
- **Información de contacto:**
  - Teléfono: 55 7465 5927
  - WhatsApp: +52 55 7465 5927
  - Email: contacto@etiquetasarmo.com
  - Dirección: Laminadores 131, Azcapotzalco, CDMX

### Imágenes del Carrusel
Para cambiar las imágenes del carrusel, reemplaza en `src/assets/`:
- `almacen_armo.jpg`
- `etiqueta_armo.jpg`
- `maquinaria_armo.jpeg`

## 🔧 Configuración de Vite

El proyecto usa Vite con las siguientes características:
- Puerto de desarrollo: 8080 (o siguiente disponible)
- Alias de rutas: `@/` → `./src/`
- Plugin React con SWC para compilación rápida
- Hot Module Replacement (HMR)

## 📱 Responsive Design

El sitio es completamente responsivo con breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔒 SEO

El proyecto incluye:
- Meta tags optimizados
- Open Graph tags para redes sociales
- Twitter Card tags
- Favicon personalizado
- Título y descripción descriptivos

## 📊 Rendimiento

- Build optimizado con Vite
- Code splitting automático
- Imágenes optimizadas
- Carga diferida de componentes
- Animaciones CSS performantes

## 🐛 Solución de Problemas

### El servidor no inicia
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Error de TypeScript
```bash
# Verificar configuración
npm run lint
```

### Puerto en uso
El servidor buscará automáticamente el siguiente puerto disponible (8081, 8082, etc.)

## 📄 Licencia

Este proyecto es propiedad de Etiquetas Armo. Todos los derechos reservados.

## 👥 Contacto

**Etiquetas Armo**
- Dirección: Laminadores 131, Col. Trabajadores de Hierro, Azcapotzalco, 02650, CDMX
- Teléfono: 55 7465 5927
- Email: contacto@etiquetasarmo.com
- WhatsApp: +52 55 7465 5927

---

Desarrollado con React + TypeScript + Vite + Tailwind CSS
