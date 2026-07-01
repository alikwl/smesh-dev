# Workflow: /new-feature

This workflow defines the step-by-step process for implementing a new feature in the Smesh.dev codebase.

## Steps

1. **Requirements Analysis**:
   - Check [PRD.md](file:///c:/Haider/smesh.dev/production_artifacts/PRD.md) to locate where this feature fits in.
   - Run the `@pm` agent persona to structure requirements.

2. **Astro Schema Configuration**:
   - If the feature introduces new data collections, update Zod schemas in [src/content.config.ts](file:///c:/Haider/smesh.dev/src/content.config.ts).
   - Define all collection frontmatter properties clearly.

3. **Design Check**:
   - Refer to [DESIGN.md](file:///c:/Haider/smesh.dev/DESIGN.md) to select colors, spacing, and hover states.
   - Run the `@designer` agent to review the UI composition.

4. **Implementation**:
   - Run the `@frontend` or `@backend` agent to draft the code.
   - Create reusable sub-components in `src/components/` and integrate them in the page.
   - Write fallback handlers using `SmartImage.astro` for visual elements.

5. **SEO & Schema Integration**:
   - Ensure the new route gets correct `<SEO />` and `<Schema />` configurations.

6. **Quality Gate Validation**:
   - Run the `@qa` agent to perform audits on responsiveness.
   - Verify compile integrity using `npm run build`.
