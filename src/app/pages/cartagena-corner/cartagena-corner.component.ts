import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cartagena-corner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cartagena-corner.component.html',
  styleUrl: './cartagena-corner.component.css'
})
export class CartagenaCornerComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly heatLevels = [
    {
      label: 'Mild',
      emoji: '🌶',
      desc: 'A gentle warmth that opens up the flavors — herby, citrusy, and approachable for every palate.',
    },
    {
      label: 'Medium',
      emoji: '🌶🌶',
      desc: 'The sweet spot — enough heat to feel the Caribbean kick without losing the complexity of each sauce.',
    },
    {
      label: 'Bold',
      emoji: '🌶🌶🌶',
      desc: 'For the brave. A fiery finish that lingers and proves why Cartagena\'s hot sauces are legendary.',
    },
  ];

  readonly included = [
    'Private location at the Old City',
    'Introduction to Hot Sauces',
    'Empanada and Hot Sauce Tasting',
    'Hydration',
  ];

  readonly details = [
    { label: 'Duration',     value: '1.5 hours' },
    { label: 'Time Slots',   value: '2 PM · 4 PM · 6 PM' },
    { label: 'Max Capacity', value: '15 people' },
    { label: 'Min. Group',   value: '2 guests' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('The Cartagenan Corner — Empanada & Hot Sauce Tasting | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Handcrafted empanadas paired with local hot sauces at different heat levels — a delicious tasting of authentic Cartagena street food. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'The Cartagenan Corner — Empanada & Hot Sauce Tasting | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Cartagena on a plate. Handcrafted empanadas, local hot sauces, and the stories behind every bite. A perfect culinary experience in the heart of the Old City.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/cartagena-corner' });
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
    const msg = `Hi! I'm interested in The Cartagenan Corner experience in Cartagena. Could you give me more details and availability?`;
    window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
