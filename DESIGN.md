# Smesh.dev Design System

**Version:** 1.0  
**Last Updated:** July 2026  
**Purpose:** This document serves as the single source of truth for all visual and UI decisions. Every new component, page, or update **must** follow this system for consistency.

---

# Apple Design System

56 tokens conforming to the Open Design token contract — the same structured palette, type, spacing, and motion values your agent reads to theme any artifact.

## Design Tokens

### Surface
| Token | Value |
| :--- | :--- |
| `--bg` | #ffffff |
| `--surface` | #f5f5f7 |
| `--surface-warm` | #fbfbfd |

### Text
| Token | Value |
| :--- | :--- |
| `--fg` | #1d1d1f |
| `--fg-2` | #424245 |
| `--muted` | #6e6e73 |
| `--meta` | #86868b |

### Border
| Token | Value |
| :--- | :--- |
| `--border` | #d2d2d7 |
| `--border-soft` | #e8e8ed |

### Accent
| Token | Value |
| :--- | :--- |
| `--accent` | #0071e3 |
| `--accent-on` | #ffffff |
| `--accent-hover` | #0077ed |
| `--accent-active` | #0066cc |

### Semantic
| Token | Value |
| :--- | :--- |
| `--success` | #16a34a |
| `--warn` | #eab308 |
| `--danger` | #dc2626 |

### Typography
* **--font-display**: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif
* **--font-body**: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif
* **--font-mono**: "SF Mono", ui-monospace, "JetBrains Mono", Menlo, Monaco, Consolas, monospace

### Type scale
| Token | Value |
| :--- | :--- |
| `--text-xs` | 12px |
| `--text-sm` | 14px |
| `--text-base` | 17px |
| `--text-lg` | 21px |
| `--text-xl` | 28px |
| `--text-2xl` | 40px |
| `--text-3xl` | 56px |
| `--text-4xl` | 80px |
| `--leading-body` | 1.47 |
| `--leading-tight` | 1.05 |
| `--tracking-display` | -0.015em |

