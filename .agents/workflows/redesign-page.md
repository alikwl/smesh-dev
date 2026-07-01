# Workflow: /redesign-page

This workflow guides the redesign of an existing page to improve typography, spacing, styling, and conversions without breaking functionality.

## Steps

1. **Visual Audit**:
   - Inspect the current page layout and identify generic elements (e.g. basic boxes, placeholders).
   - Use the `@designer` agent to plan visual improvements based on [DESIGN.md](file:///c:/Haider/smesh.dev/DESIGN.md).

2. **Styling Update**:
   - Modify page styling using Tailwind utility classes or custom variables from `global.css`.
   - Update buttons to use Smesh.dev hover states. Use `.ambient-panel` or `.surface-card-hover` styles.

3. **Responsive Alignment**:
   - Check layout displaying on mobile viewports.
   - Adjust spacing and font sizes using responsive padding (`py-12 md:py-24`) and typography tags.

4. **Conversion Check**:
   - Call the `conversion-optimization` skill to check form alignment and dynamic CTAs.

5. **Build and Validate**:
   - Run `npm run build` to confirm compilation is error-free.
