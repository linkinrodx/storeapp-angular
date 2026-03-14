# Marcas Internacionales — Interface System

This interface system is designed for an editorial e-commerce experience. Currently themed for **Marcas Internacionales**, the structure is built to be modular, premium, and artisanal, making it easily adaptable to different high-end retail domains.

## Intent
- **Human:** A customer seeking a premium and exclusive shopping experience.
- **Accomplish:** Seamless discovery and procurement of specialized products.
- **Feel:** Editorial, Artisanal, Warm, and Layered.

## Visual Identity

### Color Palette (Premium Editorial Domain)
- **Base Canvas:** `--surface-0` (#FAF7F2). Warm transparency for a clean, non-industrial look.
- **Accent/Action:** `--flacon` (#C8A96E). A rich, metallic-inspired tone for primary interactions.
- **Deep Contrast:** `--velvet` (#2B1B17). Used for structure, typography, and premium clarity.
- **Secondary/Metadata:** `--mist` (#7A6E65). Soft tones for metadata and supporting text.
- **Soft Accent:** `--petal` (#EDD5C8). Warmth for secondary states and UI micro-details.

### Depth Strategy: Subtle Layering
Avoid hard black borders or dramatic shadows.
- **Elevation Scale:**
  - Base: `--surface-0`
  - Resting Cards: `--surface-1` (#F5EFE0)
  - Interactive/Hover: `--surface-2` (#EDE5D2)
- **Borders:** Whisper-quiet `rgba(velvet, 0.05)` to `0.15`. Structure should be felt, not seen.

### Signature Element: Classification Ribbons
A visual classifier representing product categories or families.
- Used as a 3px divider or accent on product cards and headers to provide immediate visual grouping.
- **Current Families (Fragrance Optimized):** Floral, Wood, Oriental, Fresh, Gourmand.

### Typography
- **Editorial Headings:** Cormorant Garamond. High contrast, tight tracking, serif for a classic look.
- **Interface Labels/Body:** DM Sans. Clean, readable, geometric for technical clarity.

## Spacing System
- **Base Unit:** 4px.
- **Grid:** Multiples of 4px.
- **Section Gap:** 5rem (80px) for a spacious, "editorial" layout that avoids clutter.

## Component Patterns

### Product Cards
- Warm background (`--champagne-light`).
- Top-aligned Primary Classification Ribbon.
- Interactive counters (Wishlist) integrated into the visual field.
- Inset image area with darker background to draw focus to product photography.

### Navigation Scaffolding
- Sticky navbar with same background as canvas (`--surface-0`).
- Subtle bottom border for separation without visual fragmentation.
- Centered brand identity for editorial balance.

### Forms & Controls
- **Inputs:** Inset look. Slightly darker than the surface they sit on to signify interactivity.
- **Buttons:**
  - Primary: Solid brand accent (`--flacon`) with deep contrast text.
  - Secondary: Outlined or subtle surface tint for hierarchical depth.
