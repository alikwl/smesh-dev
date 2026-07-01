# Workflow: /seo-optimize

This workflow audits and optimizes the site's pages for standard indexing and generative search engines.

## Steps

1. **Schema Check**:
   - Verify every page has a valid JSON-LD structure using the `<Schema />` component.
   - Confirm Entity linking is pointing to Haider Ali and BismillahTC Digital Services.

2. **Generative Answer Summary**:
   - Ensure target pages contain a structured text block at the top containing a direct answer/summary.

3. **Metadata Integrity**:
   - Check title lengths (50-60 characters) and meta descriptions (120-160 characters).
   - Verify open graph tags for Twitter and Facebook sharing.

4. **Sitemap and Robot Files**:
   - Run `npm run build` and verify that `@astrojs/sitemap` generates `sitemap-index.xml` and pages urls correctly in the static output directory.