### Spacing
| Token | Value |
| :--- | :--- |
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--section-y-desktop` | 100px |
| `--section-y-tablet` | 64px |
| `--section-y-phone` | 40px |

### Radius
| Token | Value |
| :--- | :--- |
| `--radius-sm` | 8px |
| `--radius-md` | 12px |
| `--radius-lg` | 18px |
| `--radius-pill` | 980px |

### Elevation
* **--elev-flat**: none
* **--elev-ring**: 0 0 0 1px var(--border)
* **--elev-raised**: 0 12px 32px rgba(0, 0, 0, 0.08)

### Focus
* **--focus-ring**: 0 0 0 4px color-mix(in oklab, var(--accent), transparent 65%)

### Motion
* **--motion-fast**: 150ms
* **--motion-base**: 220ms
* **--ease-standard**: cubic-bezier(0.28, 0, 0.22, 1)

### Layout
| Token | Value |
| :--- | :--- |
| `--container-max` | 1024px |
| `--container-gutter-desktop` | 22px |
| `--container-gutter-tablet` | 18px |
| `--container-gutter-phone` | 16px |

---

**Category:** Media & Consumer. Consumer electronics. Premium white space, SF Pro, cinematic imagery.

## 1. Visual Theme & Atmosphere
Apple’s web language is a precision editorial system that alternates between gallery-like calm and retail-density information blocks. The visual tone stays restrained: broad neutral canvases, quiet chrome, and product imagery given almost all of the expressive weight. The interface is engineered to disappear so hardware, materials, and finish options become the narrative foreground.

Across the five analyzed pages, the rhythm is consistent but not monolithic. Marketing surfaces (homepage and Environment) use cinematic black-and-light chaptering, while commerce surfaces (Store and Shop flows) introduce tighter spacing, more utility controls, and denser card stacks without breaking the core brand grammar. The result is one system with two gears: showcase mode and transaction mode.

Typography is the stabilizer. SF Pro Display carries hero and merchandising hierarchy with compact line heights and controlled tracking, while SF Pro Text handles product metadata, navigation, filters, and dense selection UI. The typography stays understated, but the scale range is wide enough to support both billboard hero messaging and micro utility labels.

### Key Characteristics:
* **Binary section rhythm:** deep black scenes (#000000) alternating with pale neutral fields (#f5f5f7)
* **Single blue accent family** for action and link semantics (#0071e3, #0066cc, #2997ff)
* **Dual operating modes:** cinematic showcase modules and dense commerce configurators
* **Heavy reliance on imagery and material finishes;** UI chrome remains visually thin
* **Tight headline metrics** (SF Pro Display, semibold) paired with compact body/link typography (SF Pro Text)
* **Pill and capsule geometry** as signature action language (18px to 980px and circular controls)
* **Depth used sparingly;** contrast and surface separation do most of the layering work
* **Multi-page color-block rhythm:** black hero chapters -> pale neutral merchandising fields -> utility white retail surfaces -> dark micro-surfaces for controls

## 2. Color Palette & Roles
*Source Pages:* [Apple](https://www.apple.com/), [Environment](https://www.apple.com/environment/), [Store](https://www.apple.com/store), [iPhone 17 Pro](https://www.apple.com/shop/buy-iphone/iphone-17-pro), [Accessories](https://www.apple.com/shop/accessories/all)

### Primary
* **Absolute Black (#000000):** Immersive hero canvases, high-drama product chapters, deep UI anchors.
* **Pale Apple Gray (#f5f5f7):** Main light surface for feature bands, comparison blocks, and editorial transitions.
* **Near-Black Ink (#1d1d1f):** Primary text and dark-fill control color on light canvases.

### Secondary & Accent
* **Apple Action Blue (#0071e3):** Primary action fill and focus-signaling brand accent.
* **Body Link Blue (#0066cc):** Inline link color optimized for long-form readability.
* **High-Luminance Link Blue (#2997ff):** Bright link treatment on darker scenes where stronger contrast is required.

### Surface & Background
* **Pure White Canvas (#ffffff):** Retail/product-list backgrounds and dense transactional sections.
* **Graphite Surface A (#272729):** Dark card and media-control context layer.
* **Graphite Surface B (#262629):** Slightly deeper dark utility layer for control groupings.
* **Graphite Surface C (#28282b):** Elevated dark supporting surfaces.
* **Graphite Surface D (#2a2a2c):** Darkest elevated step used for separation in richer dark scenes.

### Neutrals & Text
* **Secondary Neutral Gray (#6e6e73):** Body secondary copy, helper descriptions, tertiary metadata.
* **Soft Border Gray (#d2d2d7):** Dividers, subtle outlines, and muted utility containment.
* **Mid Border Gray (#86868b):** Stronger field outlines in product-configuration and filter contexts.
* **Utility Dark Gray (#424245):** Dark-neutral text/surface crossover in store contexts.

### Semantic & Accent
* **Selection/Focus Signal (#0071e3):** Shared focus and selected-state signal across marketing and commerce contexts.
* **Error/Warning/Success:** No distinct semantic palette was consistently visible in the extracted surface set.

### Gradient System
The extracted pages are overwhelmingly solid-surface driven. Visual richness comes from photography and finish rendering rather than persistent UI gradients.

## 3. Typography Rules

### Font Family
* **Display Family:** SF Pro Display, fallbacks SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif
* **Text Family:** SF Pro Text, fallbacks SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif
* **Usage Split:** Display family handles hero/product headlines and merchandising headings; Text family handles navigation, controls, labels, and dense commerce copy.

### Hierarchy
| Role | Size | Weight | Line Height | Letter Spacing | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Hero Display XL | 80px | 600 | 1.00-1.05 | -1.2px | Environment/store hero scale |
| Hero Display L | 56px | 600 | 1.07 | -0.28px | Homepage hero moments |
| Section Display | 48px | 500-600 | 1.08 | -0.144px | Major chapter headings |
| Product Heading | 40px | 600 | 1.10 | normal | Product and campaign section titles |
| Feature Display | 38px | 600 | 1.21 | 0.152px | Device and merchandising callouts |
| Promo Display | 32px | 300-600 | 1.09-1.13 | 0.128px to 0.352px | Module-level sub-heroes |
| Card/Product Title | 28px | 600 | 1.14 | 0.196px | Tile-level naming and key copy |
| Utility Heading | 24px | 600 | 1.17 | 0.216px / -0.2px | Configurator/grouped headers |
| Link/Action Heading | 21px | 600 | 1.14-1.38 | 0.231px | Larger promotional links |
| Subhead | 19px | 600 | 1.21 | 0.228px | Compact section intros |
| Body Primary | 17px | 400 | 1.47 | -0.374px | Standard body descriptions |
| Body Emphasis | 17px | 600 | 1.24 | -0.374px | Emphasized labels/values |
| Control Label | 14px | 400-600 | 1.29-1.47 | -0.224px | Buttons, helper labels, nav |
| Micro UI | 12px | 400-600 | 1.00-1.33 | -0.12px | Fine print, micro labels |
| Legal/Meta | 10px | 400 | 1.30-1.47 | -0.08px | Dense metadata/legal support |

### Principles
* **Continuity:** The same typographic DNA spans cinematic launches and product-purchase flows.
* **Compression at scale:** Display tiers use tight leading and controlled tracking.
* **Readable density:** SF Pro Text balances compactness with vertical rhythm.
* **Measured weight ladder:** 600 is the dominant emphasis weight.

### Note on Font Substitutes
Closest freely available substitutes: Inter for text-heavy implementation and Inter Tight for headings. When substituting, increase line-height slightly (+0.02 to +0.06) on body sizes and reduce negative tracking intensity to preserve readability.

## 4. Component Stylings

### Buttons
* **Primary Fill Action:** #0071e3 background, #ffffff text, 8px radius.
* **Dark Fill Action:** #1d1d1f background, #ffffff text, 8px radius.
* **Pill/Capsule Action Family:** large capsule actions at 18px-56px radii and extreme pill links at 980px.
* **Utility Filter/Button Shells:** light shells with subtle gray borders (#d2d2d7 / #86868b).
* **Pressed Behavior:** active controls commonly reduce scale or shift fill slightly.

### Cards & Containers
* **Editorial/Product Cards:** light cards on #f5f5f7 or white fields with minimal framing.
* **Dark Utility Cards:** graphite steps (#272729 to #2a2a2c) for overlays and media controls.
* **Configurator Panels:** rounded containers (12px-18px) with restrained border definition.
* **Carousel/Spotlight Modules:** larger rounded shells (28px-36px).

### Inputs & Forms
* **Retail Input Fields:** translucent/white backgrounds, dark text, border-led containment.
* **Selection Controls:** circular/toggle-like geometry.
* **Density Strategy:** form fields remain visually quiet.

### Navigation
* **Global Marketing Nav:** compact dark translucent bar.
* **Store/Sub-shop Nav:** utility bars, chips, and segmented controls.
* **Link Hierarchy:** link blues remain the primary interactive signal.

### Image Treatment
* **Object-First Photography:** hardware/accessories foregrounded on solid surfaces.
* **High-fidelity finish:** reflective/material details are central.
* **Mixed framing:** full-bleed hero scenes coexist with rounded retail cards.

### Other Distinctive Components
* **Product Configurator Matrix:** option stacks, selectors, and summary blocks.
* **Carousel Control Dots/Arrows:** circular control vocabulary.
* **Environment Story Panels:** narrative chapters blending typography with cinematic visuals.

## 5. Layout Principles

### Spacing System
Base unit is effectively 8px. Frequently reused values: 2, 4, 6, 7, 8, 9, 10, 12, 14, 17, 20 px.

### Grid & Container
* **Showcase pages:** large central columns, broad horizontal breathing room.
* **Commerce pages:** tighter multi-column grids, modular stacking.
* **Container behavior:** constrained readable core, generous outer margins.

### Whitespace Philosophy
* **Scene pacing:** major visual chapters use broad top/bottom breathing room.
* **Information compaction:** retail pages compress spacing for density.
* **Contrast-led separation:** reliance on surface changes over decorative separators.

### Border Radius Scale
* **5px:** utility links/tags.
* **8px-12px:** standard controls/fields.
* **16px-18px:** cards/module frames.
* **28px-36px:** larger spotlight containers.
* **56px / 100px / 980px:** capsules/pills.
* **50%:** circular media/selection.

## 6. Depth & Elevation
| Level | Treatment | Use |
| :--- | :--- | :--- |
| Level 0 | Flat neutral surfaces (#ffffff, #f5f5f7, #000000) | Main narrative/product stages |
| Level 1 | Subtle border containment (#d2d2d7, #86868b) | Filters, inputs, utility cards |
| Level 2 | Soft shadow (rgba...0.08-0.22) | Highlighted cards/modules |
| Level 3 | Dark-surface stepping (#272729 -> #2a2a2c) | Overlays, media controls |
| Accessibility | Blue focus signal (#0071e3) | Keyboard/selection emphasis |

## 7. Do’s and Don’ts

### Do
* Use the neutral triad (#000000, #f5f5f7, #ffffff) as the structural foundation.
* Reserve blue accents for genuine action and navigation.
* Keep typography tight and deliberate.
* Maintain capsule/circle geometry for controls.
* Let product imagery carry visual drama.

### Don’t
* Don’t introduce broad secondary accent palettes.
* Don’t overuse shadows, glow effects, or decorative gradients.
* Don’t mix unrelated font families.
* Don’t flatten all corners to a single radius.
* Don’t overload commerce modules with thick borders.

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
| :--- | :--- | :--- |
| Small Mobile | <374px | Tightened controls, single-column stacks |
| Mobile | 375px-640px | One-column modules, compact action rows |
| Tablet | 641px-833px | Expanded cards, mixed 1-2 column transitions |
| Tablet Wide | 834px-1023px | Stable multi-column, larger text |
| Desktop | 1024px-1240px | Full retail layouts, product comparison |
| Desktop Wide | 1241px-1440px | Marketing hero expansion |
| Large Desktop | 1441px+ | Maximum chapter breathing room |

## 9. Agent Prompt Guide

### Quick Color Reference
* **Primary action:** #0071e3
* **Inline link:** #0066cc
* **Dark chapter:** #000000
* **Light chapter:** #f5f5f7
* **Primary text (light):** #1d1d1f

### Iteration Guide
1. Lock the neutral foundation (#000000, #f5f5f7, #ffffff).
2. Keep blue accents scarce and purposeful.
3. Tune typography: display scale first, then body, then micro.
4. Match radius by component class.
5. Increase density gradually moving from showcase to commerce.
6. Validate product imagery dominance.

---

**Approved by:** Haider Ali (Smesh.dev)