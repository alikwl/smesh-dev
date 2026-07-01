---
name: implement-feature-consistently
description: Guide clean code structure, Astro content collection usage, reusable components, and robust error handling.
---

# Skill: implement-feature-consistently

## When to Use
Use this skill when:
- Writing new Astro page templates or component files.
- Modifying Astro content collection configurations.
- Refactoring files or logic layers.

## Principles
1. **Astro Best Practices**: Build static-first routes. Keep client-side JS minimal.
2. **Immutability**: Never mutate shared states; always copy/extend variables.
3. **No Placeholders**: Write fully working, production-grade code. No mock details.
4. **Strong Types & Schemas**: Always define correct Zod schemas in `src/content.config.ts` for any new collections.

## Task Checklist
- [ ] Implement data models using standard Zod parsing.
- [ ] Extract repeated UI sections into small, focused Astro components.
- [ ] Add error boundaries and fallback views (e.g. `SmartImage.astro` for images).
