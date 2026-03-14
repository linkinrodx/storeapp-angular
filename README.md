# Marcas Internacionales — E-commerce Platform

**Marcas Internacionales** is a premium e-commerce platform for luxury perfumes and personal care products. The architecture is designed to be highly customizable, allowing the business logic or product category to be changed in the future.

## ✨ High-End Features

- **Premium Editorial UI:** Designed with a high-end aesthetic, currently themed for luxury retail but adaptable to other premium sectors.
- **Scent Ribbons:** A unique signature design element that classifies products by their olfactory family (Floral, Wood, Oriental, etc.).
- **Centralized i18n:** All texts are managed in `src/app/shared/data/i18n.ts` for easy updates and future translations.
- **Performance:** Optimized with Angular SSR (Prerendering), Lucide Icons (Tree-shaken), and modern CSS tokens.
- **Modern Architecture:** Standalone components, strict separation of concerns (HTML/SCSS/TS), and clean dependency management.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS)
- NPM

### Installation
1. Clone the repository.
2. Run `npm install`.
   > [!NOTE]
   > The project uses `.npmrc` with `legacy-peer-deps=true` to handle specific version requirements of cosmetic libraries like `lucide-angular` in Angular 19+.

### Development
Start the dev server:
```bash
npm run start
```
The app will be available at `http://localhost:4200/`.

### Building
Create a production build with SSR/Prerendering:
```bash
npm run build
```

## 🎨 Design System
The design patterns and tokens are documented in `.interface-design/system.md`.

## 🛠️ Tech Stack
- **Core:** Angular 21.x (Latest Stable)
- **Rendering:** Server-Side Rendering (SSR) & Prerendering with `@angular/ssr`
- **Logic:** TypeScript 5.x with modern Standalone Component architecture
- **Styling:** SASS (SCSS) organized in Design Tokens, Typography, and Component-specific files
- **Icons:** Lucide Angular (Optimized with Tree-Shaking)
- **Typography:** Self-hosted via Fontsource 
  - *Cormorant Garamond* (Editorial Headings)
  - *DM Sans* (Interface & Body)
- **Formatting:** Prettier

---
Developed with focus on **Craft and Performance**.
