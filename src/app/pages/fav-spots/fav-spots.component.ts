import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SPOT_SECTIONS, SpotSection, Spot } from './spots.data';

@Component({
  selector: 'app-fav-spots',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './fav-spots.component.html',
  styleUrl: './fav-spots.component.css'
})
export class FavSpotsComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly sections: SpotSection[] = SPOT_SECTIONS;

  /** Rotating pool of existing project photos used until real per-spot images are added. */
  private readonly placeholderPool = [
    '/img/food_and_cultures.jpeg',
    '/img/savor_moment.jpg',
    '/img/craft.jpg',
    '/img/cartgena_corner.png',
    '/img/bean_cup.jpg',
    '/img/dances_feel.jpg',
  ];

  private observer?: IntersectionObserver;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {
    // Deterministically fill any spot missing images with rotating placeholders.
    let cursor = 0;
    for (const section of this.sections) {
      for (const spot of section.spots) {
        if (spot.images.length !== 3) {
          spot.images = [0, 1, 2].map(() => this.placeholderPool[cursor++ % this.placeholderPool.length]);
        }
      }
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle('Mulata Fav Spots Guide — Where to Eat & Go Out in Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'A local\'s handpicked guide to the best fine restaurants, casual eats, brunch spots and nightlife in Cartagena, Colombia — curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Mulata Fav Spots Guide — Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Handpicked favorites to experience Cartagena through its flavors and nightlife.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/travel-guide/mulata-fav-spots' });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-up').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  mapsUrl(spot: Spot): string {
    if (spot.mapsUrl) return spot.mapsUrl;
    const q = encodeURIComponent(`${spot.name}, Cartagena, Colombia`);
    return `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  openWhatsApp(): void {
    const msg = `Hi Margui! I'm looking at the Mulata Fav Spots guide and would love your help with reservations and recommendations.`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
