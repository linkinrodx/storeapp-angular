# Perfumery Ecommerce UI — Task Checklist

## Planning
- [x] Read interface-design skill
- [x] Explore domain & define design direction
- [/] Write implementation plan → get user approval

## Angular Project Setup
- [ ] Create Angular 19 SSR project in `h:\Proyectos RSS\storeapp-angular`
- [ ] Install dependencies (Google Fonts, Lucide icons)
- [ ] Set up global styles / design tokens (CSS variables)

## Design System
- [ ] Token file: colors, spacing, typography, elevation
- [ ] Global resets + base styles in `styles.scss`
- [ ] Shared components: Button, Badge, Input, Card surface

## Shared Layout
- [ ] Navbar (logo, search, cart icon, wishlist, user, language/currency)
- [ ] Mega-menu / category navigation
- [ ] Footer (links, newsletter, social)
- [ ] Page shell / router outlet

## Pages

### Home Page
- [ ] Hero banner (full-width editorial image + headline)
- [ ] Featured categories strip (Perfumes, Colonias, Maquillaje, Skincare, Estuches, Accesorios)
- [ ] New arrivals product row
- [ ] Trending / bestsellers section
- [ ] Brand spotlight banner
- [ ] Newsletter capture section

### Catalog / Shop Page
- [ ] Left filter sidebar (brand, price range, category, scent family, size)
- [ ] Product grid with sort dropdown
- [ ] Product card (fragrance note ribbon signature, wishlist, cart button)
- [ ] Pagination / infinite-load placeholder

### Product Detail Page
- [ ] Image gallery (main + thumbs)
- [ ] Product info (name, brand, price, concentration badge)
- [ ] Variant selector (size/ml)
- [ ] Add to cart / wishlist
- [ ] Scent pyramid accordion (top/heart/base notes)
- [ ] Related products row

### Cart Sidebar / Page
- [ ] Line items list (image, name, qty stepper, remove)
- [ ] Order summary (subtotal, shipping, taxes, total)
- [ ] Checkout CTA

### Checkout Page
- [ ] Address form
- [ ] Shipping method selector
- [ ] Payment method selector (placeholder)
- [ ] Order review summary

### Auth Pages
- [ ] Login
- [ ] Register
- [ ] Forgot password

## Verification
- [ ] Run `ng serve --open` to validate all routes in browser
- [ ] Check responsive layouts at 375px and 1440px
- [ ] Verify no console errors
