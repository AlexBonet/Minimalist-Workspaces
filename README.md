# Minimalist Workspaces (TFM)

> **Master's Thesis Project** - Advanced Web Architecture & Design

A minimalist, high-performance gallery of workspace setups, built to demonstrate modern web engineering principles, strict type safety, and "Swiss Style" design constraints.

[🇪🇸 Leer en Español](./README.es.md)

🚀 **Live Demo**: [minimalistworkspaces.netlify.app](https://minimalistworkspaces.netlify.app)

## 🚀 Tech Stack

- **Core**: [Astro 5.0](https://astro.build) (Static Site Generation)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) (Utility-first, zero config)
- **Language**: TypeScript (Strict Mode)
- **Data**: Astro Content Collections (Zero-DB Architecture)
- **Tests**: Vitest (Unit) & Playwright (E2E)

## 🎨 Design Philosophy

The project adheres to **International Typographic Style (Swiss Style)**:
- **Asymmetric Grids**: Content-first layout.
- **Typography**: Sans-serif (Inter/System), tight tracking, high contrast (Black & White).
- **Minimalism**: Removal of non-essential elements. "Less is more."

## 📊 Project Presentation

You can view the project presentation slides here:

- [📄 Presentation (PDF)](./docs/Presentación%20Minimalist%20workspace.pdf)
- [🖥️ Presentation (PPTX)](./docs/Presentación%20Minimalist%20workspace.pptx)

## 💰 Monetization Strategy

The project's sustainability model is based on **specialized consultancy services**:

- **Workspace Optimization**: Personalized analysis of existing setups to improve ergonomics, lighting, and cable management.
- **Aesthetic Guidance**: Curated recommendations for furniture and accessories that align with the "Swiss Style" minimalist philosophy.
- **Performance Tuning**: Technical advice for high-performance home office configurations.

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
git clone <repository-url>
cd minimalist-workspaces
npm install
```

### Development

Start the local development server:

```bash
npm run dev
```

Visit `http://localhost:4321`.

### Building for Production

Generate the static site (`dist/`):

```bash
npm run build
```

## ✅ Testing

This project employs a rigorous testing strategy for a portfolio/TFM context.

### Unit Tests (Vitest)
Verifies internationalization logic and utility functions.

```bash
npm run test
```

### End-to-End Tests (Playwright)
Verifies critical user flows, navigation, and SEO tags.  
**Note**: Requires a production build first.

```bash
# 1. Build the site
npm run build

# 2. Run E2E tests
npm run test:e2e
```

## 📂 Project Structure

```text
src/
├── content/        # Data (JSON) schemas & entries
├── components/     # UI Components (React/Astro)
├── layouts/        # Shared page layouts
├── pages/          # File-based routing ([lang] pattern)
├── styles/         # Global CSS & Tailwind imports
└── i18n/           # Internationalization logic
tests/
└── e2e/            # Playwright specifications
```

---
© 2026 AlexBonet.
