import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-eat-and-explore',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './eat-and-explore.component.html',
  styleUrl: './eat-and-explore.component.css'
})
export class EatAndExploreComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Tour Guide',
    'Local food tasting',
    'Walking tour through the Historic Center and Getsemaní',
    'Dance show in the main square (depending on day and time)',
  ];

  readonly details = [
    { label: 'Duration', value: '2 hours' },
    { label: 'Suggested Time', value: '11 AM – 3 PM' },
    { label: 'Max Capacity', value: 'Open group' },
    { label: 'Language', value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Eat & Explore — Food Tour Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Taste your way through Cartagena\'s Historic Center — traditional sweets, shrimp cocktails, pan de bono, local beer and more. A finger-licking good food tour curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Eat & Explore — Food Tour Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Discover the Historic Center through its most authentic flavors. Traditional sweets, fried snacks, shrimp cocktails and the history behind every bite.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/eat-and-explore' });
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
    const msg = `Hi! I'm interested in the Eat & Explore food tour in Cartagena. Could you give me more details?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
