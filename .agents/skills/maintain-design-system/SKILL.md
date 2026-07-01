---
name: maintain-design-system
description: Enforce visual styling guidelines, colors, typography, hover transitions, and spacing constraints across the Astro codebase according to DESIGN.md.
---

# Skill: maintain-design-system

## When to Use
Use this skill whenever you are:
- Creating new pages, components, or UI layouts.
- Redesigning existing elements or updating CSS styles.
- Debugging display layouts, mobile-responsiveness, or margins.

## Principles
1. **Design System Adherence**: Only use color codes, font sizes, margins, and borders defined in the root `DESIGN.md`.
2. **Tailwind-Mapped CSS Variables**: Refer to the CSS variables in `src/styles/global.css` (e.g. `var(--accent)`, `var(--bg)`) to keep custom styling unified.
3. **No Placeholders**: Never write placeholders for styles; all components must support fully styled states (hover, focus, active).
4. **Editorial Typography**: Headings must strictly use the `Sora` font with balanced text wrapping. Body text must use `Manrope`.
5. **Source Folder Isolation**: Design and styling changes must strictly occur inside source folders (`src/`, `public/`). Never suggest or execute changes in dev tool directories (`.cursor/`, `.gemini/`), cache folders (`.astro/`), or output folders (`dist/`).

## Task Checklist
- [ ] Verify styling uses semantic layout CSS classes (e.g., `.site-shell`, `.ambient-panel`, `.surface-card`).
- [ ] Confirm margins and paddings match layout ratios (e.g., site container padding).
- [ ] Check color contrasts to maintain clean readability (dark ink on warm beige background).

