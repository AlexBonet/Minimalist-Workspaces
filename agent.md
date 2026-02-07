# Minimalist Workspaces - Project Agent Context

## Project Overview

**Name:** Minimalist Workspaces (TFM - Master's Thesis Project)
**Goal:** A minimalist, high-performance gallery of workspace setups, demonstrating modern web engineering and "Swiss Style" design principles.
**Core Constraint:** **Swiss Style / International Typographic Style**.

- **NO Rounded Corners:** Everything must be sharp (`square` or default).
- **High Contrast:** Black & White primarily.
- **Grid-Based:** Strict alignment and negative space.
- **Typography:** Sans-serif, tight tracking.

## Tech Stack

- **Core:** Astro 5.0 (Static Site Generation) + React 19.
- **Styling:** Tailwind CSS v4 (Utility-first).
- **Language:** TypeScript (Strict Mode).
- **Data:** Astro Content Collections (Zero-DB Architecture).
- **Testing:** Vitest (Unit) + Playwright (E2E).
- **i18n:** Custom Type-Safe Object (`src/i18n/ui.ts`). **Zero external libraries.**

## Architecture: Component-Based Static Site

1. **`src/content/`**: (DATA) JSON schemas and content entries. The "Database" of the project.
2. **`src/components/`**: (UI) React & Astro components.
3. **`src/layouts/`**: (STRUCTURE) Shared page layouts enforcing the grid system.
4. **`src/pages/`**: (ROUTING) File-based routing using `[lang]` pattern.
5. **`src/i18n/`**: (TEXT) Single source of truth for UI texts.
6. **`tests/`**: (QA) E2E and Unit testing suites.

## Critical Files & Permissions (AI RULES)

- **`src/content/` config**: `src/content/config.ts` defines the data schema. Do not modify unless structure changes.
- **`docs/`**: Context source. READ-ONLY unless explicitly instructed.
- **`src/i18n/ui.ts`**: The ONLY place for UI strings.

## Domain & Design Rules

1. **Zero-DB:** Operations are read-only from `src/content`. No database mutations.
2. **Swiss Style Enforcement:**
   - **FORBIDDEN:** `rounded`, `rounded-md`, `rounded-full`, `shadow-lg` (unless strictly necessary/minimal).
   - **REQUIRED:** `border`, `border-black`, `bg-white`, `text-black` (and inverse for dark mode if present).
3. **i18n Routing:** All pages must follow `/[lang]/...` pattern.
4. **Content Logic:** Images and Metadata are strictly typed via Content Collections.

## Coding Standards (Strict)

1. **i18n First (Zero Hardcoded Strings):**
   - **FORBIDDEN:** Writing text directly in JSX (e.g., `<p>Hello</p>`).
   - **REQUIRED:** Use the `ui` object from `src/i18n/` (e.g., `{ui[lang]['footer.title']}`).
   - **Languages:** English (`en`) and Spanish (`es`).

2. **No "Any":** Strict TypeScript. Use inferred types from Content Collections.

3. **Clean Code & Architecture:**
   - **Clean Code:** Max 300 lines/file. Code in English.
   - **SOLID:** Strictly apply SRP, OCP, LSP, ISP, DIP.
   - **Clean Architecture:** Domain/Business Logic must be decoupled from UI.

4. **Performance:** Components should be static by default. Use `client:*` directives strictly when interactivity is needed.

5. **Testing:**
   - New features MUST include E2E tests (`tests/e2e/`).
   - Utility logic MUST include Unit tests (`src/tests/`).

## Current Status (Snapshot)

- **Core:** Astro 5.0 + Tailwind v4 configured and running.
- **Content:** Workspaces defined in Content Collections.
- **Testing:** E2E (Playwright) and Unit (Vitest) pipelines active.
- **Deploy:** Static build (`npm run build`).
