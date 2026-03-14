# Perfumery Ecommerce UI — Implementation Plan

Create a premium Angular 19 SSR ecommerce for perfumery products. UI only — no backend calls yet, all data is mocked.

---

## Design Direction

**Intent:** A shopper browsing an upscale perfumery — she's looking for indulgence, gifting, or self-care. The interface must feel like walking into a Parisian boutique: luxurious, calm, sensory. Every interaction should feel composed, never frantic.

**Palette**
| Token | Value | Why |
|---|---|---|
| `--champagne` | `#F5EFE0` | Ivory marble — primary surface |
| `--flacon` | `#C8A96E` | Gold-amber glass — brand accent |
| `--flacon-deep` | `#8B6914` | Darker amber — hover / active |
| `--velvet` | `#2B1B17` | Deep burgundy-black — primary text |
| `--mist` | `#7A6E65` | Warm neutral gray — secondary text |
| `--petal` | `#EDD5C8` | Blush rose — subtle highlight surface |
| `--surface-0` | `#FAF7F2` | Page canvas |
| `--surface-1` | `#F5EFE0` | Card resting surface |
| `--surface-2` | `#EDE5D2` | Elevated card / hover |
| `--border` | `rgba(43,27,23,0.10)` | Whisper-quiet separator |

**Typography**
- Headlines: **Cormorant Garamond** (editorial, luxurious, feminine serifs)
- UI / Body: **DM Sans** (clean, readable, unobtrusive)

**Depth strategy:** Layered shadows — warm-tinted box-shadows that lift cards gently. No harsh borders.

**Signature element:** A "fragrance ribbon" — a 3px gradient stripe across the top edge of each product card encoding the scent family in color: floral (rose), oriental (amber), woody (brown), fresh (teal), gourmand (caramel).

---

## Project Structure

```
src/
  app/
    core/
      layout/
        navbar/
        footer/
        shell/        ← router-outlet wrapper
    features/
      home/
      catalog/
      product-detail/
      cart/
      checkout/
      auth/
    shared/
      components/
        product-card/
        badge/
        button/
        input/
      pipes/
      data/           ← mock data (products, categories, brands)
  styles/
    _tokens.scss
    _typography.scss
    _reset.scss
    _components.scss
```

---

## Proposed Changes

### Angular Project Bootstrap

#### [NEW] Angular 20 SSR app
- Run `npx -y @angular/cli@20 new storeapp-angular --directory ./ --routing --style scss --ssr --skip-git --skip-tests` in `h:\Proyectos RSS\storeapp-angular`
- Install: `@angular/platform-browser`, Lucide icons via `lucide-angular`, Google Fonts via `@fontsource/cormorant-garamond` and `@fontsource/dm-sans`

---

### Design System

#### [NEW] `src/styles/_tokens.scss`
All CSS custom properties: colors, spacing scale (4px base), border-radius scale, shadow scale, transition durations.

#### [NEW] `src/styles/_typography.scss`
Font imports, heading scale (h1–h4), body text styles, label styles.

#### [NEW] `src/styles/_reset.scss`
Box-sizing, margin resets, image defaults.

#### [MODIFY] `src/styles.scss`
Import all partials, apply base styles.

---

### Core Layout

#### [NEW] `src/app/core/layout/navbar/`
- Logo (text: *Lumière* + icon)
- Search bar (expands on focus)
- Icons: Wishlist (heart + count), Cart (bag + count), User account
- Responsive: hamburger menu on mobile

#### [NEW] `src/app/core/layout/footer/`
- 4-column links: Tienda / Marcas / Atención / Sobre Nosotros
- Newsletter signup input
- Social icons row
- Legal line

#### [NEW] `src/app/core/layout/shell/`
- `<app-navbar>` + `<router-outlet>` + `<app-footer>`

---

### Pages

#### [NEW] Home Page (`/`)
- **Hero:** Full-width editorial image (generated) with headline "Descubre tu fragancia" and CTA button
- **Category strip:** 6 pills — Perfumes, Colonias, Maquillaje, Skincare, Estuches, Accesorios
- **New Arrivals:** Horizontal scrolling product row (6 cards)
- **Brand banner:** Split layout — left: luxury brand logos grid, right: editorial image
- **Bestsellers:** 4-column product grid
- **Newsletter:** Soft champagne section with email input + CTA

#### [NEW] Catalog Page (`/tienda`)
- Left sidebar: Brand checkboxes, price range slider, category accordion, scent family pills, size selector
- Product grid: 3-col desktop, 2-col tablet, 1-col mobile
- Sort bar: "X productos" count + sort dropdown
- Product card with fragrance ribbon signature

#### [NEW] Product Detail Page (`/producto/:slug`)
- Image gallery: large main image + 4 thumbnail strip
- Right col: Brand, name, concentration badge (EDP/EDT), price, size variant buttons, Add to Cart, Add to Wishlist
- Tabs: Descripción / Notas de Fragancia (pyramid) / Envío & Devoluciones
- Scent pyramid: visual triangle showing top/heart/base notes
- Related products row

#### [NEW] Cart Page (`/carrito`)
- Slide-over panel (also accessible as page)
- Line items: product image, name, variant, qty stepper, line total, remove
- Order summary card: subtotal, envío, impuestos, total, "Ir al Checkout" CTA

#### [NEW] Checkout Page (`/checkout`)
- Step indicator: Datos / Envío / Pago / Confirmación
- Address form with styled inputs
- Shipping method card selector
- Payment placeholder (credit card form, PayPal option)
- Right: sticky order summary

#### [NEW] Auth Pages (`/auth/login`, `/auth/registro`)
- Split layout: left editorial image, right form
- Login: email + password, "Recordarme", forgot password link
- Register: name, email, password, confirm, terms checkbox

---

## Mock Data

#### [NEW] `src/app/shared/data/products.ts`
Array of ~20 product objects with: id, name, brand, price, image, category, scentFamily, concentration, sizes, notes (top/heart/base), description.

#### [NEW] `src/app/shared/data/categories.ts`
Category list with slug, label, icon name, color.

---

## Verification Plan

### Dev Server
```
cd "h:\Proyectos RSS\storeapp-angular"
npm run dev
# or: npx ng serve --open
```
Navigate to `http://localhost:4200` and verify:

1. **Home** — Hero renders, category strip visible, product cards show fragrance ribbon
2. **Catalog** — Filter sidebar visible, grid renders, sort works (UI state only)
3. **Product Detail** — Gallery, scent pyramid, size variant selection
4. **Cart** — Items render, qty stepper updates total
5. **Checkout** — Step indicator, forms render
6. **Auth** — Login and Register forms render

### Responsive check
Browser DevTools → toggle 375px (iPhone) and 1440px (desktop) on each page.

> [!NOTE]
> No backend or API calls are made. All data is sourced from mock TypeScript files.
