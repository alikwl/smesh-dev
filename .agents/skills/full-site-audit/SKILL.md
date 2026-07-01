---
name: full-site-audit
description: Methods and checks to verify website build integrity, link consistency, and responsiveness.
---

# Skill: full-site-audit

## When to Use
Use this skill when:
- Compiling final production bundles before deployment.
- Refactoring global base layouts.
- Periodic codebase validation audits.

## Principles
1. **Zero Warnings**: Production builds should run without errors or warnings.
2. **Device Responsiveness**: Verify layouts display cleanly from mobile viewport dimensions to large displays.
3. **Optimized Size**: Check bundle assets, image sizing, and CSS styling to prevent performance degradation.

## Task Checklist
- [ ] Run `npm run build` locally to confirm Astro and Vite outputs are compiled.
- [ ] Scan output folders for broken asset urls or styling references.
- [ ] Inspect console outputs for missing variables or placeholder warnings.
