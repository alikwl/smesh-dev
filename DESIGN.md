# Smesh.dev Design System

**Version:** 1.0  
**Last Updated:** July 2026  
**Purpose:** This document serves as the single source of truth for all visual and UI decisions. Every new component, page, or update **must** follow this system for consistency.

---

## 🎨 Visual Theme & Atmosphere

Smesh.dev follows a **warm, editorial, minimalist tech aesthetic** — inspired by high-end publications and premium SaaS brands. 

- **Core Feeling:** Professional, trustworthy, calm, and approachable.
- **Avoid:** Cold dark themes, aggressive gradients, generic tech templates, or overly flashy elements.
- **Key Elements:** Clean lines, generous whitespace, subtle glassmorphism panels, warm neutral base with deep teal accents.

---

## 🎨 Color Palette & Semantic Tokens

All colors are defined as CSS variables in `src/styles/global.css`.

| Token              | Hex / Value                  | Semantic Role                        | Tailwind Usage          |
|--------------------|------------------------------|--------------------------------------|-------------------------|
| `--bg`             | `#f3efe6`                    | Main page background (warm cream)    | `bg-[var(--bg)]`        |
| `--bg-soft`        | `#fbf8f2`                    | Secondary panels                     | Light neutral           |
| `--surface`        | `rgba(255, 251, 245, 0.97)`  | Glassmorphic cards                   | Backdrop blur           |
| `--surface-strong` | `#fffefb`                    | Forms, inputs, modals                | Off-white               |
| `--line`           | `rgba(44, 44, 38, 0.12)`     | Subtle dividers                      | Border                  |
| `--line-strong`    | `rgba(44, 44, 38, 0.2)`      | Prominent borders                    | Strong border           |
| `--ink`            | `#171713`                    | Primary text & headings              | `text-stone-950`        |
| `--muted`          | `#5c5a52`                    | Secondary text                       | `text-stone-600`        |
| `--muted-soft`     | `#615e56`                    | Captions & footnotes                 | `text-stone-500`        |
| `--accent`         | `#0f766e`                    | Brand primary (Deep Teal)            | `text-teal-700`         |
| `--accent-strong`  | `#115e59`                    | Hover/active states                  | `bg-teal-800`           |
| `--accent-soft`    | `rgba(15, 118, 110, 0.12)`   | Hover tints, tags                    | Teal subtle             |

**Primary Accent:** Deep Teal (`--accent`) — Use for all CTAs, links, and highlights.

---

## 📐 Spacing & Layout

- **Max Container Width:** `1240px` (`.site-shell` class)
- **Horizontal Padding:** `px-4 sm:px-6 lg:px-8`
- **Section Vertical Spacing:**
  - Standard: `py-16 md:py-24`
  - Hero/Large: `pt-28 pb-20 md:pt-36 md:pb-28`
- **Grid:** 12-column responsive grid with consistent gutters.

---

## 🔠 Typography

- **Heading Font:** `Sora` (sans-serif) — Bold, modern, excellent for display
- **Body Font:** `Manrope` (sans-serif) — Highly readable for long content
- **Letter Spacing:** Headings `-0.04em`, Body `normal`

**Scale:**

- **Hero/Display Title:** `text-[2.15rem] sm:text-[2.7rem] lg:text-[3.15rem] xl:text-[3.45rem] font-semibold leading-tight`
- **Section Title:** `text-[1.45rem] sm:text-[1.8rem] font-semibold leading-tight`
- **Body Text:** `text-[14px] md:text-[15px] leading-relaxed`
- **Small Text:** `text-sm` (captions, footnotes)

---

## 🧩 Component Guidelines

### Buttons
- **Primary:** Solid `--accent` background, white text. Hover → `--accent-strong` + slight lift + shadow.
- **Secondary:** Outlined with `--line`, hover fills with `--accent-soft`.
- **Transition:** `220ms ease` for all states.

### Cards & Panels
- **Style:** `.ambient-panel` or `.surface-card` — Glassmorphism (`backdrop-filter: blur(18px)`), border `1px solid var(--line)`, border-radius 18-24px.
- **Hover Effect:** `translate-y-[-3px]` + soft shadow.

### Forms & Inputs
- Clean labels, generous spacing.
- Focus state: Strong teal outline (`outline: 2px solid rgba(15, 118, 110, 0.5)`).
- Error states clearly marked in red-amber tone (minimal use).

### Navigation & Header
- Clean, minimal, sticky with soft backdrop blur.
- Logo + primary nav + CTA button.

---

## ✅ Do's & Don'ts

**Do:**
- Always maintain warm cream background base.
- Use generous whitespace.
- Keep one primary accent color (teal).
- Ensure excellent readability and mobile experience.
- Follow E-E-A-T visual trust signals (professional typography, clean layout).

**Don't:**
- Never use pure black (#000) or pure white (#fff) backgrounds.
- Never introduce new accent colors without updating this document.
- Avoid heavy shadows or skeuomorphic effects.
- Do not use generic Tailwind defaults that break the editorial feel.

---

## 📋 Usage Rules for Agents

1. Always read this file before generating or modifying any UI.
2. New components must be added here first (update this document).
3. All pages (Home, Services, Blog, About, Legal, etc.) must respect this system.
4. Performance first: Keep designs lightweight for Astro static generation.

---

**Approved by:** Haider Ali (Smesh.dev)