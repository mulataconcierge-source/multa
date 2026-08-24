import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rum-tasting',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rum-tasting.component.html',
  styleUrl: './rum-tasting.component.css'
})
export class RumTastingComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Bartender',
    'Private location at the Old City',
    'Hydration',
    'Chocolate pairing',
    'Different types of rum',
  ];

  readonly details = [
    { label: 'Duration',       value: '2 hours' },
    { label: 'Time Slots',     value: '2 PM · 5 PM · 8 PM' },
    { label: 'Max Capacity',   value: '30 people' },
    { label: 'Min. Group',     value: '2 guests' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Rum Tasting Cartagena — Caribbean Spirits Experience | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Discover the history and secrets of Colombian rum through a guided tasting led by experts in Caribbean spirits. Private location in Cartagena\'s Old City. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Rum Tasting Cartagena — Caribbean Spirits Experience | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'A sensory journey through Colombian rum — its history, production secrets, and unique Caribbean flavors. Guided by an expert bartender in the heart of the Old City.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/rum-tasting' });
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
    const msg = `Hi! I'm interested in the Rum Tasting experience in Cartagena. Could you give me more details and availability?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
