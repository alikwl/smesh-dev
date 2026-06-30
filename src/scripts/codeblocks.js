// src/scripts/codeblocks.js

window.enhanceMarkdownContent = (container) => {
  const root = container || document;

  // 1. Code Blocks (header, language, copy button)
  root.querySelectorAll('pre').forEach((pre) => {
    // Skip if inside dynamic ui widgets or already wrapped
    if (pre.dataset.wrapped) return;
    pre.dataset.wrapped = "true";

    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'position:relative; margin: 1.5rem 0;';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const lang = pre.querySelector('code')?.className?.replace('language-', '') || 'code';

    const topBar = document.createElement('div');
    topBar.innerHTML = `
      <span style="color:#94a3b8;text-transform:uppercase;font-size:11px;font-family:sans-serif;font-weight:500;">${lang}</span>
      <button class="copy-code-btn" style="background:transparent;border:1px solid #334155;color:#94a3b8;padding:2px 8px;border-radius:4px;cursor:pointer;font-size:10px;text-transform:uppercase;font-weight:600;transition:all 180ms ease;">Copy</button>
    `;
    topBar.style.cssText = 'display:flex;justify-content:space-between;align-items:center;background:#1a1f2e;padding:6px 16px;border-radius:10px 10px 0 0;';
    wrapper.insertBefore(topBar, pre);
    pre.style.borderRadius = '0 0 10px 10px';
    pre.style.marginTop = '0';

    topBar.querySelector('.copy-code-btn').addEventListener('click', () => {
      const code = pre.querySelector('code')?.innerText || pre.innerText;
      navigator.clipboard.writeText(code).then(() => {
        const btn = topBar.querySelector('.copy-code-btn');
        btn.textContent = 'Copied!';
        btn.style.color = '#1D9E75';
        btn.style.borderColor = '#1D9E75';
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.style.color = '#94a3b8';
          btn.style.borderColor = '#334155';
        }, 2000);
      });
    });
  });

  // 2. Wrap Tables for responsive horizontal scrolling
  root.querySelectorAll('table').forEach((table) => {
    if (table.parentElement && table.parentElement.classList.contains('table-responsive-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'table-responsive-wrapper';

    if (table.parentNode) {
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });

  // 3. Heading Anchors for H2 and H3
  root.querySelectorAll('h2, h3').forEach((h) => {
    // Avoid widgets, navigation, sidebar cards
    if (h.closest('header') || h.closest('footer') || h.closest('.unlock-card-container') || h.closest('#mockup-gated-overlay') || h.closest('.site-navigation')) return;

    // Auto-generate slug ID if not present
    if (!h.id) {
      h.id = h.textContent
        ? h.textContent
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        : 'heading';
    }

    // Prepend deep link anchor if not present
    if (!h.querySelector('.heading-anchor')) {
      const anchor = document.createElement('a');
      anchor.className = 'heading-anchor';
      anchor.href = `#${h.id}`;
      anchor.textContent = '#';
      anchor.setAttribute('aria-label', `Link to section ${h.textContent}`);
      h.insertBefore(anchor, h.firstChild);
    }
  });

  // 4. Image Figures & Lazy Loading
  root.querySelectorAll('img').forEach((img) => {
    // Skip small UI icons, avatar pictures, preview mockup, logos, and footer/header elements
    if (img.closest('a') || img.closest('header') || img.closest('footer') || img.classList.contains('w-8') || img.classList.contains('w-10') || img.classList.contains('w-12') || img.id === 'resource-preview-img' || img.closest('.site-navigation') || img.closest('.unlock-card-container')) return;

    img.setAttribute('loading', 'lazy');

    const altText = img.getAttribute('alt');
    if (altText && img.parentElement && img.parentElement.tagName.toLowerCase() !== 'figure') {
      const figure = document.createElement('figure');
      figure.className = 'prose-figure';

      if (img.parentNode) {
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);

        const figcaption = document.createElement('figcaption');
        figcaption.className = 'prose-figcaption';
        figcaption.textContent = altText;
        figure.appendChild(figcaption);
      }
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  window.enhanceMarkdownContent();
});
