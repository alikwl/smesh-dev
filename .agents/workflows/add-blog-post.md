# Workflow: /add-blog-post

This workflow simplifies adding high-quality, SEO-optimized blog posts using Astro content collections.

## Steps

1. **Content Draft**:
   - Write the blog post in MDX format inside `src/content/posts/`.
   - Name the file `[slug].md`.

2. **Metadata Setup**:
   - Provide the required frontmatter properties:
     ```yaml
     title: "Expert Title"
     date: YYYY-MM-DD
     author: "Haider Ali"
     category: "Category Name"
     description: "Engaging summary under 160 characters."
     image: "/images/blog/image-name.webp"
     ```

3. **SEO Integration**:
   - Inject relevant entities (e.g. n8n workflows, automation strategies) into the post body.
   - Run the `@seo` agent to evaluate generative answer potential (AEO).

4. **Verify Output**:
   - Start the local dev server (`npm run dev`) and navigate to `/blog` and `/blog/[slug]` to review the post display.
