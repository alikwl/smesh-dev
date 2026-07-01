# Workflow: /full-audit

This workflow runs a comprehensive site audit to confirm quality gates before code changes are committed and deployed.

## Steps

1. **Local Compilation**:
   - Run `npm run build` in the workspace root directory.
   - Confirm there are zero warnings, Vite compilation issues, or dependency resolution errors.

2. **Console Verification**:
   - Start the local dev server (`npm run dev`) and inspect the terminal output.
   - Verify there are no warnings like "SUPABASE_URL or SUPABASE_SERVICE_KEY is missing".

3. **Responsive Display Check**:
   - Run the `@qa` agent to check page display at viewport sizes:
     - Mobile (360px)
     - Tablet (768px)
     - Desktop (1240px+)

4. **Performance Check**:
   - Verify image formats (strictly WebP).
   - Check that external styles or scripts do not block main thread execution.
