# Architecture Documentation

## Overview
Minimalist Workspaces is a static site generated with **Astro 5.0**, focused on performance, strict type safety, and a minimalist design system.

## Tech Stack
- **Core**: Astro 5.0 (SSG Mode)
- **Styling**: Tailwind CSS (v4) with "Swiss Style" constraints.
- **Interactivity**: React (for any future interactive islands).
- **Language**: TypeScript (Strict).
- **Data**: Astro Content Collections (JSON).

## Key Components

### 1. Content Collections
We use `src/content/workspaces` as a "database". 
- Schema defined in `src/content/config.ts` using Zod.
- Strictly typed access to frontmatter/JSON data.
- Images are collocated or referenced from `src/assets`.

### 2. Internationalization (i18n)
- Native Astro i18n routing.
- Default locale: `es`.
- Structure: `/src/pages/[lang]/...` to generate static paths for both languages.
- Redirect at `/` to `/es/`.

### 3. Styling System
- **Global CSS**: `src/styles/global.css` handles the reset and font definitions.
- **Tailwind**: Used strictly for utility classes. No arbitrary values where possible.
- **Design Tokens**: Black (#000) and White (#FFF).

## Directory Structure
```
src/
├── assets/         # Images and SVGs
├── content/        # JSON Content Collections
├── layouts/        # Shared Layouts (Navbar, Head)
├── pages/          # File-based routing
│   ├── index.astro # Redirect
│   └── [lang]/     # Localized routes
└── styles/         # Global CSS
```
