# Smesh.dev Design System & UI Specification

This specification governs the visual language, typography, color palette, spacing tokens, and component guidelines for the Smesh.dev workspace.

---

## 🎨 Visual Theme & Atmosphere

Smesh.dev is styled with a **warm, editorial, and minimalist tech aesthetic**. It avoids cold dark-mode grids and generic developer templates, opting for a clean, spacious look resembling a high-end publication. It incorporates clean lines, glassmorphism panel backdrops, and deep teal accents.

---

## 🎨 Color Palette & Semantics

The CSS variables are declared in [global.css](file:///c:/Haider/smesh.dev/src/styles/global.css). Use these values via semantic classes:

| Token Name | Hex/RGBA Value | Semantic Role | Tailwind Equivalent |
|------------|----------------|---------------|---------------------|
| `--bg` | `#f3efe6` | Global page background (Soft warm beige) | Custom background |
| `--bg-soft` | `#fbf8f2` | Inner panels / secondary backgrounds | `bg-neutral-50` / Custom |
| `--surface` | `rgba(255, 251, 245, 0.97)` | Card surfaces (Glassmorphic cards) | Glass backdrop |
| `--surface-strong`| `#fffefb` | High contrast elements (Forms, input fields) | Off-white |
| `--line` | `rgba(44, 44, 38, 0.12)` | Subtle borders and dividers | Custom line border |
| `--line-strong`| `rgba(44, 44, 38, 0.2)` | Prominent borders, tables, select boxes | Strong border |
| `--ink` | `#171713` | Main copy and headings (Rich dark charcoal) | `text-stone-900` |
| `--muted` | `#5c5a52` | Secondary copy, descriptors | `text-stone-600` |
| `--muted-soft`| `#615e56` | Captions, small footnotes | `text-stone-500` |
| `--accent` | `#0f766e` | Brand primary color (Deep teal) | `text-teal-700` |
| `--accent-strong`| `#115e59` | Active buttons, primary focus (Dark teal) | `bg-teal-800` |
| `--accent-soft`| `rgba(15, 118, 110, 0.12)`| Hover accents, tag background | Teal-50 tint |

---

## 📐 Spacing & Layout

- **Container constraints**: All contents must be centered within the `.site-shell` class (max-width `1240px`).
- **Responsive padding**:
  - Desktop: `px-6`
  - Tablet: `px-5`
  - Mobile: `px-4`
- **Section spacing**: Vertical gaps must follow comfortable padding ratios:
  - Standard section gap: `py-16 md:py-24`
  - Hero section gap: `pt-28 pb-16 md:pt-36 md:pb-24`

---

## 🔠 Typography

Headings and body text must respect the selected typographic hierarchy:

- **Headings (H1 to H6)**:
  - Font: `Sora` sans-serif
  - Letter spacing: `-0.04em`
  - Wrapping: `text-wrap: balance`
- **Body Copy, Lists, Forms**:
  - Font: `Manrope` sans-serif
  - Wrapping: `text-wrap: pretty`
- **Scale**:
  - `.display-title` (Hero): `text-[2.15rem] sm:text-[2.7rem] lg:text-[3.15rem] xl:text-[3.45rem] font-semibold leading-[1]`
  - `.section-title`: `text-[1.45rem] sm:text-[1.8rem] font-semibold leading-[1.08]`
  - `.body-copy`: `text-[13px] md:text-[14px] leading-[1.75]`

---

## 🧩 Component Library

### 1. Buttons
- **Primary Action**: Solid `#0f766e` (`var(--accent)`).
  - Hover state: Shifts to `#115e59` (`var(--accent-strong)`), translates up by `2px`, and adds smooth shadow scaling.
  - Transition speed: `220ms ease`.
- **Secondary Action**: Bordered (`border border-line`).
  - Hover state: Background turns slightly translucent teal tint (`var(--accent-soft)`).

### 2. Cards (`.ambient-panel` & `.surface-card`)
- **Panel Design**: Translucent backdrop with `18px` blur filter (`backdrop-filter: blur(18px)`), surrounded by a thin border `1px solid var(--line)`.
- **Interaction**:
  - Hover: Translates upward (`translate-y-[-2px]`) with box shadow scaling (`box-shadow: 0 18px 36px rgba(18, 26, 22, 0.08)`).
  - Border radius: `.radius-lg` (`24px`), `.radius-md` (`18px`).

### 3. Forms
- **Input Fields**: Placed in `.surface-strong` container with `#171713` borders.
- **Focus states**: Inputs must clearly display a outline-offset focus ring when active:
  `outline: 2px solid rgba(15, 118, 110, 0.45); outline-offset: 3px;`

---

## ❌ Do's & Don'ts

### ✅ Do:
- Keep background colors limited to cream `#f3efe6` or variations of `#fbf8f2`.
- Use a single consistent transition duration (`220ms ease`) for all interactive elements.
- Keep typography scales clean and restrict heavy font weight parameters.

### ❌ Don't:
- Never use pure black (`#000000`) or pure white (`#ffffff`) for backgrounds or copy.
- Never use generic blue, green, or purple colors.
- Never add unnecessary shadows or hard box-borders that break the publication feel.
