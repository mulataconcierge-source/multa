import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-craft-your-own-sip',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './craft-your-own-sip.component.html',
  styleUrl: './craft-your-own-sip.component.css'
})
export class CraftYourOwnSipComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Bartender',
    'Private location at the Old City',
    'Hydration',
    '4 Author Cocktails',
    '4 Appetizers',
  ];

  readonly details = [
    { label: 'Duration',      value: '2 hours' },
    { label: 'Time Slots',    value: '11 AM · 1 PM · 3 PM' },
    { label: 'Max Capacity',  value: '15 people' },
    { label: 'Min. Group',    value: '2 guests' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Craft Your Own Sip — Mixology Class Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Learn to craft your own cocktails with a professional bartender in Cartagena\'s Old City. Fresh ingredients, 4 author cocktails, 4 appetizers. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Craft Your Own Sip — Mixology Class Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'A hands-on mixology class in Cartagena\'s Old City — shake, stir, sip, and repeat. 4 cocktails, 4 appetizers, and a whole lot of fun.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/craft-your-own-sip' });
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
    const msg = `Hi! I'm interested in the Craft Your Own Sip mixology class in Cartagena. Could you give me more details and availability?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
