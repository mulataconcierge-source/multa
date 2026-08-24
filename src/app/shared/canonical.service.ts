import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

/**
 * Canonical host. The apex is the only hostname configured in Vercel, so it is
 * the one that actually serves and holds a certificate. Keep this in step with
 * sitemap.xml, robots.txt and the canonical in index.html.
 */
export const SITE_ORIGIN = 'https://mulataconcierge.com.co';

/**
 * Keeps <link rel="canonical"> and og:url in step with the active route.
 *
 * index.html ships a single hardcoded canonical pointing at the homepage. In a
 * SPA that value never changes, so every inner page was telling Google "I am a
 * duplicate of the homepage" — which suppresses indexing of the entire site
 * except '/'. This service rewrites it on each navigation.
 */
@Injectable({ providedIn: 'root' })
export class CanonicalService {
  constructor(
    private router: Router,
    private meta: Meta,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  init(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.setFor(e.urlAfterRedirects));
  }

  private setFor(url: string): void {
    // Drop query strings and fragments — they are not separate canonical pages.
    const path = url.split('#')[0].split('?')[0];
    // Normalise: no trailing slash except at the root.
    const clean = path === '/' ? '' : path.replace(/\/+$/, '');
    const href = `${SITE_ORIGIN}${clean}`;

    let link = this.doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);

    this.meta.updateTag({ property: 'og:url', content: href });
  }
}
