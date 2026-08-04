import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Every page is static marketing content, so we prerender to real HTML at build
 * time rather than server-rendering per request. Crawlers get complete markup
 * without executing any JavaScript, and the site still deploys as static files.
 *
 * This was previously a single `**` → RenderMode.Server entry, so nothing was
 * ever prerendered and every visitor and crawler received an empty shell — the
 * source of the NG0505 hydration warning.
 */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
