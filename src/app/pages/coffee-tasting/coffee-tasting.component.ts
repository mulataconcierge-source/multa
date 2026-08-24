import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-coffee-tasting',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './coffee-tasting.component.html',
  styleUrl: './coffee-tasting.component.css'
})
export class CoffeeTastingComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly profiles = [
    {
      name: 'Washed',
      note: 'Clean & Bright',
      desc: 'Pure bean character — crisp acidity, floral notes, and a clarity of flavor that showcases Colombian terroir at its finest.',
    },
    {
      name: 'Honey',
      note: 'Sweet & Complex',
      desc: 'Dried with the fruit pulp intact, this process yields a naturally sweet cup with stone-fruit undertones and a silky body.',
    },
    {
      name: 'Natural',
      note: 'Bold & Fruity',
      desc: 'The whole cherry is dried together, creating intense fruit-forward flavors — jammy, rich, and unlike anything you\'ve tasted.',
    },
  ];

  readonly included = [
    'Professional Barista',
    'Private location at the Old City',
    'Hydration',
    'Introduction to the coffee history',
    'Fruits pairing',
  ];

  readonly details = [
    { label: 'Duration',     value: '2 hours' },
    { label: 'Time Slots',   value: '9 AM · 1 PM · 3 PM' },
    { label: 'Coffees',      value: '3 profiles' },
    { label: 'Min. Group',   value: '5 guests' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Coffee Tasting Cartagena — Colombian Specialty Coffee Experience | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Explore the history and process of Colombian coffee through a guided specialty tasting — Washed, Honey, and Natural profiles. A sensory immersion in the heart of Cartagena. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Coffee Tasting Cartagena — Colombian Specialty Coffee | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Colombia grows some of the world\'s finest coffee. Now taste it the way it was meant to be experienced — three processing profiles, guided by a professional barista in Cartagena\'s Old City.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/coffee-tasting' });
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
    const msg = `Hi! I'm interested in the Coffee Tasting experience in Cartagena. Could you give me more details and availability?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
