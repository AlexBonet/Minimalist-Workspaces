# Minimalist Workspaces (TFM)

> **Trabajo de Fin de Máster** - Arquitectura y Diseño Web Avanzado

Una galería minimalista de espacios de trabajo de alto rendimiento, construida para demostrar principios modernos de ingeniería web, tipado estricto y las restricciones del "Estilo Suizo".

[🇺🇸 Read in English](./README.md)

## 🚀 Tech Stack

- **Core**: [Astro 5.0](https://astro.build) (Generación de Sitios Estáticos)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com) (Utility-first, sin configuración)
- **Lenguaje**: TypeScript (Modo Estricto)
- **Datos**: Astro Content Collections (Arquitectura Zero-DB)
- **Tests**: Vitest (Unitarios) & Playwright (E2E)

## 🎨 Filosofía de Diseño

El proyecto se adhiere al **Estilo Tipográfico Internacional (Estilo Suizo)**:
- **Cuadrículas Asimétricas**: Diseño centrado en el contenido.
- **Tipografía**: Sans-serif (Inter/System), tracking ajustado, alto contraste (Blanco y Negro).
- **Minimalismo**: Eliminación de elementos no esenciales. "Menos es más".

## 🛠️ Comenzando

### Prerrequisitos
- Node.js 18+
- npm 9+

### Instalación

```bash
git clone <repository-url>
cd minimalist-workspaces
npm install
```

### Desarrollo

Inicia el servidor de desarrollo local:

```bash
npm run dev
```

Visita `http://localhost:4321`.

### Construcción para Producción

Genera el sitio estático (`dist/`):

```bash
npm run build
```

## ✅ Testing

Este proyecto emplea una estrategia de testing rigurosa para el contexto de un TFM.

### Tests Unitarios (Vitest)
Verifica la lógica de internacionalización y funciones de utilidad.

```bash
npm run test
```

### Tests End-to-End (Playwright)
Verifica los flujos de usuario críticos, navegación y etiquetas SEO.
**Nota**: Requiere una construcción (build) previa.

```bash
# 1. Construir el sitio
npm run build

# 2. Ejecutar tests E2E
npm run test:e2e
```

## 📂 Estructura del Proyecto

```text
src/
├── content/        # Esquemas de datos (JSON) y entradas
├── components/     # Componentes UI (React/Astro)
├── layouts/        # Layouts compartidos
├── pages/          # Enrutamiento basado en archivos (patrón [lang])
├── styles/         # CSS Global e imports de Tailwind
└── i18n/           # Lógica de internacionalización
tests/
└── e2e/            # Especificaciones Playwright
```

---
© 2026 Alex. Desarrollado para Trabajo de Fin de Máster.
