import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BWsvKvDK.mjs';
import { manifest } from './manifest_CeKcBM-O.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/cookies.astro.mjs');
const _page6 = () => import('./pages/demos/_slug_.astro.mjs');
const _page7 = () => import('./pages/demos.astro.mjs');
const _page8 = () => import('./pages/disclaimer.astro.mjs');
const _page9 = () => import('./pages/faq.astro.mjs');
const _page10 = () => import('./pages/portfolio/_slug_.astro.mjs');
const _page11 = () => import('./pages/portfolio.astro.mjs');
const _page12 = () => import('./pages/pricing.astro.mjs');
const _page13 = () => import('./pages/privacy-policy.astro.mjs');
const _page14 = () => import('./pages/resources/_slug_.astro.mjs');
const _page15 = () => import('./pages/resources.astro.mjs');
const _page16 = () => import('./pages/services/_slug_.astro.mjs');
const _page17 = () => import('./pages/services.astro.mjs');
const _page18 = () => import('./pages/terms.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/cookies.md", _page5],
    ["src/pages/demos/[slug].astro", _page6],
    ["src/pages/demos/index.astro", _page7],
    ["src/pages/disclaimer.md", _page8],
    ["src/pages/faq.astro", _page9],
    ["src/pages/portfolio/[slug].astro", _page10],
    ["src/pages/portfolio/index.astro", _page11],
    ["src/pages/pricing.astro", _page12],
    ["src/pages/privacy-policy.md", _page13],
    ["src/pages/resources/[slug].astro", _page14],
    ["src/pages/resources/index.astro", _page15],
    ["src/pages/services/[slug].astro", _page16],
    ["src/pages/services/index.astro", _page17],
    ["src/pages/terms.md", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Haider/smesh.dev/dist/client/",
    "server": "file:///C:/Haider/smesh.dev/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro",
    "experimentalStaticHeaders": false
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
