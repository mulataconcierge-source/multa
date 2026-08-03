import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-traditional-fishing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './traditional-fishing.component.html',
  styleUrl: './traditional-fishing.component.css'
})
export class TraditionalFishingComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Local tour guide',
    'Canoe tour',
    'Introduction to traditional fishing',
    'Fishing activity in the mangrove lagoon',
    'Food preparation with locals',
    'Hydration and lunch',
    'Ground transportation',
  ];

  readonly details = [
    { label: 'Duration', value: '2 hours' },
    { label: 'Time Slots', value: '10 AM · 2 PM · 4 PM' },
    { label: 'Min. Group', value: '4 guests' },
    { label: 'Language', value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Traditional Fishing La Boquilla — Mangrove Canoe Experience | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Learn traditional fishing techniques alongside local fishermen in La Boquilla, paddle the mangrove lagoon, and cook your catch with the community.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Traditional Fishing in La Boquilla | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'An authentic native fishing tour in La Boquilla combining adventure, gastronomy and community connection.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/traditional-fishing' });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  book(): void {
    const msg = `Hi! I'm interested in booking the Traditional Fishing experience in La Boquilla. Could you give me more details?`;
    window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
